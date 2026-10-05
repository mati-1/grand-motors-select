import { useParams } from "react-router-dom";

import { AdminExpenseForm } from "./components/AdminExpenseForm/AdminExpenseForm";

export const AdminExpenseFormPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  return (
    <div className="space-y-8">
      <div>
        <span className="text-[11px] text-[#4C9FE5]">
          {isEditMode ? "Edycja wydatku" : "Nowy wydatek"}
        </span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
          {isEditMode ? "Edytuj wydatek" : "Dodaj wydatek"}
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          {isEditMode
            ? "Zaktualizuj informacje dotyczące wydatku."
            : "Dodaj koszt poniesiony przez firmę lub związany z konkretnym samochodem."}
        </p>
      </div>

      <AdminExpenseForm />
    </div>
  );
};
