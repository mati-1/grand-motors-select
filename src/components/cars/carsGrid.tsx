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
        py-14
        sm:py-20
        bg-[#b99a5c]/20
        bg-linear-to-r from-black/90 via-black/75 to-black/90
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
