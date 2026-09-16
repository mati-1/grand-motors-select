type ReviewInputProps = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const ReviewInput = ({
  label,
  id,
  placeholder,
  error,
  ...props
}: ReviewInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-[8px]
          tracking-[0.18em]
          text-[#777]
        "
      >
        {label}
      </label>

      <input
        id={id}
        placeholder={placeholder}
        {...props}
        className="
          h-12
          w-full
          border
          border-white/10
          bg-black/30
          px-4
          text-[10px]
          tracking-wider
          text-white
          outline-none
          transition-colors
          placeholder:text-[#444]
          focus:border-[#b99a5c]/60
        "
      />

      {error && (
        <p className="mt-2 text-[8px] tracking-wider text-[#9c7a3c]">{error}</p>
      )}
    </div>
  );
};

type RatingInputProps = {
  value: number;
  onChange: (value: number) => void;
  error?: string;
};

export const RatingInput = ({ value, onChange, error }: RatingInputProps) => {
  return (
    <div className="mt-7">
      <span
        className="
          mb-3
          block
          text-[8px]
          tracking-[0.18em]
          text-[#777]
        "
      >
        OCENA
      </span>

      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          const star = index + 1;

          return (
            <button
              key={star}
              type="button"
              aria-label={`Ocena ${star} na 5`}
              onClick={() => onChange(star)}
              className={`
                cursor-pointer
                text-2xl
                transition-all
                duration-200
                hover:scale-110
                ${star <= value ? "text-[#d2b878]" : "text-[#333]"}
              `}
            >
              ★
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-[8px] tracking-wider text-[#9c7a3c]">{error}</p>
      )}
    </div>
  );
};
