import type { ReactNode } from "react";

import HeartIcon from "../../assets/icons/serce.svg?react";
import RemoveIcon from "../../assets/icons/zamknij.svg?react";
import MailIcon from "../../assets/icons/mail.svg?react";

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 12.5L9.5 17L19 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type successIconType = "check" | "heart" | "remove" | "mail";

type AppToastProps = {
  type?: "success" | "error" | "info";
  title: string;
  description?: ReactNode;
  successIcon?: successIconType;
};

export const AppToast = ({
  type = "success",
  title,
  description,
  successIcon,
}: AppToastProps) => {
  return (
    <div
      className="
        flex
        min-w-70
        max-w-90
        items-center
        gap-3
        rounded-[10px]
        border
        border-white/10
        bg-[#4C9FE5]/5/95
        px-4
        py-3.5
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* ICON */}

      <div
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${
            type === "success"
              ? "border-[#4C9FE5]/30 bg-[#4C9FE5]/10 text-[#4C9FE5]"
              : type === "error"
                ? "border-red-400/20 bg-red-400/10 text-red-300"
                : "border-white/10 bg-[ext-[#E8E9E7]/5 text-[#E8E9E7]/50"
          }
        `}
      >
        {type === "success" && (
          <>
            {successIcon === "remove" && <RemoveIcon className="h-4 w-4" />}
            {successIcon === "check" && <CheckIcon className="h-4 w-4" />}
            {successIcon === "heart" && <HeartIcon className="h-4 w-4" />}
            {successIcon === "mail" && <MailIcon className="h-4 w-4" />}
          </>
        )}

        {type === "error" && <span className="text-[14px]">!</span>}

        {type === "info" && <span className="text-[12px]">i</span>}
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">
        <div
          className="
            text-[12px]
            font-medium
            text-[#E8E9E7]
          "
        >
          {title}
        </div>

        {description && (
          <div
            className="
              mt-1
              truncate
              text-[10px]
              text-[#E8E9E7]/40
            "
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
