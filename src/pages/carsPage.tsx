import { LineComponent } from "../components/line";
import { ContactSectionComponent } from "../sections/landing/contact";
import { CarsEmptyState } from "../components/cars/carsEmptyState";
import { CarsFilters } from "../components/cars/filters/carsFilters";
import { CarsGrid } from "../components/cars/carsGrid";
import { CarsHero } from "../components/cars/carsHero";
import { useCarFilters } from "../hooks/useCarFilters";
import { FooterComponent } from "../sections/landing/footer";

export const CarsPage = () => {
  const {
    view,
    setView,

    search,
    setSearch,

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

      <CarsFilters
        view={view}
        onViewChange={setView}
        search={search}
        onSearchChange={setSearch}
        brand={brand}
        onBrandChange={setBrand}
        minYear={minYear}
        onMinYearChange={setMinYear}
        minPrice={minPrice}
        onMinPriceChange={setMinPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        fuel={fuel}
        maxYear={maxYear}
        onMaxYearChange={setMaxYear}
        onFuelChange={setFuel}
        sort={sort}
        onSortChange={setSort}
        brands={brands}
        years={years}
        resultCount={filteredCars.length}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      {filteredCars.length > 0 ? (
        <CarsGrid cars={filteredCars} />
      ) : (
        <CarsEmptyState onClearFilters={clearFilters} />
      )}

      <ContactSectionComponent />

      <LineComponent className="mt-0!" />

      <FooterComponent />
    </main>
  );
};

export default CarsPage;
