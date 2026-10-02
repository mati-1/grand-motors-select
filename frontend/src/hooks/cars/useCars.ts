import { useQuery } from "@tanstack/react-query";

import { getCars, type CarFilters } from "../../api/cars";

export const useCars = (filters: CarFilters = {}) => {
  return useQuery({
    queryKey: ["cars", filters],
    queryFn: () => getCars(filters),
    staleTime: 30_000,
  });
};
