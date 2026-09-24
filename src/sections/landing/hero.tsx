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
          object-[5%_center]
          sm:object-[58%_center]
          lg:object-[52%_center]
        "
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 z-0
          bg-linear-to-r
          from-black
          via-black/90
          lg:via-black/75
          to-black/25
        "
      />

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-1 h-40
          bg-linear-to-t from-black/80 to-transparent
        "
      />

      {/* GOLDEN GLOW */}
      <div
        className="
          pointer-events-none absolute
          -bottom-30 right-[-10%]
          z-1 h-100 w-100
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(184,151,84,0.18),transparent_65%)]
          sm:h-125 sm:w-125
          lg:-bottom-40 lg:right-[-5%]
          lg:h-175 lg:w-175
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          w-full
          px-6
          lg:px-[5vw]
        "
      >
        <div
          className="
            max-w-165
            pt-16
            sm:pt-20
            lg:pt-24
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex
              items-center
              gap-3
              text-[8px]
              tracking-[0.28em]
              text-[#888]
              sm:text-[9px]
              sm:tracking-[0.35em]
              lg:text-[10px]
            "
          >
            <span className="h-px w-7 bg-[#b99a5c]/60" />

            <span className="text-[10px]">zapoznaj się z ofertą</span>
          </div>

          {/* HEADING */}
          <MainHeadingComponent className="mt-5 text-[clamp(46px,8vw,94px)]! leading-[0.90]!">
            WIĘCEJ NIŻ
            <br />
            <span className="text-[#d2b878]">SAMOCHODY</span>
          </MainHeadingComponent>

          {/* DESCRIPTION */}
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

          {/* BUTTONS */}
          <div
            className="
              mt-7
              flex flex-col items-start gap-3
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
              POZNAJ NAS
            </ButtonComponent>
          </div>

          {/* SERVICES */}
          <div
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-x-7
              gap-y-3
              sm:mt-16
              sm:gap-x-10
              lg:mt-20
              lg:gap-x-14
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />
              <span className="text-[8px] tracking-[0.25em] text-[#999]">
                SAMOCHODY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />
              <span className="text-[8px] tracking-[0.25em] text-[#999]">
                DETAILING
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />
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
