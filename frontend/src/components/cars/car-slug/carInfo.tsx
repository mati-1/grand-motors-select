import { useState } from "react";

import { ButtonComponent } from "../../button";

import type { CarType } from "../cars";
import { CarFavorite } from "../../CarFavorite";
import LinkIcon from "../../../assets/icons/link.svg?react";
import { SubHeadingComponent } from "../../headings";
import LocationIcon from "../../../assets/icons/lokalizacja.svg?react";

type CarInfoProps = {
  car: CarType;
};

type SpecificationItemProps = {
  label: string;
  value?: string | number;
  content?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const SpecificationItem = ({
  label,
  value,
  content,
  icon: Icon,
}: SpecificationItemProps) => {
  return (
    <div
      className="
        group
        border-b
        border-white/6
        px-4
        py-4
        transition-colors
        duration-300
        sm:px-5
        sm:py-5
      "
    >
      <div className="flex items-center gap-3.5">
        {Icon && (
          <Icon
            className="
              h-5
              w-5
              shrink-0
              text-[#555]
              transition-colors
              duration-300
              group-hover:text-[#b99a5c]
            "
          />
        )}

        <div className="min-w-0">
          <p
            className="
              text-[11px]
              font-normal
              text-[#555]
              uppercase
              transition-colors
              duration-300
              group-hover:text-[#777]
            "
          >
            {label}
          </p>

          {value ? (
            <p
              className="
                mt-2
                text-[13px]
                font-normal
                leading-none
                
                text-[#c8c8c8]
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {value}
            </p>
          ) : (
            <div
              className="
                mt-2
                text-[13px]
                font-normal
                leading-none
                
                text-[#c8c8c8]
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const CarInfo = ({ car }: CarInfoProps) => {
  const [isPhoneOpened, setIsPhoneOpened] = useState(false);

  const isAvailable = car.status === "available";
  const isReservated = car.status === "reservation";

  return (
    <div className="w-full border border-white/10 p-4 rounded-[10px]">
      <div className="flex items-center justify-between pb-4 mt-3 lg:mt-0">
        <div>
          <h1
            className="
        text-[24px]
        font-normal
        leading-[1.04]
        
        text-white
      "
          >
            {car.brand} {car.model}
          </h1>

          <div
            className="
        mt-1
        flex
        items-center
        gap-2
        text-[14px]
        font-normal
        text-white/70
      "
          >
            <span>{car.condition}</span>

            <span>·</span>

            <span>{car.year}</span>

            {car.negotiation && (
              <>
                <span>·</span>
                <span>Do negocjacji</span>
              </>
            )}
          </div>
        </div>

        {(isAvailable || isReservated) && <CarFavorite car={car} />}
      </div>

      {/* ================================================= */}
      {/* PRICE */}
      {/* ================================================= */}

      <div
        className="
          border-y
          border-white/10
          py-5
          sm:py-6
        "
      >
        <div className="flex items-end justify-between gap-5">
          <div>
            <div
              className={`
                text-[32px]
                font-normal
                leading-none
                
                sm:text-[28px]

                ${
                  isAvailable || isReservated
                    ? "text-[#f5f5f5]"
                    : "text-[#666] line-through"
                }
              `}
            >
              <span className="text-[32px] font-normal text-white">
                {car.price.replace(" PLN", "")}
              </span>

              <span className="text-[16px] font-normal  text-[#bbb]"> PLN</span>
            </div>
          </div>

          <div className="pb-0.5 text-right">
            {!isAvailable && !isReservated && (
              <span
                className="
                  text-[9px]
                  font-normal
                  
                  text-[#555]
                "
              >
                SAMOCHÓD SPRZEDANY
              </span>
            )}
          </div>
        </div>
      </div>
      <SubHeadingComponent className="flex items-center gap-1 mt-2 py-2">
        <LocationIcon className="w-4 h-4" /> {car.location}, {car.voivodeship}
      </SubHeadingComponent>

      {/* ================================================= */}
      {/* CONTACT */}
      {/* ================================================= */}

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
              sm:mt-7
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
                h-12
                items-center
                justify-center
                gap-1.5
                border
                border-white/10
                bg-white/1.5
                px-4
                text-[11px]
                font-normal
                rounded-[10px]
                text-white/70
                transition-colors
                duration-300
                hover:border-white/15
                hover:text-white
              "
          >
            OTOMOTO
            <LinkIcon className="w-4 h-4" />
          </a>

          {/* PHONE */}

          <ButtonComponent
            type="secondary"
            href={isPhoneOpened ? "tel:+48514137133" : undefined}
            className="
                min-h-12!
                cursor-pointer
                text-[11px]!
                !
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
  );
};
