import type { SortOption } from "../../hooks/useCarFilters";

type CarsFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;

  brand: string;
  onBrandChange: (value: string) => void;

  minYear: string;
  onMinYearChange: (value: string) => void;

  minPrice: string;
  onMinPriceChange: (value: string) => void;

  maxPrice: string;
  onMaxPriceChange: (value: string) => void;

  sort: SortOption;
  onSortChange: (value: SortOption) => void;

  brands: string[];
  years: number[];

  resultCount: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

const priceOptions = [
  { value: "all", label: "DOWOLNA" },
  { value: "50000", label: "50 000 ZŁ" },
  { value: "100000", label: "100 000 ZŁ" },
  { value: "150000", label: "150 000 ZŁ" },
  { value: "200000", label: "200 000 ZŁ" },
  { value: "250000", label: "250 000 ZŁ" },
  { value: "300000", label: "300 000 ZŁ" },
];

export const CarsFilters = ({
  search,
  onSearchChange,
  brand,
  onBrandChange,
  minYear,
  onMinYearChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  sort,
  onSortChange,
  brands,
  years,
  resultCount,
  hasActiveFilters,
  onClearFilters,
}: CarsFiltersProps) => {
  return (
    <section className="border-y border-white/5 px-[5vw] py-8">
      <div className="mx-auto max-w-360">
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* SZUKAJ */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              SZUKAJ
            </label>

            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="BMW, M550i..."
              className="
                h-12 w-full
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
                placeholder:text-[#444]
              "
            />
          </div>

          {/* MARKA */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              MARKA
            </label>

            <select
              value={brand}
              onChange={(event) => onBrandChange(event.target.value)}
              className="
                h-12 w-full
                cursor-pointer
                appearance-none
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
              "
            >
              <option value="all">WSZYSTKIE</option>

              {brands.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* ROK OD */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              ROK OD
            </label>

            <select
              value={minYear}
              onChange={(event) => onMinYearChange(event.target.value)}
              className="
                h-12 w-full
                cursor-pointer
                appearance-none
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
              "
            >
              <option value="all">DOWOLNY</option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* CENA OD */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              CENA OD
            </label>

            <select
              value={minPrice}
              onChange={(event) => onMinPriceChange(event.target.value)}
              className="
                h-12 w-full
                cursor-pointer
                appearance-none
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
              "
            >
              {priceOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={
                    maxPrice !== "all" &&
                    option.value !== "all" &&
                    Number(option.value) > Number(maxPrice)
                  }
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* CENA DO */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              CENA DO
            </label>

            <select
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              className="
                h-12 w-full
                cursor-pointer
                appearance-none
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
              "
            >
              {priceOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={
                    minPrice !== "all" &&
                    option.value !== "all" &&
                    Number(option.value) < Number(minPrice)
                  }
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* SORTOWANIE */}
          <div className="bg-[#080808]">
            <label className="block px-4 pt-3 text-[8px] tracking-[0.25em] text-[#666]">
              SORTOWANIE
            </label>

            <select
              value={sort}
              onChange={(event) =>
                onSortChange(event.target.value as SortOption)
              }
              className="
                h-12 w-full
                cursor-pointer
                appearance-none
                bg-transparent
                px-4
                text-[11px]
                tracking-[0.08em]
                text-[#ddd]
                outline-none
              "
            >
              <option value="default">DOMYŚLNE</option>
              <option value="priceAsc">CENA — ROSNĄCO</option>
              <option value="priceDesc">CENA — MALEJĄCO</option>
              <option value="yearDesc">NAJNOWSZE</option>
              <option value="mileageAsc">PRZEBIEG — ROSNĄCO</option>
            </select>
          </div>
        </div>

        {/* DOLNY WIERSZ */}
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[0.2em] text-[#555]">
            ZNALEZIONO <span className="text-[#b99a5c]">{resultCount}</span>{" "}
            {resultCount === 1 ? "SAMOCHÓD" : "SAMOCHODÓW"}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="
                self-start
                text-[9px]
                tracking-[0.2em]
                text-[#777]
                transition-colors
                duration-300
                hover:text-[#b99a5c]
              "
            >
              WYCZYŚĆ FILTRY ×
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
