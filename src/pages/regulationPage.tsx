import { LogoComponent } from "../components/logo";
import { LineComponent } from "../components/line";

const RegulationSection = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="border-b border-white/10 py-9 first:pt-0 last:border-b-0 sm:py-11">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
        <div className="shrink-0">
          <span className="font-serif text-[14px] text-[#b99a5c]">
            {number}
          </span>
        </div>

        <div className="max-w-190">
          <h2 className="text-[11px] tracking-[0.16em] text-[#ddd] sm:text-[12px]">
            {title}
          </h2>

          <div className="mt-5 flex flex-col gap-4 text-[10px] leading-[1.9] tracking-[0.03em] text-[#777] sm:text-[11px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const RegulationPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f2]">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#030303] px-[5vw]">
        <div className="mx-auto flex h-23 max-w-350 items-center justify-between">
          <LogoComponent showText />

          <a
            href="/"
            className="
              border border-[#b99a5c]/40
              px-4 py-2.5
              text-[8px]
              tracking-[0.15em]
              text-[#b99a5c]
              transition-colors
              hover:bg-[#b99a5c]/10
            "
          >
            WRÓĆ NA STRONĘ
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-[5vw] pb-14 pt-16 sm:pb-18 sm:pt-20 lg:pb-22 lg:pt-24">
          <div className="absolute right-[-10%] top-[-20%] h-100 w-100 rounded-full bg-[#b99a5c]/5 blur-3xl" />

          <div className="relative mx-auto max-w-350">
            <span className="text-[8px] tracking-[0.3em] text-[#b99a5c] sm:text-[9px]">
              GRAND MOTORS SELECT
            </span>

            <h1 className="mt-5 max-w-180 font-serif text-[38px] font-normal leading-[1.05] text-[#ddd] sm:text-[50px] lg:text-[62px]">
              REGULAMIN
              <br />
              <span className="text-[#b99a5c]">SPRZEDAŻY.</span>
            </h1>

            <LineComponent className="my-7 w-30 sm:my-9" />

            <p className="max-w-165 text-[10px] leading-[1.9] tracking-[0.04em] text-[#777] sm:text-[11px]">
              Zasady korzystania z serwisu GRAND MOTORS SELECT oraz podstawowe
              informacje dotyczące procesu sprzedaży samochodów i świadczenia
              usług.
            </p>

            <div className="mt-8 text-[8px] tracking-[0.15em] text-[#444]">
              WERSJA OBOWIĄZUJĄCA OD: 15.09.2026
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-[5vw] pb-20 lg:pb-28">
          <div className="mx-auto max-w-300">
            <RegulationSection number="01" title="POSTANOWIENIA OGÓLNE">
              <p>
                Niniejszy regulamin określa zasady korzystania ze strony
                internetowej GRAND MOTORS SELECT oraz przedstawia podstawowe
                zasady kontaktu, prezentacji oferty i sprzedaży samochodów
                oferowanych przez przedsiębiorcę.
              </p>

              <p>
                GRAND MOTORS SELECT jest marką wykorzystywaną w działalności
                gospodarczej prowadzonej przez Mateusza Michalika.
              </p>

              <p>
                Dane przedsiębiorcy: GRAND MOTORS SELECT, Mateusz Michalik, NIP:
                7361755108, REGON: 543067707.
              </p>
            </RegulationSection>

            <RegulationSection number="02" title="STRONA INTERNETOWA I OFERTA">
              <p>
                Strona internetowa GRAND MOTORS SELECT ma charakter informacyjny
                i prezentuje ofertę samochodów oraz usług związanych z
                przygotowaniem i personalizacją pojazdów.
              </p>

              <p>
                Informacje, zdjęcia, dane techniczne, przebiegi, ceny oraz
                wyposażenie prezentowane przy samochodach mają na celu
                przedstawienie konkretnego egzemplarza.
              </p>

              <p>
                Dostępność samochodu oraz aktualność jego ceny należy
                każdorazowo potwierdzić przed planowanym zakupem.
              </p>

              <p>
                Samo umieszczenie samochodu na stronie internetowej nie oznacza
                zawarcia umowy sprzedaży.
              </p>
            </RegulationSection>

            <RegulationSection number="03" title="KONTAKT I REZERWACJA">
              <p>
                Kontakt w sprawie samochodu może odbywać się telefonicznie,
                mailowo lub za pośrednictwem innych kanałów kontaktu wskazanych
                na stronie.
              </p>

              <p>
                W przypadku zainteresowania konkretnym samochodem klient może
                uzgodnić termin oględzin oraz, jeżeli zostanie to ustalone,
                czasową rezerwację pojazdu.
              </p>

              <p>
                Warunki oraz czas trwania ewentualnej rezerwacji są ustalane
                indywidualnie dla konkretnego samochodu.
              </p>
            </RegulationSection>

            <RegulationSection
              number="04"
              title="OGLĘDZINY I WERYFIKACJA POJAZDU"
            >
              <p>
                Klient ma możliwość zapoznania się ze stanem samochodu przed
                podjęciem decyzji o zakupie.
              </p>

              <p>
                Na życzenie klienta, po wcześniejszym uzgodnieniu, samochód może
                zostać poddany niezależnej kontroli w wybranym serwisie lub
                stacji diagnostycznej.
              </p>

              <p>
                Klient może zadawać pytania dotyczące historii, stanu,
                wyposażenia oraz innych cech konkretnego samochodu.
              </p>

              <p>
                Zalecamy dokładne zapoznanie się ze stanem pojazdu, dokumentacją
                oraz informacjami przekazywanymi przed zawarciem umowy.
              </p>
            </RegulationSection>

            <RegulationSection number="05" title="ZAWARCIE UMOWY SPRZEDAŻY">
              <p>
                Sprzedaż samochodu następuje na podstawie odrębnej umowy
                sprzedaży lub innego właściwego dokumentu potwierdzającego
                transakcję.
              </p>

              <p>
                Szczegółowe warunki transakcji, w tym dane samochodu, cenę,
                sposób płatności oraz informacje dotyczące wydania pojazdu,
                określa dokument sprzedaży dotyczący konkretnego egzemplarza.
              </p>

              <p>
                Przed dokonaniem zakupu klient powinien zapoznać się z treścią
                dokumentów związanych z transakcją.
              </p>
            </RegulationSection>

            <RegulationSection number="06" title="CENA I PŁATNOŚĆ">
              <p>
                Cena samochodu jest wskazana przy konkretnym egzemplarzu lub
                ustalana indywidualnie przed zawarciem transakcji.
              </p>

              <p>
                Dostępne sposoby płatności oraz termin zapłaty są ustalane przed
                finalizacją transakcji.
              </p>

              <p>
                W przypadku pojazdów objętych szczególnymi zasadami rozliczenia
                informacje dotyczące sposobu opodatkowania i dokumentu sprzedaży
                są przekazywane klientowi przed zawarciem umowy.
              </p>
            </RegulationSection>

            <RegulationSection number="07" title="WYDANIE POJAZDU">
              <p>
                Wydanie samochodu następuje po spełnieniu warunków określonych w
                umowie sprzedaży, w szczególności po dokonaniu wymaganej
                płatności.
              </p>

              <p>
                Przy wydaniu pojazdu klient otrzymuje dokumenty oraz wyposażenie
                przekazywane wraz z konkretnym samochodem, zgodnie z ustaleniami
                dokonanymi przy zakupie.
              </p>

              <p>
                Stan oraz wyposażenie pojazdu mogą zostać potwierdzone w
                dokumentacji związanej z wydaniem samochodu.
              </p>
            </RegulationSection>

            <RegulationSection number="08" title="GWARANCJA I ODPOWIEDZIALNOŚĆ">
              <p>
                Jeżeli konkretny samochód jest objęty dodatkową gwarancją,
                informacja o jej udzieleniu, okresie obowiązywania oraz zakresie
                ochrony jest wskazana przy danym pojeździe lub w dokumentach
                przekazywanych klientowi.
              </p>

              <p>
                Szczegółowe warunki gwarancji, w tym zakres odpowiedzialności,
                wyłączenia oraz sposób zgłaszania ewentualnych usterek, określa
                dokument gwarancyjny lub warunki przekazane przy zakupie.
              </p>

              <p>
                Udzielenie gwarancji, jeżeli ma miejsce, nie wyłącza ani nie
                ogranicza praw klienta wynikających z bezwzględnie
                obowiązujących przepisów prawa.
              </p>
            </RegulationSection>

            <RegulationSection number="09" title="REKLAMACJE">
              <p>
                Wszelkie uwagi dotyczące zakupionego samochodu lub realizacji
                transakcji można zgłaszać za pośrednictwem danych kontaktowych
                wskazanych na stronie.
              </p>

              <p>
                Zgłoszenie powinno w miarę możliwości zawierać dane klienta,
                informacje dotyczące pojazdu oraz opis sprawy pozwalający na jej
                rozpatrzenie.
              </p>

              <p>
                Reklamacje są rozpatrywane zgodnie z obowiązującymi przepisami
                prawa oraz warunkami konkretnej umowy.
              </p>
            </RegulationSection>

            <RegulationSection number="10" title="PRAWA KONSUMENTA">
              <p>
                Jeżeli klient dokonuje zakupu jako konsument lub jako osoba,
                której przepisy przyznają ochronę konsumencką, przysługują mu
                prawa wynikające z obowiązujących przepisów prawa.
              </p>

              <p>
                Zakres oraz sposób realizacji tych praw zależy między innymi od
                charakteru transakcji, sposobu jej zawarcia oraz statusu
                klienta.
              </p>

              <p>
                Szczegółowe informacje dotyczące praw konsumenta mogą zostać
                przekazane klientowi przed zawarciem umowy.
              </p>
            </RegulationSection>

            <RegulationSection number="11" title="DANE OSOBOWE">
              <p>
                Dane osobowe klientów i osób kontaktujących się z GRAND MOTORS
                SELECT są przetwarzane zgodnie z obowiązującymi przepisami
                dotyczącymi ochrony danych osobowych.
              </p>

              <p>
                Szczegółowe informacje dotyczące sposobu przetwarzania danych
                osobowych znajdują się w Polityce Prywatności dostępnej na
                stronie internetowej.
              </p>
            </RegulationSection>

            <RegulationSection number="12" title="POSTANOWIENIA KOŃCOWE">
              <p>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie
                mają obowiązujące przepisy prawa.
              </p>

              <p>
                Regulamin może być aktualizowany w przypadku zmian w sposobie
                prowadzenia działalności, funkcjonowaniu strony lub zmian
                obowiązujących przepisów.
              </p>

              <p>
                Aktualna wersja regulaminu jest publikowana na stronie
                internetowej GRAND MOTORS SELECT.
              </p>
            </RegulationSection>

            {/* COMPANY BOX */}
            <div className="mt-12 border border-[#b99a5c]/25 bg-[#b99a5c]/5 p-6 sm:mt-16 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
                    INFORMACJE O SPRZEDAWCY
                  </span>

                  <h3 className="mt-3 font-serif text-[22px] font-normal text-[#ddd]">
                    GRAND MOTORS SELECT
                  </h3>

                  <p className="mt-2 text-[9px] tracking-[0.08em] text-[#777]">
                    Mateusz Michalik
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-[9px] tracking-[0.08em] text-[#666] sm:text-right">
                  <span>NIP&nbsp;&nbsp;736 175 51 08</span>

                  <span>REGON&nbsp;&nbsp;543 067 707</span>

                  <a
                    href="mailto:kontakt@grandmotorsselect.pl"
                    className="transition-colors hover:text-[#d2b878]"
                  >
                    kontakt@grandmotorsselect.pl
                  </a>

                  <a
                    href="tel:+48514137133"
                    className="transition-colors hover:text-[#d2b878]"
                  >
                    +48 514 137 133
                  </a>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div className="mt-10 flex justify-center">
              <a
                href="/"
                className="
                  border border-[#b99a5c]/50
                  px-6 py-3
                  text-[8px]
                  tracking-[0.18em]
                  text-[#b99a5c]
                  transition-all
                  hover:bg-[#b99a5c]/10
                "
              >
                WRÓĆ NA STRONĘ GŁÓWNĄ
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#030303] px-[5vw] py-8">
        <div className="mx-auto flex max-w-350 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[8px] tracking-[0.12em] text-[#444]">
            © {new Date().getFullYear()} GRAND MOTORS SELECT
          </span>

          <div className="flex gap-5 text-[8px] tracking-[0.12em] text-[#444]">
            <a href="/" className="transition-colors hover:text-[#b99a5c]">
              STRONA GŁÓWNA
            </a>

            <a
              href="/polityka-prywatnosci"
              className="transition-colors hover:text-[#b99a5c]"
            >
              POLITYKA PRYWATNOŚCI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
