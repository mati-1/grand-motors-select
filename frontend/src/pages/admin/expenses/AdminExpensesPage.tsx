import { AdminExpensesHeader } from "./components/AdminExpensesHeader";
import { AdminExpensesStats } from "./components/AdminExpensesStats";
import { AdminExpensesFilters } from "./components/AdminExpensesFilters";
import { AdminExpensesCategories } from "./components/AdminExpensesCategories";
import { AdminExpensesList } from "./components/AdminExpensesList";

export const AdminExpensesPage = () => {
  return (
    <div className="space-y-8">
      <AdminExpensesHeader />

      <AdminExpensesStats />

      <AdminExpensesFilters />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1.35fr]">
        <AdminExpensesCategories />
        <AdminExpensesList />
      </div>
    </div>
  );
};
