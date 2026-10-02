import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCar, type CreateCarInput } from "../../api/cars";

export const useCreateCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCarInput) => createCar(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });
};
