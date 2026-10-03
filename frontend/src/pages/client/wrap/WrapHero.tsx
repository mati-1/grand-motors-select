import { ButtonComponent } from "../../../components/button";
import { MainHeadingComponent } from "../../../components/headings";

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
    px-[4vw] min-[1200px]:px-[13vw]
    h-screen
  "
    >
      <video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[50%_center]
    sm:object-[58%_center]
    lg:object-[52%_center]
  "
      >
        <source src="/wrap.mp4" type="video/mp4" />
      </video>
      <div
        className="
          absolute inset-0 z-0
          bg-linear-to-r
          from-black via-black/80
          to-black/25
        "
      />

      <div
        className="
          absolute inset-x-0 bottom-0 z-1 h-40
          bg-linear-to-t from-black/70 to-transparent
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
        <MainHeadingComponent className="mt-6 max-w-190 text-[clamp(48px,8vw,80px)]!">
          ZMIEŃ
          <br />
          <span className="text-[#d2b878]">CHARAKTER.</span>
        </MainHeadingComponent>

        <p
          className="
            mt-7
            max-w-125
            text-[11px]
            leading-[1.9]
            
            text-[#777]
            sm:text-[12px]
            lg:text-[13px]
          "
        >
          Zmieniamy wygląd samochodu bez ingerencji w jego oryginalny lakier.
          Dobieramy materiał, kolor i zakres oklejenia do samochodu oraz
          oczekiwanego efektu.
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
          <ButtonComponent type="main" href="/contact" size="big">
            Umów wrap
          </ButtonComponent>

          <ButtonComponent type="secondary" href="#wrap-services" size="big">
            Zakres usług
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};
