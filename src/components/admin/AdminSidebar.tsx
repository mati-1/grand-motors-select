import { NavLink } from "react-router-dom";
import { LogoComponent } from "../logo";

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
  return (
    <aside
      className="
        fixed
        inset-y-0
        left-0
        z-50
        hidden
        w-62.5
        flex-col
        border-r
        border-white/[0.07]
        bg-[#070707]
        lg:flex
      "
    >
      {/* BRAND */}
      <div className="flex h-20.5 items-center border-b border-white/[0.07] px-7">
        <LogoComponent className="w-42!" clickable={false} />
      </div>

      {/* NAVIGATION */}
      <div className="flex flex-1 flex-col px-3 py-5">
        <div className="mb-3 px-3 text-[8px] tracking-[0.12em] text-white/20">
          Zarządzanie
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
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

        <div className="mb-3 mt-8 px-3 text-[8px] tracking-[0.12em] text-white/20">
          Firma
        </div>

        <nav className="space-y-1">
          {secondaryNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
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
              <NavigationIcon type={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* USER */}
      <div className="border-t border-white/[0.07] p-4">
        <div className="flex items-center gap-3 rounded-[10px] bg-white/2.5 px-3 py-3">
          <LogoComponent clickable={false} className="w-8!" type="emblem" />

          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium text-white">
              Administrator
            </p>

            <p className="mt-0.5 text-[9px] text-white/25">Panel firmy</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
