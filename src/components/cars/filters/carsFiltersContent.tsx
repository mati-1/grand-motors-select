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
      <div className="border-y border-white/15 bg-[#050505]">
        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="MARKA"
            value={brand}
            options={brandOptions}
            onChange={onBrandChange}
          />
        </div>

        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="ROK OD"
            value={minYear}
            options={minYearOptions}
            onChange={onMinYearChange}
          />
        </div>

        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="ROK DO"
            value={maxYear}
            options={maxYearOptions}
            onChange={onMaxYearChange}
          />
        </div>

        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="PALIWO"
            value={fuel}
            options={fuelOptions}
            onChange={onFuelChange}
          />
        </div>

        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="CENA OD"
            value={minPrice}
            options={minPriceOptions}
            onChange={onMinPriceChange}
          />
        </div>

        <div className="border-b border-white/10">
          <CarsFilterSelect
            label="CENA DO"
            value={maxPrice}
            options={maxPriceOptions}
            onChange={onMaxPriceChange}
          />
        </div>

        <CarsFilterSelect
          label="KOLEJNOŚĆ"
          value={sort}
          options={sortOptions}
          onChange={(value) => onSortChange(value as SortOption)}
        />
      </div>

      {hasActiveFilters && (
        <div className="border-t border-white/10 px-5 py-5">
          <ButtonComponent onClick={onClearFilters} className="min-w-full">
            WYCZYŚĆ WSZYSTKIE
          </ButtonComponent>
        </div>
      )}
    </div>
  );
};
