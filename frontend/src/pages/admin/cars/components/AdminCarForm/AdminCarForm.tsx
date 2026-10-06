import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadCarImage } from "../../../../../api/cars";
import type { ApiCar } from "../../../../../api/cars";
import type { PendingCarImage } from "./AdminCarImages";
import { defaultCarFormValues } from "./defaultValues";
import type { AdminCarFormValues } from "./types";

import { useUpdateCar } from "../../../../../hooks/cars/useUpdateCar";
import { AdminCarBasicInfo } from "./AdminCarBasicInfo";
import { AdminCarTechnicalInfo } from "./AdminCarTechnicalInfo";
import { AdminCarCommercialInfo } from "./AdminCarCommercialInfo";
import { AdminCarDetails } from "./AdminCarDetails";
import { AdminCarDescription } from "./AdminCarDescription";
import { AdminCarEquipment } from "./AdminCarEquipment";
import { AdminCarImages } from "./AdminCarImages";
import { useCreateCar } from "../../../../../hooks/cars/useCreateCar";
import { ButtonComponent } from "../../../../../components/button";

type AdminCarFormProps = {
  car?: ApiCar;
};

export const AdminCarForm = ({ car }: AdminCarFormProps) => {
  const navigate = useNavigate();

  const updateCarMutation = useUpdateCar();
  const createCarMutation = useCreateCar();

  const isEditMode = Boolean(car);
  const isSaving = createCarMutation.isPending || updateCarMutation.isPending;

  const [pendingImages, setPendingImages] = useState<PendingCarImage[]>([]);
  const [form, setForm] = useState<AdminCarFormValues>(
    car
      ? {
          brand: car.brand,
          model: car.model,
          condition: car.condition,
          vin: car.vin,
          year: car.year,
          mileage: car.mileage,

          engine: car.engine,
          power: car.power,
          transmission: car.transmission,
          drive: car.drive,
          fuel: car.fuel,

          carvertical: car.carvertical,

          price: car.price,
          location: car.location,
          voivodeship: car.voivodeship,

          negotiation: car.negotiation,
          accidentFree: car.accidentFree,

          description: car.description,

          status: car.status,
          invoice: car.invoice,

          featured: car.featured,

          equipment: car.equipment,

          details: {
            body: car.body,
            color: car.color,
            interior: car.interior,
            seats: car.seats,
            doors: car.doors,
            country: car.country,
          },
        }
      : defaultCarFormValues,
  );

  const updateField = <K extends keyof AdminCarFormValues>(
    field: K,
    value: AdminCarFormValues[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateDetails = <K extends keyof AdminCarFormValues["details"]>(
    field: K,
    value: AdminCarFormValues["details"][K],
  ) => {
    setForm((current) => ({
      ...current,
      details: {
        ...current.details,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...form,
      statusType: isEditMode ? car?.statusType : "sale",
    };

    if (isEditMode && car) {
      updateCarMutation.mutate(
        {
          carId: car.id,
          data,
        },
        {
          onSuccess: () => {
            navigate("/admin/cars");
          },
        },
      );

      return;
    }

    createCarMutation.mutate(data, {
      onSuccess: async (response) => {
        const carId = response.car.id;

        try {
          for (const image of pendingImages) {
            await uploadCarImage(carId, image.file);
          }

          navigate(`/admin/cars/${carId}/edit`, {
            replace: true,
          });
        } catch (error) {
          console.error(error);
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AdminCarBasicInfo values={form} onChange={updateField} />

        <AdminCarTechnicalInfo values={form} onChange={updateField} />

        <AdminCarCommercialInfo values={form} onChange={updateField} />

        <AdminCarDetails values={form.details} onChange={updateDetails} />

        <AdminCarDescription
          value={form.description}
          onChange={(value) => updateField("description", value)}
        />

        <AdminCarEquipment
          value={form.equipment}
          onChange={(value) => updateField("equipment", value)}
        />

        <AdminCarImages
          carId={car?.id}
          onPendingImagesChange={setPendingImages}
        />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="h-11 cursor-pointer rounded-[10px] border border-white/10 px-5 text-[11px] text-[#E8E9E7]/40 transition-all duration-300 hover:border-white/20 hover:text-[#E8E9E7]"
        >
          Anuluj
        </button>
        <ButtonComponent type="submit" size="small" disabled={isSaving}>
          {isSaving
            ? "Zapisywanie..."
            : isEditMode
              ? "Zapisz zmiany"
              : "Dodaj samochód"}
        </ButtonComponent>
      </div>
    </form>
  );
};
