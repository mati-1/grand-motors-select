import type { CarType } from "./cars";
import { CarCard } from "./cards/carCard";

type CarsGridProps = {
  cars: CarType[];
};

export const CarsGrid = ({ cars }: CarsGridProps) => {
  return (
    <div className="min-w-0">
      {/* HEADER */}

      <div className="mb-6 flex items-end justify-between">
        <span className="text-[14px]  text-[#444]">
          {String(cars.length).padStart(2, "0")} Pozycji
        </span>
      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
        "
      >
        {cars.map((car) => (
          <CarCard
            variant="horizontal"
            key={`${car.brand}-${car.model}-${car.year}`}
            car={car}
          />
        ))}
      </div>
    </div>
  );
};
