const stats = [
  {
    label: "Wydatki w tym miesiącu",
    value: "24 850 zł",
    description: "wrzesień 2026",
    accent: true,
  },
  {
    label: "Koszty samochodów",
    value: "18 420 zł",
    description: "76% wszystkich wydatków",
  },
  {
    label: "Koszty firmy",
    value: "6 430 zł",
    description: "wydatki niezwiązane z autem",
  },
  {
    label: "Średni wydatek",
    value: "1 242 zł",
    description: "na zarejestrowaną operację",
  },
];

export const AdminExpensesStats = () => {
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
