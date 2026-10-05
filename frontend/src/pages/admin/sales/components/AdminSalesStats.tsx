type SalesStat = {
  label: string;
  value: string;
  description: string;
  accent?: boolean;
};

const stats: SalesStat[] = [
  {
    label: "Sprzedane samochody",
    value: "12",
    description: "od początku roku",
  },
  {
    label: "Przychód ze sprzedaży",
    value: "1 284 500 zł",
    description: "od początku roku",
    accent: true,
  },
  {
    label: "Zysk ze sprzedaży",
    value: "186 400 zł",
    description: "po wszystkich kosztach",
    accent: true,
  },
  {
    label: "Średnia marża",
    value: "14,5%",
    description: "na sprzedanym samochodzie",
  },
];

export const AdminSalesStats = () => {
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
              bg-[#4C9FE5]/5
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
                  ${stat.accent ? "bg-[#4C9FE5]" : "bg-[ext-[#E8E9E7]/15"}
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
