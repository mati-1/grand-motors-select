import { LogoComponent } from "../components/logo";
import { LineComponent } from "../components/line";

const PrivacySection = ({
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

export const PrivacyPolicyPage = () => {
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

            <h1 className="mt-5 max-w-190 font-serif text-[38px] font-normal leading-[1.05] text-[#ddd] sm:text-[50px] lg:text-[62px]">
              POLITYKA
              <br />
              <span className="text-[#b99a5c]">PRYWATNOŚCI.</span>
            </h1>

            <LineComponent className="my-7 w-30 sm:my-9" />

            <p className="max-w-165 text-[10px] leading-[1.9] tracking-[0.04em] text-[#777] sm:text-[11px]">
              Informacje dotyczące przetwarzania danych osobowych osób
              korzystających ze strony internetowej GRAND MOTORS SELECT oraz
              kontaktujących się z nami.
            </p>

            <div className="mt-8 text-[8px] tracking-[0.15em] text-[#444]">
              WERSJA OBOWIĄZUJĄCA OD: 15.09.2026
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-[5vw] pb-20 lg:pb-28">
          <div className="mx-auto max-w-300">
            <PrivacySection number="01" title="ADMINISTRATOR DANYCH OSOBOWYCH">
              <p>
                Administratorem danych osobowych przetwarzanych w związku z
                korzystaniem ze strony GRAND MOTORS SELECT jest Mateusz
                Michalik, prowadzący działalność gospodarczą pod marką GRAND
                MOTORS SELECT.
              </p>

              <p>
                Dane identyfikacyjne przedsiębiorcy: NIP 7361755108, REGON
                543067707.
              </p>

              <p>
                W sprawach związanych z przetwarzaniem danych osobowych można
                skontaktować się z administratorem za pośrednictwem adresu
                e-mail:
              </p>

              <p className="text-[#aaa]">kontakt@grandmotorsselect.pl</p>
            </PrivacySection>

            <PrivacySection number="02" title="JAKIE DANE MOŻEMY PRZETWARZAĆ">
              <p>
                W zależności od sposobu kontaktu lub korzystania ze strony
                możemy przetwarzać w szczególności dane takie jak imię i
                nazwisko, numer telefonu, adres e-mail oraz informacje
                przekazane przez użytkownika w treści wiadomości.
              </p>

              <p>
                Jeżeli kontakt dotyczy konkretnego samochodu lub usługi, możemy
                również przetwarzać informacje przekazane przez użytkownika w
                związku z zainteresowaniem danym pojazdem lub usługą.
              </p>

              <p>
                Zakres przetwarzanych danych zależy od informacji, które
                użytkownik zdecyduje się nam przekazać.
              </p>
            </PrivacySection>

            <PrivacySection number="03" title="CEL PRZETWARZANIA DANYCH">
              <p>
                Dane osobowe mogą być przetwarzane w celu udzielenia odpowiedzi
                na przesłane zapytanie, prowadzenia korespondencji oraz
                przedstawienia informacji dotyczących oferowanych samochodów i
                usług.
              </p>

              <p>
                Dane mogą być również przetwarzane w celu przygotowania lub
                realizacji umowy, obsługi transakcji, realizacji obowiązków
                prawnych oraz dochodzenia lub obrony przed ewentualnymi
                roszczeniami.
              </p>

              <p>
                W przypadku wyrażenia odpowiedniej zgody dane mogą być
                wykorzystywane również w innych celach wskazanych w treści
                zgody.
              </p>
            </PrivacySection>

            <PrivacySection number="04" title="PODSTAWA PRAWNA PRZETWARZANIA">
              <p>
                Dane osobowe są przetwarzane na podstawie odpowiednich przepisów
                dotyczących ochrony danych osobowych, w szczególności przepisów
                RODO.
              </p>

              <p>
                Podstawą przetwarzania może być między innymi zgoda użytkownika,
                konieczność wykonania umowy lub podjęcia działań przed jej
                zawarciem, obowiązek prawny administratora albo prawnie
                uzasadniony interes administratora.
              </p>
            </PrivacySection>

            <PrivacySection number="05" title="KONTAKT Z GRAND MOTORS SELECT">
              <p>
                Jeżeli użytkownik kontaktuje się z nami telefonicznie, mailowo
                lub za pośrednictwem formularza kontaktowego, dane przekazane w
                ramach tego kontaktu mogą być przetwarzane w celu obsługi
                zapytania.
              </p>

              <p>
                Dane mogą być przechowywane przez okres niezbędny do prowadzenia
                korespondencji, a następnie przez okres wymagany przepisami
                prawa lub niezbędny do zabezpieczenia ewentualnych roszczeń.
              </p>
            </PrivacySection>

            <PrivacySection number="06" title="ODBIORCY DANYCH">
              <p>
                Dane osobowe mogą być przekazywane podmiotom, które wspierają
                nas w prowadzeniu działalności, jeżeli jest to niezbędne do
                realizacji określonego celu.
              </p>

              <p>
                Mogą to być w szczególności dostawcy usług hostingowych, poczty
                elektronicznej, systemów informatycznych, usług księgowych,
                prawnych lub innych usług niezbędnych do prowadzenia
                działalności.
              </p>

              <p>
                Dane nie są sprzedawane innym podmiotom w celach marketingowych.
              </p>
            </PrivacySection>

            <PrivacySection number="07" title="OKRES PRZECHOWYWANIA DANYCH">
              <p>
                Dane osobowe przechowujemy przez okres niezbędny do realizacji
                celu, dla którego zostały zebrane.
              </p>

              <p>
                Jeżeli dane są związane z zawartą umową lub obowiązkami
                wynikającymi z przepisów prawa, mogą być przechowywane przez
                okres wymagany przez odpowiednie przepisy.
              </p>

              <p>
                Dane przetwarzane na podstawie zgody mogą być przechowywane do
                czasu jej wycofania, chyba że istnieje inna podstawa prawna
                uzasadniająca dalsze przetwarzanie.
              </p>
            </PrivacySection>

            <PrivacySection number="08" title="PRAWA UŻYTKOWNIKA">
              <p>
                W zakresie przewidzianym przepisami prawa użytkownikowi
                przysługuje prawo dostępu do swoich danych osobowych, otrzymania
                ich kopii, sprostowania danych oraz żądania ich usunięcia.
              </p>

              <p>
                Użytkownik może również mieć prawo do ograniczenia
                przetwarzania, wniesienia sprzeciwu wobec przetwarzania,
                przenoszenia danych oraz wycofania udzielonej zgody.
              </p>

              <p>
                Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania,
                którego dokonano przed jej wycofaniem.
              </p>
            </PrivacySection>

            <PrivacySection number="09" title="SKARGA DO ORGANU NADZORCZEGO">
              <p>
                Jeżeli użytkownik uzna, że przetwarzanie jego danych osobowych
                narusza obowiązujące przepisy, może skorzystać z prawa
                wniesienia skargi do właściwego organu nadzorczego zajmującego
                się ochroną danych osobowych.
              </p>
            </PrivacySection>

            <PrivacySection number="10" title="PLIKI COOKIES">
              <p>
                Strona internetowa może wykorzystywać pliki cookies oraz podobne
                technologie w celu zapewnienia prawidłowego działania serwisu,
                zapamiętywania określonych ustawień oraz analizowania sposobu
                korzystania ze strony.
              </p>

              <p>
                Zakres wykorzystywanych plików cookies zależy od faktycznych
                narzędzi i usług zastosowanych na stronie.
              </p>

              <p>
                Użytkownik może zarządzać ustawieniami plików cookies za pomocą
                ustawień swojej przeglądarki internetowej, a w przypadku
                zastosowania na stronie dedykowanego mechanizmu zgód — również
                za jego pośrednictwem.
              </p>
            </PrivacySection>

            <PrivacySection
              number="11"
              title="NARZĘDZIA ANALITYCZNE I MARKETINGOWE"
            >
              <p>
                Jeżeli na stronie zostaną wdrożone narzędzia analityczne,
                reklamowe lub marketingowe podmiotów zewnętrznych, informacje
                dotyczące ich działania oraz podstawy prawnej korzystania z nich
                powinny zostać przedstawione użytkownikowi w odpowiednim
                komunikacie dotyczącym cookies i zgód.
              </p>

              <p>
                Zakres wykorzystywanych narzędzi może ulegać zmianie wraz z
                rozwojem strony internetowej.
              </p>
            </PrivacySection>

            <PrivacySection number="12" title="BEZPIECZEŃSTWO DANYCH">
              <p>
                Administrator stosuje odpowiednie środki techniczne i
                organizacyjne mające na celu ochronę danych osobowych przed
                przypadkowym lub niezgodnym z prawem zniszczeniem, utratą,
                zmianą, nieuprawnionym ujawnieniem lub dostępem.
              </p>

              <p>
                Należy jednak pamiętać, że żadna transmisja danych przez
                internet ani żaden system informatyczny nie może zagwarantować
                absolutnego bezpieczeństwa.
              </p>
            </PrivacySection>

            <PrivacySection number="13" title="LINKI DO ZEWNĘTRZNYCH STRON">
              <p>
                Strona GRAND MOTORS SELECT może zawierać odnośniki do
                zewnętrznych serwisów internetowych, w tym serwisów
                społecznościowych lub stron związanych z prezentowanymi
                usługami.
              </p>

              <p>
                Po przejściu na zewnętrzną stronę zastosowanie mają zasady
                prywatności obowiązujące u operatora danego serwisu.
              </p>
            </PrivacySection>

            <PrivacySection number="14" title="ZMIANY POLITYKI PRYWATNOŚCI">
              <p>
                Polityka Prywatności może być aktualizowana w przypadku zmian w
                funkcjonowaniu strony, wykorzystywanych usługach, prowadzonej
                działalności lub obowiązujących przepisach prawa.
              </p>

              <p>
                Aktualna wersja dokumentu jest publikowana na stronie GRAND
                MOTORS SELECT.
              </p>
            </PrivacySection>

            {/* COMPANY BOX */}
            <div className="mt-12 border border-[#b99a5c]/25 bg-[#b99a5c]/5 p-6 sm:mt-16 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
                    ADMINISTRATOR DANYCH
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

          <div className="flex flex-wrap gap-5 text-[8px] tracking-[0.12em] text-[#444]">
            <a
              href="/regulamin"
              className="transition-colors hover:text-[#b99a5c]"
            >
              REGULAMIN
            </a>

            <a href="/" className="transition-colors hover:text-[#b99a5c]">
              STRONA GŁÓWNA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
