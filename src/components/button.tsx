import React from "react";
import ArrowDownIcon from "../assets/icons/strzalka-w-dol.svg?react";
import ArrowRightIcon from "../assets/icons/strzalka.svg?react";

type ButtonComponentProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "main" | "secondary";
  size?: "big" | "small";
  className?: string;
  disabled?: boolean;
  arrowIcon?: boolean;
};

export const ButtonComponent = ({
  children,
  href,
  onClick,
  type = "secondary",
  size = "big",
  className = "",
  disabled = false,
  arrowIcon,
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
      type === "main"
        ? `
          gap-3
          bg-linear-to-r
          from-[#b6944e]
          to-[#d6bb7c]
          text-black
          transition duration-300 hover:brightness-125
        `
        : `
          border
          border-[#b99a5c]/70
          text-white
          hover:bg-[#b99a5c]/10
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
        hover:border-[#b99a5c]/40
        hover:bg-white/2
        hover:text-[#d2b878]
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
