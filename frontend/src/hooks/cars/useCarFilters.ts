import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { CarFilters } from "../../api/cars";
import { useCars } from "./useCars";

export type SortOption =
  | "default"
  | "priceAsc"
  | "priceDesc"
  | "yearDesc"
  | "mileageAsc";

const carsYears = Array.from(
  { length: new Date().getFullYear() - 2011 },
  (_, index) => new Date().getFullYear() - index,
).sort((a, b) => a - b);

export const useCarFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const [brand, setBrand] = useState(searchParams.get("brand") ?? "all");

  const [minYear, setMinYear] = useState(searchParams.get("minYear") ?? "all");

  const [maxYear, setMaxYear] = useState(searchParams.get("maxYear") ?? "all");

  const [minPrice, setMinPrice] = useState(
    searchParams.get("minPrice") ?? "all",
  );

  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") ?? "all",
  );

  const [fuel, setFuel] = useState(searchParams.get("fuel") ?? "all");

  const [sort, setSort] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) ?? "default",
  );

  const updateUrl = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "all" || value === "default") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateUrl({
      search: value,
    });
  };

  const handleBrandChange = (value: string) => {
    setBrand(value);
    updateUrl({
      brand: value,
    });
  };

  const handleMinYearChange = (value: string) => {
    setMinYear(value);
    updateUrl({
      minYear: value,
    });
  };

  const handleMaxYearChange = (value: string) => {
    setMaxYear(value);
    updateUrl({
      maxYear: value,
    });
  };

  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
    updateUrl({
      minPrice: value,
    });
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
    updateUrl({
      maxPrice: value,
    });
  };

  const handleFuelChange = (value: string) => {
    setFuel(value);
    updateUrl({
      fuel: value,
    });
  };

  const handleSortChange = (value: SortOption) => {
    setSort(value);
    updateUrl({
      sort: value,
    });
  };

  const filters = useMemo<CarFilters>(
    () => ({
      search,
      brand,
      minYear: minYear === "all" ? undefined : Number(minYear),
      maxYear: maxYear === "all" ? undefined : Number(maxYear),
      minPrice: minPrice === "all" ? undefined : Number(minPrice),
      maxPrice: maxPrice === "all" ? undefined : Number(maxPrice),
      fuel,
      sort,
    }),
    [search, brand, minYear, maxYear, minPrice, maxPrice, fuel, sort],
  );

  const carsQuery = useCars(filters);

  const brands = useMemo(() => {
    const cars = carsQuery.data?.cars ?? [];

    return [...new Set(cars.map((car) => car.brand))].sort();
  }, [carsQuery.data?.cars]);

  const hasActiveFilters =
    brand !== "all" ||
    minYear !== "all" ||
    maxYear !== "all" ||
    minPrice !== "all" ||
    maxPrice !== "all" ||
    fuel !== "all" ||
    sort !== "default" ||
    search.trim() !== "";

  const clearFilters = () => {
    setSearch("");
    setBrand("all");
    setMinYear("all");
    setMaxYear("all");
    setMinPrice("all");
    setMaxPrice("all");
    setFuel("all");
    setSort("default");

    setSearchParams({});
  };

  return {
    search,
    setSearch: handleSearchChange,

    brand,
    setBrand: handleBrandChange,

    minYear,
    setMinYear: handleMinYearChange,

    maxYear,
    setMaxYear: handleMaxYearChange,

    minPrice,
    setMinPrice: handleMinPriceChange,

    maxPrice,
    setMaxPrice: handleMaxPriceChange,

    fuel,
    setFuel: handleFuelChange,

    sort,
    setSort: handleSortChange,

    brands,
    years: carsYears,

    carsQuery,

    hasActiveFilters,
    clearFilters,
  };
};
