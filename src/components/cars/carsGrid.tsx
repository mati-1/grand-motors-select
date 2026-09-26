import type { CarType } from "./cars";
import { CarCard } from "./carCard";

type CarsGridProps = {
  cars: CarType[];
};

export const CarsGrid = ({ cars }: CarsGridProps) => {
  return (
    <div className="min-w-0">
      {/* HEADER */}

      <div className="mb-6 flex items-end justify-between">
        <span className="text-[9px] tracking-[0.2em] text-[#444]">
          {String(cars.length).padStart(2, "0")} POZYCJI
        </span>
      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {cars.map((car) => (
          <CarCard key={`${car.brand}-${car.model}-${car.year}`} car={car} />
        ))}
      </div>
    </div>
  );
};
