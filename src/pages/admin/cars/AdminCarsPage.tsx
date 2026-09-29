import { AdminCarsHeader } from "./components/AdminCarsHeader";
import { AdminCarsList } from "./components/AdminCarsList";

export const AdminCarsPage = () => {
  return (
    <div className="space-y-8">
      <AdminCarsHeader />

      <AdminCarsList />
    </div>
  );
};
