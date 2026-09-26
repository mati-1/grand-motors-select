import { useState } from "react";

import { MainHeadingComponent } from "../../headings";

import type { CarType } from "../cars";

type CarEquipmentProps = {
  car: CarType;
};

export const CarEquipment = ({ car }: CarEquipmentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MOBILE_LIMIT = 6;
  const DESKTOP_LIMIT = 16;

  const mobileVisibleEquipment = car.equipment.slice(0, MOBILE_LIMIT);
  const desktopVisibleEquipment = car.equipment.slice(0, DESKTOP_LIMIT);

  const mobileHiddenEquipment = car.equipment.slice(MOBILE_LIMIT);
  const desktopHiddenEquipment = car.equipment.slice(DESKTOP_LIMIT);

  const hasMoreMobileEquipment = mobileHiddenEquipment.length > 0;

  const hasMoreDesktopEquipment = desktopHiddenEquipment.length > 0;

  return (
    <section
      className="
        border-b
        border-white/5
        bg-[#b99a5c]/20
        bg-linear-to-r
        from-black/90
        via-black/75
        to-black/90
        py-5
        sm:py-16
      "
    >
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        {/* HEADING */}
        <MainHeadingComponent
          className="
            mt-0!
            text-[12px]!
            tracking-[0.3em]
            text-[#b99a5c]
            md:text-[14px]!
          "
        >
          WYPOSAŻENIE
        </MainHeadingComponent>

        {/* EQUIPMENT */}
        <div>
          <div
            className="
              grid
              grid-cols-1
              border-y
              border-white/10
              sm:grid-cols-2
            "
          >
            {/* ========================= */}
            {/* MOBILE — FIRST 6 */}
            {/* ========================= */}

            {mobileVisibleEquipment.map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-white/10
                  p-4
                  text-[12px]
                  tracking-[0.04em]
                  text-[#aaa]
                  transition
                  hover:bg-white/2
                  hover:text-[#ddd]
                  sm:nth-last-[n+2]:border-r
                  lg:hidden
                "
              >
                <span
                  className="
                    font-normal
                    text-[13px]
                    text-[#b99a5c]/70
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item}
              </div>
            ))}

            {/* ========================= */}
            {/* MOBILE — REMAINING */}
            {/* ========================= */}

            {mobileHiddenEquipment.map((item, index) => (
              <div
                key={`mobile-${item}`}
                className={`
                  ${isExpanded ? "flex" : "hidden"}

                  lg:hidden

                  items-center
                  gap-4
                  border-b
                  border-white/10
                  p-4
                  text-[12px]
                  tracking-[0.04em]
                  text-[#aaa]
                  transition
                  hover:bg-white/2
                  hover:text-[#ddd]
                  sm:nth-last-[n+2]:border-r
                `}
              >
                <span
                  className="
                    font-normal
                    text-[13px]
                    text-[#b99a5c]/70
                  "
                >
                  {String(index + MOBILE_LIMIT + 1).padStart(2, "0")}
                </span>

                {item}
              </div>
            ))}

            {/* ========================= */}
            {/* DESKTOP — FIRST 16 */}
            {/* ========================= */}

            {desktopVisibleEquipment.map((item, index) => (
              <div
                key={`desktop-${item}`}
                className="
                  hidden
                  items-center
                  gap-4
                  border-b
                  border-white/10
                  p-4
                  text-[12px]
                  tracking-[0.04em]
                  text-[#aaa]
                  transition
                  hover:bg-white/2
                  hover:text-[#ddd]
                  sm:nth-last-[n+2]:border-r
                  lg:flex
                "
              >
                <span
                  className="
                    font-normal
                    text-[13px]
                    text-[#b99a5c]/70
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item}
              </div>
            ))}

            {/* ========================= */}
            {/* DESKTOP — REMAINING */}
            {/* ========================= */}

            {desktopHiddenEquipment.map((item, index) => (
              <div
                key={`desktop-hidden-${item}`}
                className={`
                  ${isExpanded ? "lg:flex" : "hidden"}

                  items-center
                  gap-4
                  border-b
                  border-white/10
                  p-4
                  text-[12px]
                  tracking-[0.04em]
                  text-[#aaa]
                  transition
                  hover:bg-white/2
                  hover:text-[#ddd]
                  sm:nth-last-[n+2]:border-r
                `}
              >
                <span
                  className="
                    font-normal
                    text-[13px]
                    text-[#b99a5c]/70
                  "
                >
                  {String(index + DESKTOP_LIMIT + 1).padStart(2, "0")}
                </span>

                {item}
              </div>
            ))}
          </div>

          {/* ========================= */}
          {/* MOBILE TOGGLE */}
          {/* ========================= */}

          {hasMoreMobileEquipment && (
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
                    : `POKAŻ WIĘCEJ (${mobileHiddenEquipment.length})`}
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

          {/* ========================= */}
          {/* DESKTOP TOGGLE */}
          {/* ========================= */}

          {hasMoreDesktopEquipment && (
            <div className="mt-5 hidden justify-center lg:flex">
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
                    : `POKAŻ WIĘCEJ (${desktopHiddenEquipment.length})`}
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
