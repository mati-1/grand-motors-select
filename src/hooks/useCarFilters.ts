import { useMemo, useState } from "react";
import { carsList, carsYears } from "../components/cars/cars";

export type SortOption =
  | "default"
  | "priceAsc"
  | "priceDesc"
  | "yearDesc"
  | "mileageAsc";

const parseNumber = (value: string) => {
  return Number(value.replace(/[^\d]/g, ""));
};

export const useCarFilters = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [minYear, setMinYear] = useState("all");

  const [minPrice, setMinPrice] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");

  const [sort, setSort] = useState<SortOption>("default");

  const brands = useMemo(() => {
    return [...new Set(carsList.map((car) => car.brand))].sort();
  }, []);

  const filteredCars = useMemo(() => {
    let result = [...carsList];

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((car) =>
        `${car.brand} ${car.model} ${car.engine} ${car.year}`
          .toLowerCase()
          .includes(query),
      );
    }

    if (brand !== "all") {
      result = result.filter((car) => car.brand === brand);
    }

    if (minYear !== "all") {
      result = result.filter((car) => Number(car.year) >= Number(minYear));
    }

    if (minPrice !== "all") {
      result = result.filter(
        (car) => parseNumber(car.price) >= Number(minPrice),
      );
    }

    if (maxPrice !== "all") {
      result = result.filter(
        (car) => parseNumber(car.price) <= Number(maxPrice),
      );
    }

    switch (sort) {
      case "priceAsc":
        result.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
        break;

      case "priceDesc":
        result.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
        break;

      case "yearDesc":
        result.sort((a, b) => Number(b.year) - Number(a.year));
        break;

      case "mileageAsc":
        result.sort((a, b) => parseNumber(a.mileage) - parseNumber(b.mileage));
        break;

      default:
        break;
    }

    return result;
  }, [search, brand, minYear, minPrice, maxPrice, sort]);

  const hasActiveFilters =
    Boolean(search) ||
    brand !== "all" ||
    minYear !== "all" ||
    minPrice !== "all" ||
    maxPrice !== "all" ||
    sort !== "default";

  const clearFilters = () => {
    setSearch("");
    setBrand("all");
    setMinYear("all");
    setMinPrice("all");
    setMaxPrice("all");
    setSort("default");
  };

  return {
    search,
    setSearch,

    brand,
    setBrand,

    minYear,
    setMinYear,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    sort,
    setSort,

    brands,
    years: carsYears,

    filteredCars,
    hasActiveFilters,
    clearFilters,
  };
};
