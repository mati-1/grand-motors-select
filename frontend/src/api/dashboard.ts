import { apiClient } from "./client";

export type AdminDashboardResponse = {
  finance: {
    companyBalance: number;
    companyBalanceFormatted: string;
    grossProfitThisMonth: number;
    grossProfitThisMonthFormatted: string;
  };
  cars: {
    inStock: number;
    preparing: number;
    soldThisMonth: number;
    averageMarginThisMonth: number;
  };
};

export const getAdminDashboard = () =>
  apiClient<AdminDashboardResponse>("/api/dashboard");
