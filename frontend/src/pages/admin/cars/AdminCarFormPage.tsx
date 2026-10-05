import { useParams, useNavigate } from "react-router-dom";
import { AdminCarForm } from "./components/AdminCarForm/AdminCarForm";
import { useCar } from "../../../hooks/cars/useCar";

import ArrowIcon from "../../../assets/icons/strzalka.svg?react";

export const AdminCarFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);
  const carQuery = useCar(id);
  const car = carQuery.data?.car;

  if (isEditMode && carQuery.isPending) {
    return (
      <div className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <p className="text-[11px] text-[#E8E9E7]/40">Pobieranie samochodu...</p>
      </div>
    );
  }

  if (isEditMode && carQuery.isError) {
    return (
      <div className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
        <p className="text-[11px] text-red-300">
          Nie udało się pobrać samochodu.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Udostępnij ofertę"
          className="
          group
          flex
          h-9
          w-9
          cursor-pointer
          items-center
          justify-center
          border
          border-white/10
          bg-[ext-[#E8E9E7]/2
          text-[#777]
          transition-all
          duration-300
          hover:border-[#4C9FE5]/40
          hover:bg-[#4C9FE5]/2
          hover:text-[#4C9FE5]
          rounded-[10px]
        "
        >
          <ArrowIcon className="w-5 h-5" />
        </button>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
          {isEditMode ? "Edytuj samochód" : "Dodaj samochód"}
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          {isEditMode
            ? "Zaktualizuj informacje dotyczące samochodu."
            : "Uzupełnij informacje, aby dodać samochód do magazynu."}
        </p>
      </div>

      {isEditMode && !car ? (
        <div className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/2 p-5">
          <p className="text-[11px] text-[#E8E9E7]/40">
            Nie znaleziono samochodu.
          </p>
        </div>
      ) : (
        <AdminCarForm car={car} />
      )}
    </div>
  );
};
