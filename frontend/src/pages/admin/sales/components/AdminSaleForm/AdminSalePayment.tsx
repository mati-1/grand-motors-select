import type { AdminSaleFormValues } from "./types";

import { FormInput } from "../../../../../components/form/FormInput";
import { FormSelect } from "../../../../../components/form/FormSelect";

type Props = {
  values: AdminSaleFormValues;
  onChange: <K extends keyof AdminSaleFormValues>(
    field: K,
    value: AdminSaleFormValues[K],
  ) => void;
};

export const AdminSalePayment = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Warunki sprzedaży
        </h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Cena, data i sposób zapłaty.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="salePrice"
          label="Cena sprzedaży"
          type="number"
          min="0"
          step="0.01"
          value={values.salePrice}
          onChange={(event) => onChange("salePrice", event.target.value)}
          placeholder="109900"
          required
        />

        <FormInput
          id="saleDate"
          label="Data sprzedaży"
          type="date"
          value={values.saleDate}
          onChange={(event) => onChange("saleDate", event.target.value)}
          required
        />

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
            {
              value: "financing",
              label: "Finansowanie",
            },
          ]}
          onChange={(value) =>
            onChange(
              "paymentMethod",
              value as AdminSaleFormValues["paymentMethod"],
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
