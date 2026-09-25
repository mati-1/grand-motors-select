import { useState } from "react";

import { ButtonComponent } from "../../button";
import type { CarType } from "../cars";
import { CarShare } from "./carShare";

type CarInfoProps = {
  car: CarType;
};

type SpecificationItemProps = {
  label: string;
  value: string | number;
};

const SpecificationItem = ({ label, value }: SpecificationItemProps) => {
  return (
    <div
      className="
        group
        relative
        border-b
        border-white/8
        px-5
        py-6
        transition-colors
        duration-300
        hover:bg-white/2
        sm:px-6
      "
    >
      <span
        className="
          absolute
          left-0
          top-5
          h-[calc(100%-2.5rem)]
          w-px
          origin-top
          scale-y-0
          bg-[#b99a5c]
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      <div>
        <p
          className="
            text-[10px]
            tracking-[0.25em]
            text-[#555]
            transition-colors
            duration-300
            group-hover:text-[#777]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-2
            text-[13px]
            tracking-[0.04em]
            text-[#ccc]
            transition-colors
            duration-300
            group-hover:text-[#d2b878]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export const CarInfo = ({ car }: CarInfoProps) => {
  const [isPhoneOpened, setIsPhoneOpened] = useState(false);

  const specifications = [
    ["ROK", car.year],
    ["PRZEBIEG", car.mileage],
    ["SILNIK", car.engine],
    ["MOC", car.power],
    ["SKRZYNIA", car.transmission],
    ["NAPĘD", car.drive],
  ];

  const isAvailable = car.status === "available";
  const isReservated = car.status === "reservation";

  const statusLabel = isReservated
    ? "Rezerwacja"
    : isAvailable
      ? "DOSTĘPNE"
      : "SPRZEDANE";

  const statusDot = isAvailable || isReservated ? "bg-[#b99a5c]" : "bg-[#555]";

  return (
    <div>
      {/* BRAND / STATUS */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-6
          bg-[#b99a5c]/20
          bg-linear-to-r
          from-black/90
          via-black/75
          to-black/90
        "
      >
        <div className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
          GRAND MOTORS SELECT{" "}
          {car.status === "sold" && (
            <span className="text-[#666]">OFERTA ARCHIWALNA</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${statusDot}
            `}
          />

          <span
            className="
              text-[10px]
              tracking-[0.25em]
              text-[#555] mr-1 md:mr-3
            "
          >
            {statusLabel}
          </span>
          <CarShare car={car} />
        </div>
      </div>

      {/* TITLE */}

      <div className="mt-5">
        <h1
          className="
            text-[clamp(36px,5vw,64px)]
            font-normal
            leading-[1.02]
            tracking-[-0.02em]
          "
        >
          {car.brand}

          <br />

          <span className="text-[#d2b878]">{car.model}</span>
        </h1>
      </div>

      {/* PRICE */}

      <div
        className="
          mt-10
          border-y
          border-white/10
          bg-[#b99a5c]/20
          bg-linear-to-r
          from-black/90
          via-black/75
          to-black/90
          py-6
        "
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />

              <span
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-[#555]
                "
              >
                CENA
              </span>
            </div>

            <div
              className={`
                mt-3
                text-[30px]
                leading-none
                ${
                  isAvailable || isReservated
                    ? "text-[#d2b878]"
                    : "text-[#666] line-through"
                }
              `}
            >
              {car.price}
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="pb-0.5 text-right">
              {isAvailable || (isReservated && car.negotiation) ? (
                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-[#777]
                  "
                >
                  DO NEGOCJACJI
                </span>
              ) : !isAvailable && !isReservated ? (
                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-[#555]
                  "
                >
                  SAMOCHÓD SPRZEDANY
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* SPECIFICATION */}

      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-[#b99a5c]/50" />

            <span
              className="
                text-[10px]
                tracking-[0.3em]
                text-[#555]
              "
            >
              W SKRÓCIE
            </span>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            border-y
            border-white/10
            bg-[#b99a5c]/20
            bg-linear-to-r
            from-black/90
            via-black/75
            to-black/90
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {specifications.map(([label, value]) => (
            <SpecificationItem
              key={label}
              label={label.toString()}
              value={value}
            />
          ))}
        </div>

        {/* CONTACT */}

        {car.status !== "sold" && (
          <div
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-30
              flex
              items-center
              justify-between
              gap-2
              border-t
              border-white/10
              bg-[#080808]/95
              p-3
              backdrop-blur-xl
              sm:static
              sm:mt-8
              sm:border-t-0
              sm:bg-transparent
              sm:p-0
              sm:backdrop-blur-none
            "
          >
            {/* OTOMOTO */}

            <a
              href="https://www.otomoto.pl/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                h-13
                items-center
                justify-center
                gap-3
                border
                border-white/10
                bg-white/2
                px-5
                py-3.5
                text-[10px]
                tracking-[0.2em]
                text-[#999]
                transition-all
                duration-300
                hover:border-[#b99a5c]/40
                hover:bg-[#b99a5c]/5
                hover:text-[#d2b878]
              "
            >
              <span>OTOMOTO</span>

              <span
                className="
                  text-[#b99a5c]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>

            {/* TELEFON */}

            <ButtonComponent
              type="secondary"
              href={isPhoneOpened ? "tel:+48514137133" : undefined}
              className="
                min-h-13!
                cursor-pointer
                text-[11px]!
                lg:text-[12px]!
              "
              onClick={() => setIsPhoneOpened(true)}
            >
              {isPhoneOpened ? (
                <span>514 137 133</span>
              ) : (
                <span>Wyświetl numer</span>
              )}
            </ButtonComponent>
          </div>
        )}
      </div>
    </div>
  );
};
