import { useState } from "react";

import { MainHeadingComponent } from "../../headings";

import type { CarType } from "../cars";
import { ButtonExpand } from "../../button";

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
        text-[#4C9FE5]/50
        transition-colors
        duration-300
        group-hover:text-[#4C9FE5]
      "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="
        text-[13px]
        font-normal
        leading-normal
        
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
      <ButtonExpand
        onClick={() => setIsExpanded((previous) => !previous)}
        isExpanded={isExpanded}
        hiddenCount={hiddenCount}
      />
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
flex flex-col gap-3 md:gap-6
        "
      >
        {/* HEADING */}
        <MainHeadingComponent
          className="
                mt-0!
                text-[16px]!
                md:text-[20px]!
              "
        >
          Wyposażenie
        </MainHeadingComponent>

        {/* CONTENT */}
        <div className="relative">
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
