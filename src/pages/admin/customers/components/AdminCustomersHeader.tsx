export const AdminCustomersHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#b99a5c]">Baza klientów</span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-white sm:text-[28px]">
          Klienci
        </h2>

        <p className="mt-2 max-w-[600px] text-[10px] leading-[1.7] text-white/30">
          Zarządzaj danymi klientów, historią transakcji i kontaktami związanymi
          ze sprzedażą samochodów.
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
            d="M16 21V19C16 16.8 14.2 15 12 15H6C3.8 15 2 16.8 2 19V21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />

          <path
            d="M19 8V14M16 11H22"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Dodaj klienta
      </button>
    </section>
  );
};
