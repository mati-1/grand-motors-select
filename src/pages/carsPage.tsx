import { LineComponent } from "../components/line";
import { CarsCta } from "../components/cars/carsCta";
import { CarsEmptyState } from "../components/cars/carsEmptyState";
import { CarsFilters } from "../components/cars/carsFilters";
import { CarsGrid } from "../components/cars/carsGrid";
import { CarsHero } from "../components/cars/carsHero";
import { useCarFilters } from "../hooks/useCarFilters";

export const CarsPage = () => {
  const {
    search,
    setSearch,

    brand,
    setBrand,

    minYear,
    setMinYear,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

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

      <CarsCta />

      <LineComponent className="mt-0!" />
    </main>
  );
};

export default CarsPage;
