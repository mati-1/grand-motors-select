import { AdminSettingsHeader } from "./components/AdminSettingsHeader";
import { AdminProfileSettings } from "./components/AdminProfileSettings";
import { AdminSecuritySettings } from "./components/AdminSecuritySettings";
import { AdminNotificationSettings } from "./components/AdminNotificationSettings";
import { AdminAppearanceSettings } from "./components/AdminAppearanceSettings";
import { AdminUsersSettings } from "./components/AdminUsersSettings";
import { AdminIntegrationsSettings } from "./components/AdminIntegrationsSettings";

export const AdminSettingsPage = () => {
  return (
    <div className="space-y-8">
      <AdminSettingsHeader />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <AdminProfileSettings />
        <AdminSecuritySettings />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <AdminNotificationSettings />
        <AdminAppearanceSettings />
      </div>

      <AdminUsersSettings />

      <AdminIntegrationsSettings />
    </div>
  );
};
