import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../api/client";

export type FixedPayment = {
  id: string;
  name: string;
  amount: number;
  dueDay: number;
  category: string;
  paidMonths: string[];
};

export type FixedPaymentInput = {
  name: string;
  amount: number;
  dueDay: number;
  category: string;
};

export type SetFixedPaymentPaidInput = {
  id: string;
  month: string;
  paid: boolean;
};

export const fixedPaymentKeys = {
  all: ["finance", "fixed-payments"] as const,
};

type FixedPaymentsResponse = {
  payments: FixedPayment[];
};

const fixedPaymentsUrl = "/api/finance/fixed-payments";

export const useFixedPayments = () =>
  useQuery({
    queryKey: fixedPaymentKeys.all,
    queryFn: () => apiClient<FixedPaymentsResponse>(fixedPaymentsUrl),
    select: (response) => response.payments ?? [],
    staleTime: 60_000,
  });

export const useCreateFixedPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FixedPaymentInput) =>
      apiClient<{ payment: FixedPayment }>(fixedPaymentsUrl, {
        method: "POST",
        body: data,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: fixedPaymentKeys.all,
      }),
  });
};

export const useUpdateFixedPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: FixedPaymentInput }) =>
      apiClient<{ payment: FixedPayment }>(`${fixedPaymentsUrl}/${id}`, {
        method: "PATCH",
        body: data,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: fixedPaymentKeys.all,
      }),
  });
};

export const useSetFixedPaymentPaid = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, month, paid }: SetFixedPaymentPaidInput) =>
      apiClient<{ payment: FixedPayment }>(`${fixedPaymentsUrl}/${id}/paid`, {
        method: "PATCH",
        body: { month, paid },
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: fixedPaymentKeys.all,
      }),
  });
};

export const useDeleteFixedPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      apiClient<void>(`${fixedPaymentsUrl}/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: fixedPaymentKeys.all,
      }),
  });
};
