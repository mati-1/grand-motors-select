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
        border
        rounded-[10px]
        border-white/10
        transition-colors
        duration-300
        bg-[#4C9FE5]/10
        ${className}
      `}
    >
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
