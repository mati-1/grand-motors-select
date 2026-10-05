import { useParams } from "react-router-dom";
import { AdminSaleForm } from "./components/AdminSaleForm/AdminSaleForm";

export const AdminSaleFormPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  return (
    <div className="space-y-8">
      <div>
        <span className="text-[11px] text-[#4C9FE5]">
          {isEditMode ? "Edycja sprzedaży" : "Nowa sprzedaż"}
        </span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
          {isEditMode ? "Edytuj sprzedaż" : "Dodaj sprzedaż"}
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          {isEditMode
            ? "Zaktualizuj informacje dotyczące sprzedaży samochodu."
            : "Zarejestruj sprzedaż samochodu i powiąż ją z klientem."}
        </p>
      </div>

      <AdminSaleForm />
    </div>
  );
};
