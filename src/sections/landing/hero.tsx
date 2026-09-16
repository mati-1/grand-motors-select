import { ButtonComponent } from "../../components/button";
import { MainHeadingComponent } from "../../components/headings";

export const HeroComponentSection = () => {
  return (
    <section
      id="home"
      className="
    relative flex min-h-150 h-screen
    items-center overflow-hidden
    bg-[#050505]
    bg-[url('/hero.png')]
    bg-position-[80%_center]
    sm:bg-position-[75%_center]
    lg:bg-position-[65%_center]
    bg-no-repeat
  "
    >
      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 z-0
          bg-linear-to-r
          from-black via-black/80
          to-black/25
        "
      />

      {/* SUBTELNE PRZYCIEMNIENIE DOŁU */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-1 h-40
          bg-linear-to-t from-black/70 to-transparent
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
              text-[8px]
              tracking-[0.28em]
              text-[#999]
              sm:text-[9px]
              sm:tracking-[0.35em]
              lg:text-[10px]
              lg:tracking-[0.4em]
            "
          >
            STARANNIE WYSELEKCJONOWANE{" "}
            <span className="text-[#d2b878]">SAMOCHODY</span>
          </div>

          {/* HEADING */}
          <MainHeadingComponent className="text-[clamp(46px,8vw,94px)]!">
            WIĘCEJ NIŻ
            <br />
            <span className="text-[#d2b878]">SAMOCHODY.</span>
          </MainHeadingComponent>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-125
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
            Wybieramy samochody, które sami chcielibyśmy mieć w swoim garażu.
            <br />
            Każdy egzemplarz przechodzi indywidualną selekcję, weryfikację i
            przygotowanie.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-7
              flex flex-col items-start gap-3
              sm:mt-9 sm:flex-row sm:items-center sm:gap-4
            "
          >
            <ButtonComponent type="main" href="#cars" size="big">
              ZOBACZ SAMOCHODY <span>→</span>
            </ButtonComponent>

            <ButtonComponent type="secondary" href="#cars-trust" size="big">
              JAK WYGLĄDA ZAKUP?
            </ButtonComponent>
          </div>

          {/* BOTTOM INFO */}
          <div
            className="
              mt-12
              flex flex-col gap-5
              sm:mt-16
              sm:flex-row sm:items-center sm:gap-12
              lg:mt-20 lg:gap-20
            "
          >
            <div className="flex flex-col sm:flex-row gap-9 sm:gap-20 items-start sm:items-center">
              <div
                className="
              flex flex-col gap-1
              text-[8px]
              tracking-[0.28em]
              text-[#666]
              sm:text-[9px]
              sm:tracking-[0.35em]
              "
              >
                <span>SELECTED CARS.</span>

                <strong className="font-normal text-[#999]">
                  PREPARED PROPERLY.
                </strong>
              </div>

              <div className="flex flex-col gap-2 text-[8px] tracking-[0.25em] text-[#666]">
                <span className="text-[#d2b878]">GRAND MOTORS SELECT</span>
                <span className="text-[#999]">
                  SAMOCHODY • DETAILING • WRAP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
