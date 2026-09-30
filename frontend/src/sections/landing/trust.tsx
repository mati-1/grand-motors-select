import { MainHeadingComponent } from "../../components/headings";
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
        flex gap-5 rounded-[10px] py-5 transition-colors duration-300
        sm:gap-7 hover:bg-white/2.5
        ${!last ? "border-b border-white/10" : ""}
      `}
    >
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center border border-[#b99a5c]/30 font-normal text-[12px] text-[#d2b878]">
          {number}
        </div>

        {!last && <div className="mt-2 h-full w-px bg-white/10" />}
      </div>

      <div className="pt-0.5">
        <h4 className="text-[12px] text-white sm:text-[14px]">{title}</h4>

        <p className="mt-2 max-w-180 text-[11px] leading-[1.8] text-white/70 sm:text-[13px]">
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
      className="flex w-full scroll-mt-17 flex-col items-stretch justify-center px-[4vw] min-[1200px]:px-[13vw]"
    >
      <div
        className="
          grid w-full
          grid-cols-1
          gap-0
          lg:grid-cols-3
        "
      >
        {/* PROCES ZAKUPU */}
        <div className="col-span-full bg-black/20">
          <div className="py-7 sm:py-9">
            <div className="mb-4 md:mb-8">
              <MainHeadingComponent className="mt-0!">
                Jak wygląda zakup?
              </MainHeadingComponent>
              <p className="max-w-180 mt-2 text-[12px] leading-[1.8] text-[#777] sm:text-[14px]">
                Od pierwszego kontaktu do wydania samochodu — krok po kroku.
              </p>
            </div>

            <div className="flex flex-col">
              <ProcessItem
                number="01"
                title="Wybór samochodu"
                description="Zapoznajesz się z ofertą i otrzymujesz najważniejsze informacje dotyczące konkretnego egzemplarza."
              />

              <ProcessItem
                number="02"
                title="Oględziny samochodu"
                description="Możesz zobaczyć samochód na żywo i dokładnie zapoznać się z jego stanem."
              />

              <ProcessItem
                number="03"
                title="Niezależna weryfikacja"
                description="Na życzenie możesz zlecić dodatkową kontrolę samochodu w wybranym przez siebie serwisie lub stacji diagnostycznej."
              />

              <ProcessItem
                number="04"
                title="Decyzja i formalności"
                description="Po zaakceptowaniu samochodu ustalamy szczegóły transakcji, przygotowujemy dokumenty i finalizujemy zakup."
              />
            </div>

            <CarWarranty />
          </div>
        </div>
      </div>
    </section>
  );
};
