type InfoCardItemProps = {
  number: string;
  title: string;
  description: string;
  last?: boolean;
};

export const InfoCardItem = ({
  number,
  title,
  description,
  last = false,
}: InfoCardItemProps) => {
  return (
    <div
      className={`
        group flex gap-5 py-5
        transition-colors duration-300
        hover:bg-white/2.5
        sm:gap-7
        ${!last ? "border-b border-white/10" : ""}
      `}
    >
      {/* NUMBER + LINE */}

      <div className="flex shrink-0 flex-col items-center">
        <div
          className="
            flex h-8 w-8
            items-center justify-center
            border border-[#b99a5c]/30
            font-serif text-[12px]
            text-[#d2b878]
            transition-all duration-300
            group-hover:border-[#b99a5c]/60
            group-hover:bg-[#b99a5c]/5
          "
        >
          {number}
        </div>

        {!last && (
          <div className="mt-2 h-full w-px bg-white/10 transition-colors duration-300 group-hover:bg-[#b99a5c]/20" />
        )}
      </div>

      {/* CONTENT */}

      <div className="pt-0.5">
        <h4
          className="
            text-[11px]
            tracking-[0.15em]
            text-[#ddd]
            transition-colors duration-300
            group-hover:text-[#d2b878]
            sm:text-[13px]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            max-w-180
            text-[10px]
            leading-[1.8]
            tracking-[0.04em]
            text-[#777]
            sm:text-[12px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};
