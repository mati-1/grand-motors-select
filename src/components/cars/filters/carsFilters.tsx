import type { CarView, SortOption } from "../../../hooks/useCarFilters";

import { CarsFilterSelect } from "./carsFilterSelect";
import { fuelOptions, priceOptions, sortOptions } from "./carsFilterOptions";

type CarsFiltersProps = {
  view: CarView;
  onViewChange: (value: CarView) => void;

  search: string;
  onSearchChange: (value: string) => void;

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
  search,
  onSearchChange,
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
  const brandOptions = [
    {
      value: "all",
      label: "WSZYSTKIE",
    },
    ...brands.map((item) => ({
      value: item,
      label: item,
    })),
  ];

  const minYearOptions = [
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

  const maxYearOptions = [
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

  const minPriceOptions = priceOptions.map((option) => ({
    ...option,
    disabled:
      maxPrice !== "all" &&
      option.value !== "all" &&
      Number(option.value) > Number(maxPrice),
  }));

  const maxPriceOptions = priceOptions.map((option) => ({
    ...option,
    disabled:
      minPrice !== "all" &&
      option.value !== "all" &&
      Number(option.value) < Number(minPrice),
  }));

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
      label: "ARCHIWUM",
    },
  ];

  return (
    <section
      className="
        relative
        z-30
        border-y
        border-white/5
        px-[5vw]
        py-8
        sm:py-10
                 bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-5
        "
      >
        <div className="flex items-center gap-4">
          <span className="font-serif text-[14px] text-[#b99a5c]">01</span>

          <span className="h-px w-7 bg-[#b99a5c]/40" />

          <span className="text-[12px] tracking-[0.35em] text-[#555]">
            SAMOCHODY
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-serif text-[14px] text-[#b99a5c]">
            {String(resultCount).padStart(2, "0")}
          </span>

          <span className="text-[10px] tracking-[0.25em] text-[#444]">
            POZYCJI
          </span>
        </div>
      </div>

      {/* STATUS */}

      <div className="flex border-b border-white/10">
        {viewOptions.map((option) => {
          const active = view === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onViewChange(option.value)}
              className={`
                relative
                cursor-pointer
                px-5
                py-5
                text-[10px]
                tracking-[0.25em]
                transition-colors
                duration-300
                first:pl-0
                ${active ? "text-[#d2b878]" : "text-[#555] hover:text-[#999]"}
              `}
            >
              {option.label}

              <span
                className={`
                  absolute
                  -bottom-px
                  left-0
                  h-px
                  bg-[#b99a5c]
                  transition-all
                  duration-500
                  ${active ? "w-full" : "w-0"}
                `}
              />
            </button>
          );
        })}
      </div>

      {/* FILTERS */}

      <div
        className="
          mt-7
          grid
          grid-cols-1
          border-y
          border-white/10
          sm:grid-cols-2
          lg:grid-cols-6
        "
      >
        <CarsFilterSelect
          label="MARKA"
          value={brand}
          options={brandOptions}
          onChange={onBrandChange}
        />

        <CarsFilterSelect
          label="ROK OD"
          value={minYear}
          options={minYearOptions}
          onChange={onMinYearChange}
        />

        <CarsFilterSelect
          label="ROK DO"
          value={maxYear}
          options={maxYearOptions}
          onChange={onMaxYearChange}
        />

        <CarsFilterSelect
          label="PALIWO"
          value={fuel}
          options={fuelOptions}
          onChange={onFuelChange}
        />

        <CarsFilterSelect
          label="CENA OD"
          value={minPrice}
          options={minPriceOptions}
          onChange={onMinPriceChange}
        />

        <CarsFilterSelect
          label="CENA DO"
          value={maxPrice}
          options={maxPriceOptions}
          onChange={onMaxPriceChange}
        />
      </div>

      {/* FOOTER */}

      <div
        className="
    mt-4
    flex
    flex-col-reverse
    gap-5
    sm:flex-row
    sm:items-center
    sm:justify-between
  "
      >
        {/* LEFT */}

        <div
          className="
      flex
      items-center
      justify-between
      gap-4

    "
        >
          <span className="text-[12px] tracking-[0.25em] text-[#444]">
            {view === "available" ? "AKTUALNA OFERTA" : "ARCHIWUM"}
          </span>

          {hasActiveFilters && (
            <>
              <span className="h-4 w-px bg-white/10" />

              <button
                type="button"
                onClick={onClearFilters}
                className="
            group
            flex
            cursor-pointer
            items-center
            gap-2
            text-[9px]
            tracking-[0.2em]
            text-[#555]
            transition-colors
            duration-300
            hover:text-[#b99a5c]
          "
              >
                <span>WYCZYŚĆ FILTRY</span>

                <span
                  className="
              text-[13px]
              leading-none
              transition-transform
              duration-300
              group-hover:rotate-90
            "
                >
                  ×
                </span>
              </button>
            </>
          )}
        </div>

        {/* RIGHT */}

        <div
          className="
      flex
      relative
      flex-col-reverse
      sm:flex-row
      items-center
      justify-between
      gap-1
      sm:gap-6
    "
        >
          {/* SEARCH */}

          <div
            className="
        group
        relative
        flex
        min-h-16
        w-full
        min-w-0
        flex-1
        items-center
        border-b
        border-white/10
        transition-colors
        duration-300
        focus-within:border-[#b99a5c]/50
        sm:w-52
        sm:flex-none
      "
          >
            <span
              className="
          mr-3
          text-[15px]
          leading-none
          text-[#444]
          transition-colors
          duration-300
          group-focus-within:text-[#b99a5c]
        "
            >
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="SZUKAJ SAMOCHÓD"
              className="
          h-full
          min-w-0
          flex-1
          bg-transparent
          font-light
          text-[10px]
          tracking-[0.16em]
          text-[#ccc]
          outline-none
          placeholder:text-[#444]
        "
            />

            {search && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Wyczyść wyszukiwanie"
                className="
            ml-2
            flex
            h-6
            w-6
            shrink-0
            cursor-pointer
            items-center
            justify-center
            text-[13px]
            text-[#555]
            transition-colors
            duration-300
            hover:text-[#b99a5c]
          "
              >
                ×
              </button>
            )}

            <span
              className="
          absolute
          -bottom-px
          left-0
          h-px
          w-0
          bg-[#b99a5c]
          transition-all
          duration-500
          group-focus-within:w-full
        "
            />
          </div>

          {/* SORT */}

          <div className="w-full min-w-55">
            <CarsFilterSelect
              label="KOLEJNOŚĆ"
              value={sort}
              options={sortOptions}
              onChange={(value) => onSortChange(value as SortOption)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
