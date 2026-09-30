const monthlySales = [
  { month: "Kwi", sales: 2, revenue: 184000 },
  { month: "Maj", sales: 3, revenue: 276000 },
  { month: "Cze", sales: 2, revenue: 219000 },
  { month: "Lip", sales: 4, revenue: 348000 },
  { month: "Sie", sales: 3, revenue: 257000 },
  { month: "Wrz", sales: 4, revenue: 421000 },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminSalesOverview = () => {
  const maxRevenue = Math.max(...monthlySales.map((month) => month.revenue));

  const totalRevenue = monthlySales.reduce(
    (total, month) => total + month.revenue,
    0,
  );

  const totalSales = monthlySales.reduce(
    (total, month) => total + month.sales,
    0,
  );

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
      <div className="flex flex-col justify-between gap-4 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-white">
            Wyniki sprzedaży
          </h3>

          <p className="mt-1 text-[11px] text-white/25">
            Przychód i liczba sprzedanych samochodów
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <p className="text-[9px] text-white/20">Sprzedaż</p>

            <p className="mt-1 text-[12px] text-white/60">{totalSales} aut</p>
          </div>

          <div>
            <p className="text-[9px] text-white/20">Przychód</p>

            <p className="mt-1 text-[12px] text-[#d2b878]">
              {formatPrice(totalRevenue)}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex h-56 items-end gap-2 sm:gap-4">
          {monthlySales.map((month) => {
            const height = (month.revenue / maxRevenue) * 100;

            return (
              <div
                key={month.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-3"
              >
                <div className="flex h-full w-full items-end">
                  <div
                    className="
                      relative
                      w-full
                      rounded-t-[6px]
                      bg-[#b99a5c]/30
                      transition-all
                      duration-300
                      hover:bg-[#d2b878]/50
                    "
                    style={{
                      height: `${height}%`,
                    }}
                  >
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        rounded-t-[6px]
                        bg-[#d2b878]
                      "
                      style={{
                        height: "3px",
                      }}
                    />
                  </div>
                </div>

                <span className="text-[9px] text-white/25">{month.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
