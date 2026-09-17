import { ButtonComponent } from "../button";
import type { CarType } from "./cars";

export const CarCard = ({ car }: { car: CarType }) => {
  return (
    <article
      className="group overflow-hidden border border-[#b99a5c]/20
          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 to-black/70 transition duration-500 hover:-translate-y-1.5 hover:border-[#b99a5c]/40"
    >
      <div className="h-65 overflow-hidden border-b border-white/10">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover brightness-[0.62] contrast-105 transition duration-500 group-hover:scale-[1.04] group-hover:brightness-[0.72]"
        />
      </div>

      <div className="p-6">
        <h3 className="text-base font-normal">
          {car.brand} <span className="text-[#888]">{car.model}</span>
        </h3>

        <div className="mt-3 flex gap-4.5 text-[9px] tracking-[0.08em] text-[#777]">
          <span>{car.year}</span>
          <span>{car.mileage}</span>
          <span>{car.engine}</span>
        </div>

        <div className="mt-6 flex flex-row items-center justify-between">
          <strong className="font-serif text-[21px] font-normal text-[#d2b878]">
            {car.price}
          </strong>
          <ButtonComponent
            href={`/cars/${car.slug}`}
            size="small"
            type="main"
            className="opacity-0 group-hover:opacity-100 transition-all duration-400"
          >
            SPRAWDŹ →
          </ButtonComponent>
        </div>
      </div>
    </article>
  );
};
