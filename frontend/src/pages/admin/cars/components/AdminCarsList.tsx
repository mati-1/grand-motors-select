import { carsList } from "../../../../components/cars/cars";
import { AdminCarRow, type AdminCar } from "./AdminCarRow";

const adminCars: AdminCar[] = carsList
  .filter((car) => car.status !== "sold")
  .map((car) => ({
    ...car,

    purchasePrice: 0,
    investment: 0,
    profit: 0,
    statusType: "sale",
  }));

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminCarsList = () => {
  const totalInvestment = adminCars.reduce(
    (total, car) => total + (car.investment ?? 0),
    0,
  );

  return (
    <section>
      {/* HEADER */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-[14px] font-medium text-white">Samochody</h3>

          <p className="mt-1 text-[11px] text-white/25">
            {adminCars.length}{" "}
            {adminCars.length === 1
              ? "samochód"
              : adminCars.length >= 2 && adminCars.length <= 4
                ? "samochody"
                : "samochodów"}{" "}
            w bazie
          </p>
        </div>

        <span className="hidden text-right text-[11px] text-white/25 sm:block">
          Łączna inwestycja:{" "}
          <span className="text-white/50">
            {totalInvestment > 0 ? formatPrice(totalInvestment) : "—"}
          </span>
        </span>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {adminCars.map((car) => (
          <AdminCarRow key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};
