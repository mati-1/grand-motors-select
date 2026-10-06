import { useQuery } from "@tanstack/react-query";

import { getAdminCars, getCars, type CarFilters } from "../../api/cars";

export const useCars = (filters: CarFilters = {}) => {
  return useQuery({
    queryKey: ["cars", filters],
    queryFn: () => getCars(filters),
    staleTime: 30_000,
  });
};

export const useAdminCars = () => {
  return useQuery({
    queryKey: ["admin", "cars"],
    queryFn: getAdminCars,
    staleTime: 30_000,
  });
};
