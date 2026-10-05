import { Outlet } from "react-router-dom";

import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E8E9E7]">
      <AdminSidebar />

      <div className="min-h-screen lg:pl-62.5">
        <AdminHeader />

        <main className="px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
          <div className="mx-auto w-full max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
