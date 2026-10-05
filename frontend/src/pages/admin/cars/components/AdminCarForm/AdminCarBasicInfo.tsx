import type { AdminCarFormValues } from "./types";
import { FormInput } from "../../../../../components/form/FormInput";
import { FormSelect } from "../../../../../components/form/FormSelect";

type Props = {
  values: AdminCarFormValues;
  onChange: <K extends keyof AdminCarFormValues>(
    field: K,
    value: AdminCarFormValues[K],
  ) => void;
};

export const AdminCarBasicInfo = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Podstawowe informacje
        </h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Podstawowe dane identyfikujące samochód.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="brand"
          label="Marka"
          value={values.brand}
          onChange={(event) => onChange("brand", event.target.value)}
          placeholder="BMW"
          required
        />

        <FormInput
          id="model"
          label="Model"
          value={values.model}
          onChange={(event) => onChange("model", event.target.value)}
          placeholder="G30 530i"
          required
        />

        <FormSelect
          label="Stan"
          value={values.condition}
          options={[
            { value: "Używany", label: "Używany" },
            { value: "Nowy", label: "Nowy" },
          ]}
          onChange={(value) =>
            onChange("condition", value as AdminCarFormValues["condition"])
          }
        />

        <FormInput
          id="year"
          label="Rok produkcji"
          type="number"
          value={values.year}
          onChange={(event) => onChange("year", Number(event.target.value))}
          required
        />

        <FormInput
          id="mileage"
          label="Przebieg"
          value={values.mileage}
          onChange={(event) => onChange("mileage", event.target.value)}
          placeholder="82 000"
          required
        />

        <FormInput
          id="vin"
          label="VIN"
          value={values.vin}
          onChange={(event) => onChange("vin", event.target.value)}
          placeholder="WBA..."
          required
        />
      </div>
    </section>
  );
};
