import { Link } from "react-router-dom";
import { ButtonComponent } from "../button";

export const AdminHeader = () => {
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
      "
    >
      {/* LEFT */}
      <div>
        <p className="text-[9px] text-white/25">Grand Motors Select</p>

        <h1 className="mt-1 text-[13px] font-medium text-white">Panel firmy</h1>
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
            text-white/40
            transition-all
            duration-300
            hover:border-white/20
            hover:text-white
            flex
          "
        >
          Zobacz stronę
        </Link>
        <ButtonComponent
          type="secondary"
          size="small"
          className="text-[12px]!"
          href="/admin/login"
        >
          Wyloguj się
        </ButtonComponent>
      </div>
    </header>
  );
};
