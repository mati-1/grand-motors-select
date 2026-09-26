import type { CarView } from "../../../hooks/useCarFilters";

type CarsFiltersTabsProps = {
  view: CarView;
  options: {
    value: CarView;
    label: string;
  }[];
  onChange: (value: CarView) => void;
};

export const CarsFiltersTabs = ({
  view,
  options,
  onChange,
}: CarsFiltersTabsProps) => {
  return (
    <div className="border-b border-white/10 px-5 pt-5 xl:px-6">
      <div className="flex">
        {options.map((option) => {
          const active = view === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                relative
                cursor-pointer
                pb-4
                pr-5
                text-left
                text-[9px]
                tracking-[0.2em]
                transition-colors
                duration-300
                ${active ? "text-[#d2b878]" : "text-[#555] hover:text-[#999]"}
              `}
            >
              {option.label}

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-px
                  bg-[#b99a5c]
                  transition-all
                  duration-500
                  ${active ? "w-[calc(100%-1.25rem)]" : "w-0"}
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
