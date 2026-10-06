import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { AdminSaleCar } from "./AdminSaleCar";
import { AdminSaleCustomer } from "./AdminSaleCustomer";
import { AdminSalePayment } from "./AdminSalePayment";
import { AdminSaleDocument } from "./AdminSaleDocument";
// import { AdminSaleSummary } from "./AdminSaleSummary";

import { defaultSaleFormValues } from "./defaultValues";
import type { AdminSaleFormValues } from "./types";

export const AdminSaleForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<AdminSaleFormValues>(defaultSaleFormValues);

  const updateField = <K extends keyof AdminSaleFormValues>(
    field: K,
    value: AdminSaleFormValues[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.carId) {
      return;
    }

    console.log("Nowa sprzedaż:", {
      ...form,
      carId: form.carId,
    });

    /*
     * Docelowo tutaj:
     *
     * POST /api/sales
     *
     * Backend:
     * 1. sprawdzi samochód
     * 2. utworzy CarSale
     * 3. pobierze koszty samochodu
     * 4. policzy zysk
     * 5. zmieni status auta na sold
     * 6. utworzy transakcję finansową
     */

    navigate("/admin/sprzedaz");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* <AdminSaleCar
        cars={availableCars}
        selectedCar={selectedCar}
        value={form.carId}
        onChange={(value) => updateField("carId", value)}
      /> */}

      <AdminSaleCustomer values={form} onChange={updateField} />

      <AdminSalePayment values={form} onChange={updateField} />

      <AdminSaleDocument values={form} onChange={updateField} />

      {/* <AdminSaleSummary car={selectedCar} salePrice={form.salePrice} /> */}

      <div className="flex flex-col-reverse gap-3 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate("/admin/sprzedaz")}
          className="h-11 cursor-pointer rounded-[10px] border border-white/10 px-5 text-[11px] text-[#E8E9E7]/40 transition-all duration-300 hover:border-white/20 hover:text-[#E8E9E7]"
        >
          Anuluj
        </button>

        <button
          type="submit"
          disabled={!form.carId}
          className="h-11 cursor-pointer rounded-[10px] bg-[#4C9FE5] px-6 text-[11px] font-medium text-black transition-all duration-300 hover:bg-[#e0c98b] disabled:cursor-default disabled:opacity-40"
        >
          Zapisz sprzedaż
        </button>
      </div>
    </form>
  );
};
