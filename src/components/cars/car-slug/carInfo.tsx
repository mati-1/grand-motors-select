import type { CarType } from "../cars";

type CarInfoProps = {
  car: CarType;
};

type SpecificationItemProps = {
  label: string;
  value: string | number;
  index: number;
};

const SpecificationItem = ({ label, value, index }: SpecificationItemProps) => {
  return (
    <div
      className="
        group relative
        border-b border-white/8
        px-5 py-6
        transition-colors duration-300
        hover:bg-white/2
        sm:px-6
      "
    >
      <span
        className="
          absolute left-0 top-5
          h-[calc(100%-2.5rem)] w-px
          origin-top scale-y-0
          bg-[#b99a5c]
          transition-transform duration-500
          group-hover:scale-y-100
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="
              text-[10px]
              tracking-[0.25em]
              text-[#555]
              transition-colors duration-300
              group-hover:text-[#777]
            "
          >
            {label}
          </p>

          <p
            className="
              mt-2
              text-[13px]
              tracking-[0.04em]
              text-[#ccc]
              transition-colors duration-300
              group-hover:text-[#d2b878]
            "
          >
            {value}
          </p>
        </div>

        <span
          className="
            pt-0.5
            font-serif
            text-[10px]
            text-[#333]
            transition-colors duration-300
            group-hover:text-[#b99a5c]/50
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
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
    ["FAKTURA", car.invoice],
    ["CARVERTICAL", car.carvertical === true ? "DOSTĘPNY" : ""],
  ];

  const isAvailable = car.status === "available";

  return (
    <div>
      {/* BRAND / STATUS */}
      <div
        className="flex          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90 items-center justify-between gap-6"
      >
        <div className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
          GRAND MOTORS SELECT
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`
              h-1.5 w-1.5 rounded-full
              ${isAvailable ? "bg-[#b99a5c]" : "bg-[#555]"}
            `}
          />

          <span
            className="
              text-[10px]
              tracking-[0.25em]
              text-[#555]
            "
          >
            {isAvailable ? "DOSTĘPNE" : "SPRZEDANE"}
          </span>
        </div>
      </div>

      {/* TITLE */}
      <div className="mt-5">
        <h1
          className="
            text-[clamp(36px,5vw,64px)]
            font-normal
            leading-[1.02]
            tracking-[-0.02em]
          "
        >
          {car.brand}
          <br />
          <span className="text-[#d2b878]">{car.model}</span>
        </h1>
      </div>

      {/* PRICE */}
      <div
        className="mt-10          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90 border-y border-white/10 py-6"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b99a5c]/50" />

              <span
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-[#555]
                "
              >
                CENA
              </span>
            </div>

            <div
              className={`
                mt-3
                font-serif
                text-[30px]
                leading-none
                ${isAvailable ? "text-[#d2b878]" : "text-[#666] line-through"}
              `}
            >
              {car.price}
            </div>
          </div>

          <div className="pb-0.5 text-right">
            {isAvailable && car.negotiation ? (
              <span
                className="
                  text-[10px]
                  tracking-[0.2em]
                  text-[#777]
                "
              >
                DO NEGOCJACJI
              </span>
            ) : !isAvailable ? (
              <span
                className="
                  text-[10px]
                  tracking-[0.2em]
                  text-[#555]
                "
              >
                SAMOCHÓD SPRZEDANY
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* SPECIFICATION */}
      <div className="mt-10">
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
                     bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
          "
        >
          {specifications.map(([label, value], index) => (
            <SpecificationItem
              key={label}
              label={label.toString()}
              value={value}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
