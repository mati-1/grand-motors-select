import { ButtonComponent } from "../../components/button";
import { MainHeadingComponent } from "../../components/headings";
import { LineComponent } from "../../components/line";

export const ContactHero = () => {
  return (
    <section
      id="contact-home"
      className="
        relative
        flex
        min-h-[68vh]
        items-end
        overflow-hidden
        border-b
        border-white/5
        bg-[#050505]
        px-[5vw]
        pb-16
        pt-32
        sm:pb-20
        lg:min-h-[72vh]
        lg:pb-24
      "
    >
      {/* GOLDEN LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-1/2
          h-125
          w-125
          -translate-y-1/2
          rounded-full
          bg-[#b99a5c]/7
          blur-3xl
          sm:h-175
          sm:w-175
        "
      />

      {/* DECORATIVE NUMBER */}

      <div className="relative z-10 w-full">
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-[#b99a5c]/50" />

          <span className="text-[9px] tracking-[0.35em] text-[#666]">
            KONTAKT
          </span>
        </div>

        <MainHeadingComponent className="mt-6 max-w-200 text-[clamp(40px,8vw,86px)]!">
          POROZMAWIAJMY
          <br />
          <span className="text-[#d2b878]">O SAMOCHODZIE.</span>
        </MainHeadingComponent>

        <p
          className="
            mt-7
            max-w-125
            text-[12px]
            leading-[1.9]
            tracking-[0.03em]
            text-[#777]
            sm:text-[13px]
            lg:text-[14px]
          "
        >
          Chcesz obejrzeć samochód, zapytać o dostępny egzemplarz albo umówić
          detailing lub wrap? Skontaktuj się z nami.
        </p>

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
          <ButtonComponent type="main" href="tel:+48514137133" size="big">
            ZADZWOŃ <span>→</span>
          </ButtonComponent>

          <ButtonComponent type="secondary" href="#contact-form" size="big">
            NAPISZ WIADOMOŚĆ
          </ButtonComponent>
        </div>
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
            ZADZWOŃ LUB NAPISZ!
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
