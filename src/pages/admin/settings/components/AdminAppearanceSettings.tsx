import { FormSelect } from "../../../../components/form/FormSelect";

const languageOptions = [
  {
    value: "pl",
    label: "Polski",
  },
  {
    value: "en",
    label: "English",
  },
];

const densityOptions = [
  {
    value: "comfortable",
    label: "Wygodny",
  },
  {
    value: "compact",
    label: "Kompaktowy",
  },
];

export const AdminAppearanceSettings = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
      "
    >
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Wygląd panelu</h3>

        <p className="mt-1 text-[11px] text-white/25">
          Ustawienia interfejsu administracyjnego
        </p>
      </div>

      <div className="space-y-5 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            label="Język"
            value="pl"
            options={languageOptions}
            onChange={() => {}}
          />

          <FormSelect
            label="Gęstość interfejsu"
            value="comfortable"
            options={densityOptions}
            onChange={() => {}}
          />
        </div>

        <div>
          <p className="mb-3 text-[10px] text-white/30">Motyw kolorystyczny</p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              type="button"
              className="
                cursor-pointer
                rounded-[9px]
                border
                border-[#b99a5c]/40
                bg-[#050505]
                p-3
                text-left
              "
            >
              <div className="h-12 rounded-[6px] border border-white/5 bg-[#090909]">
                <div className="m-2 h-1.5 w-8 rounded-full bg-[#d2b878]" />
                <div className="mx-2 mt-2 h-1 w-12 rounded-full bg-white/10" />
              </div>

              <p className="mt-2 text-[9px] text-[#d2b878]">GMS dark</p>
            </button>

            <button
              type="button"
              className="
                cursor-pointer
                rounded-[9px]
                border
                border-white/8
                bg-white/[0.02]
                p-3
                text-left
                opacity-50
              "
            >
              <div className="h-12 rounded-[6px] border border-white/10 bg-[#151515]">
                <div className="m-2 h-1.5 w-8 rounded-full bg-white/40" />
                <div className="mx-2 mt-2 h-1 w-12 rounded-full bg-white/10" />
              </div>

              <p className="mt-2 text-[9px] text-white/30">Klasyczny</p>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 border-t border-white/5 pt-5">
          <div>
            <p className="text-[10px] text-white/50">Animacje interfejsu</p>

            <p className="mt-1 text-[9px] text-white/20">
              Włącz płynne przejścia elementów panelu.
            </p>
          </div>

          <button
            type="button"
            className="relative h-5 w-9 cursor-pointer rounded-full bg-[#b99a5c]"
          >
            <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
