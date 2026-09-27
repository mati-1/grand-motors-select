import { useState } from "react";

import { MainHeadingComponent } from "../../headings";

import type { CarType } from "../cars";

type CarEquipmentProps = {
  car: CarType;
};

const MOBILE_LIMIT = 6;
const DESKTOP_LIMIT = 16;

export const CarEquipment = ({ car }: CarEquipmentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mobileEquipment = car.equipment.slice(0, MOBILE_LIMIT);
  const mobileRemaining = car.equipment.slice(MOBILE_LIMIT);

  const desktopEquipment = car.equipment.slice(0, DESKTOP_LIMIT);
  const desktopRemaining = car.equipment.slice(DESKTOP_LIMIT);

  const hasMoreMobile = mobileRemaining.length > 0;
  const hasMoreDesktop = desktopRemaining.length > 0;

  const renderEquipmentItem = (item: string, index: number, key: string) => (
    <div
      key={key}
      className="
      group
      flex
      min-h-11
      items-center
      gap-4
      border-b
      border-white/6
      py-3
      transition-colors
      duration-300
    "
    >
      <span
        className="
        w-6
        shrink-0
        text-[9px]
        font-normal
        tracking-[0.12em]
        text-[#b99a5c]/50
        transition-colors
        duration-300
        group-hover:text-[#b99a5c]
      "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="
        text-[12px]
        font-normal
        leading-normal
        tracking-[0.02em]
        text-[#888]
        transition-colors
        duration-300
        group-hover:text-[#c8c8c8]
      "
      >
        {item}
      </span>
    </div>
  );

  const renderToggle = (hiddenCount: number, className: string) => (
    <div className={className}>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="
          group
          inline-flex
          min-h-10
          cursor-pointer
          items-center
          gap-3
          border
          border-white/10
          px-4
          text-[9px]
          font-normal
          tracking-[0.18em]
          text-[#777]
          transition-all
          duration-300
          hover:border-[#b99a5c]/40
          hover:bg-white/1.5
          hover:text-[#d2b878]
        "
      >
        <span>
          {isExpanded ? "POKAŻ MNIEJ" : `POKAŻ WIĘCEJ (${hiddenCount})`}
        </span>

        <span
          className={`
            text-[#b99a5c]
            transition-transform
            duration-300
            ${isExpanded ? "rotate-180" : ""}
          `}
        >
          ↓
        </span>
      </button>
    </div>
  );

  return (
    <section
      className="
        bg-[#050505]
        py-6
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
flex flex-col gap-6
        "
      >
        {/* HEADING */}
        <MainHeadingComponent
          className="
                mt-0!
                font-normal!
                
                text-[#b99a5c]
                text-[16px]!
                md:text-[20px]!
              "
        >
          Wyposażenie
        </MainHeadingComponent>

        {/* CONTENT */}
        <div className="relative">
          <div
            className="
              absolute
              -left-4
              top-0
              h-10
              w-px
              bg-linear-to-b
              from-[#b99a5c]/60
              to-transparent
              lg:-left-6
            "
          />

          {/* MOBILE + TABLET */}
          <div className="lg:hidden">
            {mobileEquipment.map((item, index) =>
              renderEquipmentItem(item, index, `mobile-${item}-${index}`),
            )}

            {mobileRemaining.map((item, index) => (
              <div
                key={`mobile-hidden-${item}-${index}`}
                className={isExpanded ? "block" : "hidden"}
              >
                {renderEquipmentItem(
                  item,
                  index + MOBILE_LIMIT,
                  `mobile-extra-${item}-${index}`,
                )}
              </div>
            ))}

            {hasMoreMobile &&
              renderToggle(mobileRemaining.length, "mt-5 flex justify-center")}
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2">
              {/* LEFT */}
              <div className="pr-8">
                {desktopEquipment
                  .filter((_, index) => index % 2 === 0)
                  .map((item, index) =>
                    renderEquipmentItem(
                      item,
                      index * 2,
                      `desktop-left-${item}-${index}`,
                    ),
                  )}

                {desktopRemaining
                  .filter((_, index) => index % 2 === 0)
                  .map((item, index) => (
                    <div
                      key={`desktop-extra-left-${item}-${index}`}
                      className={isExpanded ? "block" : "hidden"}
                    >
                      {renderEquipmentItem(
                        item,
                        DESKTOP_LIMIT + index * 2,
                        `desktop-hidden-left-${item}-${index}`,
                      )}
                    </div>
                  ))}
              </div>

              {/* RIGHT */}
              <div className="border-l border-white/6 pl-8">
                {desktopEquipment
                  .filter((_, index) => index % 2 === 1)
                  .map((item, index) =>
                    renderEquipmentItem(
                      item,
                      index * 2 + 1,
                      `desktop-right-${item}-${index}`,
                    ),
                  )}

                {desktopRemaining
                  .filter((_, index) => index % 2 === 1)
                  .map((item, index) => (
                    <div
                      key={`desktop-extra-right-${item}-${index}`}
                      className={isExpanded ? "block" : "hidden"}
                    >
                      {renderEquipmentItem(
                        item,
                        DESKTOP_LIMIT + index * 2 + 1,
                        `desktop-hidden-right-${item}-${index}`,
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {hasMoreDesktop &&
              renderToggle(desktopRemaining.length, "mt-6 flex justify-center")}
          </div>
        </div>
      </div>
    </section>
  );
};
