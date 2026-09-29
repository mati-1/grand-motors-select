const expenses = [
  {
    label: "Zakup samochodów",
    value: 112000,
    percentage: 68,
  },
  {
    label: "Serwis i części",
    value: 18400,
    percentage: 11,
  },
  {
    label: "Detailing i przygotowanie",
    value: 8200,
    percentage: 5,
  },
  {
    label: "Marketing",
    value: 4200,
    percentage: 3,
  },
  {
    label: "Pozostałe",
    value: 21000,
    percentage: 13,
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminFinanceBreakdown = () => {
  const total = expenses.reduce((sum, expense) => sum + expense.value, 0);

  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
      "
    >
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">
          Struktura wydatków
        </h3>

        <p className="mt-1 text-[11px] text-white/25">
          Koszty w aktualnym okresie
        </p>
      </div>

      <div className="p-5">
        <div className="mb-6">
          <p className="text-[9px] text-white/20">Łączne wydatki</p>

          <p className="mt-1 text-[22px] font-medium text-white">
            {formatPrice(total)}
          </p>
        </div>

        <div className="space-y-5">
          {expenses.map((expense) => (
            <div key={expense.label}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="text-[10px] text-white/40">
                  {expense.label}
                </span>

                <span className="text-[10px] text-white/50">
                  {formatPrice(expense.value)}
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-[#b99a5c]"
                  style={{
                    width: `${expense.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
