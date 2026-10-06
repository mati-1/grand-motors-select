import type { ReactNode } from "react";

import CancelIcon from "../../../assets/icons/zamknij.svg?react";
import { ButtonComponent } from "../../button";
import { MainHeadingComponent } from "../../headings";

type CarsFiltersMobileProps = {
  isOpen: boolean;
  resultCount: number;
  onClose: () => void;
  children: ReactNode;
};

export const CarsFiltersMobile = ({
  isOpen,
  resultCount,
  onClose,
  children,
}: CarsFiltersMobileProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-100003
        flex
        h-dvh
        w-full
        flex-col
        overflow-hidden
        bg-[#080808]
        lg:hidden
      "
      onClick={onClose}
    >
      {/* HEADER */}
      <header
        className="
          flex
          h-21
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#080808]
          px-5
        "
        onClick={(event) => event.stopPropagation()}
      >
        <MainHeadingComponent>Filtry</MainHeadingComponent>
        <button
          type="button"
          onClick={onClose}
          aria-label="Zamknij filtry"
          className="
          group
          flex
          h-10
          w-10
          cursor-pointer
          items-center
          justify-center
          border
          border-white/10
          bg-[ext-[#E8E9E7]/2
          text-[#777]
          transition-all
          duration-300
          hover:border-[#4C9FE5]/40
          hover:bg-[#4C9FE5]/2
          hover:text-[#4C9FE5]
          rounded-[10px]
        "
        >
          <CancelIcon className="w-5 h-5" />
        </button>
      </header>

      {/* CONTENT */}
      <main
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          bg-[#080808]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </main>

      {/* FOOTER */}
      <footer
        className="
          shrink-0
          border-t
          border-white/10
          bg-[#080808]
          px-5
          pt-4
          pb-[max(1rem,env(safe-area-inset-bottom))]
        "
        onClick={(event) => event.stopPropagation()}
      >
        <ButtonComponent
          variant="secondary"
          onClick={onClose}
          className="min-w-full"
          arrowIcon
        >
          Pokaż {resultCount} {resultCount === 1 ? "samochód" : "samochodów"}
        </ButtonComponent>
      </footer>
    </div>
  );
};
