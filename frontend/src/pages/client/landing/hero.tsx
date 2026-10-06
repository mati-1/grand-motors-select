import { ButtonComponent } from "../../../components/button";
import { GradientSpan } from "../../../components/gradientSpan";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";

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
          md:object-[80%_center]
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

      <div className="absolute bottom-[-20%] left-[45%] h-100 w-100 rounded-full bg-[#4C9FE5]/8 blur-[120px]" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          px-[4vw]
          min-[1200px]:px-[13vw]
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
          <SubHeadingComponent>Zapoznaj się z ofertą</SubHeadingComponent>

          <MainHeadingComponent
            className="
              mt-5
              text-[clamp(46px,8vw,80px)]!
              leading-[0.95]
              lg:leading-[0.98]
            "
          >
            Skupmy się na
            <br />
            <GradientSpan>samochodach.</GradientSpan>
          </MainHeadingComponent>

          <p
            className="
              mt-6
              max-w-110
              text-[11px]
              leading-[1.8]
              
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
            <ButtonComponent variant="main" href="/cars" size="big">
              Zobacz samochody
            </ButtonComponent>

            <ButtonComponent variant="secondary" href="#cars-trust" size="big">
              Nasze standardy
            </ButtonComponent>
          </div>

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
              <SubHeadingComponent>Sprzedaż samochodów</SubHeadingComponent>
              <span>·</span>
              <SubHeadingComponent>Detailing</SubHeadingComponent>
              <span>·</span>
              <SubHeadingComponent>Wrap</SubHeadingComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
