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
      label: "WSZYSTKIE",
    },
    ...brands.map((brand) => ({
      value: brand,
      label: brand,
    })),
  ];

  const minYearOptions: FilterOption[] = [
    {
      value: "all",
      label: "DOWOLNY",
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
      label: "DOWOLNY",
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
      label: "DOMYŚLNIE",
    },
    {
      value: "priceAsc",
      label: "CENA: ROSNĄCO",
    },
    {
      value: "priceDesc",
      label: "CENA: MALEJĄCO",
    },
    {
      value: "yearDesc",
      label: "NAJNOWSZE",
    },
    {
      value: "mileageAsc",
      label: "NAJMNIEJSZY PRZEBIEG",
    },
  ];

  const viewOptions: {
    value: CarView;
    label: string;
  }[] = [
    {
      value: "available",
      label: "AKTUALNE",
    },
    {
      value: "sold",
      label: "ARCHIWALNE",
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
