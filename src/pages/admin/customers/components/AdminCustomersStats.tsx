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
              bg-[#090909]
              p-5
            "
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] text-white/30">{stat.label}</p>

              <span
                className={`
                  mt-1
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  ${stat.accent ? "bg-[#b99a5c]" : "bg-white/15"}
                `}
              />
            </div>

            <p
              className={`
                mt-5
                text-[21px]
                font-medium
                tracking-tight
                ${stat.accent ? "text-[#d2b878]" : "text-white"}
              `}
            >
              {stat.value}
            </p>

            <p className="mt-1.5 text-[9px] text-white/20">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
