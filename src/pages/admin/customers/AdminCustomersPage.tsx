import { AdminCustomersHeader } from "./components/AdminCustomersHeader";
import { AdminCustomersStats } from "./components/AdminCustomersStats";
import { AdminCustomersFilters } from "./components/AdminCustomersFilters";
import { AdminCustomersList } from "./components/AdminCustomersList";

export const AdminCustomersPage = () => {
  return (
    <div className="space-y-8">
      <AdminCustomersHeader />

      <AdminCustomersStats />

      <AdminCustomersFilters />

      <AdminCustomersList />
    </div>
  );
};
