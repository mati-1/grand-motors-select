import { useState } from "react";

import { MainHeadingComponent } from "../../headings";
import type { CarType } from "../cars";
import { SpecificationItem } from "./carInfo";

type CarDescriptionProps = {
  car: CarType;
};

export const CarDescription = ({ car }: CarDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const details = [
    ["NADWOZIE", car.details.body],
    ["KOLOR", car.details.color],
    ["WNĘTRZE", car.details.interior],
    ["LICZBA MIEJSC", car.details.seats],
    ["LICZBA DRZWI", car.details.doors],
    ["KRAJ POCHODZENIA", car.details.country],
    ["PALIWO", car.fuel],
    ["FAKTURA", car.invoice],
    ["CARVERTICAL", car.carvertical ? "Dostępny" : "Brak"],
  ];

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

  const firstDetails = details.slice(0, 4);
  const hiddenDetails = details.slice(4);

  const hasMoreDetails = hiddenDetails.length > 0;

  return (
    <section
      className="
        border-t
        border-white/5
        bg-[#b99a5c]/20
        bg-linear-to-r
        from-black/90
        via-black/75
        to-black/90
        py-6
        sm:py-16
      "
    >
      <div>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1.3fr]">
          <div>
            <MainHeadingComponent
              className="
                mt-0!
                text-[12px]!
                tracking-[0.3em]
                text-[#b99a5c]
                md:text-[14px]!
              "
            >
              OPIS SAMOCHODU
            </MainHeadingComponent>
          </div>

          <div className="relative max-w-180">
            {/* SMALL GOLD LINE */}
            <div
              className="
                absolute
                -left-5
                top-1
                h-10
                w-px
                bg-linear-to-b
                from-[#b99a5c]/70
                to-transparent
                lg:-left-7
              "
            />

            <p
              className="
                text-[14px]
                leading-[1.9]
                tracking-[0.015em]
                text-[#888]
                sm:text-[15px]
              "
            >
              {car.description}
            </p>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-14">
          {/* SECTION LABEL */}
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
                SPECYFIKACJA
              </span>
            </div>
          </div>

          {/* SPECIFICATION GRID */}
          <div
            className="
              grid
              grid-cols-1
              border-y
              border-white/10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* FIRST 6 — ALWAYS VISIBLE */}
            {firstDetails.map(([label, value]) => (
              <SpecificationItem key={label} label={label} value={value} />
            ))}

            {/* REMAINING DETAILS */}
            {hiddenDetails.map(([label, value]) => (
              <div
                key={label}
                className={`
                  ${isExpanded ? "block" : "hidden"}

                  lg:block
                `}
              >
                <SpecificationItem label={label} value={value} />
              </div>
            ))}

            {/* VIN */}
            <div
              className={`
                ${isExpanded ? "block" : "hidden"}

                lg:block
              `}
            >
              <SpecificationItem
                label="NR VIN"
                content={
                  <div className="flex flex-row items-center gap-6">
                    <span className="min-w-0 break-all">{car.vin}</span>

                    <button
                      type="button"
                      onClick={copyVin}
                      className="
                        flex
                        shrink-0
                        cursor-pointer
                        items-center
                        gap-2
                        border
                        border-white/10
                        px-3
                        py-2
                        text-[8px]
                        tracking-[0.2em]
                        text-[#666]
                        transition-all
                        duration-300
                        hover:border-[#b99a5c]/40
                        hover:text-[#d2b878]
                      "
                    >
                      <span>{copied ? "✓ SKOPIOWANO" : "SKOPIUJ"}</span>
                    </button>
                  </div>
                }
              />
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          {hasMoreDetails && (
            <div className="mt-5 flex justify-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="
                  group
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-4
                  border
                  border-white/10
                  px-5
                  py-3
                  text-[9px]
                  tracking-[0.22em]
                  text-[#777]
                  transition-all
                  duration-300
                  hover:border-[#b99a5c]/40
                  hover:bg-[#b99a5c]/5
                  hover:text-[#d2b878]
                "
              >
                <span>
                  {isExpanded
                    ? "POKAŻ MNIEJ"
                    : `POKAŻ WIĘCEJ (${hiddenDetails.length + 1})`}
                </span>

                <span
                  className={`
                    text-[#b99a5c]
                    transition-transform
                    duration-300
                    ${isExpanded ? "rotate-180" : "rotate-0"}
                  `}
                >
                  ↓
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
