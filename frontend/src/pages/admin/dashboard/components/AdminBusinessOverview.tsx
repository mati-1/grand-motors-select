import { useAdminDashboard } from "../../../../hooks/dashboard/useAdminDashboard";
import { AdminStatCard } from "./AdminStatCard";

export const AdminBusinessOverview = () => {
  const { data, isLoading, isError } = useAdminDashboard();

  if (isLoading) {
    return (
      <section>
        <p className="text-[11px] text-white/50">Ładowanie danych firmy...</p>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section>
        <div className="rounded-[10px] border border-red-400/10 bg-red-400/5 p-5">
          <p className="text-[11px] text-red-300/70">
            Nie udało się pobrać danych dashboardu.
          </p>
        </div>
      </section>
    );
  }

  const stats = [
    {
      label: "Kapitał firmy",
      value: data.finance.companyBalanceFormatted,
      description: "łączny bilans operacji",
      change: "stan na dziś",
      positive: data.finance.companyBalance >= 0,
      icon: "capital",
    },
    {
      label: "Zysk brutto w tym miesiącu",
      value: data.finance.grossProfitThisMonthFormatted,
      description: "przed podatkami",
      change: "bieżący miesiąc",
      positive: true,
      icon: "profit",
    },
    {
      label: "Samochody na stanie",
      value: String(data.cars.inStock),
      description: "aktualnie w firmie",
      change: `${data.cars.preparing} w przygotowaniu`,
      positive: true,
      icon: "cars",
    },
    {
      label: "Sprzedane w tym miesiącu",
      value: String(data.cars.soldThisMonth),
      description: "samochody",
      change: `średnia marża ${data.cars.averageMarginThisMonth}%`,
      positive: true,
      icon: "sales",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <AdminStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            description={stat.description}
            change={stat.change}
            positive={stat.positive}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
};
