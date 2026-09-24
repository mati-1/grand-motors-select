import { useParams, useNavigate } from "react-router-dom";

import { LineComponent } from "../components/line";
import { CarGallery } from "../components/cars/car-slug/carGallery";
import { CarInfo } from "../components/cars/car-slug/carInfo";
import { CarDescription } from "../components/cars/car-slug/carDescription";
import { CarEquipment } from "../components/cars/car-slug/carEquipment";
import { CarHistory } from "../components/cars/car-slug/carHistory";
import { carsList } from "../components/cars/cars";
import { FooterComponent } from "../sections/landing/footer";
import { ContactSectionComponent } from "../sections/landing/contact";

export const CarDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const car = [...carsList].find((item) => item.slug === slug);

  if (!car) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-[5vw] text-center">
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
    <main className="w-full bg-[#050505]">
      {/* TOP */}
      <section className="px-[5vw] pb-16 pt-32 sm:pb-24">
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex
            items-center
            cursor-pointer
            gap-3
            text-[10px]
            tracking-[0.22em]
            text-[#666]
            transition
            hover:text-[#d2b878]
          "
        >
          ← WRÓĆ DO OFERTY
        </button>

        <div className="mt-7 grid gap-10 xl:grid-cols-[1.5fr_0.8fr] xl:items-start">
          <CarGallery
            car={car}
            images={car.images}
            alt={`${car.brand} ${car.model}`}
          />

          <CarInfo car={car} />
        </div>
      </section>

      {/* DESCRIPTION */}
      <div className="px-[5vw]">
        <CarDescription car={car} />

        <CarEquipment car={car} />
        {car.status !== "sold" && <CarHistory car={car} />}
      </div>

      {/* CONTACT */}
      <ContactSectionComponent />

      <FooterComponent />

      <LineComponent className="mt-0!" />
    </main>
  );
};

export default CarDetailsPage;
