import LocationIcon from "../../../assets/icons/lokalizacja.svg?react";

export const ContactMap = () => {
  const mapUrl =
    `https://www.google.com/maps/embed/v1/place` +
    `?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}` +
    `&q=Bochnia` +
    `&zoom=13` +
    `&maptype=roadmap` +
    `&language=pl` +
    `&region=PL`;

  return (
    <section
      className="
        border-t
        border-white/10
        bg-[#050505]
        py-16
        sm:py-20
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          px-[4vw]
          min-[1200px]:px-[13vw]
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-5
            lg:mb-12
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h2
              className="
                text-[28px]
                font-medium
                leading-tight
                tracking-[-0.02em]
                text-[#E8E9E7]
                sm:text-[34px]
              "
            >
              Gdzie działamy?
            </h2>
          </div>

          <div
            className="
              flex
              items-start
              gap-3
              lg:items-center
            "
          >
            <LocationIcon
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                text-[#4C9FE5]
                lg:mt-0
              "
            />

            <p className="text-[12px] text-[#E8E9E7]">Bochnia, Małopolska</p>
          </div>
        </div>

        {/* ================================================= */}
        {/* MAP */}
        {/* ================================================= */}

        <div
          className="
            relative
            h-90
            w-full
            overflow-hidden
            rounded-[10px]
            border
            border-white/10
            bg-[#4C9FE5]/2
            lg:h-100
          "
        >
          <iframe
            title="Grand Motors Select — lokalizacja"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="
              h-full
              w-full
              border-0
              transition-all
              duration-700
            "
          />

          {/* MAP OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-t
              from-black/20
              via-transparent
              to-black/10
            "
          />
        </div>
      </div>
    </section>
  );
};
