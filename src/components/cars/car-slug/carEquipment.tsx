import type { CarType } from "../cars";

type CarEquipmentProps = {
  car: CarType;
};

export const CarEquipment = ({ car }: CarEquipmentProps) => {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            02 / WYPOSAŻENIE
          </span>

          <h2 className="mt-4 text-[28px] font-normal text-[#ddd]">
            NAJWAŻNIEJSZE
            <br />
            <span className="text-[#d2b878]">ELEMENTY.</span>
          </h2>
        </div>

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
                text-[10px]
                tracking-[0.04em]
                text-[#aaa]
                transition
                hover:bg-white/2
                hover:text-[#ddd]
                sm:nth-last-[n+2]:border-r
              "
            >
              <span className="font-serif text-[11px] text-[#b99a5c]/70">
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
