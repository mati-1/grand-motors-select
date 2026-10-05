import { DetailingSectionLabel } from "../../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../../components/headings";

export const DetailingIntro = () => {
  return (
    <section
      id="detailing-intro"
      className="relative bg-[#4C9FE5]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90 overflow-hidden py-20 
          sm:py-27 px-[4vw] min-[1200px]:px-[13vw]"
    >
      <div className="absolute right-[5%] top-1/2 hidden -translate-y-1/2 text-[18rem] font-light leading-none - text-[#E8E9E7]/1.5 lg:block">
        01
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-22">
        <div>
          <DetailingSectionLabel number="01">PODEJŚCIE</DetailingSectionLabel>

          <MainHeadingComponent className="md:text-5xl!">
            KAŻDY SAMOCHÓD
            <br />
            WYMAGA INNEGO
            <br />
            <span className="text-[#4C9FE5]">PODEJŚCIA.</span>
          </MainHeadingComponent>
        </div>

        <div className="flex flex-col justify-end">
          <div className="mb-8 h-px w-16 bg-[#4C9FE5]" />

          <p className="max-w-150 text-sm leading-[1.9] text-[#999]">
            Detailing zaczynamy od oceny samochodu. Lakieru, wnętrza,
            wcześniejszej pielęgnacji i jego aktualnego stanu. Nie korzystamy z
            jednego schematu dla każdego auta. Dobieramy zakres prac do
            konkretnego egzemplarza i efektu, jaki chcemy osiągnąć.
          </p>

          <p className="mt-6 max-w-150 text-sm leading-[1.9] text-[#666]">
            Najpierw ocena. Później właściwa praca.
          </p>
        </div>
      </div>
    </section>
  );
};
