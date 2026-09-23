import { useEffect, useState } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gms-cookie-consent");

    if (!consent) {
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("gms-cookie-consent", value);

    setClosing(true);

    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed
        bottom-5
        left-5
        right-5
        z-9998
        sm:left-6
        sm:right-auto
        sm:w-105
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        ${closing ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div
        className="
          relative
          overflow-hidden
          border
          border-white/10
          bg-[#080808]/95
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
        "
      >
        {/* GOLD ACCENT */}
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-[#b99a5c] via-[#d2b878] to-transparent" />

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 text-[9px] tracking-[0.3em] text-[#b99a5c]">
              PLIKI COOKIES
            </div>

            <p className="max-w-95 text-[11px] leading-[1.7] text-[#888]">
              Ta strona wykorzystuje pliki cookies, aby zapewnić jej prawidłowe
              działanie i wygodę korzystania z serwisu.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="
                h-10
                flex-1
                cursor-pointer
                bg-[#d2b878]
                px-4
                text-[9px]
                font-medium
                tracking-[0.2em]
                text-[#050505]
                transition-all
                duration-300
                hover:bg-[#e0c98b]
              "
            >
              AKCEPTUJĘ
            </button>

            <button
              type="button"
              onClick={() => handleConsent("rejected")}
              className="
                h-10
                border
                border-white/10
                px-4
                text-[9px]
                cursor-pointer
                tracking-[0.2em]
                text-[#777]
                transition-all
                duration-300
                hover:border-white/20
                hover:text-[#aaa]
              "
            >
              ODRZUĆ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
