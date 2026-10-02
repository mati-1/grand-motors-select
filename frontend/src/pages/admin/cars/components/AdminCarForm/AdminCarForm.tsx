import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { CarType } from "../../../../../components/cars/cars";

import { defaultCarFormValues } from "./defaultValues";
import type { AdminCarFormValues } from "./types";

import { AdminCarBasicInfo } from "./AdminCarBasicInfo";
import { AdminCarTechnicalInfo } from "./AdminCarTechnicalInfo";
import { AdminCarCommercialInfo } from "./AdminCarCommercialInfo";
import { AdminCarDetails } from "./AdminCarDetails";
import { AdminCarDescription } from "./AdminCarDescription";
import { AdminCarEquipment } from "./AdminCarEquipment";
import { AdminCarImages } from "./AdminCarImages";

type AdminCarFormProps = {
  car?: CarType;
};

export const AdminCarForm = ({ car }: AdminCarFormProps) => {
  const navigate = useNavigate();

  const isEditMode = Boolean(car);

  const [form, setForm] = useState<AdminCarFormValues>(
    car
      ? {
          accidentFree: car.accidentFree,
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
          image: car.image,
          images: car.images,
          negotiation: car.negotiation,
          description: car.description,
          status: car.status,
          invoice: car.invoice,
          equipment: car.equipment,
          details: car.details,
          history: car.history,
          featured: car.featured,
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

    console.log(
      isEditMode ? "Aktualizacja samochodu:" : "Nowy samochód:",
      form,
    );

    if (isEditMode) {
      navigate(`/admin/cars/${car!.id}`);
      return;
    }

    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          image={form.image}
          images={form.images}
          onImageChange={(value) => updateField("image", value)}
          onImagesChange={(value) => updateField("images", value)}
        />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="h-11 cursor-pointer rounded-[10px] border border-white/10 px-5 text-[11px] text-white/40 transition-all duration-300 hover:border-white/20 hover:text-white"
        >
          Anuluj
        </button>

        <button
          type="submit"
          className="h-11 cursor-pointer rounded-[10px] bg-[#d2b878] px-6 text-[11px] font-medium text-black transition-all duration-300 hover:bg-[#e0c98b]"
        >
          {isEditMode ? "Zapisz zmiany" : "Dodaj samochód"}
        </button>
      </div>
    </form>
  );
};
