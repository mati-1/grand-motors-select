import { useEffect, useState } from "react";

import type { CarView, SortOption } from "../../../hooks/useCarFilters";

import { CarsFiltersContent } from "./carsFiltersContent";
import { CarsFiltersDesktop } from "./carsFiltersDesktop";
import { CarsFiltersMobile } from "./carsFiltersMobile";
import { getCarsFilterOptions } from "./carsFiltersOptions";

import ArrowIcon from "../../../assets/icons/strzalka.svg?react";

type CarsFiltersProps = {
  view: CarView;
  onViewChange: (value: CarView) => void;

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
  view,
  onViewChange,

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
    viewOptions,
  } = getCarsFilterOptions({
    brands,
    years,
    minYear,
    maxYear,
    minPrice,
    maxPrice,
  });

  /*
   * ============================================================
   * MOBILE
   * ============================================================
   */

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
      {/* MOBILE */}

      <div className="lg:hidden">
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
            border
            border-white/15
            bg-[#080808]
            px-5
            transition-all
            duration-300
            rounded-[10px]
            hover:border-[#b99a5c]/30
            hover:bg-[#b99a5c]/5
          "
        >
          <div className="flex items-center gap-4">
            <span className="text-[14px] text-[#b99a5c]">☰</span>

            <span className="text-[14px]  text-white transition-colors duration-300 group-hover:text-[#d2b878]">
              Pokaż filtry
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <span className="text-[13px] text-[#b99a5c]">●</span>
            )}

            <ArrowIcon className="w-5 h-5 rotate-180" />
          </div>
        </button>
      </div>

      <CarsFiltersDesktop
        view={view}
        onViewChange={onViewChange}
        viewOptions={viewOptions}
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
      </CarsFiltersDesktop>

      <CarsFiltersMobile
        isOpen={isMobileOpen}
        resultCount={resultCount}
        onClose={closeMobileFilters}
        view={view}
        onViewChange={onViewChange}
        viewOptions={viewOptions}
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
