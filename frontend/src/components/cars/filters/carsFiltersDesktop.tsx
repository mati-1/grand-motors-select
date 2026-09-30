import type { ReactNode } from "react";

import type { CarView } from "../../../hooks/useCarFilters";

import { CarsFiltersTabs } from "./carsFiltersTabs";
import { MainHeadingComponent } from "../../headings";

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
                  rounded-[10px]
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
            <MainHeadingComponent className="text-[22px]!">
              Filtry
            </MainHeadingComponent>

            <span className="mt-2 block text-[13px]  text-[#555]">
              {view === "available" ? "Aktualna oferta" : "Oferty archiwalne"}
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
