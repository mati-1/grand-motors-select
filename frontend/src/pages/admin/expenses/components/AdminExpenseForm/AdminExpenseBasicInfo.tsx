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

const categoryOptions = [
  { value: "purchase", label: "Zakup samochodu" },
  { value: "transport", label: "Transport" },
  { value: "excise", label: "Akcyza" },
  { value: "translation", label: "Tłumaczenie dokumentów" },
  { value: "registration", label: "Rejestracja" },
  { value: "insurance", label: "Ubezpieczenie" },
  { value: "service", label: "Serwis mechaniczny" },
  { value: "parts", label: "Części" },
  { value: "tires", label: "Opony" },
  { value: "detailing", label: "Detailing" },
  { value: "ppf", label: "PPF / wrap" },
  { value: "paint", label: "Lakierowanie" },
  { value: "bodywork", label: "Blacharstwo" },
  { value: "diagnostics", label: "Diagnostyka" },
  { value: "listing", label: "Ogłoszenia" },
  { value: "commission", label: "Prowizja" },
  { value: "financing", label: "Finansowanie" },
  { value: "office", label: "Biuro" },
  { value: "marketing", label: "Marketing" },
  { value: "fuel", label: "Paliwo" },
  { value: "accounting", label: "Księgowość" },
  { value: "software", label: "Oprogramowanie" },
  { value: "other", label: "Inne" },
];

export const AdminExpenseBasicInfo = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Informacje o wydatku
        </h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Podstawowe informacje dotyczące poniesionego kosztu.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="amount"
          label="Kwota"
          type="number"
          min="0"
          step="0.01"
          value={values.amount}
          onChange={(event) => onChange("amount", event.target.value)}
          placeholder="2500"
          required
        />

        <FormInput
          id="date"
          label="Data wydatku"
          type="date"
          value={values.date}
          onChange={(event) => onChange("date", event.target.value)}
          required
        />

        <FormSelect
          label="Rodzaj kosztu"
          value={values.type}
          options={[
            {
              value: "car",
              label: "Koszt samochodu",
            },
            {
              value: "company",
              label: "Koszt firmowy",
            },
          ]}
          onChange={(value) =>
            onChange("type", value as AdminExpenseFormValues["type"])
          }
        />

        <FormSelect
          label="Kategoria"
          value={values.category}
          options={categoryOptions}
          onChange={(value) =>
            onChange("category", value as AdminExpenseFormValues["category"])
          }
        />

        {values.type === "car" && (
          <FormSelect
            label="Samochód"
            value={values.carId}
            placeholder="Wybierz samochód"
            options={[
              {
                value: "bmw-f30-340i",
                label: "BMW F30 340i",
              },
              {
                value: "bmw-g11-740d",
                label: "BMW G11 740d",
              },
              {
                value: "bmw-f86-x6m",
                label: "BMW F86 X6M",
              },
            ]}
            onChange={(value) => onChange("carId", value)}
          />
        )}

        <FormInput
          id="description"
          label="Opis"
          value={values.description}
          onChange={(event) => onChange("description", event.target.value)}
          placeholder="np. Wymiana oleju i filtrów"
        />
      </div>
    </section>
  );
};
