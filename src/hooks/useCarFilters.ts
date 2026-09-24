import { useMemo, useState } from "react";

import { carsList, carsYears } from "../components/cars/cars";

export type SortOption =
  | "default"
  | "priceAsc"
  | "priceDesc"
  | "yearDesc"
  | "mileageAsc";

export type CarView = "available" | "sold" | "reservation";

const parseNumber = (value: string) => {
  return Number(value.replace(/[^\d]/g, ""));
};

export const useCarFilters = () => {
  const [view, setView] = useState<CarView>("available");

  const [search, setSearch] = useState("");

  const [brand, setBrand] = useState("all");

  const [minYear, setMinYear] = useState("all");
  const [maxYear, setMaxYear] = useState("all");

  const [minPrice, setMinPrice] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");

  const [fuel, setFuel] = useState("all");

  const [sort, setSort] = useState<SortOption>("default");

  const brands = useMemo(() => {
    return [...new Set(carsList.map((car) => car.brand))].sort();
  }, []);

  const filteredCars = useMemo(() => {
    let result = [...carsList];

    // STATUS

    if (view === "available" || view === "reservation") {
      result = result.filter(
        (car) => car.status === "available" || car.status === "reservation",
      );
    }

    if (view === "sold") {
      result = result.filter((car) => car.status === "sold");
    }

    // SEARCH

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((car) =>
        `${car.brand} ${car.model} ${car.engine} ${car.year} ${car.fuel}`
          .toLowerCase()
          .includes(query),
      );
    }

    // BRAND

    if (brand !== "all") {
      result = result.filter((car) => car.brand === brand);
    }

    // MIN YEAR

    if (minYear !== "all") {
      result = result.filter((car) => Number(car.year) >= Number(minYear));
    }

    // MAX YEAR

    if (maxYear !== "all") {
      result = result.filter((car) => Number(car.year) <= Number(maxYear));
    }

    // MIN PRICE

    if (minPrice !== "all") {
      result = result.filter(
        (car) => parseNumber(car.price) >= Number(minPrice),
      );
    }

    // MAX PRICE

    if (maxPrice !== "all") {
      result = result.filter(
        (car) => parseNumber(car.price) <= Number(maxPrice),
      );
    }

    // FUEL

    if (fuel !== "all") {
      result = result.filter(
        (car) => car.fuel.toLowerCase() === fuel.toLowerCase(),
      );
    }

    // SORT

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
  }, [view, search, brand, minYear, maxYear, minPrice, maxPrice, fuel, sort]);

  const hasActiveFilters =
    brand !== "all" ||
    minYear !== "all" ||
    maxYear !== "all" ||
    minPrice !== "all" ||
    maxPrice !== "all" ||
    fuel !== "all" ||
    sort !== "default";

  const clearFilters = () => {
    setBrand("all");

    setMinYear("all");
    setMaxYear("all");

    setMinPrice("all");
    setMaxPrice("all");

    setFuel("all");

    setSort("default");

    setSearch("");
  };

  return {
    view,
    setView,

    search,
    setSearch,

    brand,
    setBrand,

    minYear,
    setMinYear,

    maxYear,
    setMaxYear,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    fuel,
    setFuel,

    sort,
    setSort,

    brands,
    years: carsYears,

    filteredCars,

    hasActiveFilters,
    clearFilters,
  };
};
