import type { AdminCarFormValues } from "./types";
import { FormInput } from "../../../../../components/form/FormInput";

type Props = {
  values: AdminCarFormValues;
  onChange: <K extends keyof AdminCarFormValues>(
    field: K,
    value: AdminCarFormValues[K],
  ) => void;
};

export const AdminCarTechnicalInfo = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Dane techniczne</h3>

        <p className="mt-1 text-[10px] text-white/30">
          Silnik, napęd i pozostałe parametry samochodu.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="engine"
          label="Silnik"
          value={values.engine}
          onChange={(event) => onChange("engine", event.target.value)}
          placeholder="3.0 R6"
        />

        <FormInput
          id="power"
          label="Moc"
          value={values.power}
          onChange={(event) => onChange("power", event.target.value)}
          placeholder="252 KM"
        />

        <FormInput
          id="transmission"
          label="Skrzynia biegów"
          value={values.transmission}
          onChange={(event) => onChange("transmission", event.target.value)}
          placeholder="Automatyczna"
        />

        <FormInput
          id="drive"
          label="Napęd"
          value={values.drive}
          onChange={(event) => onChange("drive", event.target.value)}
          placeholder="xDrive"
        />

        <FormInput
          id="fuel"
          label="Paliwo"
          value={values.fuel}
          onChange={(event) => onChange("fuel", event.target.value)}
          placeholder="Benzyna"
        />
      </div>
    </section>
  );
};
