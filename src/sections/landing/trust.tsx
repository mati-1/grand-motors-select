import { useState } from "react";

import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { LineComponent } from "../../components/line";
import { ClickableCard } from "../../components/clickableCard";
import { CarWarranty } from "../../components/CarWarranty";

type ProcessItemProps = {
  number: string;
  title: string;
  description: string;
  last?: boolean;
};

export const ProcessItem = ({
  number,
  title,
  description,
  last = false,
}: ProcessItemProps) => {
  return (
    <div
      className={`
        flex gap-5 py-5 transition-colors duration-300
        sm:gap-7 hover:bg-white/2.5
        ${!last ? "border-b border-white/10" : ""}
      `}
    >
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center border border-[#b99a5c]/30 font-serif text-[12px] text-[#d2b878]">
          {number}
        </div>

        {!last && <div className="mt-2 h-full w-px bg-white/10" />}
      </div>

      <div className="pt-0.5">
        <h4 className="text-[11px] tracking-[0.15em] text-[#ddd] sm:text-[13px]">
          {title}
        </h4>

        <p className="mt-2 max-w-180 text-[10px] leading-[1.8] tracking-[0.04em] text-[#777] sm:text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export const TrustComponent = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const trustItems = [
    {
      number: "01",
      title: "WYSELEKCJONOWANE AUTA",
      subtitle: "HISTORIA • STAN • SPECYFIKACJA",
      description:
        "Nie budujemy oferty na ilości. Wybieramy samochody pod kątem ich historii, stanu technicznego, specyfikacji oraz ogólnej kondycji. Do oferty trafiają egzemplarze, które sami chcielibyśmy postawić w swoim garażu.",
    },
    {
      number: "03",
      title: "MOŻLIWOŚĆ SPRAWDZENIA",
      subtitle: "NIEZALEŻNA KONTROLA AUTA",
      description:
        "Chcemy, abyś mógł podjąć decyzję świadomie. Samochód możesz obejrzeć na miejscu oraz, po wcześniejszym ustaleniu, zlecić jego niezależną kontrolę w wybranym serwisie lub stacji diagnostycznej.",
    },
    {
      number: "04",
      title: "PRZEJRZYSTY ZAKUP",
      subtitle: "JASNE ZASADY TRANSAKCJI",
      description:
        "Przed zakupem otrzymujesz najważniejsze informacje dotyczące samochodu i warunków transakcji. Omawiamy z Tobą szczegóły, przygotowujemy niezbędne dokumenty i spokojnie przeprowadzamy Cię przez cały proces zakupu.",
    },
  ];

  const activeData = trustItems.find((item) => item.number === activeItem);

  const handleItemClick = (number: string) => {
    setActiveItem((current) => (current === number ? null : number));
  };

  return (
    <section
      id="cars-trust"
      className="flex w-full scroll-mt-22 flex-col items-stretch justify-center           bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90 "
    >
      <LineComponent className="mt-0! self-start" />

      <SubHeadingComponent className="mt-8 pl-[5vw] sm:mt-10">
        U NAS KUPUJESZ BEZPIECZNIE
      </SubHeadingComponent>

      <div
        className="
          mt-5 grid w-full
          grid-cols-1
          gap-0
          border-t border-[#b99a5c]/20
          lg:grid-cols-3
        "
      >
        {trustItems.map((item) => (
          <ClickableCard
            variant="small"
            key={item.number}
            number={item.number}
            title={item.title}
            subtitle={item.subtitle}
            isOpen={activeItem === item.number}
            onOpen={() => handleItemClick(item.number)}
          />
        ))}

        {/* DESKTOP - jedno wspólne okno pod wszystkimi bloczkami */}
        {activeData && (
          <div className="col-span-full hidden border-t border-white/10 bg-white/2.5 xl:block">
            <div className="px-8 py-8 lg:px-[5vw] lg:py-9">
              <div className="mx-auto flex w-full max-w-250 flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
                <div className="shrink-0">
                  <span className="text-[12px] tracking-[0.2em] text-[#b99a5c]">
                    {activeData.number} / {activeData.title}
                  </span>
                </div>

                <div className="max-w-190">
                  <p className="text-[13px] leading-[1.9] tracking-[0.04em] text-[#999]">
                    {activeData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE / TABLET - opis pod wybranym bloczkiem */}
        {activeData && (
          <div className="col-span-full border-t border-white/10 bg-white/2.5 xl:hidden">
            <div className="px-5 py-7 sm:px-8 sm:py-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
                <div className="shrink-0">
                  <span className="text-[10px] tracking-[0.2em] text-[#b99a5c]">
                    {activeData.number} / {activeData.title}
                  </span>
                </div>

                <div className="max-w-190">
                  <p className="text-[11px] leading-[1.9] tracking-[0.04em] text-[#999] sm:text-[11px]">
                    {activeData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROCES ZAKUPU */}
        <div className="col-span-full border-t border-[#b99a5c]/20 bg-black/20">
          <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-[5vw]">
            <div className="my-4 md:my-8">
              <MainHeadingComponent>
                JAK WYGLĄDA <span className="text-[#d2b878]">ZAKUP?</span>{" "}
              </MainHeadingComponent>
              <p className="max-w-180 text-[11px] leading-[1.8] tracking-[0.04em] text-[#777] sm:text-[12px]">
                Od pierwszego kontaktu do wydania samochodu — krok po kroku.
              </p>
            </div>

            <div className="flex flex-col">
              <ProcessItem
                number="01"
                title="WYBÓR SAMOCHODU"
                description="Zapoznajesz się z ofertą i otrzymujesz najważniejsze informacje dotyczące konkretnego egzemplarza."
              />

              <ProcessItem
                number="02"
                title="OGLĘDZINY SAMOCHODU"
                description="Możesz zobaczyć samochód na żywo i dokładnie zapoznać się z jego stanem."
              />

              <ProcessItem
                number="03"
                title="NIEZALEŻNA WERYFIKACJA"
                description="Na życzenie możesz zlecić dodatkową kontrolę samochodu w wybranym przez siebie serwisie lub stacji diagnostycznej."
              />

              <ProcessItem
                number="04"
                title="DECYZJA I FORMALNOŚCI"
                description="Po zaakceptowaniu samochodu ustalamy szczegóły transakcji, przygotowujemy dokumenty i finalizujemy zakup."
              />
            </div>

            <CarWarranty />
          </div>
        </div>
      </div>

      <LineComponent className="self-end" type="right" />
    </section>
  );
};
