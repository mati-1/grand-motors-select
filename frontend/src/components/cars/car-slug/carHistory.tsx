import { MainHeadingComponent, SubHeadingComponent } from "../../headings";
import type { CarType } from "../cars";
import { CarReportCard } from "./carReportCard";

type CarHistoryProps = {
  car: CarType;
};

export const CarHistory = ({ car }: CarHistoryProps) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div>
          <MainHeadingComponent
            className="
          mt-0!
          text-[16px]!
          md:text-[20px]!
          "
          >
            Historia samochodu
          </MainHeadingComponent>
          <SubHeadingComponent className="mt-2">
            Szczegółowy raport historii pojazdu
          </SubHeadingComponent>
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
