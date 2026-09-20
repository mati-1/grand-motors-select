import { ButtonComponent } from "../../components/button";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { LineComponent } from "../../components/line";

export const WrapHero = () => {
  return (
    <section
      id="wrap-home"
      className="
    relative
    flex
    items-center
    overflow-hidden
    border-b
    border-white/5
    bg-[#050505]
    bg-[url('/wrap/wrap2.jpg')]
    bg-cover
    bg-position-[30%_center]
    md:bg-center
    bg-no-repeat
    px-[5vw]
    h-screen
  "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_75%_45%,rgba(185,154,92,0.13),transparent_42%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-120
          w-120
          -translate-y-1/2
          rounded-full
          bg-[#b99a5c]/5
          blur-3xl
          lg:h-180
          lg:w-180
        "
      />

      {/* DECORATIVE NUMBER */}

      <div className="relative z-10 w-full">
        {/* LABEL */}

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b99a5c]" />
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            GRAND MOTORS SELECT
          </span>
          <SubHeadingComponent className="text-[clamp(11px,1vw,14px)]!">
            / WRAP
          </SubHeadingComponent>
        </div>

        {/* HEADING */}

        <MainHeadingComponent className="mt-6 max-w-190 text-[clamp(48px,8vw,100px)]!">
          ZMIEŃ
          <br />
          <span className="text-[#d2b878]">CHARAKTER.</span>
        </MainHeadingComponent>

        {/* DESCRIPTION */}

        <p
          className="
            mt-7
            max-w-125
            text-[11px]
            leading-[1.9]
            tracking-[0.03em]
            text-[#777]
            sm:text-[12px]
            lg:text-[13px]
          "
        >
          Zmieniamy wygląd samochodu bez ingerencji w jego oryginalny lakier.
          Dobieramy materiał, kolor i zakres oklejenia do samochodu oraz
          oczekiwanego efektu.
        </p>

        {/* CTA */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-start
            gap-3
            sm:flex-row
            sm:items-center
          "
        >
          <ButtonComponent type="main" href="#wrap-contact" size="big">
            UMÓW WRAP <span>→</span>
          </ButtonComponent>

          <ButtonComponent type="secondary" href="#wrap-services" size="big">
            ZAKRES USŁUG
          </ButtonComponent>
        </div>

        {/* BOTTOM INFO */}
        <LineComponent type="left" />
        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:gap-10
          "
        >
          <span className="text-[10px] tracking-[0.3em] text-[#555]">
            OKLEJANIE SAMOCHODÓW
          </span>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <span className="text-[10px] tracking-[0.25em] text-[#444]">
            GRAND MOTORS SELECT
          </span>
        </div>
      </div>
    </section>
  );
};
