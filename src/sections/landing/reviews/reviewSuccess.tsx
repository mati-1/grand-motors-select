import { useEffect } from "react";

type ReviewSuccessProps = {
  onClose: () => void;
};

export const ReviewSuccess = ({ onClose }: ReviewSuccessProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="mx-auto max-w-180 py-6 text-center">
      <span className="text-[9px] tracking-[0.25em] text-[#b99a5c]">
        DZIĘKUJEMY
      </span>

      <h3 className="mt-4 text-2xl tracking-[-0.02em]">
        OPINIA ZOSTAŁA PRZESŁANA.
      </h3>

      <p
        className="
          mx-auto
          mt-4
          max-w-130
          text-[10px]
          leading-[1.8]
          tracking-[0.04em]
          text-[#777]
        "
      >
        Dziękujemy za podzielenie się swoim doświadczeniem z GRAND MOTORS
        SELECT.
      </p>
    </div>
  );
};
