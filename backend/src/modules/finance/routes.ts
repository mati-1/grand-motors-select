import type { FastifyPluginAsync } from "fastify";
import { Temporal } from "temporal-polyfill";

import {
  createFinanceTransactionSchema,
  financeTransactionIdParamsSchema,
  updateFinanceTransactionSchema,
} from "./schemas.js";

const FINANCE_TIME_ZONE = "Europe/Warsaw";

type FinancePeriod = "lifetime" | `${number}` | `${number}-${string}`;

const toGrosze = (amount: number): number => {
  return Math.round(amount * 100);
};

const fromGrosze = (amount: number): number => {
  return amount / 100;
};

const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const categoryLabels: Record<string, string> = {
  car_sale: "Sprzedaż samochodów",
  car_purchase: "Zakup samochodów",
  car_service: "Serwis i części",
  car_parts: "Części",
  detailing: "Detailing i przygotowanie",
  transport: "Transport",
  marketing: "Marketing",
  insurance: "Ubezpieczenia",
  tax: "Podatki",
  company: "Koszty firmy",
  other: "Pozostałe",
};

const typeLabels: Record<string, string> = {
  income: "Przychód",
  expense: "Wydatek",
  capital_in: "Wpłata kapitału",
  capital_out: "Wypłata kapitału",
};

const getTransactionDate = (transaction: any) => {
  return transaction.date.toZonedDateTimeISO(FINANCE_TIME_ZONE);
};

const getPeriodKey = (transaction: any): string => {
  const date = getTransactionDate(transaction);

  return `${date.year}-${String(date.month).padStart(2, "0")}`;
};

const getYearKey = (transaction: any): string => {
  return String(getTransactionDate(transaction).year);
};

const isTransactionInPeriod = (
  transaction: any,
  period: FinancePeriod,
): boolean => {
  if (!period || period === "lifetime") {
    return true;
  }

  const date = getTransactionDate(transaction);

  if (/^\d{4}$/.test(period)) {
    return date.year === Number(period);
  }

  const match = period.match(/^(\d{4})-(\d{2})$/);

  if (!match) {
    return true;
  }

  return date.year === Number(match[1]) && date.month === Number(match[2]);
};

const serializeTransaction = (transaction: any, cars: any[]) => {
  const amount = fromGrosze(transaction.amount);

  const car = transaction.carId
    ? cars.find((item) => item.id === transaction.carId)
    : null;

  return {
    id: transaction.id,

    type: transaction.type,
    typeLabel: typeLabels[transaction.type] ?? transaction.type,

    category: transaction.category,
    categoryLabel: categoryLabels[transaction.category] ?? transaction.category,

    title: transaction.title,
    description: transaction.description ?? null,

    amount,
    amountFormatted: formatAmount(amount),

    date: transaction.date.toString(),

    carId: transaction.carId ?? null,

    car: car
      ? {
          id: car.id,
          brand: car.brand,
          model: car.model,
          year: car.year,
          vin: car.vin,
        }
      : null,

    affectsProfit: transaction.affectsProfit,

    createdAt: transaction.createdAt.toString(),
    updatedAt: transaction.updatedAt.toString(),
  };
};

const buildPeriods = (
  transactions: any[],
): {
  value: string;
  label: string;
  type: "lifetime" | "year" | "month";
  year: number | null;
  month: number | null;
}[] => {
  const currentYear = new Date().getFullYear();

  const years = new Set<number>();
  const months = new Set<string>();

  for (const transaction of transactions) {
    const date = getTransactionDate(transaction);

    years.add(date.year);
    months.add(`${date.year}-${String(date.month).padStart(2, "0")}`);
  }

  years.add(currentYear);

  const monthFormatter = new Intl.DateTimeFormat("pl-PL", {
    month: "long",
  });

  const result: {
    value: string;
    label: string;
    type: "lifetime" | "year" | "month";
    year: number | null;
    month: number | null;
  }[] = [
    {
      value: "lifetime",
      label: "Cała historia",
      type: "lifetime",
      year: null,
      month: null,
    },
  ];

  const sortedYears = [...years].sort((a, b) => b - a);

  for (const year of sortedYears) {
    result.push({
      value: String(year),
      label: String(year),
      type: "year",
      year,
      month: null,
    });

    const yearMonths = [...months]
      .filter((value) => value.startsWith(`${year}-`))
      .sort()
      .reverse();

    for (const value of yearMonths) {
      const month = Number(value.slice(5));

      const monthDate = new Date(Date.UTC(year, month - 1, 1));

      const monthName = monthFormatter.format(monthDate);

      result.push({
        value,
        label: `${monthName.charAt(0).toUpperCase()}${monthName.slice(
          1,
        )} ${year}`,
        type: "month",
        year,
        month,
      });
    }
  }

  return result;
};

