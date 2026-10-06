import type { KeyboardEvent } from "react";

import type { CarType } from "../cars";

import LocationIcon from "../../../assets/icons/lokalizacja.svg?react";
import MileageIcon from "../../../assets/icons/przebieg.svg?react";
import TransmitionIcon from "../../../assets/icons/skrzynia-biegow.svg?react";
import FuelIcon from "../../../assets/icons/paliwo.svg?react";
import YearIcon from "../../../assets/icons/rok.svg?react";

import { CarFavorite } from "../../CarFavorite";

type CarCardDefaultProps = {
  car: CarType;
};

export const CarCardDefault = ({ car }: CarCardDefaultProps) => {
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
        w-full
        flex-col
        overflow-hidden
        rounded-[10px]
        border
        border-white/10
        transition-colors
        duration-500
        bg-[#4C9FE5]/2
        hover:border-[#4C9FE5]/30
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
          cursor-pointer
          flex-col
          outline-none
        "
      >
        <div
          className="
            relative
            aspect-16/10
            w-full
            overflow-hidden
            border-b
            border-white/10
            sm:aspect-video
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
            flex-col
            px-5
            py-5
            sm:px-6
            sm:py-6
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
              gap-4
            "
          >
            <h3
              className="
                min-w-0
                text-[17px]
                font-semibold
                leading-tight
                text-[#E8E9E7]
                sm:text-[19px]
              "
            >
              {car.brand} {car.model}
            </h3>

            <div className="shrink-0 text-right">
              <strong
                className={`
                  whitespace-nowrap
                  text-[21px]
                  font-normal
                  leading-none
                  text-[#E8E9E7]
                  sm:text-[23px]
                  ${car.status === "sold" ? "line-through" : ""}
                `}
              >
                {car.price.replace(" PLN", "")}
              </strong>

              <span
                className="
                  ml-1
                  text-[11px]
                  font-normal
                  text-[#999]
                  sm:text-[12px]
                "
              >
                PLN
              </span>
            </div>
          </div>

          <div
            className="
              mt-2
              text-[10px]
              leading-relaxed
              text-[#E8E9E7]/70
              sm:text-[11px]
            "
          >
            {car.condition} · {car.power} KM · {car.engine} cm<sup>3</sup> ·{" "}
            {car.drive}
            {car.negotiation && " · Do negocjacji"}
            {car.accidentFree && " · Bezwypadkowy"}
          </div>

          <div
            className="
              mt-5
              grid
              grid-cols-2
              gap-x-4
              gap-y-3
              text-[11px]
              text-[#E8E9E7]
              sm:mt-6
              sm:flex
              sm:flex-wrap
              sm:items-center
              sm:gap-x-5
              sm:gap-y-2.5
              sm:text-[12px]
            "
          >
            <span
              className="
                flex
                min-w-0
                items-center
                gap-1.5
              "
            >
              <MileageIcon className="h-4 w-4 shrink-0" />

              <span className="truncate">{car.mileage} km</span>
            </span>

            <span
              className="
                flex
                min-w-0
                items-center
                gap-1.5
              "
            >
              <FuelIcon className="h-4 w-4 shrink-0" />

              <span className="truncate">{car.fuel}</span>
            </span>

            <span
              className="
                flex
                min-w-0
                items-center
                gap-1.5
              "
            >
              <TransmitionIcon className="h-4 w-4 shrink-0" />

              <span className="truncate">{car.transmission}</span>
            </span>

            <span
              className="
                flex
                min-w-0
                items-center
                gap-1.5
              "
            >
              <YearIcon className="h-4 w-4 shrink-0" />

              <span>{car.year}</span>
            </span>
          </div>

          <div
            className="
              mt-5
              flex
              min-w-0
              items-center
              gap-1.5
              text-[11px]
              text-[#E8E9E7]
              opacity-75
              sm:mt-6
              sm:text-[12px]
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
            right-4
            z-20
            bottom-5
          "
        >
          <CarFavorite car={car} />
        </div>
      )}
    </article>
  );
};
