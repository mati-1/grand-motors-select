import { LogoComponent } from "./logo";
import { LineComponent } from "./line";

export const FooterComponent = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      {/* MAIN FOOTER */}
      <div className="px-[5vw] py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          {/* BRAND */}
          <div className="max-w-90">
            <LogoComponent showText />

            <p className="mt-7 max-w-75 text-[9px] leading-[1.9] tracking-wider text-[#666] sm:text-[10px]">
              Wyselekcjonowane samochody premium, przygotowanie i obsługa, na
              której sami chcielibyśmy oprzeć swój zakup.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b99a5c]/50" />
              <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
                SELECTED PREMIUM CARS
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-4">
            <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
              NAWIGACJA
            </span>

            <nav className="flex flex-col gap-3">
              <a
                href="/"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                STRONA GŁÓWNA
              </a>

              <a
                href="/cars"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                SAMOCHODY
              </a>

              <a
                href="/detailing"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                DETAILING
              </a>

              <a
                href="/wrap"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                WRAP
              </a>

              {/* <a
                href="#reviews"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                OPINIE
              </a> */}

              <a
                href="/contact"
                className="w-fit text-[9px] tracking-[0.12em] text-[#777] transition-colors hover:text-[#d2b878]"
              >
                KONTAKT
              </a>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
              KONTAKT
            </span>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+48514137133"
                className="w-fit text-[10px] tracking-[0.08em] text-[#bbb] transition-colors hover:text-[#d2b878]"
              >
                +48 514 137 133
              </a>

              <a
                href="mailto:kontakt@grandmotorsselect.pl"
                className="w-fit text-[10px] tracking-[0.08em] text-[#bbb] transition-colors hover:text-[#d2b878]"
              >
                kontakt@grandmotorsselect.pl
              </a>

              <span className="text-[9px] leading-relaxed tracking-[0.08em] text-[#666]">
                Kraków, Małopolska
              </span>
            </div>
          </div>

          {/* COMPANY DATA */}
          <div className="flex flex-col gap-4">
            <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]">
              DANE FIRMY
            </span>

            <div className="flex flex-col gap-3 text-[9px] tracking-[0.08em] text-[#666]">
              <span className="text-[#aaa]">GRAND MOTORS SELECT</span>

              <span>Mateusz Michalik</span>

              <span>NIP&nbsp;&nbsp;736 175 51 08</span>

              <span>REGON&nbsp;&nbsp;543 067 707</span>
            </div>
          </div>
        </div>

        <LineComponent className="mt-14! self-center opacity-40 sm:mt-16!" />

        {/* BOTTOM INFO */}
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[10px] tracking-[0.12em] text-[#444]">
            © {new Date().getFullYear()} GRAND MOTORS SELECT. WSZELKIE PRAWA
            ZASTRZEŻONE.
          </div>

          <div className="flex flex-wrap gap-5 text-[10px] tracking-[0.12em] text-[#444]">
            <a
              href="/polityka-prywatnosci"
              className="transition-colors hover:text-[#b99a5c]"
            >
              POLITYKA PRYWATNOŚCI
            </a>

            <a
              href="/regulamin"
              className="transition-colors hover:text-[#b99a5c]"
            >
              REGULAMIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
