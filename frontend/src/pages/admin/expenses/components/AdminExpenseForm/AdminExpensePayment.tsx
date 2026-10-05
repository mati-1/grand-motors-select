import type { AdminExpenseFormValues } from "./types";

import { FormInput } from "../../../../../components/form/FormInput";
import { FormSelect } from "../../../../../components/form/FormSelect";

type Props = {
  values: AdminExpenseFormValues;
  onChange: <K extends keyof AdminExpenseFormValues>(
    field: K,
    value: AdminExpenseFormValues[K],
  ) => void;
};

export const AdminExpensePayment = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">Płatność</h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Informacje dotyczące sposobu opłacenia wydatku.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormSelect
          label="Sposób płatności"
          value={values.paymentMethod}
          options={[
            {
              value: "bank_transfer",
              label: "Przelew",
            },
            {
              value: "card",
              label: "Karta",
            },
            {
              value: "cash",
              label: "Gotówka",
            },
          ]}
          onChange={(value) =>
            onChange(
              "paymentMethod",
              value as AdminExpenseFormValues["paymentMethod"],
            )
          }
        />

        <FormInput
          id="account"
          label="Konto / kasa"
          value={values.account}
          onChange={(event) => onChange("account", event.target.value)}
          placeholder="Konto firmowe"
        />
      </div>
    </section>
  );
};
