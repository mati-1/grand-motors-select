const stats = [
  {
    label: "Wszyscy klienci",
    value: "48",
    description: "zapisanych w bazie",
    accent: true,
  },
  {
    label: "Nowi klienci",
    value: "7",
    description: "w tym miesiącu",
  },
  {
    label: "Powracający klienci",
    value: "9",
    description: "więcej niż jeden zakup",
  },
  {
    label: "Wartość sprzedaży",
    value: "1 284 500 zł",
    description: "łączna wartość transakcji",
  },
];

export const AdminCustomersStats = () => {
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
