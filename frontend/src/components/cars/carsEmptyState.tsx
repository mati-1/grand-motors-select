type CarsEmptyStateProps = {
  onClearFilters: () => void;
};

export const CarsEmptyState = ({ onClearFilters }: CarsEmptyStateProps) => {
  return (
    <section
      id="cars"
      className="
        scroll-mt-23
        px-[4vw] min-[1200px]:px-[13vw]
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
          border-[#4C9FE5]/20
          bg-[#4C9FE5]/2
          text-center
        "
      >
        <span className="text-[9px]  text-[#4C9FE5]">BRAK WYNIKÓW</span>

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
            border border-[#4C9FE5]/30
            px-5 py-3
            text-[8px]
            
            text-[#4C9FE5]
            transition
            hover:border-[#4C9FE5]/60
            hover:bg-[#4C9FE5]/2
          "
        >
          WYCZYŚĆ FILTRY
        </button>
      </div>
    </section>
  );
};
