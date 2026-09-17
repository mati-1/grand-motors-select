type CarsEmptyStateProps = {
  onClearFilters: () => void;
};

export const CarsEmptyState = ({ onClearFilters }: CarsEmptyStateProps) => {
  return (
    <section
      id="cars"
      className="
        scroll-mt-23
        px-[5vw]
        py-16
        sm:py-24
      "
    >
      <div
        className="
          flex
          min-h-80
          flex-col
          items-center
          justify-center
          border
          border-[#b99a5c]/20
          bg-[#b99a5c]/5
          text-center
        "
      >
        <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
          BRAK WYNIKÓW
        </span>

        <h3 className="mt-4 text-[20px] text-[#ddd]">
          NIE ZNALEZIONO SAMOCHODÓW.
        </h3>

        <p className="mt-3 max-w-100 text-[11px] leading-[1.8] text-[#666]">
          Zmień kryteria wyszukiwania lub wyczyść aktywne filtry.
        </p>

        <button
          type="button"
          onClick={onClearFilters}
          className="
            mt-6
            border border-[#b99a5c]/30
            px-5 py-3
            text-[8px]
            tracking-[0.2em]
            text-[#d2b878]
            transition
            hover:border-[#b99a5c]/60
            hover:bg-[#b99a5c]/5
          "
        >
          WYCZYŚĆ FILTRY
        </button>
      </div>
    </section>
  );
};
