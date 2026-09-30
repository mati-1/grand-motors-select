import { FormInput } from "../../../../components/form/FormInput";
import { FormSelect } from "../../../../components/form/FormSelect";

const invoiceOptions = [
  {
    value: "margin",
    label: "VAT marża",
  },
  {
    value: "vat23",
    label: "VAT 23%",
  },
];

export const AdminCompanySalesSettings = () => {
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
        <h3 className="text-[14px] font-medium text-white">
          Ustawienia sprzedaży
        </h3>

        <p className="mt-1 text-[11px] text-white/25">
          Domyślne wartości wykorzystywane przy sprzedaży
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            id="default-location"
            label="Domyślna lokalizacja"
            defaultValue="Stanisławice"
          />

          <FormSelect
            label="Domyślna forma faktury"
            value="margin"
            options={invoiceOptions}
            onChange={() => {}}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            id="default-warranty"
            label="Domyślna gwarancja"
            defaultValue="30 dni"
          />

          <FormInput
            id="default-payment"
            label="Domyślna forma płatności"
            defaultValue="Przelew"
          />
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="mb-3 text-[10px] text-white/30">
            Informacje na dokumentach
          </p>

          <textarea
            defaultValue="Grand Motors Select · Premium car dealer"
            className="
              min-h-24
              w-full
              resize-none
              rounded-[8px]
              border
              border-white/10
              bg-white/[0.025]
              px-4
              py-3
              text-[11px]
              leading-[1.7]
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/20
              focus:border-[#b99a5c]/50
              focus:bg-white/[0.035]
            "
          />
        </div>

        <div className="flex items-center justify-between rounded-[8px] border border-white/5 bg-white/[0.015] px-3 py-3">
          <div>
            <p className="text-[10px] text-white/50">
              Automatyczne przypisywanie lokalizacji
            </p>

            <p className="mt-1 text-[9px] text-white/20">
              Nowe samochody otrzymają domyślną lokalizację firmy.
            </p>
          </div>

          <button
            type="button"
            className="
              relative
              h-5
              w-9
              cursor-pointer
              rounded-full
              bg-[#b99a5c]
            "
          >
            <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
