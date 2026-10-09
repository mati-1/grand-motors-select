import { useAdminCars } from "../../../../hooks/cars/useCars";

import { AdminCarRow, type AdminCar } from "./AdminCarRow";

export const AdminCarsList = () => {
  const carsQuery = useAdminCars();

  if (carsQuery.isPending) {
    return (
      <section>
        <div className="mb-4">
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">Samochody</h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Pobieranie samochodów...
          </p>
        </div>
      </section>
    );
  }

  if (carsQuery.isError) {
    return (
      <section>
        <div className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
          <p className="text-[11px] text-red-300">
            Nie udało się pobrać samochodów.
          </p>
        </div>
      </section>
    );
  }

  const adminCars: AdminCar[] = carsQuery.data.cars.map((car: AdminCar) => ({
    ...car,
  }));

  const totalInvestment = adminCars.reduce(
    (total, car) => total + (car.finance?.totalCost ?? 0),
    0,
  );

  return (
    <section>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">Samochody</h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            {adminCars.length}{" "}
            {adminCars.length === 1
              ? "samochód"
              : adminCars.length >= 2 && adminCars.length <= 4
                ? "samochody"
                : "samochodów"}{" "}
            w bazie
          </p>
        </div>

        <span className="hidden text-right text-[11px] text-[#E8E9E7]/25 sm:block">
          Łączna inwestycja:{" "}
          <span className="text-[#E8E9E7]/50">
            {totalInvestment > 0
              ? (totalInvestment / 100).toLocaleString("pl-PL", {
                  style: "currency",
                  currency: "PLN",
                })
              : "—"}
          </span>
        </span>
      </div>

      <div className="space-y-3">
        {adminCars.map((car) => (
          <AdminCarRow key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};
