import type { CarView, SortOption } from "../../../hooks/useCarFilters";

import { priceOptions, fuelOptions } from "./carsFilterOptions";

type FilterOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type CarsFilterOptionsProps = {
  brands: string[];
  years: number[];

  minYear: string;
  maxYear: string;

  minPrice: string;
  maxPrice: string;
};

export const getCarsFilterOptions = ({
  brands,
  years,
  minYear,
  maxYear,
  minPrice,
  maxPrice,
}: CarsFilterOptionsProps) => {
  const brandOptions: FilterOption[] = [
    {
      value: "all",
      label: "Wszystkie",
    },
    ...brands.map((brand) => ({
      value: brand,
      label: brand,
    })),
  ];

  const minYearOptions: FilterOption[] = [
    {
      value: "all",
      label: "Dowolny",
    },
    ...years.map((year) => ({
      value: String(year),
      label: String(year),
      disabled: maxYear !== "all" && year > Number(maxYear),
    })),
  ];

  const maxYearOptions: FilterOption[] = [
    {
      value: "all",
      label: "Dowolny",
    },
    ...years.map((year) => ({
      value: String(year),
      label: String(year),
      disabled: minYear !== "all" && year < Number(minYear),
    })),
  ];

  const minPriceOptions: FilterOption[] = priceOptions.map((option) => ({
    ...option,
    disabled:
      maxPrice !== "all" &&
      option.value !== "all" &&
      Number(option.value) > Number(maxPrice),
  }));

  const maxPriceOptions: FilterOption[] = priceOptions.map((option) => ({
    ...option,
    disabled:
      minPrice !== "all" &&
      option.value !== "all" &&
      Number(option.value) < Number(minPrice),
  }));

  const sortOptions: {
    value: SortOption;
    label: string;
  }[] = [
    {
      value: "default",
      label: "Domyślnie",
    },
    {
      value: "priceAsc",
      label: "Cena: Rosnąco",
    },
    {
      value: "priceDesc",
      label: "Cena: Malejąco",
    },
    {
      value: "yearDesc",
      label: "Najnowsze",
    },
    {
      value: "mileageAsc",
      label: "Najmniejszy przebieg",
    },
  ];

  const viewOptions: {
    value: CarView;
    label: string;
  }[] = [
    {
      value: "available",
      label: "Aktualne",
    },
    {
      value: "sold",
      label: "Archiwalne",
    },
  ];

  return {
    brandOptions,
    minYearOptions,
    maxYearOptions,
    fuelOptions,
    minPriceOptions,
    maxPriceOptions,
    sortOptions,
    viewOptions,
  };
};
