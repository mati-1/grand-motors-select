const categories = [
  {
    label: "Zakup samochodów",
    value: 72000,
    percentage: 54,
  },
  {
    label: "Serwis i części",
    value: 8400,
    percentage: 17,
  },
  {
    label: "Transport",
    value: 4200,
    percentage: 8,
  },
  {
    label: "Detailing",
    value: 2800,
    percentage: 6,
  },
  {
    label: "Marketing",
    value: 1650,
    percentage: 4,
  },
  {
    label: "Pozostałe",
    value: 3850,
    percentage: 11,
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminExpensesCategories = () => {
  const total = categories.reduce((sum, category) => sum + category.value, 0);

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
          Kategorie wydatków
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Struktura kosztów w wybranym okresie
        </p>
      </div>

      <div className="p-5">
        <div className="mb-6">
          <p className="text-[9px] text-[#E8E9E7]/20">Łączne wydatki</p>

          <p className="mt-1 text-[22px] font-medium text-[#E8E9E7]">
            {formatPrice(total)}
          </p>
        </div>

        <div className="space-y-5">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[10px] text-[#E8E9E7]/40">
                  {category.label}
                </span>

                <span className="text-[10px] text-[#E8E9E7]/50">
                  {formatPrice(category.value)}
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-[ext-[#E8E9E7]/5">
                <div
                  className="h-full rounded-full bg-[#4C9FE5]"
                  style={{
                    width: `${category.percentage}%`,
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
