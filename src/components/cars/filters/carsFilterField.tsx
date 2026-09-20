type CarsFilterFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const CarsFilterField = ({
  label,
  children,
  className = "",
  onClick,
}: CarsFilterFieldProps) => {
  return (
    <button
      className={`
        group
        w-full
        relative
        bg-[#080808]
        border-b
        border-l
        border-r
        border-[#0b0b0b]
        transition-colors
        duration-300
        cursor-pointer
        hover:bg-[#0b0b0b]
        ${className}
      `}
      onClick={onClick}
    >
      {/* top accent */}
      <div
        className="
        absolute
        top-0
        h-px
        left-0
        w-full
        opacity-0
        bg-[#b99a5c]/60
        transition-opacity
        duration-300
        group-focus-opacity-100
        group-hover:opacity-100
        "
      />

      <label
        className="
          block
          px-4
          pt-3
          text-[9px]
          tracking-[0.25em]
          text-[#666]
          transition-colors
          cursor-pointer
          duration-300
          group-hover:text-[#888]
          group-focus-within:text-[#b99a5c]
        "
      >
        {label}
      </label>

      {children}
    </button>
  );
};
