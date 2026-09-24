import { ButtonComponent } from "../../components/button";
import { MainHeadingComponent } from "../../components/headings";

export const HeroComponentSection = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-150
        h-screen
        items-center
        overflow-hidden
        bg-[#050505]
        bg-cover
        bg-center
        bg-no-repeat
        sm:bg-position-[58%_center]
        lg:bg-position-[52%_center]
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
          object-[45%_center]
          md:object-[60%_center]
        "
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ================================================= */}
      {/* MAIN OVERLAY */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-linear-to-r
          from-black
          via-black/75
          lg:via-black/75
          to-black/25
        "
      />

      {/* ================================================= */}
      {/* BOTTOM GRADIENT */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-1
          h-48
          bg-linear-to-t
          from-black/85
          to-transparent
          sm:h-40
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
          px-6
          lg:px-[5vw]
        "
      >
        <div
          className="
            max-w-165
            -translate-y-8
            sm:-translate-y-4
            lg:translate-y-0
          "
        >
          {/* ================================================= */}
          {/* EYEBROW */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              tracking-[0.28em]
              text-[#888]
              sm:text-[9px]
              sm:tracking-[0.35em]
              lg:text-[10px]
            "
          >
            <span className="h-px w-7 bg-[#b99a5c]/60" />

            <span>ZAPOZNAJ SIĘ Z OFERTĄ</span>
          </div>

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <MainHeadingComponent
            className="
              mt-5
              text-[clamp(46px,8vw,94px)]!
              leading-[0.90]!
            "
          >
            WIĘCEJ NIŻ
            <br />
            <span className="text-[#d2b878]">SAMOCHODY.</span>
          </MainHeadingComponent>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mt-6
              max-w-110
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
            Selekcja samochodów premium, profesjonalny detailing i
            zabezpieczenia, które dopełniają całość.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
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
            <ButtonComponent type="main" href="#cars" size="big">
              ZOBACZ SAMOCHODY <span>→</span>
            </ButtonComponent>

            <ButtonComponent type="secondary" href="#cars-trust" size="big">
              NASZE STANDARDY
            </ButtonComponent>
          </div>

          {/* ================================================= */}
          {/* SERVICES */}
          {/* ================================================= */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-x-7
              gap-y-3
              sm:mt-16
              sm:flex-row
              sm:items-center
              sm:gap-x-10
              lg:mt-20
              lg:gap-x-14
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/60" />

              <span className="text-[8px] tracking-[0.25em] text-[#999]">
                SAMOCHODY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/60" />

              <span className="text-[8px] tracking-[0.25em] text-[#999]">
                DETAILING
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/60" />

              <span className="text-[8px] tracking-[0.25em] text-[#999]">
                WRAP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
