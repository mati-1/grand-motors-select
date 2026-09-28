import { useState } from "react";

import { MainHeadingComponent } from "../../headings";

import type { CarType } from "../cars";

import { SpecificationItem } from "./carInfo";

import BodyIcon from "../../../assets/icons/nadwozie.svg?react";
import ColorIcon from "../../../assets/icons/kolor.svg?react";
import InteriorIcon from "../../../assets/icons/wnetrze.svg?react";
import SeatsIcon from "../../../assets/icons/miejsca.svg?react";
import DoorsIcon from "../../../assets/icons/drzwi.svg?react";
import CountryIcon from "../../../assets/icons/lokalizacja.svg?react";
import FuelIcon from "../../../assets/icons/paliwo.svg?react";
import InvoiceIcon from "../../../assets/icons/faktura.svg?react";
import CarVerticalIcon from "../../../assets/icons/trasa.svg?react";
import VinIcon from "../../../assets/icons/vin.svg?react";
import { ButtonExpand } from "../../button";

type CarDescriptionProps = {
  car: CarType;
};

type Detail = {
  label: string;
  value: string | number;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const MOBILE_DESCRIPTION_LIMIT = 280;
const DESKTOP_DESCRIPTION_LIMIT = 420;

const truncateAtWord = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }

  const shortenedText = text.slice(0, limit);
  const lastSpace = shortenedText.lastIndexOf(" ");

  if (lastSpace === -1) {
    return shortenedText.trim() + "...";
  }

  return shortenedText.slice(0, lastSpace).trim() + "...";
};

export const CarDescription = ({ car }: CarDescriptionProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const details: Detail[] = [
    {
      label: "NADWOZIE",
      value: car.details.body,
      icon: BodyIcon,
    },
    {
      label: "KOLOR",
      value: car.details.color,
      icon: ColorIcon,
    },
    {
      label: "WNĘTRZE",
      value: car.details.interior,
      icon: InteriorIcon,
    },
    {
      label: "LICZBA MIEJSC",
      value: car.details.seats,
      icon: SeatsIcon,
    },
    {
      label: "LICZBA DRZWI",
      value: car.details.doors,
      icon: DoorsIcon,
    },
    {
      label: "KRAJ POCHODZENIA",
      value: car.details.country,
      icon: CountryIcon,
    },
    {
      label: "PALIWO",
      value: car.fuel,
      icon: FuelIcon,
    },
    {
      label: "FAKTURA",
      value: car.invoice,
      icon: InvoiceIcon,
    },
    {
      label: "CARVERTICAL",
      value: car.carvertical ? "Dostępny" : "Brak",
      icon: CarVerticalIcon,
    },
  ];

  const visibleDetails = details.slice(0, 6);
  const hiddenDetails = details.slice(6);
  const hasMoreDetails = hiddenDetails.length > 0;

  const mobileDescription = truncateAtWord(
    car.description,
    MOBILE_DESCRIPTION_LIMIT,
  );

  const desktopDescription = truncateAtWord(
    car.description,
    DESKTOP_DESCRIPTION_LIMIT,
  );

  const needsDescriptionExpansion =
    car.description.length > MOBILE_DESCRIPTION_LIMIT ||
    car.description.length > DESKTOP_DESCRIPTION_LIMIT;

  const copyVin = async () => {
    try {
      await navigator.clipboard.writeText(car.vin);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      className="
        bg-[#050505]
        pt-4
        pb-5
        sm:pt-9
        lg:pt-12
      "
    >
      <div>
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-4">
          {/* SECTION TITLE */}

          <MainHeadingComponent
            className="
                mt-0!
                text-[16px]!
                md:text-[20px]!
            "
          >
            Opis
          </MainHeadingComponent>

          {/* DESCRIPTION */}

          <div className="relative max-w-180">
            {/* MOBILE DESCRIPTION */}
            <div
              className="
      space-y-5
      text-[14px]
      font-normal
      leading-[1.8]
      text-white/70
      sm:hidden
    "
            >
              {(isDescriptionExpanded ? car.description : mobileDescription)
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* DESKTOP DESCRIPTION */}
            <div
              className="
      hidden
      space-y-5
      text-[15px]
      font-normal
      leading-[1.85]
      text-white/70
      sm:block
    "
            >
              {(isDescriptionExpanded ? car.description : desktopDescription)
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* DESCRIPTION BUTTON */}
            {needsDescriptionExpansion && (
              <div className="mt-5">
                <ButtonExpand
                  onClick={() =>
                    setIsDescriptionExpanded((previous) => !previous)
                  }
                  isExpanded={isDescriptionExpanded}
                />
              </div>
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* SPECIFICATION */}
        {/* ================================================= */}

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <MainHeadingComponent
            className="
                mt-0!
                mb-4
                lg:mb-6
                text-[16px]!
                md:text-[20px]!
            "
          >
            Szczegóły
          </MainHeadingComponent>

          {/* SPECIFICATION GRID */}

          <div
            className="
              grid
              grid-cols-1
              border-y
              border-white/10
              sm:grid-cols-2
            "
          >
            {/* ================================================= */}
            {/* FIRST 6 / 4 DETAILS */}
            {/* ================================================= */}

            {visibleDetails.map((detail, index) => (
              <div
                key={detail.label}
                className={`
                  ${index >= 4 ? "hidden sm:block" : "block"}
                `}
              >
                <SpecificationItem
                  label={detail.label}
                  value={detail.value}
                  icon={detail.icon}
                />
              </div>
            ))}

            {/* ================================================= */}
            {/* HIDDEN DETAILS */}
            {/* ================================================= */}

            {hiddenDetails.map((detail) => (
              <div
                key={detail.label}
                className={isExpanded ? "block" : "hidden"}
              >
                <SpecificationItem
                  label={detail.label}
                  value={detail.value}
                  icon={detail.icon}
                />
              </div>
            ))}

            {/* ================================================= */}
            {/* VIN */}
            {/* ================================================= */}

            <div className={isExpanded ? "flex items-center gap-3" : "hidden"}>
              <SpecificationItem
                label="NR VIN"
                icon={VinIcon}
                content={car.vin}
              />

              <button
                type="button"
                onClick={copyVin}
                className="
                  flex
                  h-9
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  border
                  border-white/10
                  px-3
                  text-[10px]
                  
                  text-[#666]
                  transition-all
                  rounded-[10px]
                  duration-300
                  hover:border-[#b99a5c]/40
                  hover:text-[#d2b878]
                "
              >
                {copied ? "✓ Skopiowano" : "Skopiuj"}
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* SHOW MORE / SHOW LESS */}
          {/* ================================================= */}

          {hasMoreDetails && (
            <div className="mt-5 flex justify-center">
              <ButtonExpand
                onClick={() => setIsExpanded((previous) => !previous)}
                isExpanded={isExpanded}
                hiddenCount={hiddenDetails.length + 1}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
