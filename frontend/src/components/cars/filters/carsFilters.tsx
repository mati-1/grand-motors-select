import { useEffect, useState } from "react";

import type { SortOption } from "../../../hooks/cars/useCarFilters";

import { CarsFiltersContent } from "./carsFiltersContent";
import { CarsFiltersDesktop } from "./carsFiltersDesktop";
import { CarsFiltersMobile } from "./carsFiltersMobile";
import { getCarsFilterOptions } from "./carsFiltersOptions";

import ArrowIcon from "../../../assets/icons/strzalka.svg?react";

type CarsFiltersProps = {
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

  sort: SortOption;
  onSortChange: (value: SortOption) => void;

  fuel: string;
  onFuelChange: (value: string) => void;

  brands: string[];
  years: number[];

  resultCount: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

export const CarsFilters = ({
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
  sort,
  onSortChange,
  fuel,
  onFuelChange,
  brands,
  years,
  resultCount,
  hasActiveFilters,
  onClearFilters,
}: CarsFiltersProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const {
    brandOptions,
    minYearOptions,
    maxYearOptions,
    fuelOptions,
    minPriceOptions,
    maxPriceOptions,
    sortOptions,
  } = getCarsFilterOptions({
    brands,
    years,
    minYear,
    maxYear,
    minPrice,
    maxPrice,
  });

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  const closeMobileFilters = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <div className="min-[1200px]:hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="
            group
            flex
            min-h-14
            w-full
            cursor-pointer
            items-center
            justify-between
            rounded-[10px]
            border
            border-white/15
            bg-[#080808]
            px-5
            transition-all
            duration-300
            hover:border-[#4C9FE5]/30
            hover:bg-[#4C9FE5]/5
          "
        >
          <div className="flex items-center gap-4">
            <span className="text-[14px] text-[#4C9FE5]">☰</span>

            <span
              className="
                text-[14px]
                text-[#E8E9E7]
                transition-colors
                duration-300
                group-hover:text-[#4C9FE5]
              "
            >
              Pokaż filtry
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <span className="text-[13px] text-[#4C9FE5]">●</span>
            )}

            <ArrowIcon className="h-5 w-5 rotate-180" />
          </div>
        </button>
      </div>

      <div className="hidden min-[1200px]:block">
        <CarsFiltersDesktop>
          <CarsFiltersContent
            brand={brand}
            onBrandChange={onBrandChange}
            minYear={minYear}
            onMinYearChange={onMinYearChange}
            maxYear={maxYear}
            onMaxYearChange={onMaxYearChange}
            minPrice={minPrice}
            onMinPriceChange={onMinPriceChange}
            maxPrice={maxPrice}
            onMaxPriceChange={onMaxPriceChange}
            fuel={fuel}
            onFuelChange={onFuelChange}
            sort={sort}
            onSortChange={onSortChange}
            brandOptions={brandOptions}
            minYearOptions={minYearOptions}
            maxYearOptions={maxYearOptions}
            fuelOptions={fuelOptions}
            minPriceOptions={minPriceOptions}
            maxPriceOptions={maxPriceOptions}
            sortOptions={sortOptions}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={onClearFilters}
          />
        </CarsFiltersDesktop>
      </div>

      <CarsFiltersMobile
        isOpen={isMobileOpen}
        resultCount={resultCount}
        onClose={closeMobileFilters}
      >
        <CarsFiltersContent
          brand={brand}
          onBrandChange={onBrandChange}
          minYear={minYear}
          onMinYearChange={onMinYearChange}
          maxYear={maxYear}
          onMaxYearChange={onMaxYearChange}
          minPrice={minPrice}
          onMinPriceChange={onMinPriceChange}
          maxPrice={maxPrice}
          onMaxPriceChange={onMaxPriceChange}
          fuel={fuel}
          onFuelChange={onFuelChange}
          sort={sort}
          onSortChange={onSortChange}
          brandOptions={brandOptions}
          minYearOptions={minYearOptions}
          maxYearOptions={maxYearOptions}
          fuelOptions={fuelOptions}
          minPriceOptions={minPriceOptions}
          maxPriceOptions={maxPriceOptions}
          sortOptions={sortOptions}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={onClearFilters}
        />
      </CarsFiltersMobile>
    </>
  );
};
