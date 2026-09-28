import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../../assets/icons/strzalka-w-dol.svg?react";
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

type DropdownPlacement = "bottom" | "top";

const DROPDOWN_BOUNDARY = 24;

export const CarsFilterSelect = ({
  label,
  value,
  options,
  onChange,
}: CarsFilterSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<DropdownPlacement>("bottom");

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

  useEffect(() => {
    if (!isOpen) return;

    const updatePlacement = () => {
      const container = containerRef.current;

      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      let scrollParent: HTMLElement | null = container.parentElement;

      while (scrollParent) {
        const styles = window.getComputedStyle(scrollParent);

        const isScrollable =
          styles.overflowY === "auto" || styles.overflowY === "scroll";

        if (isScrollable) {
          break;
        }

        scrollParent = scrollParent.parentElement;
      }

      const scrollRect = scrollParent?.getBoundingClientRect();

      const viewportTop = (scrollRect?.top ?? 0) + DROPDOWN_BOUNDARY;

      const viewportBottom =
        (scrollRect?.bottom ?? window.innerHeight) - DROPDOWN_BOUNDARY;

      const spaceAbove = containerRect.top - viewportTop;

      const spaceBelow = viewportBottom - containerRect.bottom;

      if (spaceAbove > spaceBelow) {
        setPlacement("top");
      } else {
        setPlacement("bottom");
      }
    };

    updatePlacement();

    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, true);

    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement, true);
    };
  }, [isOpen]);

  const handleSelect = (option: CarsFilterOption) => {
    if (option.disabled) return;

    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <CarsFilterField
        label={label}
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <div
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
              text-[13px]
              
              transition-colors
              duration-300
              ${value === "all" ? "text-[#777]" : "text-[#ddd]"}
            `}
          >
            {selectedOption?.label}
          </span>

          <ArrowIcon
            className={`
              flex
              h-4
              w-4
              transition
              ${isOpen ? "rotate-180" : ""}
            `}
          />
        </div>
      </CarsFilterField>

      {isOpen && (
        <div
          className={`
            absolute
            left-0
            right-0
            z-50
            overflow-hidden
            border
            border-white/10
            bg-[#0a0a0a]/98
            shadow-[0_20px_60px_rgba(0,0,0,0.65)]
            backdrop-blur-xl

            ${
              placement === "bottom"
                ? "top-[calc(100%+8px)]"
                : "bottom-[calc(100%+8px)]"
            }
          `}
        >
          {/* GOLD LINE */}
          <div className="h-px w-full shrink-0 bg-linear-to-r from-transparent via-[#b99a5c]/60 to-transparent" />

          {/* OPTIONS */}
          <div
            className="
              max-h-56
              overflow-y-auto
              overscroll-contain
              py-1.5
            "
          >
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
                    shrink-0
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

                  {/* LABEL */}
                  <span
                    className={`
                      text-[12px]
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

                  {/* SELECTED */}
                  {isSelected && (
                    <span className="text-[8px] text-[#b99a5c]">●</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
