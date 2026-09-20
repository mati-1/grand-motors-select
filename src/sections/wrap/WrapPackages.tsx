import { MainHeadingComponent } from "../../components/headings";
import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";

const packages = [
  {
    number: "01",
    title: "AKCENT",
    text: "Wybrane elementy samochodu, które pozwalają subtelnie zmienić jego wygląd bez pełnego oklejenia.",
  },
  {
    number: "02",
    title: "TRANSFORMACJA",
    text: "Większy zakres oklejenia pozwalający wyraźnie zmienić charakter samochodu i nadać mu nową stylistykę.",
  },
  {
    number: "03",
    title: "FULL WRAP",
    text: "Kompletna zmiana koloru samochodu wraz z dokładnym wykończeniem detali i krawędzi.",
  },
];

export const WrapPackages = () => {
  return (
    <section
      id="wrap-packages"
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
      <div>
        <DetailingSectionLabel number="05">ZAKRES</DetailingSectionLabel>

        <div
          className="
            mt-6
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          "
        >
          <MainHeadingComponent className="text-[clamp(42px,5vw,60px)]!">
            NIE KAŻDY
            <br />
            <span className="text-[#d2b878]">POTRZEBUJE FULL WRAPU.</span>
          </MainHeadingComponent>

          <p className="max-w-110 text-[13px] leading-[1.9] text-[#666]">
            Zakres prac ustalamy indywidualnie. Czasami wystarczy kilka detali,
            aby całkowicie zmienić charakter auta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 border-y border-white/10 md:grid-cols-3">
          {packages.map((item, index) => (
            <div
              key={item.number}
              className={`
                group
                relative
                px-6
                py-8
                transition-colors
                duration-300
                hover:bg-white/2
                sm:px-8
                ${
                  index !== packages.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <span className="font-serif text-[11px] text-[#b99a5c]">
                {item.number}
              </span>

              <h3
                className="
                  mt-8
                  text-[11px]
                  tracking-[0.2em]
                  text-[#ddd]
                  transition-colors
                  duration-300
                  group-hover:text-[#d2b878]
                "
              >
                {item.title}
              </h3>

              <p className="mt-4 text-[11px] leading-[1.9] text-[#666]">
                {item.text}
              </p>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#b99a5c]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
