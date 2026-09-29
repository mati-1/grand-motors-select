import type { CarType } from "../../../../../components/cars/cars";

type Props = {
  car?: CarType;
  salePrice: string;
};

export const AdminSaleSummary = ({ car, salePrice }: Props) => {
  const parsedSalePrice = Number(salePrice) || 0;

  /*
   * Na tym etapie carsList nie ma jeszcze
   * rzeczywistych danych finansowych.
   *
   * Po podłączeniu backendu:
   *
   * investment =
   * purchasePrice + carExpenses
   */

  const investment = 0;
  const profit = parsedSalePrice - investment;

  const margin = parsedSalePrice > 0 ? (profit / parsedSalePrice) * 100 : 0;

  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Podsumowanie</h3>

        <p className="mt-1 text-[10px] text-white/30">
          Wynik finansowy sprzedaży samochodu.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
        <div className="bg-[#090909] p-4">
          <span className="text-[9px] text-white/25">Samochód</span>

          <p className="mt-1 text-[11px] text-white/65">
            {car ? `${car.brand} ${car.model}` : "—"}
          </p>
        </div>

        <div className="bg-[#090909] p-4">
          <span className="text-[9px] text-white/25">Inwestycja</span>

          <p className="mt-1 text-[11px] text-white/65">
            {investment.toLocaleString("pl-PL")} zł
          </p>
        </div>

        <div className="bg-[#090909] p-4">
          <span className="text-[9px] text-white/25">Cena sprzedaży</span>

          <p className="mt-1 text-[11px] text-[#d2b878]">
            {parsedSalePrice.toLocaleString("pl-PL")} zł
          </p>
        </div>

        <div className="bg-[#090909] p-4">
          <span className="text-[9px] text-white/25">Zysk</span>

          <p
            className={`mt-1 text-[11px] ${
              profit >= 0 ? "text-[#d2b878]" : "text-red-300"
            }`}
          >
            {profit.toLocaleString("pl-PL")} zł
          </p>

          <p className="mt-1 text-[9px] text-white/25">
            Marża {margin.toFixed(1)}%
          </p>
        </div>
      </div>
    </section>
  );
};
