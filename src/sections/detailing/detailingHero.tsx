import { ButtonComponent } from "../../components/button";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";

export const DetailingHero = () => {
  return (
    <section
      id="detailing-home"
      className="relative flex min-h-150 h-screen
    items-center overflow-hidden
    bg-[#050505]"
    >
      <video
        autoPlay
        muted
        loop
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
        <source src="/detailing.mp4" type="video/mp4" />
      </video>
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

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/15" />

      <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-black/20" />

      {/* GOLD GLOW */}
      <div className="absolute bottom-[-20%] left-[45%] h-100 w-100 rounded-full bg-[#b99a5c]/8 blur-[120px]" />

      <div className="relative z-10 w-full lg:pt-15 pb-14 sm:pb-10 px-[5vw] lg:pb-12">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b99a5c]" />
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            GRAND MOTORS SELECT
          </span>
          <SubHeadingComponent className="text-[clamp(11px,1vw,14px)]!">
            / DETAILING
          </SubHeadingComponent>
        </div>

        <MainHeadingComponent className="text-[clamp(46px,8vw,94px)]!">
          RÓŻNICA
          <br />
          TKWI W
          <br />
          <span className="text-[#b99a5c]">SZCZEGÓŁACH.</span>
        </MainHeadingComponent>

        <div className="mt-10 flex flex-col gap-8">
          <p className="max-w-125 text-[11px] leading-[1.9] tracking-[0.04em] text-[#999] sm:text-xs">
            Profesjonalna pielęgnacja samochodu, w której liczy się nie tylko
            efekt końcowy, ale również sposób, w jaki do niego dochodzimy.
          </p>

          <ButtonComponent href="#detailing-services" type="main" size="big">
            POZNAJ ZAKRES →
          </ButtonComponent>
        </div>
      </div>

      <SubHeadingComponent className="absolute bottom-7 left-23 sm:left-20 opacity-70">
        WIECEJ INFORMACJI PONIŻEJ ↓
      </SubHeadingComponent>
    </section>
  );
};
