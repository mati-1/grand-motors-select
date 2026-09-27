import { MainHeadingComponent, SubHeadingComponent } from "../headings";
import LocationIcon from "../../assets/icons/lokalizacja.svg?react";
import type { CarType } from "./cars";

type CarLocationProps = {
  location: string;
  car: CarType;
};

export const CarLocation = ({ location, car }: CarLocationProps) => {
  const mapUrl =
    `https://www.google.com/maps/embed/v1/place` +
    `?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}` +
    `&q=${encodeURIComponent(location)}` +
    `&zoom=13` +
    `&maptype=roadmap` +
    `&language=pl` +
    `&region=PL`;

  return (
    <section
      className="
        bg-[#050505]
        py-12
        lg:py-12
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <MainHeadingComponent
            className="
              mt-0!
              font-normal!
              text-[#b99a5c]
              text-[16px]!
              md:text-[20px]!
            "
          >
            Znajdź na mapie
          </MainHeadingComponent>

          <SubHeadingComponent className="flex items-center gap-1 mt-2">
            <LocationIcon className="w-4 h-4" /> {car.location},{" "}
            {car.voivodeship}
          </SubHeadingComponent>
        </div>

        {/* Map */}
        <div
          className="
            relative
            h-50
            w-full
            overflow-hidden
            border
            border-white/10
            bg-[#0a0a0a]
            sm:h-50
            lg:h-65
          "
        >
          <iframe
            title={`Lokalizacja samochodu — ${location}`}
            src={mapUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};
