import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../components/headings";

const methods = [
  {
    number: "01",
    label: "TELEFON",
    value: "+48 514 137 133",
    href: "tel:+48514137133",
    description: "Najlepszy sposób, jeśli chcesz szybko porozmawiać.",
  },
  {
    number: "02",
    label: "E-MAIL",
    value: "kontakt@grandmotorsselect.pl",
    href: "mailto:kontakt@grandmotorsselect.pl",
    description: "Wyślij zapytanie lub informacje dotyczące samochodu.",
  },
  {
    number: "03",
    label: "LOKALIZACJA",
    value: "MAŁOPOLSKA",
    href: "#contact-location",
    description: "Oględziny samochodów po wcześniejszym umówieniu.",
  },
];

export const ContactMethods = () => {
  return (
    <section
      id="contact-methods"
      className="
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
        <DetailingSectionLabel number="01">KONTAKT</DetailingSectionLabel>

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
          <MainHeadingComponent className="text-[clamp(42px,5vw,62px)]!">
            W KTÓRY SPOSÓB
            <br />
            <span className="text-[#d2b878]">CI WYGODNIE?</span>
          </MainHeadingComponent>

          <p className="max-w-105 text-[12px] leading-[1.9] text-[#666]">
            Wybierz najwygodniejszą formę kontaktu. Jeśli chodzi o konkretny
            samochód, warto podać jego model lub numer oferty.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            grid-cols-1
            border-y
            border-white/10
            md:grid-cols-3
          "
        >
          {methods.map((method, index) => (
            <a
              key={method.number}
              href={method.href}
              className={`
                group
                relative
                block
                px-6
                py-8
                transition-colors
                duration-300
                hover:bg-white/2
                sm:px-8
                ${
                  index !== methods.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <span className="font-serif text-[11px] text-[#b99a5c]">
                {method.number}
              </span>

              <p className="mt-8 text-[8px] tracking-[0.3em] text-[#555]">
                {method.label}
              </p>

              <p
                className="
                  mt-3
                  text-[12px]
                  tracking-[0.04em]
                  text-[#ccc]
                  transition-colors
                  duration-300
                  group-hover:text-[#d2b878]
                "
              >
                {method.value}
              </p>

              <p className="mt-4 max-w-70 text-[10px] leading-[1.8] text-[#666]">
                {method.description}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
