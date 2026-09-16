import React from "react";

type ButtonComponentProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "main" | "secondary";
  size?: "big" | "small";
  className?: string;
  disabled?: boolean;
};

export const ButtonComponent = ({
  children,
  href,
  onClick,
  type = "secondary",
  size = "big",
  className = "",
  disabled = false,
}: ButtonComponentProps) => {
  const classes = `
    flex
    w-full
    max-w-50
    items-center
    justify-center
    text-center
    transition
    h-auto
    ${
      type === "main"
        ? `
          gap-3
          bg-linear-to-r
          from-[#b6944e]
          to-[#d6bb7c]
          font-semibold
          tracking-[0.15em]
          text-black
          transition duration-300 hover:brightness-125
        `
        : `
          border
          border-[#b99a5c]/70
          tracking-[0.08em]
          text-[#d2b878]
          hover:bg-[#b99a5c]/10
        `
    }
    ${
      size === "big"
        ? `
          max-h-12
          px-5
          py-3
          text-[9px]
          sm:min-h-13
          sm:px-6
          sm:text-[10px]
        `
        : `
          max-h-9.5
          px-4
          py-2
          text-[8px]
          sm:min-h-10
          sm:px-4
          sm:py-2.5
          sm:text-[9px]
        `
    }
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
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
      {children}
    </button>
  );
};
