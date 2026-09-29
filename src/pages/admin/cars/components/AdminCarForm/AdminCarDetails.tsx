import type { AdminCarFormValues } from "./types";
import { FormInput } from "../../../../../components/form/FormInput";

type Props = {
  values: AdminCarFormValues["details"];
  onChange: <K extends keyof AdminCarFormValues["details"]>(
    field: K,
    value: AdminCarFormValues["details"][K],
  ) => void;
};

export const AdminCarDetails = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">
          Szczegóły samochodu
        </h3>

        <p className="mt-1 text-[10px] text-white/30">
          Informacje dotyczące nadwozia i wyposażenia wnętrza.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="body"
          label="Nadwozie"
          value={values.body}
          onChange={(event) => onChange("body", event.target.value)}
          placeholder="Sedan"
        />

        <FormInput
          id="color"
          label="Kolor nadwozia"
          value={values.color}
          onChange={(event) => onChange("color", event.target.value)}
          placeholder="Czarny"
        />

        <FormInput
          id="interior"
          label="Wnętrze"
          value={values.interior}
          onChange={(event) => onChange("interior", event.target.value)}
          placeholder="Skóra"
        />

        <FormInput
          id="seats"
          label="Liczba miejsc"
          value={values.seats}
          onChange={(event) => onChange("seats", event.target.value)}
          placeholder="5"
        />

        <FormInput
          id="doors"
          label="Liczba drzwi"
          value={values.doors}
          onChange={(event) => onChange("doors", event.target.value)}
          placeholder="4"
        />

        <FormInput
          id="country"
          label="Kraj pochodzenia"
          value={values.country}
          onChange={(event) => onChange("country", event.target.value)}
          placeholder="Niemcy"
        />
      </div>
    </section>
  );
};
