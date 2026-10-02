import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { ButtonComponent } from "../../components/button";
import { CarCard } from "../../components/cars/cards/carCard";
import ArrowIcon from "../../assets/icons/strzalka.svg?react";
import { useCars } from "../../hooks/cars/useCars";
import { mapApiCarToCarType } from "../../components/cars/mapApiCarToCarType";

export const CarsComponent = () => {
  const carsQuery = useCars();

  const cars = (carsQuery.data?.cars ?? []).slice(0, 3).map(mapApiCarToCarType);

  return (
    <section
      id="cars"
      className="flex w-full scroll-mt-23 flex-col justify-center gap-4.5"
    >
      <div className="flex flex-col gap-8 px-[4vw] py-7 sm:gap-11 sm:py-13 min-[1200px]:px-[13vw]">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
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
            Sprawdź ofertę
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </ButtonComponent>
        </div>

        {carsQuery.isPending && (
          <div className="py-10 text-center text-[11px] text-white/30">
            Pobieranie samochodów...
          </div>
        )}

        {carsQuery.isError && !carsQuery.isPending && (
          <div className="py-10 text-center text-[11px] text-white/30">
            Nie udało się pobrać aktualnej oferty.
          </div>
        )}

        {!carsQuery.isPending && !carsQuery.isError && cars.length > 0 && (
          <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        {!carsQuery.isPending && !carsQuery.isError && cars.length === 0 && (
          <div className="py-10 text-center text-[11px] text-white/30">
            Aktualnie brak samochodów w ofercie.
          </div>
        )}
      </div>
    </section>
  );
};
