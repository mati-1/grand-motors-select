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
        items-center
        gap-4
        py-3
        text-[12px]
        tracking-[0.04em]
        text-[#999]
        transition-colors
        duration-300
        hover:text-[#ddd]
      "
    >
      <span
        className="
          w-7
          shrink-0
          text-[10px]
          font-normal
          tracking-[0.12em]
          text-[#b99a5c]/45
          transition-colors
          duration-300
          group-hover:text-[#b99a5c]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span>{item}</span>
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
          cursor-pointer
          items-center
          gap-4
          px-1
          py-2
          text-[9px]
          tracking-[0.22em]
          text-[#777]
          transition-colors
          duration-300
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
            ${isExpanded ? "rotate-180" : "rotate-0"}
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
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[0.5fr_1.3fr]
          lg:gap-10
        "
      >
        {/* HEADING */}
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
            WYPOSAŻENIE
          </MainHeadingComponent>
        </div>

        {/* EQUIPMENT */}
        <div className="relative">
          {/* GOLD ACCENT */}
          <div
            className="
              absolute
              -left-5
              top-0
              h-10
              w-px
              bg-linear-to-b
              from-[#b99a5c]/70
              to-transparent
              lg:-left-7
            "
          />

          {/* ================================================== */}
          {/* MOBILE + TABLET — < lg */}
          {/* ================================================== */}

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

          {/* ================================================== */}
          {/* DESKTOP — lg+ */}
          {/* ================================================== */}

          <div className="hidden lg:block">
            <div className="grid grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="pr-6">
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

              {/* RIGHT COLUMN */}
              <div className="border-l border-white/5 pl-6">
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
