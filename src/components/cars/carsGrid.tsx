import type { CarType } from "./cars";
import { CarCard } from "./carCard";

type CarsGridProps = {
  cars: CarType[];
};

export const CarsGrid = ({ cars }: CarsGridProps) => {
  return (
    <section
      id="cars"
      className="
        scroll-mt-23
        px-[5vw]
        py-16
        sm:py-24
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-5.5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {cars.map((car) => (
          <CarCard key={`${car.brand}-${car.model}-${car.year}`} car={car} />
        ))}
      </div>
    </section>
  );
};
