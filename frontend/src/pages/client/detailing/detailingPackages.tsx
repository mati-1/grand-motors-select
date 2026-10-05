import { DetailingSectionLabel } from "../../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../../components/headings";

const packages = [
  {
    number: "01",
    title: "ODŚWIEŻENIE",
    text: "Dla samochodów, które potrzebują dokładnego czyszczenia, pielęgnacji i przywrócenia świeżego wyglądu.",
  },
  {
    number: "02",
    title: "PRZYWRÓCENIE",
    text: "Dla samochodów wymagających większej uwagi — od dokładnego przygotowania po korektę i zabezpieczenie powierzchni.",
  },
  {
    number: "03",
    title: "PRZYGOTOWANIE",
    text: "Dla samochodów, które mają prezentować się możliwie najlepiej przed sprzedażą, wydaniem lub ważnym wydarzeniem.",
  },
];

export const DetailingPackages = () => {
  return (
    <section
      className="
        relative
        scroll-mt-23
        overflow-hidden
        border-y border-white/5
        px-[4vw] min-[1200px]:px-[13vw]
        py-20
        sm:py-27
        bg-[#4C9FE5]/20
        bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      {/* BACKGROUND NUMBER */}
      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-1/2
          hidden
          -translate-y-1/2
          font-extralight
          text-[18rem]
          leading-none
          -
          text-[#E8E9E7]/1.5
          lg:block
        "
      >
        06
      </div>

      {/* HEADER */}
      <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <DetailingSectionLabel number="05">ZAKRES</DetailingSectionLabel>
          <MainHeadingComponent className="text-[clamp(42px,6vw,48px)]!">
            NIE KAŻDE AUTO
            <br />
            <span className="text-[#4C9FE5]">POTRZEBUJE TEGO SAMEGO.</span>
          </MainHeadingComponent>
        </div>

        <p
          className="
            max-w-110
            text-[14px]
            leading-[1.9]
            text-[#666]
          "
        >
          Zakres prac dobieramy indywidualnie po ocenie samochodu. Uwzględniamy
          jego stan, rodzaj powierzchni oraz efekt, który chcemy osiągnąć.
        </p>
      </div>

      {/* PACKAGES */}
      <div
        className="
          relative
          mt-16
          grid
          grid-cols-1
          border-y border-[#4C9FE5]/20
          bg-[#4C9FE5]/20
          bg-linear-to-r
          from-black/90
          via-black/75
          to-black/90
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {packages.map((item, index) => (
          <article
            key={item.number}
            className={`
              group
              relative
              px-5
              py-7
              transition-all
              duration-500
              hover:bg-[ext-[#E8E9E7]/2.5
              sm:px-7
              sm:py-8
              lg:px-8
              lg:py-9
              ${
                index !== packages.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              }
            `}
          >
            {/* TOP */}
            <div className="flex items-center justify-between">
              <span
                className="
                  font-normal
                  text-[13px]
                  text-[#4C9FE5]
                "
              >
                {item.number}
              </span>

              <span
                className="
                  text-[13px]
                  text-[#444]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#4C9FE5]
                "
              >
                +
              </span>
            </div>

            {/* CONTENT */}
            <div className="mt-14 sm:mt-16">
              <h3
                className="
                  text-[clamp(15px,1.5vw,18px)]
                  
                  text-[#ddd]
                  transition-colors
                  duration-300
                  group-hover:text-[#4C9FE5]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-95
                  text-[11px]
                  leading-[1.9]
                  
                  text-[#666]
                  sm:text-[12px]
                "
              >
                {item.text}
              </p>
            </div>

            {/* BOTTOM ACCENT */}
            <div
              className="
                mt-8
                h-px
                w-8
                bg-[#4C9FE5]/30
                transition-all
                duration-500
                group-hover:w-14
                group-hover:bg-[#4C9FE5]/70
              "
            />
          </article>
        ))}
      </div>
    </section>
  );
};
