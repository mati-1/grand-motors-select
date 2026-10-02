import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCarImagePrimary } from "../../api/cars";

export const useSetCarImagePrimary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carId, imageId }: { carId: string; imageId: string }) =>
      setCarImagePrimary(carId, imageId),

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
