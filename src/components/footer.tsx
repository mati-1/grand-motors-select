import { LogoComponent } from "./logo";

import { LineComponent } from "./line";

export const FooterComponent = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      <div
        className="
          mx-auto
          w-full
          px-[4vw]
          py-14
          sm:py-16
          lg:py-20
          min-[1200px]:px-[13vw]
        "
      >
        {/* ================================================= */}
        {/* FOOTER CONTENT */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-12
            md:grid
            md:grid-cols-[1.6fr_0.8fr_1fr_1fr]
            md:gap-14
            xl:gap-20
          "
        >
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div
            className="
              flex
              w-full
              max-w-90
              flex-col
              items-start
            "
          >
            <LogoComponent />

            <p
              className="
                mt-7
                max-w-80
                text-[11px]
                leading-[1.9]
                text-[#666]
              "
            >
              Wyselekcjonowane samochody premium, profesjonalne przygotowanie i
              obsługa, na której sami chcielibyśmy oprzeć swój zakup.
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#b99a5c]/50
                "
              />

              <span
                className="
                  text-[9px]
                  text-[#777]
                "
              >
                Samochody, które mają znaczenie.
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* MOBILE SECONDARY COLUMNS */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-[repeat(auto-fit,minmax(130px,1fr))]
              gap-x-8
              gap-y-12
              md:contents
            "
          >
            {/* ================================================= */}
            {/* NAVIGATION */}
            {/* ================================================= */}

            <div
              className="
                flex
                flex-col
                items-start
                gap-5
                md:items-end
              "
            >
              <span
                className="
                  text-[11px]
                  font-medium
                  text-[#b99a5c]
                "
              >
                Nawigacja
              </span>

              <nav
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  md:items-end
                "
              >
                <a
                  href="/"
                  className="
                    w-fit
                    text-[11px]
                    text-[#777]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  Strona główna
                </a>

                <a
                  href="/cars"
                  className="
                    w-fit
                    text-[11px]
                    text-[#777]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  Samochody
                </a>

                <a
                  href="/detailing"
                  className="
                    w-fit
                    text-[11px]
                    text-[#777]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  Detailing
                </a>

                <a
                  href="/wrap"
                  className="
                    w-fit
                    text-[11px]
                    text-[#777]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  Wrap
                </a>

                <a
                  href="/contact"
                  className="
                    w-fit
                    text-[11px]
                    text-[#777]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  Kontakt
                </a>
              </nav>
            </div>

            {/* ================================================= */}
            {/* CONTACT */}
            {/* ================================================= */}

            <div
              className="
                flex
                flex-col
                items-start
                gap-5
                md:items-end
              "
            >
              <span
                className="
                  text-[11px]
                  font-medium
                  text-[#b99a5c]
                "
              >
                Kontakt
              </span>

              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  md:items-end
                "
              >
                <a
                  href="tel:+48514137133"
                  className="
                    w-fit
                    text-[11px]
                    text-[#bbb]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  +48 514 137 133
                </a>

                <a
                  href="mailto:biuro@grandmotorsselect.pl"
                  className="
                    w-fit
                    text-[11px]
                    text-[#bbb]
                    transition-colors
                    duration-300
                    hover:text-[#d2b878]
                  "
                >
                  biuro@grandmotorsselect.pl
                </a>

                <span
                  className="
                    text-[11px]
                    leading-[1.7]
                    text-[#666]
                  "
                >
                  Kraków, Małopolska
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* COMPANY DATA */}
            {/* ================================================= */}

            <div
              className="
                flex
                flex-col
                items-start
                gap-5
                md:items-end
              "
            >
              <span
                className="
                  text-[11px]
                  font-medium
                  text-[#b99a5c]
                "
              >
                Dane firmy
              </span>

              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  text-[11px]
                  leading-normal
                  text-[#666]
                  md:items-end
                "
              >
                <span className="text-[#aaa]">Grand Motors Select</span>

                <span>Mateusz Michalik</span>

                <span>NIP&nbsp;&nbsp;736 175 51 08</span>

                <span>REGON&nbsp;&nbsp;543 067 707</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <LineComponent
          className="
            mt-14!
            self-center
            opacity-40
            sm:mt-16!
            lg:mt-20!
          "
        />

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              text-[11px]
              text-[#444]
            "
          >
            © {new Date().getFullYear()} Grand Motors Select. Wszelkie prawa
            zastrzeżone.
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-5
              gap-y-2
              text-[11px]
              text-[#444]
            "
          >
            <a
              href="/polityka-prywatnosci"
              className="
                transition-colors
                duration-300
                hover:text-[#b99a5c]
              "
            >
              Polityka prywatności
            </a>

            <a
              href="/regulamin"
              className="
                transition-colors
                duration-300
                hover:text-[#b99a5c]
              "
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
