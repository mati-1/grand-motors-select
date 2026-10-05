import { useState } from "react";

type ToggleProps = {
  label: string;
  description: string;
  defaultValue?: boolean;
};

const Toggle = ({ label, description, defaultValue = true }: ToggleProps) => {
  const [enabled, setEnabled] = useState(defaultValue);

  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/5 py-4 last:border-b-0">
      <div className="min-w-0">
        <p className="text-[10px] text-[#E8E9E7]/55">{label}</p>

        <p className="mt-1 text-[9px] leading-[1.5] text-[#E8E9E7]/20">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setEnabled((value) => !value)}
        className={`
          relative
          h-5
          w-9
          shrink-0
          cursor-pointer
          rounded-full
          transition-colors
          duration-300
          ${enabled ? "bg-[#4C9FE5]" : "bg-[ext-[#E8E9E7]/10"}
        `}
        aria-pressed={enabled}
      >
        <span
          className={`
            absolute
            top-0.5
            h-4
            w-4
            rounded-full
            bg-[ext-[#E8E9E7]
            transition-all
            duration-300
            ${enabled ? "right-0.5" : "left-0.5"}
          `}
        />
      </button>
    </div>
  );
};

export const AdminNotificationSettings = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/2
      "
    >
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Powiadomienia
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Wybierz informacje, o których chcesz otrzymywać powiadomienia
        </p>
      </div>

      <div className="px-5">
        <Toggle
          label="Nowa sprzedaż"
          description="Powiadomienie po zarejestrowaniu sprzedaży samochodu."
        />

        <Toggle
          label="Nowy wydatek"
          description="Powiadomienie po dodaniu nowego wydatku."
        />

        <Toggle
          label="Rezerwacja samochodu"
          description="Powiadomienie o zmianie statusu samochodu na rezerwację."
        />

        <Toggle
          label="Niski poziom środków"
          description="Informacja, gdy dostępne środki firmy spadną poniżej ustawionego poziomu."
        />

        <Toggle
          label="Dokumenty"
          description="Przypomnienia o dokumentach wymagających uwagi."
          defaultValue={false}
        />
      </div>
    </section>
  );
};
