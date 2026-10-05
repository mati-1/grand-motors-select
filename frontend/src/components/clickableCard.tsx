type BaseClickableCardProps = {
  number: string;
  title: string;
  isOpen: boolean;
  onOpen: () => void;
};

type SmallClickableCardProps = BaseClickableCardProps & {
  variant: "small";
  subtitle: string;
};

type BigClickableCardProps = BaseClickableCardProps & {
  variant: "big";
  text: string;
};

type ClickableCardProps = SmallClickableCardProps | BigClickableCardProps;

export const ClickableCard = (props: ClickableCardProps) => {
  const { number, title, isOpen, onOpen } = props;

  const isSmall = props.variant === "small";

  return (
    <article
      className={`
        group
        border-white/10
        transition-all duration-300
        xl:border-l
        ${isOpen ? "bg-[ext-[#E8E9E7]/[0.035]" : ""}
      `}
    >
      <button
        type="button"
        onClick={onOpen}
        className={`
          flex w-full
          cursor-pointer
          items-center
          min-h-full
          gap-4
          text-left
          transition-all duration-300
          hover:bg-[ext-[#E8E9E7]/2.5
          ${isSmall ? "px-5 py-5 sm:px-6" : "px-6 py-7 sm:px-8 sm:py-8"}
        `}
      >
        {/* NUMBER */}

        <div
          className={`
            flex shrink-0 items-center justify-center
            border
            font-normal
            transition-all duration-300
            ${isSmall ? "h-9 w-9 text-[15px]" : "h-11 w-11 text-[17px]"}
            ${
              isOpen
                ? "border-[#4C9FE5]/70 bg-[#4C9FE5]/10 text-[#4C9FE5]"
                : "border-[#4C9FE5]/30 text-[#4C9FE5]"
            }
          `}
        >
          {number}
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">
          <strong
            className={`
              block
              
              transition-colors duration-300
              ${
                isSmall
                  ? "text-[9px] sm:text-[10px]"
                  : "text-[11px] sm:text-[13px]"
              }
              ${isOpen ? "text-[#4C9FE5]" : "text-[#ddd]"}
            `}
          >
            {title}
          </strong>

          {isSmall ? (
            <span
              className="
                mt-1.5
                block
                text-[8px]
                leading-relaxed
                
                text-[#777]
                sm:text-[9px]
              "
            >
              {props.subtitle}
            </span>
          ) : (
            <span
              className="
                mt-2
                block
                text-[10px]
                leading-[1.8]
                
                text-[#777]
                sm:text-[11px]
              "
            >
              {props.text}
            </span>
          )}
        </div>

        {/* PLUS */}

        <span
          className={`
            flex
            shrink-0
            items-center
            justify-center
            border border-white/10
            font-light
            text-[#888]
            transition-all duration-300
            group-hover:border-[#4C9FE5]/40
            group-hover:text-[#4C9FE5]
            ${isSmall ? "h-6 w-6 text-[13px]" : "h-7 w-7 text-[15px]"}
            ${isOpen ? "rotate-45 border-[#4C9FE5]/40 text-[#4C9FE5]" : ""}
          `}
        >
          +
        </span>
      </button>
    </article>
  );
};
