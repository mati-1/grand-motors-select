type Sale = {
  id: string;
  car: string;
  year: number;
  purchasePrice: number;
  investment: number;
  salePrice: number;
  profit: number;
  margin: number;
  date: string;
  customer: string;
};

const sales: Sale[] = [
  {
    id: "1",
    car: "BMW F30 340i",
    year: 2018,
    purchasePrice: 78000,
    investment: 85000,
    salePrice: 105000,
    profit: 20000,
    margin: 19,
    date: "29 września 2026",
    customer: "Klient indywidualny",
  },
  {
    id: "2",
    car: "BMW G11 740d",
    year: 2022,
    purchasePrice: 205000,
    investment: 216000,
    salePrice: 240000,
    profit: 24000,
    margin: 10,
    date: "22 września 2026",
    customer: "Klient indywidualny",
  },
  {
    id: "3",
    car: "BMW F10 530d",
    year: 2016,
    purchasePrice: 58000,
    investment: 64000,
    salePrice: 79000,
    profit: 15000,
    margin: 19,
    date: "12 września 2026",
    customer: "Firma",
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminSalesList = () => {
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
      <div className="flex flex-col justify-between gap-4 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">
            Sprzedane samochody
          </h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Historia zakończonych transakcji
          </p>
        </div>

        <button
          type="button"
          className="
            cursor-pointer
            text-[10px]
            text-[#E8E9E7]/30
            transition-colors
            duration-300
            hover:text-[#4C9FE5]
          "
        >
          Zobacz wszystkie
        </button>
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-5 py-3 text-left text-[9px] font-normal text-[#E8E9E7]/20">
                Samochód
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-[#E8E9E7]/20">
                Inwestycja
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-[#E8E9E7]/20">
                Cena sprzedaży
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-[#E8E9E7]/20">
                Zysk
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-[#E8E9E7]/20">
                Marża
              </th>

              <th className="px-5 py-3 text-right text-[9px] font-normal text-[#E8E9E7]/20">
                Data
              </th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="
                  border-b
                  border-white/5
                  last:border-b-0
                  transition-colors
                  duration-300
                  hover:bg-[ext-[#E8E9E7]/[0.015]
                "
              >
                <td className="px-5 py-4">
                  <div>
                    <p className="text-[11px] text-[#E8E9E7]/70">{sale.car}</p>

                    <p className="mt-1 text-[9px] text-[#E8E9E7]/20">
                      {sale.year} · {sale.customer}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4 text-right text-[11px] text-[#E8E9E7]/45">
                  {formatPrice(sale.investment)}
                </td>

                <td className="px-4 py-4 text-right text-[11px] text-[#E8E9E7]/60">
                  {formatPrice(sale.salePrice)}
                </td>

                <td className="px-4 py-4 text-right">
                  <span className="text-[11px] text-[#4C9FE5]">
                    +{formatPrice(sale.profit)}
                  </span>
                </td>

                <td className="px-4 py-4 text-right text-[11px] text-[#E8E9E7]/45">
                  {sale.margin}%
                </td>

                <td className="px-5 py-4 text-right text-[9px] text-[#E8E9E7]/20">
                  {sale.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-white/5 lg:hidden">
        {sales.map((sale) => (
          <div key={sale.id} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-[12px] text-[#E8E9E7]/70">
                  {sale.car}
                </p>

                <p className="mt-1 text-[9px] text-[#E8E9E7]/20">
                  {sale.year} · {sale.date}
                </p>
              </div>

              <span className="shrink-0 text-[12px] font-medium text-[#4C9FE5]">
                +{formatPrice(sale.profit)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
              <div>
                <p className="text-[8px] text-[#E8E9E7]/20">Inwestycja</p>

                <p className="mt-1 text-[10px] text-[#E8E9E7]/45">
                  {formatPrice(sale.investment)}
                </p>
              </div>

              <div>
                <p className="text-[8px] text-[#E8E9E7]/20">Sprzedaż</p>

                <p className="mt-1 text-[10px] text-[#E8E9E7]/50">
                  {formatPrice(sale.salePrice)}
                </p>
              </div>

              <div>
                <p className="text-[8px] text-[#E8E9E7]/20">Marża</p>

                <p className="mt-1 text-[10px] text-[#E8E9E7]/45">
                  {sale.margin}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
