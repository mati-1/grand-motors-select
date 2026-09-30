type FinanceStat = {
  label: string;
  value: string;
  description: string;
  positive?: boolean;
  accent?: boolean;
};

const stats: FinanceStat[] = [
  {
    label: "Saldo firmy",
    value: "184 250 zł",
    description: "środki dostępne",
    accent: true,
  },
  {
    label: "Kapitał w samochodach",
    value: "286 500 zł",
    description: "aktywnie zainwestowane",
  },
  {
    label: "Przychód",
    value: "420 000 zł",
    description: "od początku roku",
  },
  {
    label: "Zysk netto",
    value: "64 800 zł",
    description: "od początku roku",
    positive: true,
  },
];

export const AdminFinanceStats = () => {
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
                  ${
                    stat.accent || stat.positive
                      ? "bg-[#b99a5c]"
                      : "bg-white/15"
                  }
                `}
              />
            </div>

            <p
              className={`
                mt-5
                text-[21px]
                font-medium
                tracking-tight
                ${
                  stat.accent || stat.positive ? "text-[#d2b878]" : "text-white"
                }
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
