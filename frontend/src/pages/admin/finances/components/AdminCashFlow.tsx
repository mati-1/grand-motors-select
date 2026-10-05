const cashFlow = [
  {
    label: "Przychody ze sprzedaży",
    value: 186500,
  },
  {
    label: "Zakup samochodów",
    value: -112000,
  },
  {
    label: "Koszty samochodów",
    value: -18400,
  },
  {
    label: "Koszty firmy",
    value: -6200,
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(Math.abs(value)) + " zł";
};

export const AdminCashFlow = () => {
  const balance = cashFlow.reduce((total, item) => total + item.value, 0);

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
          Aktualny okres rozliczeniowy
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
              ${balance >= 0 ? "text-[#4C9FE5]" : "text-[#E8E9E7]"}
            `}
          >
            {balance >= 0 ? "+" : "-"}
            {formatPrice(balance)}
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
                    ${item.value >= 0 ? "bg-[#4C9FE5]" : "bg-[ext-[#E8E9E7]/15"}
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
                {formatPrice(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
