import { MainHeadingComponent, SubHeadingComponent } from "../headings";

export const CarsHero = () => {
  return (
    <section
      className="
        relative
        flex min-h-[45vh]
        flex-col justify-center
        overflow-hidden
        border-b border-white/5
        px-[5vw]
        pt-[10vh]
         bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      <div className="relative z-10">
        <SubHeadingComponent>
          GRAND MOTORS <span className="text-[#d2b878]">SELECT</span>
        </SubHeadingComponent>

        <MainHeadingComponent className="text-4xl! sm:text-5xl!">
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
