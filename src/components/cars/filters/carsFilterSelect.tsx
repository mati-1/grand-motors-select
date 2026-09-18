import { useEffect, useRef, useState } from "react";
import { CarsFilterField } from "./carsFilterField";

export type CarsFilterOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type CarsFilterSelectProps = {
  label: string;
  value: string;
  options: CarsFilterOption[];
  onChange: (value: string) => void;
};

export const CarsFilterSelect = ({
  label,
  value,
  options,
  onChange,
}: CarsFilterSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: CarsFilterOption) => {
    if (option.disabled) return;

    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <CarsFilterField
        label={label}
        onClick={() => setIsOpen((current) => !current)}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          className="
            group/select
            flex
            h-12
            w-full
            cursor-pointer
            items-center
            justify-between
            bg-transparent
            px-4
            text-left
            outline-none
          "
        >
          <span
            className={`
              text-[11px]
              tracking-[0.08em]
              transition-colors
              duration-300
              ${value === "all" ? "text-[#777]" : "text-[#ddd]"}
            `}
          >
            {selectedOption?.label}
          </span>

          <span
            className={`
              flex
              h-5
              w-5
              items-center
              justify-center
              text-[10px]
              text-[#555]
              transition-all
              duration-300
              group-hover/select:text-[#b99a5c]
              ${isOpen ? "rotate-180 text-[#b99a5c]" : ""}
            `}
          >
            ↓
          </span>
        </button>
      </CarsFilterField>

      {/* DROPDOWN */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-[calc(100%+1px)]
          z-50
          overflow-hidden
          border
          border-white/10
          bg-[#0a0a0a]/98
          shadow-[0_20px_60px_rgba(0,0,0,0.65)]
          backdrop-blur-xl
          transition-all
          duration-200

          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {/* GOLD LINE */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#b99a5c]/60 to-transparent" />

        <div className="py-1.5">
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                disabled={option.disabled}
                onClick={() => handleSelect(option)}
                className={`
                  group/option
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-left
                  transition-all
                  duration-200

                  ${
                    option.disabled
                      ? "cursor-not-allowed text-[#333]"
                      : "cursor-pointer hover:bg-[#b99a5c]/7"
                  }

                  ${isSelected ? "bg-[#b99a5c]/5" : ""}
                `}
              >
                {/* LEFT HOVER LINE */}
                <span
                  className={`
                    absolute
                    bottom-2
                    left-0
                    top-2
                    w-px
                    bg-[#b99a5c]
                    transition-all
                    duration-300

                    ${
                      isSelected
                        ? "opacity-70"
                        : "scale-y-0 opacity-0 group-hover/option:scale-y-100 group-hover/option:opacity-50"
                    }
                  `}
                />

                <span
                  className={`
                    text-[10px]
                    tracking-[0.12em]
                    transition-all
                    duration-200

                    ${
                      option.disabled
                        ? "text-[#333]"
                        : isSelected
                          ? "translate-x-1 text-[#d2b878]"
                          : "text-[#888] group-hover/option:translate-x-1 group-hover/option:text-[#ddd]"
                    }
                  `}
                >
                  {option.label}
                </span>

                {isSelected && (
                  <span className="text-[8px] text-[#b99a5c]">●</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
