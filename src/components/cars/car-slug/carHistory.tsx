import type { CarType } from "../cars";

type CarHistoryProps = {
  car: CarType;
};

export const CarHistory = ({ car }: CarHistoryProps) => {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            04 / HISTORIA
          </span>

          <h2 className="mt-4 text-[28px] font-normal text-[#ddd]">
            INFORMACJE
            <br />O <span className="text-[#d2b878]">SAMOCHODZIE.</span>
          </h2>
        </div>

        <div>
          {car.history.map((item, index) => (
            <div
              key={item.title}
              className={`
                flex gap-5 py-6
                ${
                  index !== car.history.length - 1
                    ? "border-b border-white/10"
                    : ""
                }
              `}
            >
              <span className="font-serif text-[12px] text-[#b99a5c]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-[11px] tracking-[0.12em] text-[#ddd]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-[1.8] text-[#666]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
