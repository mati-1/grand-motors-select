import type { ButtonHTMLAttributes, ReactNode } from "react";

type CarsFilterFieldProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export const CarsFilterField = ({
  label,
  children,
  className = "",
  ...buttonProps
}: CarsFilterFieldProps) => {
  return (
    <button
      {...buttonProps}
      className={`
        group
        relative
        w-full
        cursor-pointer
        border-b
        border-l
        border-r
        border-[#0b0b0b]
        bg-[#080808]
        transition-colors
        duration-300
        hover:bg-[#0b0b0b]
        ${className}
      `}
    >
      {/* TOP ACCENT */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-[#b99a5c]/60
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* LABEL */}
      <span
        className="
          block
          px-4
          pt-3
          text-left
          text-[12px]
          text-[#e6e6e6]
          transition-colors
          duration-300
          group-hover:text-[#cccccc]
        "
      >
        {label}
      </span>

      {children}
    </button>
  );
};
