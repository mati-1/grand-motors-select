import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { LineComponent } from "../../components/line";
import { ButtonComponent } from "../../components/button";
import { carsList } from "../../components/cars/cars";
import { CarCard } from "../../components/cars/carCard";

export const CarsComponent = () => {
  return (
    <section
      id="cars"
      className="flex scroll-mt-23 flex-col justify-center gap-4.5 w-full"
    >
      <div className="bg-[#060606] px-[5vw] py-10 sm:py-20 flex flex-col gap-8 md:gap-11">
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div>
            <SubHeadingComponent>
              NASZA AKTUALNA <span className="text-[#d2b878]">OFERTA</span>
            </SubHeadingComponent>

            <MainHeadingComponent>ZOBACZ NASZE SAMOCHODY</MainHeadingComponent>
          </div>

          <ButtonComponent href="/cars" size="big">
            SPRAWDŹ OFERTĘ →
          </ButtonComponent>
        </div>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 xl:grid-cols-3">
          {carsList.slice(0, 3).map((car) => {
            if (car.status === "sold") return;
            return <CarCard key={`${car.brand}-${car.model}`} car={car} />;
          })}
        </div>
      </div>
      <LineComponent className="mt-0!" />
    </section>
  );
};
