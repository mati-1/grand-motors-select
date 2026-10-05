import { ContactSectionComponent } from "./landing/contact";

import { CarsEmptyState } from "../../components/cars/carsEmptyState";
import { CarsFilters } from "../../components/cars/filters/carsFilters";
import { CarsGrid } from "../../components/cars/carsGrid";
import { CarsHero } from "../../components/cars/carsHero";

import { useCarFilters } from "../../hooks/cars/useCarFilters";

import { mapApiCarToCarType } from "../../components/cars/mapApiCarToCarType";

import { FooterComponent } from "../../components/footer";

export const CarsPage = () => {
  const {
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
    years,

    carsQuery,

    hasActiveFilters,
    clearFilters,
  } = useCarFilters();

  const apiCars = carsQuery.data?.cars ?? [];

  const cars = apiCars.map(mapApiCarToCarType);

  const isLoading = carsQuery.isPending;
  const isError = carsQuery.isError;

  return (
    <main className="w-full bg-[#050505]">
      <CarsHero />

      <section
        id="cars"
        className="
          scroll-mt-23
          px-[4vw]
          py-10
          sm:py-14
          min-[1200px]:px-[13vw]
          min-[1200px]:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
            min-[1200px]:grid-cols-[270px_minmax(0,1fr)]
            min-[1200px]:items-start
          "
        >
          <CarsFilters
            brand={brand}
            onBrandChange={setBrand}
            minYear={minYear}
            onMinYearChange={setMinYear}
            maxYear={maxYear}
            onMaxYearChange={setMaxYear}
            minPrice={minPrice}
            onMinPriceChange={setMinPrice}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            fuel={fuel}
            onFuelChange={setFuel}
            sort={sort}
            onSortChange={setSort}
            brands={brands}
            years={years}
            resultCount={cars.length}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />

          <div className="min-w-0">
            {isLoading && (
              <div className="flex min-h-80 items-center justify-center">
                <span className="text-[11px] text-[#E8E9E7]/30">
                  Pobieranie samochodów...
                </span>
              </div>
            )}

            {isError && !isLoading && (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="text-[10px] text-[#4C9FE5]">
                  Wystąpił problem
                </span>

                <p className="mt-3 text-[12px] text-[#E8E9E7]/40">
                  Nie udało się pobrać aktualnej oferty samochodów.
                </p>

                <button
                  type="button"
                  onClick={() => carsQuery.refetch()}
                  className="
                    mt-5
                    cursor-pointer
                    border
                    border-white/10
                    px-5
                    py-3
                    text-[10px]
                    text-[#E8E9E7]/60
                    transition-colors
                    hover:border-[#4C9FE5]/40
                    hover:text-[#4C9FE5]
                  "
                >
                  Spróbuj ponownie
                </button>
              </div>
            )}

            {!isLoading && !isError && cars.length > 0 && (
              <CarsGrid cars={cars} />
            )}

            {!isLoading && !isError && cars.length === 0 && (
              <CarsEmptyState onClearFilters={clearFilters} />
            )}
          </div>
        </div>
      </section>

      <ContactSectionComponent />

      <FooterComponent />
    </main>
  );
};

export default CarsPage;
