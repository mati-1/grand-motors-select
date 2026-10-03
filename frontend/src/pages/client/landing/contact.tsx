import { LineComponent } from "../../../components/line";
import {
  SubHeadingComponent,
  MainHeadingComponent,
} from "../../../components/headings";
import { ButtonComponent } from "../../../components/button";

export const ContactSectionComponent = ({
  children,
  text,
}: {
  children?: React.ReactNode;
  text?: string;
}) => {
  return (
    <section
      id="contact"
      className="
        scroll-mt-22
        bg-[#050505]
        px-[4vw] min-[1200px]:px-[13vw]
        pb-12
      "
    >
      <LineComponent type="left" className="mt-0!" />

      {/* HEADER */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-175 mt-14">
          <MainHeadingComponent
            className="                mt-4
                text-[42px]
                sm:mt-5 sm:text-[52px]
                lg:text-[48px]"
          >
            {children ? (
              children
            ) : (
              <>
                {" "}
                ZNAJDŹMY
                <br />
                TWÓJ <span className="text-[#d2b878]">SAMOCHÓD.</span>
              </>
            )}
          </MainHeadingComponent>

          <SubHeadingComponent
            className="
                mt-6 max-w-140
                leading-[1.8]
                sm:mt-7 sm:leading-[1.9]
              "
          >
            {text ? (
              text
            ) : (
              <>
                Szukasz konkretnego samochodu, chcesz dowiedzieć się więcej o
                dostępnych egzemplarzach albo porozmawiać o sprzedaży swojego
                auta? Skontaktuj się z nami.
              </>
            )}
          </SubHeadingComponent>
        </div>

        {/* QUICK INFO */}
        <div className="flex shrink-0 text-right flex-col gap-2 text-[9px]  text-[#666] lg:pb-2">
          <SubHeadingComponent>Używane auta premium</SubHeadingComponent>
          <SubHeadingComponent>Detailing i wrap</SubHeadingComponent>
          <SubHeadingComponent>Indywidualne podejście</SubHeadingComponent>
        </div>
      </div>

      {/* LINE */}
      <div className="my-12 h-px w-full bg-white/10 sm:my-14" />

      {/* CONTACT GRID */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* CONTACT DETAILS */}
        <div
          className="
              flex-1
              border border-white/10
              bg-white/1.5
              p-6
              sm:p-8
              lg:p-10
            "
        >
          <SubHeadingComponent className="pb-6">KONTAKT</SubHeadingComponent>

          <div className="grid gap-7 sm:grid-cols-2">
            {/* PHONE */}
            <div>
              <p
                className="
                  max-w-105
                  text-[13px] leading-[1.8] text-[#777]
                  sm:text-[15px]
                "
              >
                Telefon
              </p>

              <MainHeadingComponent
                className="text-[#d2b878] 
                text-[14px]
                transition-colors
                hover:text-[#d2b878]
                sm:text-[18px]! hover:underline"
              >
                <a
                  href="tel:+48514137133"
                  className="

                  "
                >
                  +48 514 137 133
                </a>
                <span className="text-[#777] text-[12px]"> (Mateusz)</span>
              </MainHeadingComponent>
            </div>

            {/* EMAIL */}
            <div>
              <p
                className="
                  max-w-105
                  text-[13px] leading-[1.8] text-[#777]
                  sm:text-[15px]
                "
              >
                E-mail
              </p>

              <p
                className="transition-colors
                hover:text-[#d2b878]
                 hover:underline text-[12px] leading-[1.8] 
                  sm:text-[13px] text-[#777]"
              >
                <a
                  href="mailto:biuro@grandmotorsselect.pl"
                  className="

                  "
                >
                  biuro@grandmotorsselect.pl
                </a>
              </p>
            </div>

            <LineComponent type="left" className="mt-0!" />
            <LineComponent type="left" className="mt-0!" />

            {/* LOCATION */}

            <div>
              <p
                className="
                  max-w-105
                  text-[13px] leading-[1.8] text-[#777]
                  sm:text-[15px]
                "
              >
                Lokalizacja
              </p>
              <p
                className="
                  max-w-105
                  text-[12px] leading-[1.8] text-[#777]
                  sm:text-[13px]
                "
              >
                ul. Słoneczna 14 <br /> Kraków, Małopolska
              </p>
            </div>

            {/* HOURS */}

            <div>
              <p
                className="
                  max-w-105
                  text-[13px] leading-[1.8] text-[#777]
                  sm:text-[15px]
                "
              >
                Godziny kontaktu
              </p>
              <p
                className="
                  max-w-105
                  text-[12px] leading-[1.8] text-[#777]
                  sm:text-[13px]
                "
              >
                Pon. – Ndz.
                <br />
                8:00 – 22:00
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="
              relative gap-6 md:gap-10 flex flex-1 flex-col justify-between
              overflow-hidden
              border border-[#b99a5c]/25
              bg-[#0a0a0a]
              p-6
              sm:p-8
              lg:p-10
            "
        >
          {/* decorative element */}
          <div
            className="
                pointer-events-none absolute
                -right-20 -top-20
                h-50 w-50
                rounded-full
                border border-[#b99a5c]/10
              "
          />

          <div className="relative">
            <SubHeadingComponent>Porozmawiajmy</SubHeadingComponent>

            <MainHeadingComponent>
              Masz pytanie?
              <br />
              <span className="text-[#d2b878]">Jesteśmy tutaj.</span>
            </MainHeadingComponent>
            <LineComponent type="left" className="mt-0!" />

            <p
              className="
                  mt-5 max-w-105
                  text-[12px] leading-[1.8] text-[#777]
                  sm:text-[13px]
                "
            >
              Napisz lub zadzwoń. Chętnie opowiemy o dostępnych samochodach,
              procesie zakupu oraz naszych usługach.
            </p>
          </div>
          <ButtonComponent size="big" type="main" href="tel:+48514137133">
            Zadzwoń do nas
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};
