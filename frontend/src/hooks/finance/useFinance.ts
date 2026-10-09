import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "../../api/client";

export type FinancePeriod = "lifetime" | string;

export type FinanceTransactionType =
  | "income"
  | "expense"
  | "capital_in"
  | "capital_out";

export type FinanceTransactionCategory =
  | "car_sale"
  | "car_purchase"
  | "car_service"
  | "car_parts"
  | "detailing"
  | "transport"
  | "marketing"
  | "insurance"
  | "tax"
  | "company"
  | "other";

export type FinanceCar = {
  id: string;
  brand: string;
  model: string;
  year: number;
  vin: string;
};

export type FinanceTransaction = {
  id: string;

  type: FinanceTransactionType;
  typeLabel: string;

  category: FinanceTransactionCategory;
  categoryLabel: string;

  title: string;
  description: string | null;

  amount: number;
  amountFormatted: string;

  date: string;

  carId: string | null;

  car: FinanceCar | null;

  affectsProfit: boolean;

  createdAt: string;
  updatedAt: string;
};

export type FinancePeriodOption = {
  value: string;
  label: string;
  type: "lifetime" | "year" | "month";
  year: number | null;
  month: number | null;
};

export type FinanceSummary = {
  companyBalance: number;
  companyBalanceFormatted: string;

  carsCapital: number;
  carsCapitalFormatted: string;

  revenue: number;
  revenueFormatted: string;

  grossProfit: number;
  grossProfitFormatted: string;

  taxes: number;
  taxesFormatted: string;

  netProfit: number;
  netProfitFormatted: string;
};

export type FinanceCashFlow = {
  result: number;
  resultFormatted: string;

  salesRevenue: number;
  salesRevenueFormatted: string;

  carPurchases: number;
  carPurchasesFormatted: string;

  carCosts: number;
  carCostsFormatted: string;

  companyCosts: number;
  companyCostsFormatted: string;
};

export type FinanceDashboard = {
  period: string;

  periods: FinancePeriodOption[];

  summary: FinanceSummary;

  cashFlow: FinanceCashFlow;

  recentTransactions: FinanceTransaction[];
};

export type FinanceTransactionsResponse = {
  transactions: FinanceTransaction[];
};

export type FinanceCarSummary = {
  revenue: number;
  revenueFormatted: string;

  totalExpenses: number;
  totalExpensesFormatted: string;

  grossProfit: number;
  grossProfitFormatted: string;

  taxes: number;
  taxesFormatted: string;

  netProfit: number;
  netProfitFormatted: string;
};

export type FinanceCarItem = {
  car: {
    id: string;
    brand: string;
    model: string;
    year: number;
    vin: string;
    status: string;
    statusType: string;
  };

  transactions: FinanceTransaction[];

  summary: FinanceCarSummary;
};

export type FinanceCarsResponse = {
  period: string;
  cars: FinanceCarItem[];
};

export type CreateFinanceTransactionInput = {
  type: FinanceTransactionType;
  category: FinanceTransactionCategory;
  title: string;
  description?: string;
  amount: number;
  date?: string;
  carId?: string;
  affectsProfit: boolean;
};

export type UpdateFinanceTransactionInput = {
  type?: FinanceTransactionType;
  category?: FinanceTransactionCategory;
  title?: string;
  description?: string | null;
  amount?: number;
  date?: string;
  carId?: string | null;
  affectsProfit?: boolean;
};

export const financeKeys = {
  all: ["finance"] as const,

  dashboard: (period: FinancePeriod) =>
    ["finance", "dashboard", period] as const,

  transactions: (period: FinancePeriod) =>
    ["finance", "transactions", period] as const,

  cars: (period: FinancePeriod) => ["finance", "cars", period] as const,
};

export const useFinance = (period: FinancePeriod = "lifetime") => {
  return useQuery({
    queryKey: financeKeys.dashboard(period),

    queryFn: () =>
      apiClient<FinanceDashboard>(
        `/api/finance?period=${encodeURIComponent(period)}`,
      ),
  });
};

export const useFinanceTransactions = (period: FinancePeriod = "lifetime") => {
  return useQuery({
    queryKey: financeKeys.transactions(period),

    queryFn: () =>
      apiClient<FinanceTransactionsResponse>(
        `/api/finance/transactions?period=${encodeURIComponent(period)}`,
      ),
  });
};

export const useFinanceCars = (period: FinancePeriod = "lifetime") => {
  return useQuery({
    queryKey: financeKeys.cars(period),

    queryFn: () =>
      apiClient<FinanceCarsResponse>(
        `/api/finance/cars?period=${encodeURIComponent(period)}`,
      ),
  });
};

export const useCreateFinanceTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFinanceTransactionInput) =>
      apiClient<{
        transaction: FinanceTransaction;
      }>("/api/finance/transactions", {
        method: "POST",
        body: data,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: financeKeys.all,
      });
    },
  });
};

export const useDeleteFinanceTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (transactionId: string) =>
      apiClient<{
        transaction: FinanceTransaction;
      }>(`/api/finance/transactions/${transactionId}`, {
        method: "DELETE",
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: financeKeys.all,
      });
    },
  });
};

export const useUpdateFinanceTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      transactionId,
      data,
    }: {
      transactionId: string;
      data: UpdateFinanceTransactionInput;
    }) =>
      apiClient<{
        transaction: FinanceTransaction;
      }>(`/api/finance/transactions/${transactionId}`, {
        method: "PATCH",
        body: data,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: financeKeys.all,
      });
    },
  });
};
