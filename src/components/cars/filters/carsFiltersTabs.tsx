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
    <div className="border-b border-white/10 p-2">
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
                text-left
                text-[12px]
                p-4
                rounded-[10px]
                flex items-center justify-center
                transition-colors
                duration-300
                ${active ? "text-white bg-white/4" : "text-[#555] hover:text-[#999]"}
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
