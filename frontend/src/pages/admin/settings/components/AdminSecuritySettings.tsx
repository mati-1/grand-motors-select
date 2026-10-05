import { FormInput } from "../../../../components/form/FormInput";

export const AdminSecuritySettings = () => {
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
          Bezpieczeństwo
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Hasło i zabezpieczenia konta administratora
        </p>
      </div>

      <div className="space-y-4 p-5">
        <FormInput
          id="current-password"
          label="Aktualne hasło"
          type="password"
          placeholder="Wprowadź aktualne hasło"
        />

        <FormInput
          id="new-password"
          label="Nowe hasło"
          type="password"
          placeholder="Wprowadź nowe hasło"
        />

        <FormInput
          id="confirm-password"
          label="Powtórz nowe hasło"
          type="password"
          placeholder="Powtórz nowe hasło"
        />

        <div className="rounded-[8px] border border-white/5 bg-[ext-[#E8E9E7]/[0.015] p-3">
          <p className="text-[9px] text-[#E8E9E7]/30">
            Hasło powinno mieć minimum 8 znaków i zawierać kombinację liter,
            cyfr oraz znaków specjalnych.
          </p>
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="button"
            className="
              h-9
              cursor-pointer
              rounded-[8px]
              border
              border-[#4C9FE5]/20
              bg-[#4C9FE5]/2
              px-4
              text-[10px]
              text-[#4C9FE5]
              transition-all
              duration-300
              hover:border-[#4C9FE5]/35
              hover:bg-[#4C9FE5]/10
              hover:text-[#4C9FE5]
            "
          >
            Zmień hasło
          </button>
        </div>
      </div>
    </section>
  );
};
