import type { AdminExpenseFormValues } from "./types";

import { FormInput } from "../../../../../components/form/FormInput";

type Props = {
  values: AdminExpenseFormValues;
  onChange: <K extends keyof AdminExpenseFormValues>(
    field: K,
    value: AdminExpenseFormValues[K],
  ) => void;
};

export const AdminExpenseDocument = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">Dokument</h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Dane faktury, paragonu lub innego dokumentu kosztowego.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2">
        <FormInput
          id="documentNumber"
          label="Numer dokumentu"
          value={values.documentNumber}
          onChange={(event) => onChange("documentNumber", event.target.value)}
          placeholder="FV/123/09/2026"
        />

        <FormInput
          id="documentUrl"
          label="Dokument"
          value={values.documentUrl}
          onChange={(event) => onChange("documentUrl", event.target.value)}
          placeholder="Link do dokumentu"
        />
      </div>
    </section>
  );
};
