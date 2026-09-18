import { MainHeadingComponent } from "../../headings";
import type { CarType } from "../cars";
import { CarReportCard } from "./carReportCard";

type CarHistoryProps = {
  car: CarType;
};

export const CarHistory = ({ car }: CarHistoryProps) => {
  return (
    <section className="border-b border-white/5 py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        {/* LEFT */}
        <div>
          <MainHeadingComponent className="text-[12px]! mt-0! tracking-[0.3em] text-[#b99a5c] md:text-[14px]!">
            04 / HISTORIA SAMOCHODU
          </MainHeadingComponent>

          <h2 className="mt-8 max-w-100 font-serif text-[34px] leading-[1.05] text-[#ddd] sm:text-[42px]">
            HISTORIA
            <br />
            <span className="text-[#666]">ZWERYFIKOWANA.</span>
          </h2>

          <p className="mt-6 max-w-95 text-[11px] leading-[1.9] tracking-[0.04em] text-[#666]">
            Informacje dotyczące historii pojazdu oraz dostępna dokumentacja są
            udostępniane przez GMS w ramach prezentacji samochodu.
          </p>
        </div>

        <CarReportCard
          title={`${car.brand} ${car.model}`}
          subtitle="RAPORT HISTORII POJAZDU"
          fileUrl={`/reports/${car.slug}-carvertical.pdf`}
          fileName={`${car.slug}-carvertical.pdf`}
        />
      </div>
    </section>
  );
};
