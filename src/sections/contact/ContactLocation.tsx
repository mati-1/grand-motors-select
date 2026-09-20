import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../components/headings";

export const ContactLocation = () => {
  return (
    <section
      id="contact-location"
      className="
        scroll-mt-23
        border-b
        border-white/5
        px-[5vw]
        py-16
        sm:py-24
        bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/75 to-black/90
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-12
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-24
        "
      >
        <div>
          <DetailingSectionLabel number="03">LOKALIZACJA</DetailingSectionLabel>

          <MainHeadingComponent className="mt-6 text-[clamp(42px,5vw,60px)]!">
            SPOTKAJMY
            <br />
            <span className="text-[#d2b878]">SIĘ NA MIEJSCU.</span>
          </MainHeadingComponent>
        </div>

        <div>
          <div
            className="
              relative
              flex
              min-h-90
              items-end
              overflow-hidden
              border
              border-white/10
              bg-[#080808]
            "
          >
            {/* MAP PLACEHOLDER */}

            <div
              className="
    absolute
    inset-0
    bg-[url('/map.jpg')]
    bg-no-repeat

    /* MOBILE */
    bg-size-[240%_auto]
    bg-position-[68%_98%]

    sm:bg-size-[140%_auto]
    sm:bg-position-[58%_90%]

    lg:bg-size-[120%_auto]
    lg:bg-position-[58%_95%]
  "
            />

            <div className="relative z-10 border-t border-white/10 bg-[#050505]/90 px-6 py-5 backdrop-blur-md sm:px-8">
              <span className="text-[8px] tracking-[0.3em] text-[#555]">
                GRAND MOTORS SELECT
              </span>

              <p className="mt-2 text-[11px] tracking-[0.08em] text-[#ccc]">
                MAŁOPOLSKA
              </p>

              <p className="mt-2 text-[9px] leading-[1.7] text-[#666]">
                Dokładną lokalizację oraz termin oględzin ustalamy
                indywidualnie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
