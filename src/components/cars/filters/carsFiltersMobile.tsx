import type { ReactNode } from "react";

import { CarsFiltersTabs } from "./carsFiltersTabs";

import type { CarView } from "../../../hooks/useCarFilters";

type CarsFiltersMobileProps = {
  isOpen: boolean;
  resultCount: number;
  onClose: () => void;
  children: ReactNode;
  view: CarView;
  onViewChange: (value: CarView) => void;
  viewOptions: {
    value: CarView;
    label: string;
  }[];
};

export const CarsFiltersMobile = ({
  isOpen,
  resultCount,
  onClose,
  children,
  view,
  onViewChange,
  viewOptions,
}: CarsFiltersMobileProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-100
        flex
        h-dvh
        w-full
        flex-col
        overflow-hidden
        bg-[#080808]
        lg:hidden
      "
      onClick={onClose}
    >
      {/* HEADER */}
      <header
        className="
          flex
          h-21
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#080808]
          px-5
        "
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <span className="block text-[9px] tracking-[0.3em] text-[#b99a5c]">
            GRAND MOTORS SELECT
          </span>

          <h2 className="mt-2 text-[18px] font-normal tracking-[0.02em] text-white">
            Filtry
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Zamknij filtry"
          className="
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            text-[22px]
            text-[#555]
            transition-colors
            duration-300
            hover:text-[#d2b878]
          "
        >
          ×
        </button>
      </header>

      {/* CONTENT */}
      <main
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          bg-[#080808]
        "
        onClick={(event) => event.stopPropagation()}
      >
        <CarsFiltersTabs
          view={view}
          options={viewOptions}
          onChange={onViewChange}
        />

        {children}
      </main>

      {/* FOOTER */}
      <footer
        className="
          shrink-0
          border-t
          border-white/10
          bg-[#080808]
          px-5
          pt-4
          pb-[max(1rem,env(safe-area-inset-bottom))]
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="
            group
            flex
            min-h-14
            w-full
            cursor-pointer
            items-center
            justify-between
            border
            border-[#b99a5c]/30
            bg-[#b99a5c]/5
            px-5
            transition-all
            duration-300
            hover:bg-[#b99a5c]/10
          "
        >
          <span className="text-[9px] tracking-[0.25em] text-[#d2b878]">
            POKAŻ {resultCount} {resultCount === 1 ? "SAMOCHÓD" : "SAMOCHODÓW"}
          </span>

          <span
            className="
              text-[#b99a5c]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </footer>
    </div>
  );
};
