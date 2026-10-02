import { useParams, useNavigate } from "react-router-dom";
import { AdminCarForm } from "./components/AdminCarForm/AdminCarForm";
import { carsList } from "../../../components/cars/cars";

import ArrowIcon from "../../../assets/icons/strzalka.svg?react";

export const AdminCarFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const car = isEditMode ? carsList.find((item) => item.id === id) : undefined;

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
          bg-white/2
          text-[#777]
          transition-all
          duration-300
          hover:border-[#b99a5c]/40
          hover:bg-[#b99a5c]/5
          hover:text-[#d2b878]
          rounded-[10px]
        "
        >
          <ArrowIcon className="w-5 h-5" />
        </button>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-white sm:text-[28px]">
          {isEditMode ? "Edytuj samochód" : "Dodaj samochód"}
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-white/30">
          {isEditMode
            ? "Zaktualizuj informacje dotyczące samochodu."
            : "Uzupełnij informacje, aby dodać samochód do magazynu."}
        </p>
      </div>

      {isEditMode && !car ? (
        <div className="rounded-[10px] border border-white/8 bg-[#090909] p-5">
          <p className="text-[11px] text-white/40">Nie znaleziono samochodu.</p>
        </div>
      ) : (
        <AdminCarForm car={car} />
      )}
    </div>
  );
};
