import { Link } from "react-router-dom";

export const AdminHeader = () => {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-[82px]
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
          target="_blank"
          className="
            hidden
            h-9
            items-center
            rounded-[8px]
            border
            border-white/10
            px-4
            text-[9px]
            text-white/40
            transition-all
            duration-300
            hover:border-white/20
            hover:text-white
            sm:flex
          "
        >
          Zobacz stronę
        </Link>

        <button
          type="button"
          className="
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            text-[10px]
            text-white/50
            transition-all
            duration-300
            hover:border-[#b99a5c]/30
            hover:text-[#d2b878]
          "
          aria-label="Profil"
        >
          A
        </button>
      </div>
    </header>
  );
};
