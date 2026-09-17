import { MainHeadingComponent, SubHeadingComponent } from "../headings";

export const CarsHero = () => {
  return (
    <section
      className="
        relative
        flex min-h-[58vh]
        flex-col justify-end
        overflow-hidden
        border-b border-white/5
        px-[5vw]
        pb-16
        pt-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute right-[5vw] top-1/2
          hidden -translate-y-1/2
          select-none
          font-serif
          text-[clamp(180px,28vw,420px)]
          leading-none
          text-white/[0.018]
          xl:block
        "
      >
        01
      </div>

      <div className="relative z-10">
        <SubHeadingComponent>
          GRAND MOTORS <span className="text-[#d2b878]">SELECT</span>
        </SubHeadingComponent>

        <MainHeadingComponent>
          NASZA
          <br />
          <span className="text-[#d2b878]">OFERTA.</span>
        </MainHeadingComponent>

        <p
          className="
            mt-7
            max-w-130
            text-[12px]
            leading-[1.9]
            tracking-[0.03em]
            text-[#666]
            sm:text-[13px]
          "
        >
          Starannie wybrane samochody, które łączą odpowiednią specyfikację,
          historię i stan. Poznaj aktualnie dostępne egzemplarze GRAND MOTORS
          SELECT.
        </p>
      </div>
    </section>
  );
};
