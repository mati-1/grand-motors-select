import { useMutation, useQueryClient } from "@tanstack/react-query";

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
