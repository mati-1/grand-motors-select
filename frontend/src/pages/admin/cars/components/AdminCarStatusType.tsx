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
    } catch {
      // Błąd jest obsługiwany przez mutation.error.
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
          disabled={updateStatus.isPending || statusType === car.statusType}
        >
          {updateStatus.isPending ? "Zapisywanie..." : "Zapisz status"}
        </ButtonComponent>
      </div>
    </section>
  );
};
