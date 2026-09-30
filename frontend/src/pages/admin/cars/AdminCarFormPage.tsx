import { useParams } from "react-router-dom";
import { AdminCarForm } from "./components/AdminCarForm/AdminCarForm";
import { carsList } from "../../../components/cars/cars";

export const AdminCarFormPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  const car = isEditMode ? carsList.find((item) => item.id === id) : undefined;

  return (
    <div className="space-y-8">
      <div>
        <span className="text-[11px] text-[#b99a5c]">
          {isEditMode ? "Edycja samochodu" : "Nowy samochód"}
        </span>

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
