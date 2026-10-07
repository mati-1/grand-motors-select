import { Link } from "react-router-dom";

import { useAdminCars } from "../../../../hooks/cars/useCars";
import type { ApiCar } from "../../../../api/cars";
import { mapApiCarToAdminCar } from "../../cars/mapApiCarToAdminCar";
import { colorByStatus } from "../../cars/components/AdminCarStatusType";

export const AdminRecentCars = () => {
  const carsQuery = useAdminCars();

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
        bg-[#4C9FE5]/2
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
            <Link
              to={`/admin/cars/${car.id}/edit`}
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
                hover:bg-[#4C9FE5]/2
                lg:flex-row
                lg:items-center
                ${index !== cars.length - 1 ? "border-b border-white/5" : ""}
              `}
            >
              <div className="flex min-w-0 items-center gap-3 lg:flex-1">
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md bg-[#E8E9E7]/5">
                  <img
                    src={primaryImage}
                    alt={`${car.brand} ${car.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-[#E8E9E7]">
                    {car.brand} {car.model}
                  </p>

                  <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
                    {car.body} · {car.year} · {car.mileage} · {car.country} ·{" "}
                    {car.engine} cm
                  </p>
                </div>
              </div>

              <div className="mt-3 flex max-sm:w-full max-sm:flex-col max-sm:items-end items-center gap-6 lg:mt-0">
                <div className="text-right">
                  <p className="text-[12px] text-[#E8E9E7]/25">Inwestycja</p>
                  <p className="mt-1 text-[13px] text-[#E8E9E7]">
                    {/* {car.investment > 0
                      ? `${car.investment.toLocaleString("pl-PL")} zł`
                      : "—"} */}
                    0 PLN
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[12px] text-[#E8E9E7]/25">
                    Cena w ogłoszeniu
                  </p>

                  <p className="mt-1 text-[13px] text-[#E8E9E7]">
                    {car.price} PLN
                  </p>
                </div>

                <div
                  className={`
                    ml-4
                    rounded-full
                    px-3
                    py-2
                    text-[11px]
                    text-white/80
                    bg-${colorByStatus(car.statusType)}
                  `}
                >
                  {car.statusType === "sale"
                    ? "W sprzedaży"
                    : car.statusType === "preparing"
                      ? "W przygotowaniu"
                      : "Sprzedany"}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
