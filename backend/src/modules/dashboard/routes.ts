import type { FastifyPluginAsync } from "fastify";
import { Temporal } from "temporal-polyfill";

const formatAmount = (grosze: number): string =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(grosze / 100);

export const dashboardRoutes: FastifyPluginAsync = async (server) => {
  server.get("/", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        message: "Nie jesteś zalogowany.",
      });
    }

    const [transactions, cars] = await Promise.all([
      server.db.orm.public.FinanceTransaction.all(),
      server.db.orm.public.Car.all(),
    ]);

    const now = Temporal.Now.zonedDateTimeISO("Europe/Warsaw");
    const monthStart = now
      .with({
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0,
      })
      .toInstant().epochMilliseconds;

    const nextMonthStart = now
      .with({
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0,
      })
      .add({ months: 1 })
      .toInstant().epochMilliseconds;

    const thisMonthTransactions = transactions.filter((transaction) => {
      const timestamp = transaction.date.epochMilliseconds;
      return timestamp >= monthStart && timestamp < nextMonthStart;
    });

    const companyBalance = transactions.reduce((sum, transaction) => {
      if (transaction.type === "income" || transaction.type === "capital_in") {
        return sum + transaction.amount;
      }

      if (
        transaction.type === "expense" ||
        transaction.type === "capital_out"
      ) {
        return sum - transaction.amount;
      }

      return sum;
    }, 0);

    const monthlyRevenue = thisMonthTransactions
      .filter(
        (transaction) =>
          transaction.type === "income" && transaction.affectsProfit,
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const monthlyExpenses = thisMonthTransactions
      .filter(
        (transaction) =>
          transaction.type === "expense" && transaction.affectsProfit,
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const grossProfitThisMonth = Math.max(0, monthlyRevenue - monthlyExpenses);

    const carsInStock = cars.filter((car) => car.statusType !== "sold").length;

    const carsPreparing = cars.filter(
      (car) => car.statusType === "preparing",
    ).length;

    const saleTransactions = thisMonthTransactions.filter(
      (transaction) =>
        transaction.type === "income" && transaction.category === "car_sale",
    );

    const soldCarIds = new Set(
      saleTransactions
        .map((transaction) => transaction.carId)
        .filter((carId): carId is string => Boolean(carId)),
    );

    const soldThisMonth = cars.filter(
      (car) => car.statusType === "sold",
    ).length;

    const margins = [...soldCarIds]
      .map((carId) => {
        const carTransactions = transactions.filter(
          (transaction) =>
            transaction.carId === carId && transaction.affectsProfit,
        );

        const revenue = carTransactions
          .filter((transaction) => transaction.type === "income")
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        const expenses = carTransactions
          .filter((transaction) => transaction.type === "expense")
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        return revenue > 0
          ? (Math.max(0, revenue - expenses) / revenue) * 100
          : null;
      })
      .filter((margin): margin is number => margin !== null);

    const averageMarginThisMonth =
      margins.length > 0
        ? margins.reduce((sum, margin) => sum + margin, 0) / margins.length
        : 0;

    return {
      finance: {
        companyBalance,
        companyBalanceFormatted: formatAmount(companyBalance),
        grossProfitThisMonth,
        grossProfitThisMonthFormatted: formatAmount(grossProfitThisMonth),
      },
      cars: {
        inStock: carsInStock,
        preparing: carsPreparing,
        soldThisMonth,
        averageMarginThisMonth: Number(averageMarginThisMonth.toFixed(1)),
      },
    };
  });
};
