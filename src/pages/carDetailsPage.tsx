import { useNavigate, useParams } from "react-router-dom";

import { LineComponent } from "../components/line";
import { PageLoader } from "../components/page-loader";

import { CarGallery } from "../components/cars/gallery/CarGallery";
import { CarInfo } from "../components/cars/car-slug/carInfo";
import { CarDescription } from "../components/cars/car-slug/carDescription";
import { CarEquipment } from "../components/cars/car-slug/carEquipment";
import { CarHistory } from "../components/cars/car-slug/carHistory";
import { CarInShort } from "../components/cars/car-slug/carInShort";
import { carsList } from "../components/cars/cars";
import { CarShare } from "../components/cars/car-slug/carShare";
import ArrowIcon from "../assets/icons/strzalka.svg?react";
import { FooterComponent } from "../components/footer";
import { ContactSectionComponent } from "../sections/landing/contact";
import { CarLocation } from "../components/cars/carLocation";

export const CarDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const car = [...carsList].find((item) => item.slug === slug);

  if (!car) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-[4vw] min-[1200px]:px-[13vw] text-center">
        <span className="text-[9px]  text-[#b99a5c]">404 / NIE ZNALEZIONO</span>

        <h1 className="mt-5 text-[32px] text-[#ddd]">
          SAMOCHÓD NIE JEST DOSTĘPNY.
        </h1>

        <p className="mt-4 max-w-100 text-[11px] leading-[1.8] text-[#666]">
          Wybrany samochód nie istnieje lub został usunięty z aktualnej oferty.
        </p>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            mt-8
            border
            border-[#b99a5c]/30
            px-6
            py-3
            text-[8px]
            
            text-[#d2b878]
            transition
            hover:border-[#b99a5c]/60
            hover:bg-[#b99a5c]/5
          "
        >
          WRÓĆ DO OFERTY
        </button>
      </main>
    );
  }

  return (
    <>
      <PageLoader imageSources={car.images} />

      <main className="w-full bg-[#050505]">
        <section className="px-[4vw] min-[1200px]:px-[13vw] pb-6 pt-32 sm:pb-24">
          <div className="flex items-center justify-between w-full max-h-3 lg:max-h-5">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Udostępnij ofertę"
              className="
          group
          flex
          h-9
          w-9
          cursor-pointer
          items-center
          justify-center
          border
          border-white/10
          bg-white/2
          text-[#777]
          transition-all
          duration-300
          hover:border-[#b99a5c]/40
          hover:bg-[#b99a5c]/5
          hover:text-[#d2b878]
          rounded-[10px]
        "
            >
              <ArrowIcon className="w-5 h-5" />
            </button>

            <CarShare car={car} key={car.id} />
          </div>

          <div
            className="
              mt-7
              grid
              items-start
              gap-8
              xl:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.8fr)]
            "
          >
            <div className="min-w-0">
              <CarGallery
                car={car}
                images={car.images}
                alt={`${car.brand} ${car.model}`}
              />

              <aside className="min-w-0 my-6 block xl:hidden">
                <CarInfo car={car} />
              </aside>

              <CarInShort car={car} />

              <CarDescription car={car} />

              <CarEquipment car={car} />
              <CarLocation location={car.location} car={car} />
              {car.status !== "sold" && <CarHistory car={car} />}
            </div>

            <aside className="min-w-0 hidden xl:block xl:sticky xl:top-28">
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
