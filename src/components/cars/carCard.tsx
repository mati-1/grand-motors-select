import type { CarType } from "./cars";

export const CarCard = ({ car }: { car: CarType }) => {
  const statusLabel =
    car.status === "available"
      ? "● DOSTĘPNY"
      : car.status === "reservation"
        ? "● REZERWACJA"
        : "— SPRZEDANY";

  const statusClass =
    car.status === "available"
      ? "border-[#b99a5c]/40 bg-[#0a0a0a]/90 text-[#d2b878]"
      : car.status === "reservation"
        ? "border-[#b99a5c]/30 bg-[#0a0a0a]/90 text-[#aaa]"
        : "border-white/15 bg-[#080808]/90 text-[#666]";

  return (
    <a
      href={`/cars/${car.slug}`}
      className={car.status === "sold" ? "grayscale-100" : ""}
    >
      <article
        className="
          group
          overflow-hidden
          border
          border-[#b99a5c]/20
          bg-[#080808]
          transition
          duration-500
          hover:-translate-y-1.5
          hover:border-[#b99a5c]/40
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
              brightness-[0.62]
              contrast-105
              transition
              duration-700
              group-hover:scale-[1.04]
              group-hover:brightness-[0.72]
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

          {/* STATUS */}
          <div
            className="
              absolute
              -right-2
              top-4
              rotate-3
            "
          >
            <div
              className={`
                relative
                border
                px-4
                py-2
                shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                backdrop-blur-md
                transition-transform
                duration-500
                group-hover:-rotate-1
                ${statusClass}
              `}
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  tracking-[0.2em]
                  whitespace-nowrap
                "
              >
                {statusLabel}
              </span>

              {/* SMALL GOLD LINE */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-1/2
                  bg-[#b99a5c]/70
                "
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-base font-normal">
            {car.brand} <span className="text-[#888]">{car.model}</span>
          </h3>

          <div
            className="
              mt-3
              flex
              gap-4.5
              text-[9px]
              tracking-[0.08em]
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
                font-serif
                text-[21px]
                font-normal
                text-[#d2b878]
                ${car.status === "sold" ? "line-through" : ""}
              `}
            >
              {car.price}
            </strong>
          </div>
        </div>
      </article>
    </a>
  );
};
