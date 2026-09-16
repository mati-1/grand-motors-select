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
        ${isOpen ? "bg-white/[0.035]" : ""}
      `}
    >
      <button
        type="button"
        onClick={onOpen}
        className={`
          flex w-full
          cursor-pointer
          items-center
          gap-4
          text-left
          transition-all duration-300
          hover:bg-white/2.5
          ${isSmall ? "px-5 py-5 sm:px-6" : "px-6 py-7 sm:px-8 sm:py-8"}
        `}
      >
        {/* NUMBER */}

        <div
          className={`
            flex shrink-0 items-center justify-center
            border
            font-serif
            transition-all duration-300
            ${isSmall ? "h-9 w-9 text-[15px]" : "h-11 w-11 text-[17px]"}
            ${
              isOpen
                ? "border-[#b99a5c]/70 bg-[#b99a5c]/10 text-[#d2b878]"
                : "border-[#b99a5c]/30 text-[#d2b878]"
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
              tracking-[0.15em]
              transition-colors duration-300
              ${
                isSmall
                  ? "text-[9px] sm:text-[10px]"
                  : "text-[11px] sm:text-[13px]"
              }
              ${isOpen ? "text-[#d2b878]" : "text-[#ddd]"}
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
                tracking-[0.08em]
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
                tracking-[0.04em]
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
            group-hover:border-[#b99a5c]/40
            group-hover:text-[#d2b878]
            ${isSmall ? "h-6 w-6 text-[13px]" : "h-7 w-7 text-[15px]"}
            ${isOpen ? "rotate-45 border-[#b99a5c]/40 text-[#d2b878]" : ""}
          `}
        >
          +
        </span>
      </button>
    </article>
  );
};
