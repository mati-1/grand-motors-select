import { AdminCompanyHeader } from "./components/AdminCompanyHeader";
import { AdminCompanyDetails } from "./components/AdminCompanyDetails";
import { AdminCompanyContact } from "./components/AdminCompanyContact";
import { AdminCompanyBankAccounts } from "./components/AdminCompanyBankAccounts";
import { AdminCompanyFixedCosts } from "./components/AdminCompanyFixedCosts";
import { AdminCompanyDocuments } from "./components/AdminCompanyDocuments";
import { AdminCompanySalesSettings } from "./components/AdminCompanySalesSettings";

export const AdminCompanyPage = () => {
  return (
    <div className="space-y-8">
      <AdminCompanyHeader />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <AdminCompanyDetails />
        <AdminCompanyContact />
      </div>

      <AdminCompanyBankAccounts />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <AdminCompanyFixedCosts />
        <AdminCompanySalesSettings />
      </div>

      <AdminCompanyDocuments />
    </div>
  );
};
