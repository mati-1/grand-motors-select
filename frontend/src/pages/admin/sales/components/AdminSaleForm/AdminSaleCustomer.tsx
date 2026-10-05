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

export const AdminSaleCustomer = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">Klient</h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Dane nabywcy samochodu.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormSelect
          label="Rodzaj klienta"
          value={values.customerType}
          options={[
            {
              value: "individual",
              label: "Osoba prywatna",
            },
            {
              value: "company",
              label: "Firma",
            },
          ]}
          onChange={(value) =>
            onChange(
              "customerType",
              value as AdminSaleFormValues["customerType"],
            )
          }
        />

        <FormInput
          id="customerName"
          label="Imię i nazwisko"
          value={values.customerName}
          onChange={(event) => onChange("customerName", event.target.value)}
          placeholder="Jan Kowalski"
          required
        />

        <FormInput
          id="customerPhone"
          label="Telefon"
          value={values.customerPhone}
          onChange={(event) => onChange("customerPhone", event.target.value)}
          placeholder="+48 600 000 000"
        />

        <FormInput
          id="customerEmail"
          label="E-mail"
          type="email"
          value={values.customerEmail}
          onChange={(event) => onChange("customerEmail", event.target.value)}
          placeholder="jan@example.com"
        />

        {values.customerType === "company" && (
          <>
            <FormInput
              id="companyName"
              label="Nazwa firmy"
              value={values.companyName}
              onChange={(event) => onChange("companyName", event.target.value)}
              placeholder="Przykładowa sp. z o.o."
              required
            />

            <FormInput
              id="nip"
              label="NIP"
              value={values.nip}
              onChange={(event) => onChange("nip", event.target.value)}
              placeholder="1234567890"
              required
            />
          </>
        )}
      </div>
    </section>
  );
};
