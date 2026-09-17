import { SubHeadingComponent } from "../../headings";
import type { CarType } from "../cars";

type CarInfoProps = {
  car: CarType;
};

export const CarInfo = ({ car }: CarInfoProps) => {
  const specifications = [
    ["ROK", car.year],
    ["PRZEBIEG", car.mileage],
    ["SILNIK", car.engine],
    ["MOC", car.power],
    ["SKRZYNIA", car.transmission],
    ["NAPĘD", car.drive],
    ["PALIWO", car.fuel],
  ];

  return (
    <div>
      <div className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
        GRAND MOTORS SELECT
      </div>

      <h1 className="mt-4 text-[clamp(36px,5vw,64px)] font-normal leading-[1.05]">
        {car.brand}
        <br />
        <span className="text-[#d2b878]">{car.model}</span>
      </h1>

      <div className="mt-8">
        <span className="text-[9px] tracking-[0.25em] text-[#666]">CENA</span>

        <div className="mt-2 font-serif text-[32px] text-[#d2b878]">
          {car.price}{" "}
          {car.negotiation && (
            <SubHeadingComponent>Do negocjacji</SubHeadingComponent>
          )}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 border-y border-white/10 sm:grid-cols-3">
        {specifications.map(([label, value], index) => (
          <div
            key={label}
            className={`
              border-white/10
              p-4
              ${index % 2 !== 1 ? "border-r" : ""}
              sm:border-r
              ${index >= 6 ? "border-r-0" : ""}
            `}
          >
            <div className="text-[8px] tracking-[0.2em] text-[#555]">
              {label}
            </div>

            <div className="mt-2 text-[11px] text-[#ccc]">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
