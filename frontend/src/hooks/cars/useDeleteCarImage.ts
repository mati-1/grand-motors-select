import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarImage } from "../../api/cars";

export const useDeleteCarImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carId, imageId }: { carId: string; imageId: string }) =>
      deleteCarImage(carId, imageId),

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["car-images", variables.carId],
      });

      queryClient.invalidateQueries({
        queryKey: ["car", variables.carId],
      });

      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });
};
