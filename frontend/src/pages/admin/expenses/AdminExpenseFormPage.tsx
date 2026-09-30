import { useParams } from "react-router-dom";

import { AdminExpenseForm } from "./components/AdminExpenseForm/AdminExpenseForm";

export const AdminExpenseFormPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  return (
    <div className="space-y-8">
      <div>
        <span className="text-[11px] text-[#b99a5c]">
          {isEditMode ? "Edycja wydatku" : "Nowy wydatek"}
        </span>

        <h2 className="mt-1 text-[24px] font-medium tracking-tight text-white sm:text-[28px]">
          {isEditMode ? "Edytuj wydatek" : "Dodaj wydatek"}
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-white/30">
          {isEditMode
            ? "Zaktualizuj informacje dotyczące wydatku."
            : "Dodaj koszt poniesiony przez firmę lub związany z konkretnym samochodem."}
        </p>
      </div>

      <AdminExpenseForm />
    </div>
  );
};
