import { AdminStatCard } from "./AdminStatCard";

const stats = [
  {
    label: "Kapitał firmy",
    value: "286 400 zł",
    description: "łączny kapitał",
    change: "+8,4%",
    positive: true,
    icon: "capital",
  },
  {
    label: "Zysk w tym miesiącu",
    value: "42 850 zł",
    description: "po kosztach samochodów",
    change: "+12,7%",
    positive: true,
    icon: "profit",
  },
  {
    label: "Samochody na stanie",
    value: "7",
    description: "aktualnie w firmie",
    change: "3 przygotowane",
    positive: true,
    icon: "cars",
  },
  {
    label: "Sprzedane w tym miesiącu",
    value: "4",
    description: "samochody",
    change: "średnia marża 15,2%",
    positive: true,
    icon: "sales",
  },
];

export const AdminBusinessOverview = () => {
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
