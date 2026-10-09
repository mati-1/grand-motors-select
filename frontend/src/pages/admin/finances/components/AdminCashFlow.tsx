import { useFinance } from "../../../../hooks/finance/useFinance";

export const AdminCashFlow = ({ period }: { period: string }) => {
  const { data, isLoading, isError } = useFinance(period);

  if (isLoading) {
    return (
      <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <div className="animate-pulse">
          <div className="h-4 w-32 rounded bg-white/5" />
          <div className="mt-2 h-3 w-48 rounded bg-white/5" />
          <div className="mt-8 h-8 w-40 rounded bg-white/5" />
          <div className="mt-8 space-y-5">
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 rounded bg-white/5" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <p className="text-[11px] text-[#E8E9E7]/40">
          Nie udało się pobrać przepływu środków.
        </p>
      </section>
    );
  }

  const cashFlow = [
    {
      label: "Przychody ze sprzedaży",
      value: data.cashFlow.salesRevenue,
      formatted: data.cashFlow.salesRevenueFormatted,
    },
    {
      label: "Zakup samochodów",
      value: -data.cashFlow.carPurchases,
      formatted: data.cashFlow.carPurchasesFormatted,
    },
    {
      label: "Koszty samochodów",
      value: -data.cashFlow.carCosts,
      formatted: data.cashFlow.carCostsFormatted,
    },
    {
      label: "Koszty firmy",
      value: -data.cashFlow.companyCosts,
      formatted: data.cashFlow.companyCostsFormatted,
    },
  ];

  const result = data.cashFlow.result;

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
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Przepływ środków
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Wybrany okres rozliczeniowy
        </p>
      </div>

      <div className="p-5">
        <div className="mb-6">
          <p className="text-[9px] text-[#E8E9E7]/20">Wynik przepływu</p>

          <p
            className={`
              mt-1
              text-[22px]
              font-medium
              ${result >= 0 ? "text-[#4C9FE5]" : "text-[#E8E9E7]"}
            `}
          >
            {result >= 0 ? "+" : "-"}
            {new Intl.NumberFormat("pl-PL").format(Math.abs(result))} zł
          </p>
        </div>

        <div className="space-y-4">
          {cashFlow.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    ${item.value >= 0 ? "bg-[#4C9FE5]" : "bg-[#E8E9E7]/15"}
                  `}
                />

                <span className="truncate text-[11px] text-[#E8E9E7]/45">
                  {item.label}
                </span>
              </div>

              <span
                className={`
                  shrink-0
                  text-[11px]
                  ${item.value >= 0 ? "text-[#4C9FE5]" : "text-[#E8E9E7]/45"}
                `}
              >
                {item.value >= 0 ? "+" : "-"}
                {item.formatted}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
