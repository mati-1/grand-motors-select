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
        min-h-screen
        items-center
        overflow-hidden
        border-b
        border-white/5
        bg-[#050505]
        px-6
        pt-24
        sm:px-8
        lg:px-[5vw]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND VIDEO */}
      {/* ================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[65%_center]
          sm:object-[62%_center]
          lg:object-[58%_center]
        "
      >
        <source src="/contact.mp4" type="video/mp4" />
      </video>

      {/* ================================================= */}
      {/* MAIN DARK OVERLAY */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-black
          via-black/90
          to-black/30
          sm:via-black/80
          lg:via-black/65
          lg:to-black/15
        "
      />

      {/* ================================================= */}
      {/* MOBILE DARKENING */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/20
          sm:hidden
        "
      />

      {/* ================================================= */}
      {/* BOTTOM GRADIENT */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-linear-to-t
          from-black
          via-black/70
          to-transparent
        "
      />

      {/* ================================================= */}
      {/* GOLDEN LIGHT */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-100
          w-100
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(185,154,92,0.18),transparent_68%)]
          blur-2xl
          sm:h-150
          sm:w-150
          lg:-right-50
          lg:h-200
          lg:w-200
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          -translate-y-6
          sm:-translate-y-8
          lg:-translate-y-10
        "
      >
        <div className="max-w-210">
          {/* ================================================= */}
          {/* EYEBROW */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              tracking-[0.35em]
              text-[#888]
              sm:text-[10px]
            "
          >
            <span className="h-px w-8 bg-[#b99a5c]/70" />

            <span>KONTAKT</span>
          </div>

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <MainHeadingComponent
            className="
              mt-5
              max-w-180
              text-[clamp(37px,8vw,84px)]!
              leading-[0.88]!
            "
          >
            POROZMAWIAJMY.
            <br />
            <span className="text-[#d2b878]">O SAMOCHODZIE</span>
          </MainHeadingComponent>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mt-6
              max-w-120
              text-[11px]
              leading-[1.8]
              tracking-[0.03em]
              text-[#999]
              sm:mt-7
              sm:text-[12px]
              sm:leading-[1.9]
              lg:text-[13px]
            "
          >
            Chcesz obejrzeć samochód, zapytać o dostępny egzemplarz albo umówić
            detailing lub wrap?
            <br className="hidden sm:block" />
            Skontaktuj się z nami.
          </p>

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <div
            className="
              mt-7
              flex
              flex-col
              items-start
              gap-3
              sm:mt-9
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            <ButtonComponent type="main" href="tel:+48514137133" size="big">
              ZADZWOŃ <span>→</span>
            </ButtonComponent>

            <ButtonComponent type="secondary" href="#contact-form" size="big">
              NAPISZ WIADOMOŚĆ
            </ButtonComponent>
          </div>

          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <div className="mt-9 max-w-150">
            <LineComponent type="left" />
          </div>

          {/* ================================================= */}
          {/* FOOT NOTE */}
          {/* ================================================= */}

          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:gap-8
            "
          >
            <span
              className="
                text-[8px]
                tracking-[0.3em]
                text-[#777]
                sm:text-[9px]
              "
            >
              ZADZWOŃ LUB NAPISZ
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span
              className="
                text-[8px]
                tracking-[0.28em]
                text-[#555]
                sm:text-[9px]
              "
            >
              GRAND MOTORS SELECT
            </span>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SIDE INDEX */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-1/2
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-4
          lg:flex
        "
      >
        <span className="h-12 w-px bg-white/10" />

        <span
          className="
            [writing-mode:vertical-rl]
            text-[8px]
            tracking-[0.35em]
            text-[#555]
          "
        >
          GRAND MOTORS SELECT
        </span>

        <span className="h-12 w-px bg-[#b99a5c]/40" />
      </div>
    </section>
  );
};
