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

export const AdminCarCommercialInfo = ({ values, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Informacje sprzedażowe
        </h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Cena, faktura i ustawienia sprzedaży samochodu.
        </p>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          id="price"
          label="Cena sprzedaży"
          value={values.price}
          onChange={(event) => onChange("price", event.target.value)}
          placeholder="129 900 zł"
        />

        <FormSelect
          label="Rodzaj faktury"
          value={values.invoice}
          options={[
            { value: "VAT MARŻA", label: "VAT marża" },
            { value: "VAT 23%", label: "VAT 23%" },
          ]}
          onChange={(value) =>
            onChange("invoice", value as AdminCarFormValues["invoice"])
          }
        />

        <FormSelect
          label="Status"
          value={values.status}
          options={[
            { value: "available", label: "Dostępny" },
            { value: "reservation", label: "Rezerwacja" },
            { value: "sold", label: "Sprzedany" },
          ]}
          onChange={(value) =>
            onChange("status", value as AdminCarFormValues["status"])
          }
        />

        <FormInput
          id="location"
          label="Lokalizacja"
          value={values.location}
          onChange={(event) => onChange("location", event.target.value)}
          placeholder="Stanisławice"
        />

        <FormInput
          id="voivodeship"
          label="Województwo"
          value={values.voivodeship}
          onChange={(event) => onChange("voivodeship", event.target.value)}
          placeholder="Małopolskie"
        />

        <div className="flex items-end">
          <label className="flex h-11 w-full cursor-pointer items-center gap-3 rounded-[10px] border border-white/10 bg-[ext-[#E8E9E7]/2.5 px-4">
            <input
              type="checkbox"
              checked={values.negotiation}
              onChange={(event) =>
                onChange("negotiation", event.target.checked)
              }
              className="h-3.5 w-3.5 accent-[#4C9FE5]"
            />

            <span className="text-[11px] text-[#E8E9E7]/55">
              Cena do negocjacji
            </span>
          </label>
        </div>

        <div className="flex items-end">
          <label className="flex h-11 w-full cursor-pointer items-center gap-3 rounded-[10px] border border-white/10 bg-[ext-[#E8E9E7]/2.5 px-4">
            <input
              type="checkbox"
              checked={values.accidentFree}
              onChange={(event) =>
                onChange("accidentFree", event.target.checked)
              }
              className="h-3.5 w-3.5 accent-[#4C9FE5]"
            />

            <span className="text-[11px] text-[#E8E9E7]/55">Bezwypadkowy</span>
          </label>
        </div>

        <div className="flex items-end">
          <label className="flex h-11 w-full cursor-pointer items-center gap-3 rounded-[10px] border border-white/10 bg-[ext-[#E8E9E7]/2.5 px-4">
            <input
              type="checkbox"
              checked={values.carvertical}
              onChange={(event) =>
                onChange("carvertical", event.target.checked)
              }
              className="h-3.5 w-3.5 accent-[#4C9FE5]"
            />

            <span className="text-[11px] text-[#E8E9E7]/55">
              Raport CarVertical
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};
