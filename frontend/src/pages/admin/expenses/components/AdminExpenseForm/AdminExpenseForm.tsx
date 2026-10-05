import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AdminExpenseBasicInfo } from "./AdminExpenseBasicInfo";
import { AdminExpensePayment } from "./AdminExpensePayment";
import { AdminExpenseDocument } from "./AdminExpenseDocument";
import { defaultExpenseFormValues } from "./defaultValues";
import type { AdminExpenseFormValues } from "./types";

export const AdminExpenseForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<AdminExpenseFormValues>(
    defaultExpenseFormValues,
  );

  const updateField = <K extends keyof AdminExpenseFormValues>(
    field: K,
    value: AdminExpenseFormValues[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Nowy wydatek:", form);

    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AdminExpenseBasicInfo values={form} onChange={updateField} />

      <AdminExpensePayment values={form} onChange={updateField} />

      <AdminExpenseDocument values={form} onChange={updateField} />

      <div className="flex flex-col-reverse gap-3 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="h-11 cursor-pointer rounded-[10px] border border-white/10 px-5 text-[11px] text-[#E8E9E7]/40 transition-all duration-300 hover:border-white/20 hover:text-[#E8E9E7]"
        >
          Anuluj
        </button>

        <button
          type="submit"
          className="h-11 cursor-pointer rounded-[10px] bg-[#4C9FE5] px-6 text-[11px] font-medium text-black transition-all duration-300 hover:bg-[#e0c98b]"
        >
          Dodaj wydatek
        </button>
      </div>
    </form>
  );
};
