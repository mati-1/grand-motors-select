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
        px-[4vw] min-[1200px]:px-[13vw]
        pt-[10vh]
         bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      <video
        autoPlay
        muted
        loop
        preload="auto"
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

      <div
        className="
          absolute inset-x-0 bottom-0 z-1 h-40
          bg-linear-to-t from-black/70 to-transparent
        "
      />
      <div className="relative z-10">
        <MainHeadingComponent className="text-4xl! sm:text-5xl!">
          Nasza oferta
        </MainHeadingComponent>

        <SubHeadingComponent
          className="
            mt-5
            max-w-130
            leading-[1.9]
          "
        >
          Starannie wybrane samochody, które łączą odpowiednią specyfikację,
          historię i stan. Poznaj aktualnie dostępne egzemplarze GRAND MOTORS
          SELECT.
        </SubHeadingComponent>
      </div>
    </section>
  );
};
