export const AdminCustomersHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#4C9FE5]">Baza klientów</span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
          Klienci
        </h2>

        <p className="mt-2 max-w-150 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          Zarządzaj danymi klientów, historią transakcji i kontaktami związanymi
          ze sprzedażą samochodów.
        </p>
      </div>
    </section>
  );
};
