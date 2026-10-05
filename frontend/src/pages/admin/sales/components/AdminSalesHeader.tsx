export const AdminSalesHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#4C9FE5]">Wyniki sprzedaży</span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
          Sprzedaż
        </h2>

        <p className="mt-2 max-w-[600px] text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          Zarządzaj sprzedażą samochodów i analizuj przychody, marże oraz
          rzeczywisty zysk firmy.
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
          border
          border-white/8
          bg-[#4C9FE5]/5
          px-4
          text-[10px]
          text-[#E8E9E7]/50
          transition-all
          duration-300
          hover:border-[#4C9FE5]/25
          hover:text-[#4C9FE5]
        "
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 3V15M12 3L8 7M12 3L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M5 12V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Eksportuj sprzedaż
      </button>
    </section>
  );
};
