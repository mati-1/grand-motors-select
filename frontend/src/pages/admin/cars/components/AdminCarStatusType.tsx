import { useState } from "react";

import type { ApiCar } from "../../../../api/cars";
import { FormSelect } from "../../../../components/form/FormSelect";
import { ButtonComponent } from "../../../../components/button";
import { useUpdateCarStatusType } from "../../../../hooks/cars/useUpdateCar";

type StatusType = ApiCar["statusType"];

type Props = {
  car: ApiCar;
};

const options: { value: StatusType; label: string }[] = [
  { value: "preparing", label: "W przygotowaniu" },
  { value: "sale", label: "Gotowy do sprzedaży" },
  { value: "sold", label: "Sprzedany" },
];

export const colorByStatus = (status: ApiCar["statusType"]) => {
  if (status === "sale") return "green-500/20";
  if (status === "preparing") return "yellow-500/20";

  return "red-500/20";
};

export const AdminCarStatusType = ({ car }: Props) => {
  const [statusType, setStatusType] = useState<StatusType>(car.statusType);

  const updateStatus = useUpdateCarStatusType();

  const handleSave = async () => {
    if (updateStatus.isPending || statusType === car.statusType) {
      return;
    }

    try {
      await updateStatus.mutateAsync({
        carId: car.id,
        statusType,
      });
    } catch {}
  };

  return (
    <section
      className={`rounded-[10px] border p-5 sm:p-7 border-${colorByStatus(statusType)}`}
    >
      <h3 className="text-[14px] font-medium text-white">Etap przygotowania</h3>

      <div className="mt-6 items-end flex flex-col gap-3">
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
          className="min-w-full"
          disabled={updateStatus.isPending || statusType === car.statusType}
        >
          {updateStatus.isPending ? "Zapisywanie..." : "Zapisz status"}
        </ButtonComponent>
      </div>
    </section>
  );
};
