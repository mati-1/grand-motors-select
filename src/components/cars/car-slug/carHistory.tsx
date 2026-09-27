import { MainHeadingComponent } from "../../headings";
import type { CarType } from "../cars";
import { CarReportCard } from "./carReportCard";

type CarHistoryProps = {
  car: CarType;
};

export const CarHistory = ({ car }: CarHistoryProps) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <MainHeadingComponent
          className="
                mt-0!
                font-normal!
                
                text-[#b99a5c]
                text-[16px]!
                md:text-[20px]!
              "
        >
          Historia Samochodu
        </MainHeadingComponent>

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
