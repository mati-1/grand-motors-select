import { MainHeadingComponent } from "../../components/headings";
import { LineComponent } from "../../components/line";
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
  return (
    <section
      id="cars-trust"
      className="flex w-full scroll-mt-17 flex-col items-stretch justify-center bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90 "
    >
      <div
        className="
          grid w-full
          grid-cols-1
          gap-0
          border-t border-[#b99a5c]/20
          lg:grid-cols-3
        "
      >
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
