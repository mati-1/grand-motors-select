import { useFinance } from "../../../../hooks/finance/useFinance";

const LoadingCard = () => {
  return (
    <div
      className="
        animate-pulse
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/2
        p-5
      "
    >
      <div className="h-3 w-20 rounded bg-white/5" />
      <div className="mt-6 h-6 w-32 rounded bg-white/5" />
      <div className="mt-2 h-2 w-24 rounded bg-white/5" />
    </div>
  );
};

export const AdminFinanceStats = ({ period }: { period: string }) => {
  const { data, isLoading, isError } = useFinance(period);

  if (isLoading) {
    return (
      <section>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section>
        <div className="rounded-[10px] border border-red-400/10 bg-red-400/5 p-5">
          <p className="text-[11px] text-red-300/70">
            Nie udało się pobrać danych finansowych.
          </p>
        </div>
      </section>
    );
  }

  const stats = [
    {
      label: "Saldo firmy",
      value: data.summary.companyBalanceFormatted,
      description: "środki dostępne w okresie",
      accent: true,
    },
    {
      label: "Kapitał w samochodach",
      value: data.summary.carsCapitalFormatted,
      description: "aktywnie zainwestowane",
      accent: false,
    },
    {
      label: "Przychód",
      value: data.summary.revenueFormatted,
      description: "w wybranym okresie",
      accent: false,
    },
    {
      label: "Zysk brutto",
      value: data.summary.grossProfitFormatted,
      description: "przed podatkiem",
      accent: data.summary.grossProfit >= 0,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-[10px]
              border
              border-white/8
              bg-[#4C9FE5]/2
              p-5
            "
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] text-[#E8E9E7]/30">{stat.label}</p>

              <span
                className={`
                  mt-1
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  ${stat.accent ? "bg-[#4C9FE5]" : "bg-[#E8E9E7]/15"}
                `}
              />
            </div>

            <p
              className={`
                mt-5
                text-[21px]
                font-medium
                tracking-tight
                ${stat.accent ? "text-[#4C9FE5]" : "text-[#E8E9E7]"}
              `}
            >
              {stat.value}
            </p>

            <p className="mt-1.5 text-[9px] text-[#E8E9E7]/20">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
