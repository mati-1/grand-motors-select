import type { KeyboardEvent } from "react";
import type { CarType } from "../cars";

import LocationIcon from "../../../assets/icons/lokalizacja.svg?react";
import MileageIcon from "../../../assets/icons/przebieg.svg?react";
import TransmitionIcon from "../../../assets/icons/skrzynia-biegow.svg?react";
import FuelIcon from "../../../assets/icons/paliwo.svg?react";
import YearIcon from "../../../assets/icons/rok.svg?react";

import { CarFavorite } from "../../CarFavorite";

type CarCardHorizontalProps = {
  car: CarType;
};

export const CarCardHorizontal = ({ car }: CarCardHorizontalProps) => {
  const handleCardClick = () => {
    window.location.href = `/cars/${car.id}`;
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      className={`
        group/card
        relative
        flex
        h-60
        w-full
        overflow-hidden
        rounded-[10px]
        border
        border-white/10
        bg-[#090909]
        transition-colors
        duration-500
        hover:border-[#b99a5c]/30
        ${car.status === "sold" ? "grayscale" : ""}
      `}
    >
      <div
        role="link"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        className="
          flex
          min-w-0
          flex-1
          cursor-pointer
          outline-none
        "
      >
        <div
          className="
            relative
            h-full
            w-72
            shrink-0
            overflow-hidden
          "
        >
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="
              h-full
              w-full
              object-cover
              transition-all
              duration-700
              will-change-transform
              group-hover/card:brightness-[1.10]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-t
              from-black/50
              via-transparent
              to-black/5
            "
          />
        </div>

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            justify-between
            px-7
            py-6
          "
        >
          <div>
            <div className="flex items-start justify-between gap-6">
              <h3
                className="
                  min-w-0
                  text-[19px]
                  font-medium
                  leading-tight
                  text-white
                "
              >
                {car.brand} {car.model}
              </h3>

              <div className="shrink-0 text-right">
                <strong
                  className={`
                    whitespace-nowrap
                    text-[24px]
                    font-normal
                    leading-none
                    text-white
                    ${car.status === "sold" ? "line-through" : ""}
                  `}
                >
                  {car.price.replace(" PLN", "")}
                </strong>

                <span
                  className="
                    ml-1
                    text-[12px]
                    font-normal
                    text-[#999]
                  "
                >
                  PLN
                </span>
              </div>
            </div>

            <div
              className="
                mt-2
                text-[11px]
                leading-relaxed
                text-white/70
              "
            >
              {car.condition} · {car.power} · {car.engine} · {car.drive}
              {car.negotiation && " · Do negocjacji"}
              {car.accidentFree && " · Bezwypadkowy"}
            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-2.5
                text-[12px]
                text-white
              "
            >
              <span className="flex items-center gap-1.5">
                <MileageIcon className="h-4 w-4 shrink-0" />
                {car.mileage}
              </span>

              <span className="flex items-center gap-1.5">
                <FuelIcon className="h-4 w-4 shrink-0" />
                {car.fuel}
              </span>

              <span className="flex items-center gap-1.5">
                <TransmitionIcon className="h-4 w-4 shrink-0" />
                {car.transmission}
              </span>

              <span className="flex items-center gap-1.5">
                <YearIcon className="h-4 w-4 shrink-0" />
                {car.year}
              </span>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-1
              text-[12px]
              text-white
              opacity-75
            "
          >
            <LocationIcon className="h-4 w-4 shrink-0" />

            <span className="truncate">
              {car.location} ({car.voivodeship})
            </span>
          </div>
        </div>
      </div>

      {car.status !== "sold" && (
        <div
          className="
          absolute
          bottom-6
          right-6
          z-20
        "
        >
          <CarFavorite car={car} />
        </div>
      )}
    </article>
  );
};
