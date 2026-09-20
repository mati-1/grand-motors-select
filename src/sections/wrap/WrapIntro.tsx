import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../components/headings";

export const WrapIntro = () => {
  return (
    <section
      id="wrap-intro"
      className="
        scroll-mt-23
        border-b
        border-white/5
        px-[5vw]
        py-16
        sm:py-24
        bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-12
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-24
        "
      >
        <div>
          <DetailingSectionLabel number="01">O USŁUDZE</DetailingSectionLabel>
        </div>

        <div>
          <MainHeadingComponent className="max-w-190 text-[clamp(38px,5vw,64px)]!">
            NIE MUSISZ
            <br />
            <span className="text-[#d2b878]">KUPOWAĆ NOWEGO.</span>
          </MainHeadingComponent>

          <div className="mt-8 max-w-165 space-y-5">
            <p className="text-[13px] leading-[1.9] text-[#888] sm:text-[13px]">
              Zmiana koloru samochodu nie musi oznaczać lakierowania.
              Profesjonalne oklejenie pozwala nadać samochodowi zupełnie nowy
              charakter, zachowując przy tym jego oryginalny lakier.
            </p>

            <p className="text-[13px] leading-[1.9] text-[#666] sm:text-[13px]">
              Pracujemy na sprawdzonych materiałach i przykładamy szczególną
              uwagę do przygotowania powierzchni, dopasowania folii oraz
              wykończenia detali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
