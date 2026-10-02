import { useNavigate, useParams } from "react-router-dom";

import { useCar } from "../hooks/cars/useCar";
import { mapApiCarToCarType } from "../components/cars/mapApiCarToCarType";

import { LineComponent } from "../components/line";
import { PageLoader } from "../components/page-loader";

import { CarGallery } from "../components/cars/gallery/CarGallery";
import { CarInfo } from "../components/cars/car-slug/carInfo";
import { CarDescription } from "../components/cars/car-slug/carDescription";
import { CarEquipment } from "../components/cars/car-slug/carEquipment";
import { CarHistory } from "../components/cars/car-slug/carHistory";
import { CarInShort } from "../components/cars/car-slug/carInShort";
import { CarShare } from "../components/cars/car-slug/carShare";
import { CarLocation } from "../components/cars/carLocation";

import { FooterComponent } from "../components/footer";
import { ContactSectionComponent } from "../sections/landing/contact";

import ArrowIcon from "../assets/icons/strzalka.svg?react";

export const CarDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const carQuery = useCar(id);

  const apiCar = carQuery.data?.car;

  const car = apiCar ? mapApiCarToCarType(apiCar) : undefined;

  /*
   * Jeżeli użytkownik wejdzie na nieistniejące ID,
   * po zakończeniu zapytania pokazujemy 404.
   */
  if (carQuery.isError) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-[4vw] text-center min-[1200px]:px-[13vw]">
        <span className="text-[9px] text-[#b99a5c]">404 / Nie znaleziono</span>

        <h1 className="mt-5 text-[32px] font-normal text-[#ddd]">
          Samochód nie jest dostępny.
        </h1>

        <p className="mt-4 max-w-100 text-[11px] leading-[1.8] text-[#666]">
          Wybrany samochód nie istnieje lub został usunięty z aktualnej oferty.
        </p>

        <button
          type="button"
          onClick={() => navigate("/cars")}
          className="
            mt-8
            cursor-pointer
            border
            border-[#b99a5c]/30
            px-6
            py-3
            text-[9px]
            text-[#d2b878]
            transition
            hover:border-[#b99a5c]/60
            hover:bg-[#b99a5c]/5
          "
        >
          Wróć do oferty
        </button>
      </main>
    );
  }

  /*
   * Loading
   */
  if (carQuery.isPending || !car) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505]">
        <span className="text-[10px] text-white/30">
          Pobieranie samochodu...
        </span>
      </main>
    );
  }

  return (
    <>
      <PageLoader imageSources={car.images} />

      <main className="w-full bg-[#050505]">
        <section
          className="
            px-[4vw]
            pb-6
            pt-32
            sm:pb-24
            min-[1200px]:px-[13vw]
          "
        >
          {/* TOP BAR */}
          <div className="flex w-full items-center justify-between">
            {/* BACK */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Wróć"
              className="
                group
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                bg-white/2
                text-[#777]
                transition-all
                duration-300
                hover:border-[#b99a5c]/40
                hover:bg-[#b99a5c]/5
                hover:text-[#d2b878]
              "
            >
              <ArrowIcon className="h-5 w-5" />
            </button>

            {/* SHARE */}
            <CarShare car={car} />
          </div>

          {/* CONTENT */}
          <div
            className="
              mt-7
              grid
              items-start
              gap-8
              xl:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.8fr)]
            "
          >
            {/* LEFT */}
            <div className="min-w-0">
              <CarGallery
                car={car}
                images={car.images}
                alt={`${car.brand} ${car.model}`}
              />

              {/* MOBILE INFO */}
              <aside className="my-6 block min-w-0 xl:hidden">
                <CarInfo car={car} />
              </aside>

              <CarInShort car={car} />

              <CarDescription car={car} />

              <CarEquipment car={car} />

              <CarLocation location={car.location} car={car} />

              {car.status !== "sold" && <CarHistory car={car} />}
            </div>

            {/* DESKTOP INFO */}
            <aside
              className="
                sticky
                top-28
                hidden
                min-w-0
                xl:block
              "
            >
              <CarInfo car={car} />
            </aside>
          </div>
        </section>

        <ContactSectionComponent />

        <FooterComponent />

        <LineComponent className="mt-0!" />
      </main>
    </>
  );
};

export default CarDetailsPage;
