import { Link } from "react-router-dom";

import { useAdminCars } from "../../../../hooks/cars/useCars";
import type { ApiCar } from "../../../../api/cars";
import { mapApiCarToAdminCar } from "../../cars/mapApiCarToAdminCar";
import { colorByStatus } from "../../helpers/colorByStatus";

const formatPrice = (price: string | number) => {
  const value =
    typeof price === "number"
      ? price
      : Number(price.replace(/[^\d,.-]/g, "").replace(",", "."));

  if (!Number.isFinite(value)) return `${price} PLN`;

  return `${new Intl.NumberFormat("pl-PL", {
    maximumFractionDigits: 0,
  }).format(value)} zł`;
};

export const statusLabel = (status: string) => {
  if (status === "sale") return "W sprzedaży";
  if (status === "preparing") return "W przygotowaniu";
  if (status === "sold") return "Sprzedany";
  return status;
};

export const StatusDot = ({ status }: { status: string }) => (
  <span
    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
      status === "sale"
        ? "bg-emerald-400"
        : status === "preparing"
          ? "bg-amber-400"
          : "bg-slate-400"
    }`}
  />
);

export const AdminRecentCars = () => {
  const carsQuery = useAdminCars();

  const cars: ApiCar[] = (carsQuery.data?.cars ?? [])
    .slice(0, 3)
    .map(mapApiCarToAdminCar);

  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-[#4C9FE5]/2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col gap-3 border-b border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-[#E8E9E7]">
            Ostatnio dodane auta
          </h3>

          <p className="mt-2 text-[11px] leading-relaxed text-[#E8E9E7]/40">
            Aktualny przegląd samochodów
          </p>
        </div>

        <Link
          to="/admin/cars"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/8 px-3 py-2 text-[11px] text-[#E8E9E7]/60 transition hover:border-[#4C9FE5]/30 hover:bg-[#4C9FE5]/6 hover:text-[#7FC4F7]"
        >
          Wszystkie auta
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              d="M5 12H19M13 6L19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {carsQuery.isLoading ? (
        <div className="divide-y divide-white/5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex animate-pulse gap-3 p-4 sm:gap-4 sm:p-5"
            >
              <div className="h-20 w-28 shrink-0 rounded-xl bg-white/5 sm:h-24 sm:w-36" />
              <div className="min-w-0 flex-1 space-y-3 py-1">
                <div className="h-3 w-2/5 rounded bg-white/6" />
                <div className="h-3 w-3/5 rounded bg-white/4" />
                <div className="h-3 w-1/3 rounded bg-white/4" />
              </div>
            </div>
          ))}
        </div>
      ) : carsQuery.isError ? (
        <div className="px-5 py-10 text-center">
          <p className="text-xs text-red-300/70">
            Nie udało się pobrać samochodów.
          </p>
          <button
            type="button"
            onClick={() => void carsQuery.refetch()}
            className="mt-3 text-xs text-[#7FC4F7] transition hover:text-white"
          >
            Spróbuj ponownie
          </button>
        </div>
      ) : cars.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/2 text-[#E8E9E7]/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M3 13L5 7.5A2 2 0 0 1 6.9 6H17.1A2 2 0 0 1 19 7.5L21 13V19H3V13Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M3 13H21M7 16H7.01M17 16H17.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-4 text-sm text-[#E8E9E7]/70">
            Brak dodanych samochodów
          </p>
          <p className="mt-1 text-xs text-[#E8E9E7]/30">
            Dodane auta pojawią się tutaj.
          </p>
          <Link
            to="/admin/cars"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#4C9FE5]/20 bg-[#4C9FE5]/6 px-4 py-2.5 text-xs text-[#7FC4F7] transition hover:bg-[#4C9FE5]/12"
          >
            Przejdź do samochodów
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-white/6">
          {cars.map((car) => {
            const primaryImage =
              car.images.find((image) => image.isPrimary)?.url ??
              car.images[0]?.url ??
              "/logohd emblem.png";

            return (
              <Link
                to={`/admin/cars/${car.id}/edit`}
                key={car.id}
                className="group relative flex min-w-0 flex-col gap-3 p-4 transition-colors duration-200 hover:bg-[#4C9FE5]/[0.035] sm:flex-row sm:items-center sm:gap-4 sm:p-5"
              >
                <div className="flex min-w-0 items-start gap-3 sm:contents">
                  <div className="relative h-22 w-31 shrink-0 overflow-hidden rounded-xl border border-white/8 bg-[#0B1015] sm:h-24 sm:w-36">
                    <img
                      src={primaryImage}
                      alt={`${car.brand} ${car.model}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.src = "/logohd emblem.png";
                      }}
                    />
                    <span className="absolute bottom-1.5 left-1.5 rounded-md border border-white/10 bg-black/65 px-1.5 py-1 text-[9px] text-white/80 backdrop-blur-sm">
                      {car.year}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 sm:self-center">
                    <div className="flex min-w-0 flex-col items-start gap-2">
                      <h4 className="truncate text-[13px] font-semibold text-[#E8E9E7] transition-colors group-hover:text-white sm:text-sm">
                        {car.brand} {car.model}
                      </h4>

                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[9px] ${colorByStatus({ status: car.statusType })}`}
                      >
                        <StatusDot status={car.statusType} />
                        {statusLabel(car.statusType)}
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] leading-relaxed text-[#E8E9E7]/40 sm:text-[11px]">
                      {car.vin} <span className="text-white/15">·</span>{" "}
                      {car.mileage} km
                    </p>
                  </div>
                </div>

                <div className="flex min-w-0 items-center justify-between gap-4 border-t border-white/6 pt-3 sm:ml-auto sm:w-auto sm:shrink-0 sm:justify-end sm:gap-6 sm:border-0 sm:pt-0">
                  <div className="min-w-0 sm:text-right">
                    <p className="text-[10px] text-[#E8E9E7]/35">
                      Cena w ogłoszeniu
                    </p>
                    <p className="mt-1 truncate text-sm font-semibold tracking-tight text-[#E8E9E7] sm:text-[15px]">
                      {formatPrice(car.price)}
                    </p>
                  </div>

                  <div className="hidden min-w-0 sm:block sm:text-right">
                    <p className="text-[10px] text-[#E8E9E7]/35">Inwestycja</p>
                    <p className="mt-1 text-[12px] font-medium text-[#E8E9E7]/70">
                      {car.finance?.totalCost
                        ? formatPrice(car.finance.totalCost / 100)
                        : "—"}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] text-[#E8E9E7]/30 transition group-hover:border-[#4C9FE5]/30 group-hover:bg-[#4C9FE5]/8 group-hover:text-[#7FC4F7]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12H19M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
