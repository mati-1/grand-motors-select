import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import { AUTH_EXPIRED_EVENT } from "../../api/client";
import { useMe } from "../../hooks/auth/useMe";

export const AuthGuard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const meQuery = useMe();

  useEffect(() => {
    const handleAuthExpired = () => {
      navigate("/admin/login", {
        replace: true,
        state: {
          from: location.pathname,
        },
      });
    };

    window.addEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);

    return () => {
      window.removeEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);
    };
  }, [navigate, location.pathname]);

  if (meQuery.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505]">
        <div className="text-[10px] text-[#E8E9E7]/30">
          Sprawdzanie sesji...
        </div>
      </main>
    );
  }

  if (meQuery.isError) {
    return (
      <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
    );
  }

  return <Outlet />;
};
