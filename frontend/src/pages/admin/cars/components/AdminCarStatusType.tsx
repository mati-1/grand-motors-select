import { useEffect, useState } from "react";

import type { ApiCar } from "../../../../api/cars";
import { ButtonComponent } from "../../../../components/button";
import { FormSelect } from "../../../../components/form/FormSelect";
import { useUpdateCarStatusType } from "../../../../hooks/cars/useUpdateCar";
import { colorByStatus } from "../../helpers/colorByStatus";

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
  const [statusType, setStatusType] = useState<StatusType>(car.statusType);
  const [saveError, setSaveError] = useState("");

  const updateStatus = useUpdateCarStatusType();

  useEffect(() => {
    setStatusType(car.statusType);
    setSaveError("");
  }, [car.id, car.statusType]);

  const hasChanges = statusType !== car.statusType;

  const handleSave = async () => {
    if (updateStatus.isPending || !hasChanges) return;

    setSaveError("");

    try {
      await updateStatus.mutateAsync({
        carId: car.id,
        statusType,
      });
    } catch {
      setSaveError("Nie udało się zapisać statusu. Spróbuj ponownie.");
    }
  };

  return (
    <section className="h-full rounded-2xl border border-white/8 bg-[#4C9FE5]/2">
      <div className="border-b border-white/8 p-4 sm:p-5">
        <h3 className="text-sm font-semibold text-[#E8E9E7]">
          Zmień status auta
        </h3>
      </div>

      <div className="space-y-5 p-4 sm:p-5">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#E8E9E7]/40">
            Aktualny status
          </p>

          <div
            className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 ${colorByStatus({ status: car.statusType })}`}
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${colorByStatus({ status: car.statusType, hasBg: true })}`}
            />
            <span className="text-xs font-medium">
              {options.find((option) => option.value === car.statusType)
                ?.label ?? car.statusType}
            </span>
          </div>
        </div>

        <FormSelect
          label="Nowy status"
          value={statusType}
          options={options}
          onChange={(value) => {
            setStatusType(value as StatusType);
            setSaveError("");
          }}
        />

        {saveError && (
          <p
            role="alert"
            className="rounded-xl border border-red-400/20 bg-red-400/5 p-3 text-xs leading-5 text-red-300"
          >
            {saveError}
          </p>
        )}

        {updateStatus.isSuccess && !hasChanges && (
          <p
            role="status"
            className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-xs leading-5 text-emerald-300"
          >
            Status został zapisany.
          </p>
        )}

        <div className="flex flex-col gap-2 border-t border-white/8 pt-4">
          <ButtonComponent
            onClick={handleSave}
            variant="secondary"
            size="small"
            className="min-w-full"
            disabled={updateStatus.isPending || !hasChanges}
          >
            {updateStatus.isPending ? "Zapisywanie..." : "Zapisz status"}
          </ButtonComponent>

          {hasChanges && (
            <button
              type="button"
              onClick={() => {
                setStatusType(car.statusType);
                setSaveError("");
              }}
              disabled={updateStatus.isPending}
              className="w-full rounded-lg px-3 py-2 text-xs text-[#E8E9E7]/40 transition-colors hover:bg-white/5 hover:text-[#E8E9E7]/75 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Cofnij zmiany
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
