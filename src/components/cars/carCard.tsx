import type { CarType } from "./cars";

export const CarCard = ({ car }: { car: CarType }) => {
  return (
    <a
      href={`/cars/${car.slug}`}
      className={car.status === "sold" ? "grayscale-100" : ""}
    >
      <article
        className="
          group
          rounded-[10px]
          overflow-hidden
          border
          border-[#b99a5c]/20
          bg-[#080808]
          transition
          duration-500
          hover:border-[#b99a5c]/30
        "
      >
        {/* IMAGE */}
        <div className="relative h-65 overflow-hidden border-b border-white/10">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="
              h-full
              w-full
              object-cover
              will-change-transform
              transition
              duration-700
              group-hover:brightness-[1.10]
            "
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-t
              from-black/50
              via-transparent
              to-black/10
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-base font-normal">
            {car.brand} {car.model}
          </h3>

          <div
            className="
              mt-3
              flex
              gap-4.5
              text-[11px]
              text-[#777]
            "
          >
            <span>{car.year}</span>
            <span>{car.mileage}</span>
            <span>{car.engine}</span>
            <span>{car.fuel}</span>
          </div>

          <div className="mt-5">
            <strong
              className={`
                text-[21px]
                font-normal
                text-white
                ${car.status === "sold" ? "line-through" : ""}
              `}
            >
              {car.price.replace(" PLN", "")}
              <span className="text-[14px] font-normal  text-[#bbb]"> PLN</span>
            </strong>
          </div>
        </div>
      </article>
    </a>
  );
};
