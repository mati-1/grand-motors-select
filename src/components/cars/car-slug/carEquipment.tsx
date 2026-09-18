import { MainHeadingComponent } from "../../headings";
import type { CarType } from "../cars";

type CarEquipmentProps = {
  car: CarType;
};

export const CarEquipment = ({ car }: CarEquipmentProps) => {
  return (
    <section
      className="border-b border-white/5 py-12 sm:py-16 bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90"
    >
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <MainHeadingComponent className="text-[12px]! mt-0! md:text-[14px]! tracking-[0.3em] text-[#b99a5c]">
          02 / WYPOSAŻENIE
        </MainHeadingComponent>

        <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2">
          {car.equipment.map((item, index) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-4
                border-b
                border-white/10
                p-4
                text-[12px]
                tracking-[0.04em]
                text-[#aaa]
                transition
                hover:bg-white/2
                hover:text-[#ddd]
                sm:nth-last-[n+2]:border-r
              "
            >
              <span className="font-serif text-[13px] text-[#b99a5c]/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
