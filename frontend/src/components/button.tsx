import React from "react";
import ArrowDownIcon from "../assets/icons/strzalka-w-dol.svg?react";
import ArrowRightIcon from "../assets/icons/strzalka.svg?react";
import type { ButtonHTMLAttributes } from "react";

type ButtonComponentProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "main" | "secondary";
  size?: "big" | "small";
  className?: string;
  disabled?: boolean;
  arrowIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent = ({
  children,
  href,
  onClick,
  variant = "secondary",
  size = "big",
  className = "",
  disabled = false,
  arrowIcon,
  ...buttonProps
}: ButtonComponentProps) => {
  const classes = `
    flex
    w-full
    max-w-50
    items-center
    justify-center
    text-center
    gap-1
    rounded-[10px]
    cursor-pointer
    transition
    h-auto
    ${
      variant === "main"
        ? `
          gap-3
          bg-gradient-to-r from-[#7FC4F7] via-[#4C9FE5] to-[#2B6DB8]
          text-black
          font-medium
          transition duration-300 hover:brightness-125
        `
        : `
          border
          border-[#4C9FE5]/70
          text-[#E8E9E7]
          hover:bg-[#6F8FA6]/10
        `
    }
    ${
      size === "big"
        ? `
          max-h-12
          px-5
          py-4
          text-[12px]
          sm:min-h-13
          sm:px-6
          sm:text-[13px]
        `
        : `
          max-h-9.5
          px-4
          py-4
          text-[12px]
          sm:min-h-10
          sm:px-4
          sm:py-2.5
          sm:text-[13px]
        `
    }
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}{" "}
        {arrowIcon && <ArrowRightIcon className="w-4 h-4 rotate-180" />}
      </a>
    );
  }

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...buttonProps}
    >
      {children}{" "}
      {arrowIcon && <ArrowRightIcon className="w-4 h-4 rotate-180" />}
    </button>
  );
};

export const ButtonExpand = ({
  onClick,
  isExpanded,
  hiddenCount,
}: {
  onClick: () => void;
  isExpanded: boolean;
  hiddenCount?: number;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        inline-flex
        min-h-9
        cursor-pointer
        rounded-[10px]
        items-center
        gap-2.5
        border
        border-white/10
        px-3.5
        text-[12px]
        font-normal
        text-[#777]
        transition-all
        duration-300
        hover:border-[#4C9FE5]/40
        hover:bg-[ext-[#E8E9E7]/2
        hover:text-[#4C9FE5]
      "
    >
      <span>{isExpanded ? "Pokaż mniej" : "Pokaż więcej"}</span>

      <span
        className={`
          transition-transform
          duration-200
          ${isExpanded ? "rotate-180" : ""}
        `}
      >
        <ArrowDownIcon className="w-4 h-4" />
      </span>

      {hiddenCount && <span>({hiddenCount})</span>}
    </button>
  );
};
