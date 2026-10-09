import { useQuery } from "@tanstack/react-query";
import { getAdminDashboard } from "../../api/dashboard";

export const useAdminDashboard = () =>
  useQuery({
    queryKey: ["finance", "dashboard"],
    queryFn: getAdminDashboard,
  });
