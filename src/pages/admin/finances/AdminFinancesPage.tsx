import { AdminFinancesHeader } from "./components/AdminFinancesHeader";
import { AdminFinanceStats } from "./components/AdminFinanceStats";
import { AdminCashFlow } from "./components/AdminCashFlow";
import { AdminFinanceBreakdown } from "./components/AdminFinanceBreakdown";
import { AdminFinanceTransactions } from "./components/AdminFinanceTransactions";

export const AdminFinancesPage = () => {
  return (
    <div className="space-y-8">
      <AdminFinancesHeader />

      <AdminFinanceStats />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.35fr_1fr]">
        <AdminCashFlow />
        <AdminFinanceBreakdown />
      </div>

      <AdminFinanceTransactions />
    </div>
  );
};
