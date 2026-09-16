import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../components/headings";
import { InfoCardItem } from "../../components/infoCardItem";

const process = [
  {
    number: "01",
    title: "OGLĘDZINY",
    description: "Poznajemy samochód i jego aktualny stan.",
  },
  {
    number: "02",
    title: "DOBÓR ZAKRESU",
    description: "Ustalamy zakres prac i oczekiwany efekt.",
  },
  {
    number: "03",
    title: "PRZYGOTOWANIE",
    description: "Samochód zostaje odpowiednio przygotowany.",
  },
  {
    number: "04",
    title: "DETAILING",
    description: "Wykonujemy ustalony zakres prac.",
  },
  {
    number: "05",
    title: "KONTROLA",
    description: "Sprawdzamy każdy element przed wydaniem samochodu.",
  },
];

export const DetailingProcess = () => {
  return (
    <section
      id="detailing-process"
      className="
        relative
        overflow-hidden
      bg-[#b99a5c]/20
        bg-linear-to-r from-black/90 via-black/75 to-black/90
        py-15
        sm:py-27
        px-[5vw]
      "
    >
      {/* BACKGROUND NUMBER */}

      <div
        className="
          absolute
          right-[-5%]
          top-1/2
          -translate-y-1/2
          text-[20rem]
          leading-none
          text-white/1.5
        "
      >
        03
      </div>

      <div
        className="
          relative
          grid
          gap-9
          lg:grid-cols-[0.65fr_1.35fr]
          lg:gap-24
        "
      >
        {/* LEFT */}

        <div>
          <DetailingSectionLabel number="03">PROCES</DetailingSectionLabel>

          <MainHeadingComponent className="md:text-5xl!">
            KAŻDY
            <br />
            <span className="text-[#b99a5c]">DETAL</span>
            <br />
            MA ZNACZENIE.
          </MainHeadingComponent>
        </div>

        {/* RIGHT */}

        <div>
          {process.map((item, index) => (
            <InfoCardItem
              key={item.number}
              {...item}
              last={index === process.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
