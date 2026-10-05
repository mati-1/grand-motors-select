import { FormInput } from "../../../../components/form/FormInput";

export const AdminProfileSettings = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/5
      "
    >
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Konto administratora
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Dane używane do logowania do panelu
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-4 rounded-[9px] border border-white/5 bg-[ext-[#E8E9E7]/[0.015] p-4">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#4C9FE5]/20
              bg-[#4C9FE5]/5
              text-[12px]
              font-medium
              text-[#4C9FE5]
            "
          >
            A
          </div>

          <div>
            <p className="text-[12px] text-[#E8E9E7]/70">Administrator</p>

            <p className="mt-1 text-[9px] text-[#E8E9E7]/25">
              Główne konto panelu
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            id="admin-first-name"
            label="Imię"
            defaultValue="Mateusz"
          />

          <FormInput
            id="admin-last-name"
            label="Nazwisko"
            defaultValue="Administrator"
          />
        </div>

        <FormInput
          id="admin-email"
          label="E-mail"
          type="email"
          defaultValue="admin@grandmotorsselect.pl"
        />

        <div className="flex justify-end pt-1">
          <button
            type="button"
            className="
              h-9
              cursor-pointer
              rounded-[8px]
              bg-[#4C9FE5]
              px-4
              text-[10px]
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-[#e0c98b]
            "
          >
            Zapisz dane
          </button>
        </div>
      </div>
    </section>
  );
};
