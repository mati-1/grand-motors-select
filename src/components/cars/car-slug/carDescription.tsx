import { MainHeadingComponent } from "../../headings";
import type { CarType } from "../cars";
import { useState } from "react";

type CarDescriptionProps = {
  car: CarType;
};

type DetailItemProps = {
  label: string;
  value: string | React.ReactNode;
  index: number;
};

const DetailItem = ({ label, value, index }: DetailItemProps) => {
  return (
    <div
      className="
        group
        relative
        border-b
        border-white/8
        px-5
        py-6
        transition-colors
        duration-300
        hover:bg-white/2
        sm:px-6
      "
    >
      {/* GOLD ACCENT */}
      <span
        className="
          absolute
          left-0
          top-5
          h-[calc(100%-2.5rem)]
          w-px
          origin-top
          scale-y-0
          bg-[#b99a5c]
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="
              text-[10px]
              tracking-[0.25em]
              text-[#555]
              transition-colors
              duration-300
              group-hover:text-[#777]
            "
          >
            {label}
          </p>

          {/* VALUE */}
          <div
            className="
              mt-2
              text-[13px]
              tracking-[0.04em]
              text-[#ccc]
              transition-colors
              duration-300
              group-hover:text-[#d2b878]
            "
          >
            {value}
          </div>
        </div>

        <span
          className="
            pt-0.5
            font-serif
            text-[10px]
            text-[#333]
            transition-colors
            duration-300
            group-hover:text-[#b99a5c]/50
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export const CarDescription = ({ car }: CarDescriptionProps) => {
  const details = [
    ["NADWOZIE", car.details.body],
    ["KOLOR", car.details.color],
    ["WNĘTRZE", car.details.interior],
    ["LICZBA MIEJSC", car.details.seats],
    ["LICZBA DRZWI", car.details.doors],
    ["KRAJ POCHODZENIA", car.details.country],
    ["PALIWO", car.fuel],
    ["FAKTURA", car.invoice],
    ["CARVERTICAL", car.carvertical ? "Dostępny" : "Brak"],
  ];

  const [copied, setCopied] = useState(false);

  const copyVin = async () => {
    try {
      await navigator.clipboard.writeText(car.vin);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      className="border-t border-white/5 py-12 sm:py-16 bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90"
    >
      <div>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <MainHeadingComponent
              className="
                text-[12px]!
                mt-0!
                tracking-[0.3em]
                text-[#b99a5c]
                md:text-[14px]!
              "
            >
              01 / OPIS SAMOCHODU
            </MainHeadingComponent>
          </div>

          <div className="relative max-w-180">
            {/* SMALL GOLD LINE */}
            <div
              className="
                absolute
                -left-5
                top-1
                h-10
                w-px
                bg-linear-to-b
                from-[#b99a5c]/70
                to-transparent
                lg:-left-7
              "
            />

            <p
              className="
                text-[14px]
                leading-[1.9]
                tracking-[0.015em]
                text-[#888]
                sm:text-[15px]
              "
            >
              {car.description}
            </p>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />

              <span
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-[#555]
                "
              >
                SPECYFIKACJA
              </span>
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              border-y
              border-white/10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {details.map(([label, value], index) => (
              <DetailItem
                key={label}
                label={label}
                value={value}
                index={index}
              />
            ))}
          </div>

          <DetailItem
            key="vin"
            label={"NR VIN"}
            value={
              <div className="flex flex-row gap-6 items-center">
                {car.vin}
                <button
                  type="button"
                  onClick={copyVin}
                  className="
            flex
            shrink-0
            cursor-pointer
            items-center
            gap-2
            border
            border-white/10
            px-3
            py-2
            text-[8px]
            tracking-[0.2em]
            text-[#666]
            transition-all
            duration-300
            hover:border-[#b99a5c]/40
            hover:text-[#d2b878]
            "
                >
                  <span>{copied ? "✓ SKOPIOWANO" : "SKOPIUJ"}</span>
                </button>
              </div>
            }
            index={6}
          />
        </div>
      </div>
    </section>
  );
};
