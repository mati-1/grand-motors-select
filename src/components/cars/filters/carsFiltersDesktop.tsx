import type { ReactNode } from "react";

import type { CarView } from "../../../hooks/useCarFilters";

import { CarsFiltersTabs } from "./carsFiltersTabs";

type CarsFiltersDesktopProps = {
  view: CarView;
  onViewChange: (value: CarView) => void;

  viewOptions: {
    value: CarView;
    label: string;
  }[];

  children: ReactNode;
};

export const CarsFiltersDesktop = ({
  view,
  onViewChange,
  viewOptions,
  children,
}: CarsFiltersDesktopProps) => {
  return (
    <aside
      className="
        hidden
        lg:sticky
        lg:top-28
        lg:block
      "
    >
      <div
        className="
          relative
          overflow-visible
          border
          border-white/15
          bg-[#080808]/90
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            pb-5
            pt-5
            xl:px-6
            xl:pb-6
            xl:pt-6
          "
        >
          <div>
            <span className="block text-[12px] tracking-[0.3em] text-[#b99a5c]">
              FILTRY
            </span>

            <span className="mt-2 block text-[11px] tracking-[0.2em] text-[#555]">
              {view === "available" ? "AKTUALNA OFERTA" : "ARCHIWUM"}
            </span>
          </div>
        </div>

        <CarsFiltersTabs
          view={view}
          options={viewOptions}
          onChange={onViewChange}
        />

        {children}
      </div>
    </aside>
  );
};
