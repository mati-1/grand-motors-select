import { Link, useNavigate } from "react-router-dom";
import { ButtonComponent } from "../button";
import { useLogout } from "../../hooks/auth/useLogout";

export const AdminHeader = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        console.log("LOGOUT OK");
        navigate("/admin/login", { replace: true });
      },
      onError: (error) => {
        console.error("LOGOUT ERROR", error);
      },
    });
  };

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20.5
        items-center
        justify-between
        border-b
        border-white/[0.07]
        bg-[#050505]/90
        px-4
        backdrop-blur-xl
        sm:px-6
        lg:px-8
        xl:px-10
        max-lg:justify-end
      "
    >
      {/* LEFT */}
      <div className="max-lg:hidden">
        <p className="text-[9px] text-[#E8E9E7]/25">Grand Motors Select</p>

        <h1 className="mt-1 text-[13px] font-medium text-[#E8E9E7]">
          Panel firmy
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="
            h-9
            items-center
            rounded-[10px]
            border
            border-white/10
            px-4
            text-nowrap
            text-[10px]
            text-[#E8E9E7]/40
            transition-all
            duration-300
            hover:border-white/20
            hover:text-[#E8E9E7]
            flex
          "
        >
          Zobacz stronę
        </Link>
        <ButtonComponent
          variant="secondary"
          size="small"
          className="text-[12px]!"
          onClick={handleLogout}
          disabled={logoutMutation.isPending}
        >
          {logoutMutation.isPending ? "Wylogowywanie..." : "Wyloguj się"}
        </ButtonComponent>
      </div>
    </header>
  );
};
