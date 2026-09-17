import type { CarType } from "../cars";

type CarDescriptionProps = {
  car: CarType;
};

export const CarDescription = ({ car }: CarDescriptionProps) => {
  return (
    <section className="border-y border-white/5 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            01 / OPIS
          </span>

          <h2 className="mt-4 text-[28px] font-normal text-[#ddd]">
            SAMOCHÓD,
            <br />
            KTÓRY <span className="text-[#d2b878]">MA CHARAKTER.</span>
          </h2>
        </div>

        <p className="max-w-170 text-[12px] leading-loose tracking-[0.02em] text-[#777]">
          {car.description}
        </p>
      </div>
    </section>
  );
};
