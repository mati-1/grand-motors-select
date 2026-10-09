import { useState } from "react";
import { Link } from "react-router-dom";

import type { ApiCar } from "../../../../api/cars";
import { colorByStatus } from "../../helpers/colorByStatus";
import {
  StatusDot,
  statusLabel,
} from "../../dashboard/components/AdminRecentCars";
import { AdminCarStatusType } from "./AdminCarStatusType";

export type AdminCar = ApiCar;

type AdminCarRowProps = {
  car: AdminCar;
};

const formatMoney = (value: number) =>
  value.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  });

const parsePrice = (price: string | number) => {
  if (typeof price === "number") return price;

  const normalized = price.replace(/\s/g, "").replace(/[^\d,.-]/g, "");

  if (normalized.includes(",")) {
    return Number(normalized.replace(/\./g, "").replace(",", ".")) || 0;
  }

  return Number(normalized) || 0;
};

export const AdminCarRow = ({ car }: AdminCarRowProps) => {
  const [openedStatusForm, setOpenedStatusForm] = useState(false);

  const primaryImage =
    car.images.find((image) => image.isPrimary)?.url ??
    car.images[0]?.url ??
    "/logohd emblem.png";

  const salePrice = parsePrice(car.price);
  const purchasePrice = (car.finance?.purchasePrice ?? 0) / 100;
  const expenses = (car.finance?.expenses ?? 0) / 100;
  const totalCost = (car.finance?.totalCost ?? 0) / 100;
  const profit = salePrice - totalCost;
  const margin = salePrice > 0 ? (profit / salePrice) * 100 : 0;

  const createdDate = new Date(car.createdAt).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <article className="grid grid-cols-1 items-start gap-3 border-b border-white/8 pb-5 md:grid-cols-4">
      <div
        className={`min-w-0 self-start overflow-hidden rounded-2xl border border-white/8 bg-[#4C9FE5]/2 transition-colors duration-200 hover:border-[#4C9FE5]/25 ${
          openedStatusForm ? "md:col-span-3" : "md:col-span-4"
        }`}
      >
        <div className="flex min-w-0 flex-col sm:flex-row">
          <div className="relative shrink-0 overflow-hidden bg-white/5 sm:w-52 lg:w-64">
            <img
              src={primaryImage}
              alt={`${car.brand} ${car.model}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/logohd emblem.png";
              }}
              className="h-52 w-full object-cover transition-transform duration-300 sm:h-full sm:min-h-56 sm:group-hover:scale-105"
            />

            <span className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/65 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur">
              {car.year}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1 p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold tracking-tight text-[#E8E9E7] sm:text-xl">
                      {car.brand} {car.model}
                    </h2>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${colorByStatus({ status: car.statusType })}`}
                    >
                      <StatusDot status={car.statusType} />
                      {statusLabel(car.statusType)}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-[#E8E9E7]/40">
                    {car.mileage} km
                    <span className="mx-1.5 text-white/15">·</span>
                    {car.country}
                    <span className="mx-1.5 text-white/15">·</span>
                    {car.engine} cm³
                    <span className="mx-1.5 text-white/15">·</span>
                    {car.power} KM
                  </p>

                  <p className="mt-1 text-xs text-[#E8E9E7]/30">
                    {car.fuel}
                    <span className="mx-1.5 text-white/15">·</span>
                    {car.transmission}
                  </p>
                </div>

                <div className="shrink-0 rounded-xl border border-[#4C9FE5]/15 bg-[#4C9FE5]/5 px-4 py-3 sm:text-right">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#E8E9E7]/40">
                    Cena sprzedaży
                  </p>
                  <p className="mt-1 text-xl font-semibold  text-[#4C9FE5]">
                    {formatMoney(salePrice)}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/8 pt-4 xl:grid-cols-4">
                <div className="rounded-xl bg-white/2.5 p-3">
                  <p className="text-[10px] leading-4 text-[#E8E9E7]/40">
                    Cena zakupu
                  </p>
                  <p className="mt-1.5 text-sm font-medium  text-[#E8E9E7]/80">
                    {formatMoney(purchasePrice)}
                  </p>
                </div>

                <div className="rounded-xl bg-white/2.5 p-3">
                  <p className="text-[10px] leading-4 text-[#E8E9E7]/40">
                    Dodatkowe wydatki
                  </p>
                  <p className="mt-1.5 text-sm font-medium  text-[#E8E9E7]/80">
                    {formatMoney(expenses)}
                  </p>
                </div>

                <div className="rounded-xl bg-white/2.5 p-3">
                  <p className="text-[10px] leading-4 text-[#E8E9E7]/40">
                    Potencjalny zysk
                  </p>
                  <p
                    className={`mt-1.5 text-sm font-semibold  ${
                      profit >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {formatMoney(profit)}
                  </p>
                </div>

                <div className="rounded-xl bg-white/2.5 p-3">
                  <p className="text-[10px] leading-4 text-[#E8E9E7]/40">
                    Marża
                  </p>
                  <p
                    className={`mt-1.5 text-sm font-semibold  ${
                      margin >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {salePrice > 0 ? `${margin.toFixed(1)}%` : "—"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-[10px] leading-4 text-[#E8E9E7]/30">
                Dodano: {createdDate}
                <span className="mx-1.5 text-white/15">·</span>
                VIN: {car.vin}
              </p>

              <div className="flex items-center gap-2">
                <Link
                  to={`/admin/cars/${car.id}/edit`}
                  className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-medium text-[#E8E9E7]/70 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-[#E8E9E7] sm:flex-none"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="m11.5 4.5 4 4M3.5 16.5l3.7-.8L16.1 6.8a1.4 1.4 0 0 0-2-2L5.2 13.7l-1.7 2.8Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Edytuj auto
                </Link>
                <button
                  onClick={() => setOpenedStatusForm((value) => !value)}
                  className="inline-flex cursor-pointer h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-medium text-[#E8E9E7]/70 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-[#E8E9E7] sm:flex-none"
                >
                  {openedStatusForm ? "Zamknij status" : "Zmień status"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openedStatusForm && (
        <div className="min-w-0 self-start md:col-span-1">
          <AdminCarStatusType key={car.id} car={car} />
        </div>
      )}
    </article>
  );
};
