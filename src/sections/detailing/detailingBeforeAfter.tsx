import beforeimg from "../../../public/detaling-before.jpg";
import afterimg from "../../../public/detaling-after.jpg";

import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { LogoComponent } from "../../components/logo";

export const DetailingBeforeAfter = () => {
  return (
    <section
      id="detailing-effect"
      className="relative overflow-hidden border-t border-white/5 bg-[#b99a5c]/20
        bg-linear-to-r from-black/90 via-black/75 to-black/90"
    >
      {/* BACKGROUND NUMBER */}
      <div
        className="
          pointer-events-none absolute
          right-[-2%] top-[7%]
          select-none
          font-serif text-[18rem]
          leading-none
          text-white/[0.018]
          sm:text-[24rem]
          lg:text-[30rem]
        "
      >
        04
      </div>

      {/* HEADER */}
      <div className="relative px-[5vw] py-18 sm:py-24 lg:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <DetailingSectionLabel number="04">EFEKT</DetailingSectionLabel>

            <MainHeadingComponent className="mt-6! text-[clamp(42px,6vw,70px)]!">
              RÓŻNICĘ
              <span className="text-[#b99a5c]"> WIDAĆ.</span>
            </MainHeadingComponent>
          </div>

          <div className="max-w-115 lg:pb-2">
            <p className="text-[clamp(11px,1vw,13px)] leading-[1.9] tracking-[0.03em] text-[#777]">
              Detailing nie polega na wykonaniu jak największej liczby
              czynności. Liczy się właściwy zakres prac, dokładność wykonania i
              efekt dopasowany do konkretnego samochodu.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a5c]/50" />
              <SubHeadingComponent className="text-[8px]! tracking-[0.3em] text-[#555]">
                PRZED / PO
              </SubHeadingComponent>
            </div>
          </div>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div className="relative">
        {/* TOP LINE */}
        <div className="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-[#b99a5c]/30 to-transparent" />

        <div className="grid lg:grid-cols-2">
          {/* BEFORE */}
          <div className="group relative min-h-105 overflow-hidden border-b border-white/10 lg:min-h-160 lg:border-b-0 lg:border-r">
            <img
              src={beforeimg}
              alt="Wnętrze samochodu przed detailingiem"
              className="
                absolute inset-0
                h-full w-full
                object-cover
                grayscale-15
                brightness-[0.72]
                transition-all duration-800
                ease-out
                group-hover:scale-[1.025]
                group-hover:brightness-[0.95]
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-black/20" />

            {/* LABEL */}
            <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/40" />

                <span className="font-serif text-[12px] text-white/70">01</span>
              </div>

              <p className="mt-3 text-[9px] tracking-[0.3em] text-white/65">
                PRZED
              </p>
            </div>

            {/* BOTTOM DESCRIPTION */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
              <span className="text-[8px] tracking-[0.25em] text-white/35">
                STAN WYJŚCIOWY
              </span>
            </div>
          </div>

          {/* AFTER */}
          <div className="group relative min-h-105 overflow-hidden lg:min-h-160">
            <img
              src={afterimg}
              alt="Wnętrze samochodu po detailingu"
              className="
                absolute inset-0
                h-full w-full
                object-cover
                brightness-[0.88]
                transition-all duration-800
                ease-out
                group-hover:scale-[1.025]
                group-hover:brightness-100
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/5" />

            {/* LABEL */}
            <div className="absolute right-6 top-6 text-right sm:right-10 sm:top-10">
              <div className="flex items-center justify-end gap-3">
                <span className="font-serif text-[12px] text-[#d2b878]">
                  02
                </span>

                <span className="h-px w-8 bg-[#b99a5c]" />
              </div>

              <p className="mt-3 text-[9px] tracking-[0.3em] text-[#d2b878]">
                PO
              </p>
            </div>

            {/* BOTTOM DESCRIPTION */}
            <div className="absolute bottom-6 right-6 text-right sm:bottom-10 sm:right-10">
              <span className="text-[8px] tracking-[0.25em] text-[#b99a5c]/70">
                EFEKT KOŃCOWY
              </span>
            </div>
          </div>
        </div>

        {/* CENTER MARKER */}
        <div
          className="
            absolute left-1/2 top-1/2 z-20
            flex h-20 w-20
            -translate-x-1/2 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-[#b99a5c]/45
            bg-[#050505]/90
            backdrop-blur-xl
            sm:h-24 sm:w-24
          "
        >
          <div className="text-center">
            <LogoComponent
              type="emblem"
              className="w-8! sm:w-10!"
              clickable={false}
            />
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 hidden h-full w-px -translate-x-1/2 bg-[#b99a5c]/20 lg:block" />
      </div>
    </section>
  );
};
