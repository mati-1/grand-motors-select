import { ContactSectionComponent } from "../sections/landing/contact";

import { CarsEmptyState } from "../components/cars/carsEmptyState";
import { CarsFilters } from "../components/cars/filters/carsFilters";
import { CarsGrid } from "../components/cars/carsGrid";
import { CarsHero } from "../components/cars/carsHero";

import { useCarFilters } from "../hooks/useCarFilters";

import { FooterComponent } from "../components/footer";

export const CarsPage = () => {
  const {
    view,
    setView,
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
    filteredCars,
    hasActiveFilters,
    clearFilters,
  } = useCarFilters();

  return (
    <main className="w-full bg-[#050505]">
      <CarsHero />

      <section
        id="cars"
        className="
          scroll-mt-23
          px-[4vw] lg:px-[13vw]
          py-10
          sm:py-14
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[270px_minmax(0,1fr)]
            lg:items-start
            lg:gap-10
            xl:grid-cols-[300px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          {/* FILTRY */}
          <CarsFilters
            view={view}
            onViewChange={setView}
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
            resultCount={filteredCars.length}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />

          {/* SAMOCHODY */}
          <div className="min-w-0">
            {filteredCars.length > 0 ? (
              <CarsGrid cars={filteredCars} />
            ) : (
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
