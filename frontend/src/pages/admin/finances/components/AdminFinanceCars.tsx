import { useState } from "react";

import {
  useDeleteFinanceTransaction,
  useFinanceCars,
} from "../../../../hooks/finance/useFinance";

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const getValue = (type: string, amount: number) => {
  if (type === "expense" || type === "capital_out") {
    return -Math.abs(amount);
  }

  return Math.abs(amount);
};

export const AdminFinanceCars = ({ period }: { period: string }) => {
  const { data, isLoading, isError } = useFinanceCars(period);

  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  const deleteMutation = useDeleteFinanceTransaction();

  if (isLoading) {
    return (
      <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-40 rounded bg-white/5" />
          <div className="h-20 rounded bg-white/5" />
          <div className="h-20 rounded bg-white/5" />
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <p className="text-[11px] text-red-300/60">
          Nie udało się pobrać finansów samochodów.
        </p>
      </section>
    );
  }

  const selectedCar =
    data.cars.find((item) => item.car.id === selectedCarId) ?? null;

  const handleDelete = async (transactionId: string) => {
    const confirmed = window.confirm("Czy na pewno chcesz usunąć tę operację?");

    if (!confirmed) {
      return;
    }

    await deleteMutation.mutateAsync(transactionId);
  };

  return (
    <section className="space-y-4">
      {data.cars.length === 0 ? (
        <div className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 px-5 py-12 text-center">
          <p className="text-[11px] text-[#E8E9E7]/30">
            Brak samochodów z operacjami finansowymi w wybranym okresie.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {data.cars.map((item) => {
              const selected = item.car.id === selectedCarId;

              return (
                <button
                  key={item.car.id}
                  type="button"
                  onClick={() => setSelectedCarId(item.car.id)}
                  className={`
                    cursor-pointer
                    rounded-[10px]
                    border
                    p-5
                    text-left
                    transition
                    ${
                      selected
                        ? "border-[#4C9FE5]/30 bg-[#4C9FE5]/5"
                        : "border-white/8 bg-[#4C9FE5]/2 hover:border-white/12 hover:bg-white/2.5"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-[#E8E9E7]/75">
                        {item.car.brand} {item.car.model}
                      </p>

                      <p className="mt-1 text-[10px] text-[#E8E9E7]/20">
                        {item.car.year} · {item.car.vin}
                      </p>
                    </div>

                    <span className="shrink-0 text-[9px] text-[#E8E9E7]/20">
                      {item.transactions.length} operacji
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] text-[#E8E9E7]/20">Przychód</p>

                      <p className="mt-1 text-[13px] text-[#4C9FE5]">
                        {item.summary.revenueFormatted}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-[#E8E9E7]/20">
                        Zysk brutto
                      </p>

                      <p
                        className={`
                          mt-1
                          text-[13px]
                          ${
                            item.summary.grossProfit >= 0
                              ? "text-[#E8E9E7]/70"
                              : "text-red-300/60"
                          }
                        `}
                      >
                        {item.summary.grossProfitFormatted}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-[#E8E9E7]/20">
                        Zysk netto
                      </span>

                      <span
                        className={`
                          text-[12px]
                          font-medium
                          ${
                            item.summary.netProfit >= 0
                              ? "text-[#4C9FE5]"
                              : "text-red-300/60"
                          }
                        `}
                      >
                        {item.summary.netProfitFormatted}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedCar && (
            <div className="overflow-hidden rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
              <div className="border-b border-white/7 px-5 py-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <p className="text-[15px] font-medium text-[#E8E9E7]/75">
                      {selectedCar.car.brand} {selectedCar.car.model}
                    </p>

                    <p className="mt-1 text-[10px] text-[#E8E9E7]/20">
                      {selectedCar.car.year} · {selectedCar.car.vin}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-[9px] text-[#E8E9E7]/20">Brutto</p>

                      <p className="mt-1 text-[12px] text-[#E8E9E7]/65">
                        {selectedCar.summary.grossProfitFormatted}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-[#E8E9E7]/20">Podatki</p>

                      <p className="mt-1 text-[12px] text-[#E8E9E7]/45">
                        {selectedCar.summary.taxesFormatted}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-[#E8E9E7]/20">Netto</p>

                      <p
                        className={`
                          mt-1
                          text-[12px]
                          font-medium
                          ${
                            selectedCar.summary.netProfit >= 0
                              ? "text-[#4C9FE5]"
                              : "text-red-300/60"
                          }
                        `}
                      >
                        {selectedCar.summary.netProfitFormatted}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {selectedCar.transactions.map((transaction) => {
                  const value = getValue(transaction.type, transaction.amount);

                  const positive = value >= 0;

                  return (
                    <div
                      key={transaction.id}
                      className="group flex items-center gap-4 border-b border-white/5 px-5 py-4 last:border-b-0"
                    >
                      <div
                        className={`
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${
                              positive
                                ? "border-[#4C9FE5]/20 text-[#4C9FE5]"
                                : "border-white/8 text-[#E8E9E7]/30"
                            }
                          `}
                      >
                        <span className="text-[11px]">
                          {positive ? "+" : "−"}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] text-[#E8E9E7]/70">
                          {transaction.title}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-[#E8E9E7]/20">
                          {transaction.categoryLabel}
                          {" · "}
                          {formatDate(transaction.date)}
                        </p>
                      </div>

                      <span
                        className={`
                            shrink-0
                            text-[12px]
                            font-medium
                            ${positive ? "text-[#4C9FE5]" : "text-[#E8E9E7]/45"}
                          `}
                      >
                        {positive ? "+" : "-"}
                        {new Intl.NumberFormat("pl-PL").format(
                          Math.abs(value),
                        )}{" "}
                        zł
                      </span>

                      <button
                        type="button"
                        onClick={() => handleDelete(transaction.id)}
                        disabled={deleteMutation.isPending}
                        className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#E8E9E7]/15 opacity-0 transition group-hover:opacity-100 hover:bg-red-400/5 hover:text-red-300/60"
                        title="Usuń operację"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};
