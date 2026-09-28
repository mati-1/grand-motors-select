import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { ButtonComponent } from "../../components/button";
import { carsList } from "../../components/cars/cars";
import { CarCard } from "../../components/cars/carCard";
import ArrowIcon from "../../assets/icons/strzalka.svg?react";

export const CarsComponent = () => {
  return (
    <section
      id="cars"
      className="flex scroll-mt-23 flex-col justify-center gap-4.5 w-full"
    >
      <div
        className="px-[4vw] lg:px-[13vw] py-7 sm:py-13 flex flex-col
           gap-8 md:gap-11"
      >
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div>
            <MainHeadingComponent className="mt-0!">
              Zobacz nasze samochody
            </MainHeadingComponent>
            <SubHeadingComponent className="mt-2!">
              Nasza aktualna oferta
            </SubHeadingComponent>
          </div>

          <ButtonComponent
            href="/cars"
            size="big"
            className="flex items-center gap-1"
          >
            Sprawdź ofertę <ArrowIcon className="w-4 h-4 rotate-180" />
          </ButtonComponent>
        </div>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 xl:grid-cols-3">
          {carsList.slice(0, 3).map((car) => {
            if (car.status === "sold") return;
            return <CarCard key={`${car.brand}-${car.model}`} car={car} />;
          })}
        </div>
      </div>
    </section>
  );
};
