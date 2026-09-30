import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useMe } from "../../hooks/auth/useMe";

type AuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const location = useLocation();
  const meQuery = useMe();

  if (meQuery.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505]">
        <div className="text-[10px] text-white/30">Sprawdzanie sesji...</div>
      </main>
    );
  }

  if (meQuery.isError) {
    return (
      <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
    );
  }

  return <>{children}</>;
};
