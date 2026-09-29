import { Link } from "react-router-dom";

export const AdminCarsHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#b99a5c]">
          Sprawdzanie lub edycja
        </span>
        <h2
          className="
            mt-1
            text-[24px]
            font-medium
            tracking-tight
            text-white
            sm:text-[28px]
          "
        >
          Samochody
        </h2>

        <p className="mt-2 text-[11px] leading-[1.7] text-white/30">
          Zarządzaj samochodami, ich statusem, kosztami i sprzedażą.
        </p>
      </div>

      <Link
        to="/admin/cars/new"
        className="
          flex
          h-10
          shrink-0
          items-center
          justify-center
          gap-2
          rounded-[10px]
          bg-[#d2b878]
          px-4
          text-[11px]
          font-medium
          text-black
          transition-all
          duration-300
          hover:bg-[#e0c98b]
        "
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Dodaj samochód
      </Link>
    </section>
  );
};
