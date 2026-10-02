import { useQuery } from "@tanstack/react-query";

import { getCarImages } from "../../api/cars";

export const useCarImages = (carId?: string) => {
  return useQuery({
    queryKey: ["car-images", carId],
    queryFn: () => getCarImages(carId!),
    enabled: Boolean(carId),
  });
};
