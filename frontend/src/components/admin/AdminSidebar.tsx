import { LogoComponent } from "../logo";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: "dashboard",
  },
  {
    label: "Samochody",
    path: "/admin/cars",
    icon: "cars",
  },
  {
    label: "Finanse",
    path: "/admin/finances",
    icon: "finances",
  },
  {
    label: "Sprzedaż",
    path: "/admin/sales",
    icon: "sales",
  },
  {
    label: "Wydatki",
    path: "/admin/expenses",
    icon: "expenses",
  },
  {
    label: "Klienci",
    path: "/admin/customers",
    icon: "customers",
  },
];

const secondaryNavigation = [
  {
    label: "Firma",
    path: "/admin/company",
    icon: "company",
  },
  {
    label: "Ustawienia",
    path: "/admin/settings",
    icon: "settings",
  },
];

const NavigationIcon = ({ type }: { type: string }) => {
  const common = "h-[17px] w-[17px]";

  if (type === "dashboard") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="4"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "cars") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M5 16.5V11.8L7.2 6.5H16.8L19 11.8V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 16.5V18.5M17 16.5V18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="7" cy="14.5" r="1" fill="currentColor" />
        <circle cx="17" cy="14.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "finances") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M5 19V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 19V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19 19V8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "sales") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M5 5H19V19H5V5Z" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 12L10.5 14.5L16 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "expenses") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M6 4H18V20H6V4Z" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 8H15M9 12H15M9 16H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "customers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 20C6.7 16.7 8.7 15 12 15C15.3 15 17.3 16.7 18 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "company") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M5 20V7L12 4L19 7V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 20V16H15V20M9 10H9.01M12 10H12.01M15 10H15.01M9 13H9.01M12 13H12.01M15 13H15.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19 13.5V10.5L16.9 10C16.7 9.5 16.5 9.1 16.2 8.7L17.1 6.8L15 4.9L13.2 5.9C12.8 5.7 12.4 5.5 11.9 5.4L11.5 3.5H8.5L8 5.4C7.6 5.5 7.2 5.7 6.8 5.9L5 4.9L2.9 6.8L3.8 8.7C3.5 9.1 3.3 9.5 3.1 10L1 10.5V13.5L3.1 14C3.3 14.5 3.5 14.9 3.8 15.3L2.9 17.2L5 19.1L6.8 18.1C7.2 18.3 7.6 18.5 8 18.6L8.5 20.5H11.5L12 18.6C12.4 18.5 12.8 18.3 13.2 18.1L15 19.1L17.1 17.2L16.2 15.3C16.5 14.9 16.7 14.5 16.9 14L19 13.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Zamknij sidebar po zmianie podstrony.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Escape + blokowanie scrolla na mobilce.
  useEffect(() => {
    if (!isOpen) return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const previousOverflow = document.body.style.overflow;

    if (mediaQuery.matches) {
      document.body.style.overflow = "hidden";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* =================================================
          MOBILE OVERLAY
          ================================================= */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/70
          backdrop-blur-[3px]
          transition-all
          duration-300
          lg:hidden
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      />

      {/* =================================================
          MOBILE TOGGLE
          ================================================= */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="admin-sidebar"
        className={`
          fixed
          top-5
          z-60
          flex
          h-11
          w-9
          cursor-pointer
          items-center
          justify-center
          rounded-r-[10px]
          border
          border-l-0
          border-[#b99a5c]/25
          bg-[#101010]
          text-[#d2b878]
          shadow-lg
          transition-[left,background-color]
          duration-300
          ease-in-out
          hover:bg-[#191919]
          lg:hidden
          ${isOpen ? "left-62.5" : "left-0"}
        `}
      >
        <div className="relative flex h-4 w-4 flex-col items-center justify-center gap-1">
          <span
            className={`
              block
              h-px
              w-4
              bg-current
              transition-transform
              duration-300
              ${isOpen ? "translate-y-1.25 rotate-45" : ""}
            `}
          />

          <span
            className={`
              block
              h-px
              w-4
              bg-current
              transition-opacity
              duration-300
              ${isOpen ? "opacity-0" : "opacity-100"}
            `}
          />

          <span
            className={`
              block
              h-px
              w-4
              bg-current
              transition-transform
              duration-300
              ${isOpen ? "-translate-y-1.25 -rotate-45" : ""}
            `}
          />
        </div>
      </button>

      {/* =================================================
          SIDEBAR
          ================================================= */}
      <aside
        id="admin-sidebar"
        aria-label="Nawigacja panelu administracyjnego"
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-62.5
          flex-col
          border-r
          border-white/[0.07]
          bg-[#070707]
          transition-transform
          duration-300
          ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* BRAND */}
        <div className="flex h-20.5 shrink-0 items-center border-b border-white/[0.07] px-7">
          <LogoComponent className="w-42!" clickable={false} />
        </div>

        {/* NAVIGATION */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 py-5">
          <div className="mb-3 px-3 text-[11px] text-white/20">Zarządzanie</div>

          <nav className="space-y-1" aria-label="Zarządzanie">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  group
                  flex
                  h-10
                  items-center
                  gap-3
                  rounded-[10px]
                  px-3
                  text-[12px]
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-[#b99a5c]/10 text-[#d2b878]"
                      : "text-white/40 hover:bg-white/[0.035] hover:text-white/70"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <NavigationIcon type={item.icon} />

                    <span>{item.label}</span>

                    {isActive && (
                      <span className="ml-auto h-1 w-1 rounded-full bg-[#d2b878]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mb-3 mt-8 px-3 text-[11px] tracking-[0.12em] text-white/20">
            Firma
          </div>

          <nav className="space-y-1" aria-label="Firma">
            {secondaryNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  group
                  flex
                  h-10
                  items-center
                  gap-3
                  rounded-[10px]
                  px-3
                  text-[12px]
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-[#b99a5c]/10 text-[#d2b878]"
                      : "text-white/40 hover:bg-white/[0.035] hover:text-white/70"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <NavigationIcon type={item.icon} />

                    <span>{item.label}</span>

                    {isActive && (
                      <span className="ml-auto h-1 w-1 rounded-full bg-[#d2b878]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
