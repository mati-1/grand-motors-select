import type { CarType } from "../cars";

type CarDetailsProps = {
  car: CarType;
};

export const CarDetails = ({ car }: CarDetailsProps) => {
  const details = [
    ["NADWOZIE", car.details.body],
    ["KOLOR", car.details.color],
    ["WNĘTRZE", car.details.interior],
    ["LICZBA MIEJSC", car.details.seats],
    ["LICZBA DRZWI", car.details.doors],
    ["KRAJ POCHODZENIA", car.details.country],
  ];

  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
        03 / SZCZEGÓŁY
      </span>

      <h2 className="mt-4 text-[28px] font-normal text-[#ddd]">
        SPECYFIKACJA
        <span className="text-[#d2b878]">.</span>
      </h2>

      <div className="mt-8 grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="border-b border-white/10 p-5 lg:nth-[3n+1]:border-r"
          >
            <div className="text-[8px] tracking-[0.2em] text-[#555]">
              {label}
            </div>

            <div className="mt-2 text-[11px] text-[#ccc]">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
