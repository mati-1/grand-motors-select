import { MainHeadingComponent } from "../../components/headings";
import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { LogoComponent } from "../../components/logo";

export const WrapBeforeAfter = () => {
  return (
    <section
      id="wrap-effect"
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
      <div>
        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <DetailingSectionLabel number="04">EFEKT</DetailingSectionLabel>

            <MainHeadingComponent className="mt-6 text-[clamp(42px,5vw,60px)]!">
              JEDEN
              <br />
              <span className="text-[#d2b878]">SAMOCHÓD.</span>
            </MainHeadingComponent>
          </div>

          <p className="max-w-110 text-[13px] leading-[1.9] text-[#666]">
            Najlepiej pokazuje to efekt końcowy. Zmiana koloru może całkowicie
            zmienić odbiór samochodu.
          </p>
        </div>

        <div
          className="
            relative
            mt-14
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            border
            border-white/10
            bg-white/10
            md:grid-cols-2
          "
        >
          {/* BEFORE */}

          <div className="group relative aspect-4/3 overflow-hidden bg-[#090909]">
            <img
              src="/wrap/wrap-before.jpg"
              alt="Samochód przed oklejeniem"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            <span
              className="
                absolute
                bottom-5
                left-5
                text-[10px]
                tracking-[0.3em]
                text-[#aaa]
              "
            >
              PRZED
            </span>
          </div>

          {/* AFTER */}

          <div className="group relative aspect-4/3 overflow-hidden bg-[#090909]">
            <img
              src="/wrap/wrap-after.jpg"
              alt="Samochód po oklejeniu"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            <span
              className="
                absolute
                bottom-5
                left-5
                text-[10px]
                tracking-[0.3em]
                text-[#d2b878]
              "
            >
              PO
            </span>
          </div>

          {/* CENTER BADGE */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              flex
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              border
              border-[#b99a5c]/40
              bg-[#050505]/90
              backdrop-blur-md
              rounded-full
              sm:h-20
              sm:w-20
            "
          >
            <LogoComponent
              type="emblem"
              clickable={false}
              className="w-8! md:w-10!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
