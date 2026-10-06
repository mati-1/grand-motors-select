import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { apiClient } from "../../../../api/client";
import type { ApiCar } from "../../../../api/cars";
import { FormSelect } from "../../../../components/form/FormSelect";
import { ButtonComponent } from "../../../../components/button";

type StatusType = ApiCar["statusType"];

type Props = {
  car: ApiCar;
};

const options: { value: StatusType; label: string }[] = [
  { value: "preparing", label: "W przygotowaniu" },
  { value: "sale", label: "Gotowy do sprzedaży" },
  { value: "sold", label: "Sprzedany" },
];

export const AdminCarStatusType = ({ car }: Props) => {
  const queryClient = useQueryClient();

  const [statusType, setStatusType] = useState<StatusType>(car.statusType);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (saving || statusType === car.statusType) return;

    setSaving(true);
    setError("");

    try {
      await apiClient(`/api/cars/${car.id}`, {
        method: "PATCH",
        body: { statusType },
      });

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["car", car.id] }),
        queryClient.invalidateQueries({ queryKey: ["cars"] }),
      ]);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Nie udało się zmienić statusu.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5 sm:p-7">
      <h3 className="text-[16px] font-medium text-white">Etap przygotowania</h3>

      <p className="mt-1.5 text-[11px] text-white/30">
        Wybierz aktualny etap przygotowania samochodu.
      </p>

      <div className="mt-6 items-end flex flex-col gap-3 sm:flex-row">
        <FormSelect
          label="Stan"
          value={statusType}
          options={options.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          onChange={(event) => setStatusType(event as StatusType)}
        />

        <ButtonComponent
          onClick={handleSave}
          variant="secondary"
          size="small"
          className="max-sm:min-w-full"
          disabled={saving || statusType === car.statusType}
        >
          {saving ? "Zapisywanie..." : "Zapisz status"}
        </ButtonComponent>
      </div>

      {error && <p className="mt-3 text-[11px] text-red-300">{error}</p>}
    </section>
  );
};
