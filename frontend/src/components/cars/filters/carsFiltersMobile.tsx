import type { ReactNode } from "react";

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
        z-100
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
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            text-[22px]
            text-[#555]
            transition-colors
            duration-300
            hover:text-[#4C9FE5]
          "
        >
          ×
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
