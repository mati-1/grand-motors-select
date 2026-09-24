import { useId, useState } from "react";

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
          transition-all
          duration-300
          ${
            isOpen
              ? "border-[#b99a5c]/30 bg-white/2.5"
              : "hover:border-[#b99a5c]/20"
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
            hover:bg-white/2.5
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
              font-serif
              text-[17px]
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-[#b99a5c]/70 bg-[#b99a5c]/10 text-[#d2b878]"
                  : "border-[#b99a5c]/30 text-[#d2b878]"
              }
            `}
          >
            05
          </div>

          {/* CONTENT */}
          <div className="min-w-0 flex-1">
            <span
              className="
                block
                text-[9px]
                tracking-[0.25em]
                text-[#b99a5c]
              "
            >
              DODATKOWA OCHRONA
            </span>

            <strong
              className={`
                mt-2
                block
                text-[clamp(18px,2vw,24px)]
                font-medium
                tracking-[0.08em]
                transition-colors
                duration-300
                ${isOpen ? "text-[#d2b878]" : "text-[#ddd]"}
              `}
            >
              GWARANCJA
            </strong>

            <span
              className="
                mt-1.5
                block
                text-[10px]
                leading-relaxed
                tracking-[0.06em]
                text-[#777]
                sm:text-[12px]
              "
            >
              Dodatkowa ochrona dostępna dla wybranych samochodów.
            </span>
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
              group-hover:border-[#b99a5c]/40
              group-hover:text-[#d2b878]
              ${isOpen ? "rotate-45 border-[#b99a5c]/40 text-[#d2b878]" : ""}
            `}
          >
            +
          </span>
        </button>
      </article>

      {/* SHARED INFORMATION WINDOW */}
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
        <div className="min-h-0 overflow-hidden">
          <div
            className="
              border-x
              border-b
              border-white/10
              bg-white/2.5
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
                      text-[11px]
                      tracking-[0.2em]
                      text-[#b99a5c]
                    "
                  >
                    05 / GWARANCJA
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div className="max-w-190">
                  <p
                    className="
                      text-[11px]
                      leading-[1.9]
                      tracking-[0.04em]
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
                          text-[10px]
                          tracking-[0.2em]
                          text-[#b99a5c]
                        "
                      >
                        01 / ZAKRES
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[12px]
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
                          text-[10px]
                          tracking-[0.2em]
                          text-[#b99a5c]
                        "
                      >
                        02 / OKRES
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[12px]
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
                          text-[10px]
                          tracking-[0.2em]
                          text-[#b99a5c]
                        "
                      >
                        03 / SZCZEGÓŁY
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[12px]
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
                    bg-[#b99a5c]/60
                  "
                />

                <span
                  className="
                    text-[9px]
                    leading-relaxed
                    tracking-[0.15em]
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
