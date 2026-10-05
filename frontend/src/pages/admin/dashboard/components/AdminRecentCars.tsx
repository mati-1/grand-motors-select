import { Link } from "react-router-dom";

import { useCars } from "../../../../hooks/cars/useCars";
import type { ApiCar } from "../../../../api/cars";
import { mapApiCarToAdminCar } from "../../cars/mapApiCarToAdminCar";

export const AdminRecentCars = () => {
  const carsQuery = useCars();

  const cars: ApiCar[] = (carsQuery.data?.cars ?? [])
    .slice(0, 3)
    .map(mapApiCarToAdminCar);

  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/5
      "
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">Samochody</h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Ostatnio dodane samochody.
          </p>
        </div>

        <Link
          to="/admin/cars"
          className="
            text-[12px]
            text-[#E8E9E7]/30
            transition-colors
            duration-300
            hover:text-[#4C9FE5]
          "
        >
          Zobacz wszystkie
        </Link>
      </div>

      <div>
        {cars.map((car, index) => {
          const primaryImage =
            car.images.find((image) => image.isPrimary)?.url ??
            car.images[0]?.url ??
            "/logohd emblem.png";

          return (
            <div
              key={car.id}
              className={`
                group
                flex
                flex-col
                items-start
                gap-3
                px-5
                py-4
                transition-colors
                duration-300
                hover:bg-[ext-[#E8E9E7]/2
                lg:flex-row
                lg:items-center
                ${index !== cars.length - 1 ? "border-b border-white/5" : ""}
              `}
            >
              <div className="flex min-w-0 items-center gap-3 lg:flex-1">
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md bg-[ext-[#E8E9E7]/5">
                  <img
                    src={primaryImage}
                    alt={`${car.brand} ${car.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium text-[#E8E9E7]">
                    {car.brand} {car.model}
                  </p>

                  <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
                    {car.body}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-6 lg:mt-0">
                <div className="text-right">
                  <p className="text-[12px] text-[#E8E9E7]/25">Inwestycja</p>

                  {/* <p className="mt-1 text-[13px] text-[#E8E9E7]">
                    {car.investment > 0
                      ? `${car.investment.toLocaleString("pl-PL")} zł`
                      : "—"}
                  </p> */}
                </div>

                <div className="text-right">
                  <p className="text-[12px] text-[#E8E9E7]/25">
                    Cena w ogłoszeniu
                  </p>

                  <p className="mt-1 text-[13px] text-[#E8E9E7]">{car.price}</p>
                </div>

                <div
                  className={`
                    ml-4
                    rounded-full
                    px-2
                    py-1
                    text-[10px]
                    ${
                      car.statusType === "sale"
                        ? "bg-[#4C9FE5]/[0.07] text-[#4C9FE5]"
                        : "bg-[ext-[#E8E9E7]/5 text-[#E8E9E7]/35"
                    }
                  `}
                >
                  {car.statusType === "sale"
                    ? "W sprzedaży"
                    : car.statusType === "preparing"
                      ? "W oczekiwaniu"
                      : "Sprzedany"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
