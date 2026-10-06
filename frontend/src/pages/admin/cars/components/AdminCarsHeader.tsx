import { ButtonComponent } from "../../../../components/button";

export const AdminCarsHeader = () => {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <span className="text-[11px] text-[#4C9FE5]">
          Sprawdzanie lub edycja
        </span>
        <h2
          className="
            mt-1
            text-[24px]
            font-medium
            tracking-tight
            text-[#E8E9E7]
            sm:text-[28px]
          "
        >
          Samochody
        </h2>

        <p className="mt-2 text-[11px] leading-[1.7] text-[#E8E9E7]/30">
          Zarządzaj samochodami, ich statusem, kosztami i sprzedażą.
        </p>
      </div>

      <ButtonComponent
        arrowIcon
        variant="secondary"
        size="small"
        href="/admin/cars/new"
      >
        Dodaj samochód
      </ButtonComponent>
    </section>
  );
};
