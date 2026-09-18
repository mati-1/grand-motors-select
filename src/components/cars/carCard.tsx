import type { CarType } from "./cars";

export const CarCard = ({ car }: { car: CarType }) => {
  return (
    <a
      href={`/cars/${car.slug}`}
      className={car.status === "sold" ? "grayscale-100" : ""}
    >
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
            <span>{car.fuel}</span>
          </div>
          <div className="mt-5">
            <strong
              className={`font-serif text-[21px] font-normal text-[#d2b878] ${car.status === "available" ? "" : "line-through"}`}
            >
              {car.price}
            </strong>
          </div>
        </div>
        {car.status === "available" ? (
          <div className="p-2 flex items-center justify-center border-[#b99a5c]/40 bg-[#b99a5c]/20 tracking-[0.15em]">
            <h3 className="text-[9px]">● DOSTĘPNY</h3>
          </div>
        ) : (
          <div className="p-2 flex items-center justify-center border-[#b99a5c]/40 bg-[#b99a5c]/20 tracking-[0.15em]">
            <h3 className="text-[9px]">— SPRZEDANY</h3>
          </div>
        )}
      </article>
    </a>
  );
};
