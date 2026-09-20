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
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[10%_center]
    sm:object-[58%_center]
    lg:object-[52%_center]
  "
      >
        <source src="/cars.mp4" type="video/mp4" />
      </video>
      <div
        className="
          absolute inset-0 z-0
          bg-linear-to-r
          from-black via-black/80
          to-black/25
        "
      />

      {/* SUBTELNE PRZYCIEMNIENIE DOŁU */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-1 h-40
          bg-linear-to-t from-black/70 to-transparent
        "
      />
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
