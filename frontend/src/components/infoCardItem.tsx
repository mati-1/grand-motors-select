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
        hover:bg-[ext-[#E8E9E7]/2.5
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
            border border-[#4C9FE5]/30
            font-normal text-[12px]
            text-[#4C9FE5]
            transition-all duration-300
            group-hover:border-[#4C9FE5]/60
            group-hover:bg-[#4C9FE5]/2
          "
        >
          {number}
        </div>

        {!last && (
          <div className="mt-2 h-full w-px bg-[ext-[#E8E9E7]/10 transition-colors duration-300 group-hover:bg-[#4C9FE5]/20" />
        )}
      </div>

      {/* CONTENT */}

      <div className="pt-0.5">
        <h4
          className="
            text-[11px]
            
            text-[#ddd]
            transition-colors duration-300
            group-hover:text-[#4C9FE5]
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
