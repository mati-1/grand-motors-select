import { AdminSalesHeader } from "./components/AdminSalesHeader";
import { AdminSalesStats } from "./components/AdminSalesStats";
import { AdminSalesOverview } from "./components/AdminSalesOverview";
import { AdminSalesList } from "./components/AdminSalesList";

export const AdminSalesPage = () => {
  return (
    <div className="space-y-8">
      <AdminSalesHeader />

      <AdminSalesStats />

      <AdminSalesOverview />

      <AdminSalesList />
    </div>
  );
};
