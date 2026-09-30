import type { SortOption } from "../../../hooks/useCarFilters";

import { ButtonComponent } from "../../button";

import { CarsFilterSelect } from "./carsFilterSelect";
import type { CarsFilterOption } from "./carsFilterSelect";

type CarsFiltersContentProps = {
  brand: string;
  onBrandChange: (value: string) => void;

  minYear: string;
  onMinYearChange: (value: string) => void;

  maxYear: string;
  onMaxYearChange: (value: string) => void;

  minPrice: string;
  onMinPriceChange: (value: string) => void;

  maxPrice: string;
  onMaxPriceChange: (value: string) => void;

  fuel: string;
  onFuelChange: (value: string) => void;

  sort: SortOption;
  onSortChange: (value: SortOption) => void;

  brandOptions: CarsFilterOption[];
  minYearOptions: CarsFilterOption[];
  maxYearOptions: CarsFilterOption[];
  fuelOptions: CarsFilterOption[];
  minPriceOptions: CarsFilterOption[];
  maxPriceOptions: CarsFilterOption[];
  sortOptions: CarsFilterOption[];

  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

export const CarsFiltersContent = ({
  brand,
  onBrandChange,
  minYear,
  onMinYearChange,
  maxYear,
  onMaxYearChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  fuel,
  onFuelChange,
  sort,
  onSortChange,
  brandOptions,
  minYearOptions,
  maxYearOptions,
  fuelOptions,
  minPriceOptions,
  maxPriceOptions,
  sortOptions,
  hasActiveFilters,
  onClearFilters,
}: CarsFiltersContentProps) => {
  return (
    <div className="mt-5">
      <div className=" bg-[#050505] p-2 flex flex-col gap-2">
        <CarsFilterSelect
          label="Marka"
          value={brand}
          options={brandOptions}
          onChange={onBrandChange}
        />

        <CarsFilterSelect
          label="Rok od"
          value={minYear}
          options={minYearOptions}
          onChange={onMinYearChange}
        />

        <CarsFilterSelect
          label="Rok do"
          value={maxYear}
          options={maxYearOptions}
          onChange={onMaxYearChange}
        />

        <CarsFilterSelect
          label="Paliwo"
          value={fuel}
          options={fuelOptions}
          onChange={onFuelChange}
        />

        <CarsFilterSelect
          label="Cena od"
          value={minPrice}
          options={minPriceOptions}
          onChange={onMinPriceChange}
        />

        <CarsFilterSelect
          label="Cena do"
          value={maxPrice}
          options={maxPriceOptions}
          onChange={onMaxPriceChange}
        />

        <CarsFilterSelect
          label="Kolejność"
          value={sort}
          options={sortOptions}
          onChange={(value) => onSortChange(value as SortOption)}
        />
      </div>

      {hasActiveFilters && (
        <div className="border-t border-white/10 px-5 py-5">
          <ButtonComponent onClick={onClearFilters} className="min-w-full">
            Wyczyść wszystkie
          </ButtonComponent>
        </div>
      )}
    </div>
  );
};
