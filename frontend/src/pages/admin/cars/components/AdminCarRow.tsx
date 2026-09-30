import { Link } from "react-router-dom";
import type { CarType } from "../../../../components/cars/cars";

export type AdminCar = CarType & {
  purchasePrice: number;
  investment: number;
  profit: number;
  statusType: "sale" | "preparing" | "sold";
};

type AdminCarRowProps = {
  car: AdminCar;
};

export const AdminCarRow = ({ car }: AdminCarRowProps) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
        transition-all
        duration-300
        hover:border-white/13
      "
    >
      <div className="flex flex-col lg:flex-row">
        <img
          src={car.image}
          alt={car.brand}
          className="
              h-52.5
              lg:h-60
              object-cover
                          lg:w-65
            xl:w-72.5
            "
        />

        {/* CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex min-w-0 flex-1 flex-col p-5">
            {/* TOP */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="min-w-0">
                <h2
                  className="
                    block
                    truncate
                    text-[18px]
                    font-medium
                    text-white
                  "
                >
                  {car.brand} {car.model}
                </h2>

                <p className="mt-1.5 text-[12px] text-white/25">
                  {car.year} · {car.mileage}
                </p>
              </div>

              <div className="shrink-0 sm:text-right">
                <p className="text-[12px] text-white/25">Cena sprzedaży</p>

                <p className="mt-1 text-[16px] font-medium text-[#d2b878]">
                  {car.price}
                </p>
              </div>
            </div>

            {/* FINANCIAL DATA */}
            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-x-5
                gap-y-4
                border-t
                border-white/5
                pt-4
                sm:grid-cols-4
              "
            >
              <div>
                <p className="text-[12px] text-white/20">Cena zakupu</p>

                <p className="mt-1 text-[13px] text-white/60">
                  {car.purchasePrice}
                </p>
              </div>

              <div>
                <p className="text-[12px] text-white/20">Inwestycja</p>

                <p className="mt-1 text-[13px] text-white/60">
                  {car.investment}
                </p>
              </div>

              <div>
                <p className="text-[12px] text-white/20">Potencjalny zysk</p>

                <p className="mt-1 text-[13px] text-[#d2b878]">{car.profit}</p>
              </div>

              <div>
                <p className="text-[12px] text-white/20">Marża</p>

                <p className="mt-1 text-[13px] text-white/60">18,6%</p>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-white/5
              px-5
              py-3
            "
          >
            <span className="text-[10px] text-white/20">
              Ostatnia aktualizacja: dzisiaj
            </span>

            <div className="flex items-center gap-2">
              <Link
                to={`/admin/cars/${car.id}`}
                className="
                  flex
                  h-8
                  items-center
                  rounded-[10px]
                  border
                  border-white/8
                  px-3
                  text-[12px]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:text-white
                "
              >
                Szczegóły
              </Link>

              <Link
                to={`/admin/cars/${car.id}/edit`}
                className="
                  flex
                  h-8
                  items-center
                  rounded-[10px]
                  border
                  border-[#b99a5c]/20
                  bg-[#b99a5c]/5
                  px-3
                  text-[12px]
                  text-[#b99a5c]
                  transition-all
                  duration-300
                  hover:border-[#b99a5c]/35
                  hover:bg-[#b99a5c]/10
                  hover:text-[#d2b878]
                "
              >
                Edytuj
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
