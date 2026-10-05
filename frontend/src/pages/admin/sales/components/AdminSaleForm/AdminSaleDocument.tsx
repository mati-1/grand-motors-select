import type { AdminSaleFormValues } from "./types";

import { FormInput } from "../../../../../components/form/FormInput";
import { FormTextarea } from "../../../../../components/form/FormTextarea";

type Props = {
  values: AdminSaleFormValues;
  onChange: <K extends keyof AdminSaleFormValues>(
    field: K,
    value: AdminSaleFormValues[K],
  ) => void;
};

export const AdminSaleDocument = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Dokument sprzedaży
        </h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Informacje dotyczące dokumentu wystawionego klientowi.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2">
        <FormInput
          id="invoiceNumber"
          label="Numer faktury"
          value={values.invoiceNumber}
          onChange={(event) => onChange("invoiceNumber", event.target.value)}
          placeholder="FV/123/09/2026"
        />

        <div className="md:col-span-2">
          <FormTextarea
            id="notes"
            label="Notatka"
            value={values.notes}
            onChange={(event) => onChange("notes", event.target.value)}
            placeholder="Dodatkowe informacje dotyczące sprzedaży..."
            rows={5}
          />
        </div>
      </div>
    </section>
  );
};
