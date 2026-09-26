import { useNavigate, useParams } from "react-router-dom";

import { LineComponent } from "../components/line";
import { PageLoader } from "../components/page-loader";

import { CarGallery } from "../components/cars/gallery/CarGallery";
import { CarInfo } from "../components/cars/car-slug/carInfo";
import { CarDescription } from "../components/cars/car-slug/carDescription";
import { CarEquipment } from "../components/cars/car-slug/carEquipment";
import { CarHistory } from "../components/cars/car-slug/carHistory";

import { carsList } from "../components/cars/cars";

import { FooterComponent } from "../components/footer";
import { ContactSectionComponent } from "../sections/landing/contact";

export const CarDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const car = [...carsList].find((item) => item.slug === slug);

  if (!car) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-[3vw] text-center">
        <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
          404 / NIE ZNALEZIONO
        </span>

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
            tracking-[0.2em]
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
        {/* TOP */}
        <section className="px-[3vw] pb-6 pt-32 sm:pb-24">
          {/* BACK */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              group
              inline-flex
              cursor-pointer
              items-center
              gap-3
              text-[10px]
              tracking-[0.22em]
              text-[#666]
              transition
              hover:text-[#d2b878]
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>WRÓĆ DO OFERTY</span>
          </button>

          {/* MAIN PRODUCT LAYOUT */}
          <div
            className="
              mt-7
              grid
              items-start
              gap-10
              xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.8fr)]
            "
          >
            {/* LEFT — GALLERY + ALL CONTENT */}
            <div className="min-w-0">
              <CarGallery
                car={car}
                images={car.images}
                alt={`${car.brand} ${car.model}`}
              />

              <aside className="min-w-0 mb-6 block xl:hidden">
                <CarInfo car={car} />
              </aside>

              {/* DESCRIPTION */}
              <CarDescription car={car} />

              {/* EQUIPMENT */}
              <CarEquipment car={car} />

              {/* HISTORY */}
              {car.status !== "sold" && <CarHistory car={car} />}
            </div>

            {/* RIGHT — STICKY CAR INFO */}
            <aside className="min-w-0 hidden xl:block xl:sticky xl:top-28">
              <CarInfo car={car} />
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <ContactSectionComponent />

        {/* FOOTER */}
        <FooterComponent />

        <LineComponent className="mt-0!" />
      </main>
    </>
  );
};

export default CarDetailsPage;
