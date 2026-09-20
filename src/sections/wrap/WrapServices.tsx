import { useState } from "react";

import { MainHeadingComponent } from "../../components/headings";
import { ClickableCard } from "../../components/clickableCard";
import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";

const wrapServices = [
  {
    number: "01",
    title: "FULL WRAP",
    subtitle: "PEŁNA ZMIANA KOLORU",
    text: "Kompletne oklejenie samochodu pozwalające całkowicie zmienić jego kolor i charakter bez ingerencji w oryginalny lakier.",
  },
  {
    number: "02",
    title: "PARTIAL WRAP",
    subtitle: "OKLEJENIE ELEMENTÓW",
    text: "Wybrane elementy nadwozia — dach, maska, lusterka, słupki lub inne detale — dopasowane do konkretnego projektu.",
  },
  {
    number: "03",
    title: "CHROME DELETE",
    subtitle: "USUNIĘCIE CHROMU",
    text: "Zmiana chromowanych elementów na czarne lub inne wykończenie, które nadaje samochodowi bardziej spójny i nowoczesny wygląd.",
  },
  {
    number: "04",
    title: "DETAIL WRAP",
    subtitle: "DETAL MA ZNACZENIE",
    text: "Precyzyjne oklejenie mniejszych elementów i detali, które pozwalają dopracować finalny wygląd samochodu.",
  },
];

export const WrapServices = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const activeData = wrapServices.find(
    (service) => service.number === activeService,
  );

  const handleServiceClick = (number: string) => {
    setActiveService((current) => (current === number ? null : number));
  };

  return (
    <section
      id="wrap-services"
      className="
        scroll-mt-23
        border-y
        border-white/5
        px-[5vw]
        py-16
        sm:py-24
        bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      <div>
        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <DetailingSectionLabel number="02">ZAKRES</DetailingSectionLabel>

            <MainHeadingComponent className="mt-6 text-[clamp(42px,6vw,48px)]!">
              USŁUGI
              <br />
              <span className="text-[#d2b878]">WRAP.</span>
            </MainHeadingComponent>
          </div>

          <p className="max-w-110 text-[13px] leading-[1.9] text-[#666]">
            Zakres oklejenia dobieramy do samochodu, jego stylistyki oraz
            oczekiwanego efektu. Nie każdy projekt wymaga pełnego wrapu.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            border-y
            border-[#b99a5c]/20
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {wrapServices.map((service) => (
            <ClickableCard
              key={service.number}
              variant="small"
              number={service.number}
              title={service.title}
              subtitle={service.subtitle}
              isOpen={activeService === service.number}
              onOpen={() => handleServiceClick(service.number)}
            />
          ))}
        </div>

        {/* SHARED INFO */}

        <div
          className={`
            grid
            transition-all
            duration-500
            ${
              activeData
                ? "mt-0 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            {activeData && (
              <div
                className="
                  border-b
                  border-x
                  border-[#b99a5c]/20
                  bg-[#090909]
                  px-6
                  py-7
                  sm:px-8
                "
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-[12px] text-[#b99a5c]">
                    {activeData.number}
                  </span>

                  <div>
                    <h3 className="text-[11px] tracking-[0.2em] text-[#ddd]">
                      {activeData.title}
                    </h3>

                    <p className="mt-3 max-w-160 text-[11px] leading-[1.8] text-[#666]">
                      {activeData.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
