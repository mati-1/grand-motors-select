import { useId, useState } from "react";
import { SubHeadingComponent } from "./headings";

export const CarWarranty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="mt-8 sm:mt-10">
      {/* WARRANTY CARD */}
      <article
        className={`
          group
          border
          border-white/10
          bg-[#080808]
          rounded-[10px]
          transition-all
          duration-300
          ${
            isOpen
              ? "border-[#4C9FE5]/30 bg-[ext-[#E8E9E7]/2.5"
              : "hover:border-[#4C9FE5]/20"
          }
        `}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="
            flex
            w-full
            cursor-pointer
            items-center
            gap-5
            p-5
            text-left
            transition-all
            duration-300
            hover:bg-[ext-[#E8E9E7]/2.5
            sm:p-7
          "
        >
          {/* NUMBER */}
          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              border
              font-normal
              text-[17px]
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-[#4C9FE5]/70 bg-[#4C9FE5]/10 text-[#4C9FE5]"
                  : "border-[#4C9FE5]/30 text-[#4C9FE5]"
              }
            `}
          >
            05
          </div>

          {/* CONTENT */}
          <div className="min-w-0 ml-2 flex-1">
            <strong
              className={`
                mt-2
                block
                text-[clamp(16px,2vw,22px)]
                transition-colors
                duration-300
                ${isOpen ? "text-[#4C9FE5]" : "text-[#ddd]"}
              `}
            >
              Gwarancja
            </strong>

            <SubHeadingComponent className="text-[#E8E9E7]/70 text-[13px]! mt-1">
              Dodatkowa ochrona dostępna dla wybranych samochodów.
            </SubHeadingComponent>
          </div>

          {/* PLUS */}
          <span
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              border
              border-white/10
              text-[16px]
              font-light
              text-[#888]
              transition-all
              duration-300
              group-hover:border-[#4C9FE5]/40
              group-hover:text-[#4C9FE5]
              ${isOpen ? "rotate-45 border-[#4C9FE5]/40 text-[#4C9FE5]" : ""}
            `}
          >
            +
          </span>
        </button>
      </article>

      <div
        id={contentId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden rounded-[10px]">
          <div
            className="
              bg-[ext-[#E8E9E7]/2.5
            "
          >
            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <div
                className="
                  mx-auto
                  flex
                  w-full
                  max-w-250
                  flex-col
                  gap-6
                  sm:flex-row
                  sm:items-start
                  sm:gap-10
                "
              >
                {/* LABEL */}
                <div className="shrink-0">
                  <span
                    className="
                      text-[13px]
                      text-[#4C9FE5]
                    "
                  >
                    05 / GWARANCJA
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div className="max-w-190">
                  <p
                    className="
                      text-[12px]
                      leading-[1.9]
                      text-[#999]
                      sm:text-[12px]
                    "
                  >
                    Wybrane samochody są objęte gwarancją na zasadach
                    określonych dla konkretnego egzemplarza. Szczegółowe warunki
                    ochrony przedstawiamy przed zakupem.
                  </p>

                  {/* DETAILS */}
                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-1
                      border-t
                      border-white/8
                      pt-5
                      sm:grid-cols-3
                    "
                  >
                    {/* 01 */}
                    <div
                      className="
                        pb-5
                        sm:border-r
                        sm:border-white/8
                        sm:pb-0
                        sm:pr-6
                      "
                    >
                      <span
                        className="
                          block
                          text-[12px]
                          text-[#4C9FE5]
                        "
                      >
                        01 / ZAKRES
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[13px]
                          text-[#888]
                        "
                      >
                        Indywidualnie określony
                      </span>
                    </div>

                    {/* 02 */}
                    <div
                      className="
                        border-t
                        border-white/8
                        py-5
                        sm:border-t-0
                        sm:border-r
                        sm:px-6
                        sm:py-0
                      "
                    >
                      <span
                        className="
                          block
                          text-[12px]
                          text-[#4C9FE5]
                        "
                      >
                        02 / OKRES
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[13px]
                          text-[#888]
                        "
                      >
                        Według warunków sprzedaży
                      </span>
                    </div>

                    {/* 03 */}
                    <div
                      className="
                        border-t
                        border-white/8
                        pt-5
                        sm:border-t-0
                        sm:pl-6
                        sm:pt-0
                      "
                    >
                      <span
                        className="
                          block
                          text-[12px]
                          
                          text-[#4C9FE5]
                        "
                      >
                        03 / SZCZEGÓŁY
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[13px]
                          text-[#888]
                        "
                      >
                        Dla konkretnego samochodu
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div
                className="
                  mx-auto
                  mt-6
                  flex
                  w-full
                  max-w-250
                  items-start
                  gap-3
                  border-t
                  border-white/6
                  pt-5
                "
              >
                <span
                  className="
                    mt-1.5
                    h-px
                    w-5
                    shrink-0
                    bg-[#4C9FE5]/60
                  "
                />

                <span
                  className="
                    text-[11px]
                    leading-relaxed
                    text-[#666]
                  "
                >
                  SZCZEGÓŁOWE WARUNKI GWARANCJI DOSTĘPNE PRZY KONKRETNYM
                  SAMOCHODZIE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
