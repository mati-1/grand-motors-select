export const AdminCompanyHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#b99a5c]">
          Konfiguracja przedsiębiorstwa
        </span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-white sm:text-[28px]">
          Firma
        </h2>

        <p className="mt-2 max-w-[620px] text-[10px] leading-[1.7] text-white/30">
          Zarządzaj danymi Grand Motors Select, rachunkami, kosztami stałymi
          oraz ustawieniami sprzedaży.
        </p>
      </div>

      <button
        type="button"
        className="
          flex
          h-10
          shrink-0
          cursor-pointer
          items-center
          justify-center
          gap-2
          rounded-[10px]
          bg-[#d2b878]
          px-4
          text-[10px]
          font-medium
          text-black
          transition-all
          duration-300
          hover:bg-[#e0c98b]
        "
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M5 12V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M12 3V15M12 3L8 7M12 3L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Zapisz zmiany
      </button>
    </section>
  );
};
