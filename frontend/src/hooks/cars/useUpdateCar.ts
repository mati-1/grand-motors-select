import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../api/client";
import type { ApiCar } from "../../api/cars";

import { updateCar, type CreateCarInput } from "../../api/cars";

export const useUpdateCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carId, data }: { carId: string; data: CreateCarInput }) =>
      updateCar(carId, data),

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });

      queryClient.invalidateQueries({
        queryKey: ["car", variables.carId],
      });
    },
  });
};

type StatusType = ApiCar["statusType"];

type UpdateCarStatusTypeInput = {
  carId: string;
  statusType: StatusType;
};

export const useUpdateCarStatusType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carId, statusType }: UpdateCarStatusTypeInput) =>
      apiClient(`/api/cars/${carId}`, {
        method: "PATCH",
        body: { statusType },
      }),

    onSuccess: async (_data, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["cars"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["admin", "cars"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["car", variables.carId],
        }),
      ]);
    },
  });
};
