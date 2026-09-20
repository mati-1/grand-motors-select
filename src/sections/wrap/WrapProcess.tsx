import { MainHeadingComponent } from "../../components/headings";
import { ProcessItem } from "../landing/trust";
import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";

const process = [
  {
    number: "01",
    title: "OCENA SAMOCHODU",
    description:
      "Sprawdzamy stan lakieru, elementów nadwozia oraz miejsca wymagające szczególnej uwagi przed rozpoczęciem prac.",
  },
  {
    number: "02",
    title: "WYBÓR MATERIAŁU",
    description:
      "Dobieramy rodzaj folii, kolor oraz wykończenie do samochodu i oczekiwanego efektu końcowego.",
  },
  {
    number: "03",
    title: "PRZYGOTOWANIE",
    description:
      "Samochód zostaje dokładnie oczyszczony i przygotowany tak, aby folia mogła zostać prawidłowo aplikowana.",
  },
  {
    number: "04",
    title: "APLIKACJA",
    description:
      "Folia jest aplikowana z zachowaniem odpowiednich technik oraz szczególnej uwagi na krawędzie i detale.",
  },
  {
    number: "05",
    title: "WYKOŃCZENIE",
    description:
      "Po zakończeniu aplikacji sprawdzamy każdy element i dopracowujemy detale przed wydaniem samochodu.",
  },
];

export const WrapProcess = () => {
  return (
    <section
      id="wrap-process"
      className="
        scroll-mt-23
        border-b
        border-white/5
        px-[5vw]
        py-16
        sm:py-24
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-14
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-24
        "
      >
        <div>
          <DetailingSectionLabel number="03">PROCES</DetailingSectionLabel>

          <MainHeadingComponent className="mt-6 text-[clamp(42px,5vw,60px)]!">
            OD POMYSŁU
            <br />
            <span className="text-[#d2b878]">DO EFEKTU.</span>
          </MainHeadingComponent>

          <p className="mt-7 max-w-110 text-[13px] leading-[1.9] text-[#666]">
            Dobry wrap zaczyna się jeszcze przed aplikacją folii. Każdy etap ma
            znaczenie dla końcowego efektu.
          </p>
        </div>

        <div className="border-y border-white/10">
          {process.map((item, index) => (
            <ProcessItem
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              last={index === process.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
