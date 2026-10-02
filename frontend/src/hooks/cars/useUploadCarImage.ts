import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadCarImage } from "../../api/cars";

export const useUploadCarImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carId, file }: { carId: string; file: File }) =>
      uploadCarImage(carId, file),

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
