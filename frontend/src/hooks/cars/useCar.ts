import { useQuery } from "@tanstack/react-query";

import { getCar } from "../../api/cars";

export const useCar = (carId?: string) => {
  return useQuery({
    queryKey: ["car", carId],
    queryFn: () => getCar(carId!),
    enabled: Boolean(carId),
    staleTime: 30_000,
  });
};