export const financeRoutes: FastifyPluginAsync = async (server) => {
  server.get<{
    Querystring: {
      period?: string;
    };
  }>("/", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const period = (request.query.period ?? "lifetime") as FinancePeriod;

    const allTransactions = await server.db.orm.public.FinanceTransaction.all();

    const cars = await server.db.orm.public.Car.all();

    const filteredTransactions = allTransactions.filter((transaction) =>
      isTransactionInPeriod(transaction, period),
    );

    const revenue = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "income" && transaction.affectsProfit,
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const grossProfitExpenses = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          transaction.affectsProfit &&
          transaction.category !== "tax",
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const grossProfit = Math.max(0, revenue - grossProfitExpenses);

    const taxes = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          transaction.category === "tax" &&
          transaction.affectsProfit,
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const netProfit = grossProfit - taxes;

    const activeCarIds = new Set(
      cars.filter((car) => car.statusType !== "sold").map((car) => car.id),
    );

    const carsCapital = filteredTransactions
      .filter(
        (transaction) =>
          transaction.category === "car_purchase" &&
          transaction.carId &&
          activeCarIds.has(transaction.carId),
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const incomeCash = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "income" || transaction.type === "capital_in",
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const outgoingCash = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" || transaction.type === "capital_out",
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const companyBalance = incomeCash - outgoingCash;

    const salesRevenue = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "income" && transaction.category === "car_sale",
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const carPurchases = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          transaction.category === "car_purchase",
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const carCosts = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          ["car_service", "car_parts", "detailing", "transport"].includes(
            transaction.category,
          ),
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const companyCosts = filteredTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          ["marketing", "insurance", "tax", "company", "other"].includes(
            transaction.category,
          ),
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const cashFlow = salesRevenue - carPurchases - carCosts - companyCosts;

    const recentTransactions = [...filteredTransactions]
      .sort((a, b) => b.date.epochMilliseconds - a.date.epochMilliseconds)
      .slice(0, 10)
      .map((transaction) => serializeTransaction(transaction, cars));

    return {
      period,

      periods: buildPeriods(allTransactions),

      summary: {
        companyBalance: fromGrosze(companyBalance),
        companyBalanceFormatted: formatAmount(fromGrosze(companyBalance)),

        carsCapital: fromGrosze(carsCapital),
        carsCapitalFormatted: formatAmount(fromGrosze(carsCapital)),

        revenue: fromGrosze(revenue),
        revenueFormatted: formatAmount(fromGrosze(revenue)),

        grossProfit: fromGrosze(grossProfit),
        grossProfitFormatted: formatAmount(fromGrosze(grossProfit)),

        taxes: fromGrosze(taxes),
        taxesFormatted: formatAmount(fromGrosze(taxes)),

        netProfit: fromGrosze(netProfit),
        netProfitFormatted: formatAmount(fromGrosze(netProfit)),
      },

      cashFlow: {
        result: fromGrosze(cashFlow),
        resultFormatted: formatAmount(fromGrosze(cashFlow)),

        salesRevenue: fromGrosze(salesRevenue),
        salesRevenueFormatted: formatAmount(fromGrosze(salesRevenue)),

        carPurchases: fromGrosze(carPurchases),
        carPurchasesFormatted: formatAmount(fromGrosze(carPurchases)),

        carCosts: fromGrosze(carCosts),
        carCostsFormatted: formatAmount(fromGrosze(carCosts)),

        companyCosts: fromGrosze(companyCosts),
        companyCostsFormatted: formatAmount(fromGrosze(companyCosts)),
      },

      recentTransactions,
    };
  });

  server.get<{
    Querystring: {
      period?: string;
    };
  }>("/transactions", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const period = (request.query.period ?? "lifetime") as FinancePeriod;

    const transactions = await server.db.orm.public.FinanceTransaction.all();

    const cars = await server.db.orm.public.Car.all();

    const filteredTransactions = transactions.filter((transaction) =>
      isTransactionInPeriod(transaction, period),
    );

    const sortedTransactions = [...filteredTransactions]
      .sort((a, b) => b.date.epochMilliseconds - a.date.epochMilliseconds)
      .map((transaction) => serializeTransaction(transaction, cars));

    return {
      transactions: sortedTransactions,
    };
  });

  server.get<{
    Querystring: {
      period?: string;
    };
  }>("/cars", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const period = (request.query.period ?? "lifetime") as FinancePeriod;

    const transactions = await server.db.orm.public.FinanceTransaction.all();

    const cars = await server.db.orm.public.Car.all();

    const carsWithTransactions = cars
      .map((car) => {
        const carTransactions = transactions
          .filter(
            (transaction) =>
              transaction.carId === car.id &&
              isTransactionInPeriod(transaction, period),
          )
          .sort((a, b) => b.date.epochMilliseconds - a.date.epochMilliseconds);

        if (carTransactions.length === 0) {
          return null;
        }

        const serializedTransactions = carTransactions.map((transaction) =>
          serializeTransaction(transaction, cars),
        );

        const revenue = carTransactions
          .filter(
            (transaction) =>
              transaction.type === "income" && transaction.affectsProfit,
          )
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const grossExpenses = carTransactions
          .filter(
            (transaction) =>
              transaction.type === "expense" &&
              transaction.affectsProfit &&
              transaction.category !== "tax",
          )
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const taxes = carTransactions
          .filter(
            (transaction) =>
              transaction.type === "expense" &&
              transaction.category === "tax" &&
              transaction.affectsProfit,
          )
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const grossProfit = Math.max(0, revenue - grossExpenses);
        const netProfit = Math.max(0, grossProfit - taxes);

        const totalExpenses = carTransactions
          .filter((transaction) => transaction.type === "expense")
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        return {
          car: {
            id: car.id,
            brand: car.brand,
            model: car.model,
            year: car.year,
            vin: car.vin,
            status: car.status,
            statusType: car.statusType,
          },

          transactions: serializedTransactions,

          summary: {
            revenue: fromGrosze(revenue),
            revenueFormatted: formatAmount(fromGrosze(revenue)),

            totalExpenses: fromGrosze(totalExpenses),
            totalExpensesFormatted: formatAmount(fromGrosze(totalExpenses)),

            grossProfit: fromGrosze(grossProfit),
            grossProfitFormatted: formatAmount(fromGrosze(grossProfit)),

            taxes: fromGrosze(taxes),
            taxesFormatted: formatAmount(fromGrosze(taxes)),

            netProfit: fromGrosze(netProfit),
            netProfitFormatted: formatAmount(fromGrosze(netProfit)),
          },
        };
      })
      .filter(Boolean);

    carsWithTransactions.sort(
      (a: any, b: any) => b.summary.grossProfit - a.summary.grossProfit,
    );

    return {
      period,
      cars: carsWithTransactions,
    };
  });

  server.post("/transactions", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const result = createFinanceTransactionSchema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe dane transakcji.",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const body = result.data;

    try {
      if (body.carId) {
        const cars = await server.db.orm.public.Car.all();

        const car = cars.find((item) => item.id === body.carId);

        if (!car) {
          return reply.code(404).send({
            message: "Samochód nie został znaleziony.",
          });
        }
      }

      const transaction = await server.db.orm.public.FinanceTransaction.create({
        type: body.type,
        category: body.category,
        title: body.title,
        description: body.description,
        amount: toGrosze(body.amount),
        date: body.date
          ? Temporal.Instant.from(body.date)
          : Temporal.Now.instant(),
        carId: body.carId,
        affectsProfit: body.affectsProfit,
      });

      return reply.code(201).send({
        transaction,
      });
    } catch (error) {
      console.error("FINANCE TRANSACTION CREATE ERROR:", error);

      return reply.code(500).send({
        message: "Nie udało się utworzyć transakcji.",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  });

  server.delete<{
    Params: {
      id: string;
    };
  }>("/transactions/:id", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const result = financeTransactionIdParamsSchema.safeParse(request.params);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe ID transakcji.",
      });
    }

    const transactions = await server.db.orm.public.FinanceTransaction.all();

    const existingTransaction = transactions.find(
      (transaction) => transaction.id === result.data.id,
    );

    if (!existingTransaction) {
      return reply.code(404).send({
        message: "Transakcja nie została znaleziona.",
      });
    }

    const deletedTransaction =
      await server.db.orm.public.FinanceTransaction.where({
        id: result.data.id,
      }).delete();

    return {
      transaction: deletedTransaction,
    };
  });

  server.patch<{
    Params: { id: string };
  }>("/transactions/:id", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const params = financeTransactionIdParamsSchema.safeParse(request.params);

    if (!params.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe ID transakcji.",
      });
    }

    const result = updateFinanceTransactionSchema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({
        message: "Nieprawidłowe dane transakcji.",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const { id } = params.data;
    const body = result.data;

    const transactions = await server.db.orm.public.FinanceTransaction.all();

    const existing = transactions.find((transaction) => transaction.id === id);

    if (!existing) {
      return reply.code(404).send({
        message: "Transakcja nie została znaleziona.",
      });
    }

    if (body.carId) {
      const cars = await server.db.orm.public.Car.all();

      if (!cars.some((car) => car.id === body.carId)) {
        return reply.code(404).send({
          message: "Samochód nie został znaleziony.",
        });
      }
    }

    const updateData: Record<string, unknown> = {};

    if (body.type !== undefined) updateData.type = body.type;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.title !== undefined) updateData.title = body.title;
    if (body.description !== undefined) {
      updateData.description = body.description;
    }
    if (body.amount !== undefined) {
      updateData.amount = Math.round(body.amount * 100);
    }
    if (body.date !== undefined) {
      updateData.date = Temporal.Instant.from(body.date);
    }
    if (body.carId !== undefined) updateData.carId = body.carId;
    if (body.affectsProfit !== undefined) {
      updateData.affectsProfit = body.affectsProfit;
    }

    try {
      const transaction = await server.db.orm.public.FinanceTransaction.where({
        id,
      }).update(updateData);

      return { transaction };
    } catch (error) {
      request.log.error(error);

      return reply.code(500).send({
        message: "Nie udało się zaktualizować transakcji.",
      });
    }
  });
};
