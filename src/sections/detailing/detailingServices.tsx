import { useState } from "react";

import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { ClickableCard } from "../../components/clickableCard";

import { detailingServices } from "../detailing/services";
import { MainHeadingComponent } from "../../components/headings";

export const DetailingServices = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const activeData = detailingServices.find(
    (service) => service.number === activeService,
  );

  const handleServiceClick = (number: string) => {
    setActiveService((current) => (current === number ? null : number));
  };

  return (
    <section
      id="detailing-services"
      className="
      relative
        scroll-mt-23
        border-y border-white/5
        py-20
         sm:py-27
        px-[5vw]
      "
    >
      <div className="absolute pointer-events-none right-[5%] top-1/2 hidden -translate-y-1/2 text-[18rem] font-extralight leading-none -tracking-widest text-white/1.5 lg:block">
        02
      </div>
      {/* HEADER */}

      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <DetailingSectionLabel number="02">USŁUGI</DetailingSectionLabel>

          <MainHeadingComponent className="text-[clamp(42px,6vw,48px)]!">
            ZAKRES
            <br />
            <span className="text-[#b99a5c]">DETAILINGU.</span>
          </MainHeadingComponent>
        </div>

        <p className="max-w-110 text-[14px] leading-[1.9] text-[#666]">
          Nie każdy samochód potrzebuje tego samego. Dlatego zakres prac
          dobieramy indywidualnie do stanu samochodu i oczekiwanego efektu.
        </p>
      </div>

      {/* SERVICES */}

      <div
        className="
          mt-16
          grid
          grid-cols-1
          border-y border-[#b99a5c]/20
          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {detailingServices.map((service) => (
          <ClickableCard
            key={service.number}
            number={service.number}
            title={service.title}
            text={service.text}
            isOpen={activeService === service.number}
            onOpen={() => handleServiceClick(service.number)}
            variant="big"
          />
        ))}

        {/* WSPÓLNE OKNO */}

        {activeData && (
          <div
            className="
              col-span-full
              border-t border-white/10
              bg-white/2.5
            "
          >
            <div className="px-5 py-7 sm:px-8 sm:py-8 lg:px-[5vw] lg:py-9">
              <div
                className="
                  mx-auto flex w-full max-w-250
                  flex-col gap-5
                  sm:flex-row
                  sm:items-start
                  sm:gap-10
                "
              >
                {/* TITLE */}

                <div className="shrink-0">
                  <span className="text-[11px] tracking-[0.2em] text-[#b99a5c] sm:text-[12px]">
                    {activeData.number} / {activeData.title}
                  </span>
                </div>

                {/* DETAILS */}

                <div className="flex-1">
                  <span className="text-[10px] tracking-[0.25em] text-[#555]">
                    W ZAKRESIE
                  </span>

                  <ul className="mt-4 space-y-3">
                    {activeData.details.map((detail) => (
                      <li
                        key={detail}
                        className="
                          flex gap-3
                          text-[11px]
                          leading-[1.7]
                          tracking-[0.04em]
                          text-[#777]
                          sm:text-[12px]
                        "
                      >
                        <span className="text-[#b99a5c]">—</span>

                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
