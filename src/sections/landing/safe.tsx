import { useState } from "react";
import { ClickableCard } from "../../components/clickableCard";
import { SubHeadingComponent } from "../../components/headings";
import { LineComponent } from "../../components/line";

export const SafeSectionComponent = () => {
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
      number: "02",
      title: "MOŻLIWOŚĆ SPRAWDZENIA",
      subtitle: "NIEZALEŻNA KONTROLA AUTA",
      description:
        "Chcemy, abyś mógł podjąć decyzję świadomie. Samochód możesz obejrzeć na miejscu oraz, po wcześniejszym ustaleniu, zlecić jego niezależną kontrolę w wybranym serwisie lub stacji diagnostycznej.",
    },
    {
      number: "03",
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
    <section>
      <LineComponent className="mt-0! self-start" />

      <SubHeadingComponent className="mt-8 pl-[5vw] sm:mt-10">
        U NAS KUPUJESZ BEZPIECZNIE
      </SubHeadingComponent>
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
    </section>
  );
};
