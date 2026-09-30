import { AdminBusinessOverview } from "./components/AdminBusinessOverview";
import { AdminDashboardHeader } from "./components/AdminDashboardHeader";
import { AdminQuickActions } from "./components/AdminQuickActions";
import { AdminRecentCars } from "./components/AdminRecentCars";
import { AdminRecentTransactions } from "./components/AdminRecentTransactions";

export const AdminDashboardPage = () => {
  return (
    <div className="space-y-8">
      <AdminDashboardHeader />

      <AdminBusinessOverview />

      <AdminQuickActions />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.35fr_1fr]">
        <AdminRecentCars />
        <AdminRecentTransactions />
      </div>
    </div>
  );
};
