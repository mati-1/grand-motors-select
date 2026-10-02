import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCarImagePosition } from "../../api/cars";

export const useUpdateCarImagePosition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      carId,
      imageId,
      position,
    }: {
      carId: string;
      imageId: string;
      position: number;
    }) => updateCarImagePosition(carId, imageId, position),

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
