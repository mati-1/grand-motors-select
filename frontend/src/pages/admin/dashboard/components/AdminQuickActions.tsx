import { Link } from "react-router-dom";

const actions = [
  {
    label: "Dodaj samochód",
    description: "Dodaj nowe auto do bazy",
    path: "/admin/cars/new",
    icon: "car",
  },
  {
    label: "Dodaj wydatek",
    description: "Zapisz koszt firmowy",
    path: "/admin/expenses/new",
    icon: "expense",
  },
  {
    label: "Dodaj sprzedaż",
    description: "Zarejestruj sprzedaż auta",
    path: "/admin/sales/new",
    icon: "sale",
  },
];

const ActionIcon = ({ type }: { type: string }) => {
  if (type === "car") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M5 16.5V11.5L7 6.5H17L19 11.5V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 14V20M9 17H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "expense") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M6 4H18V20H6V4Z" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 8H15M9 12H15M9 16H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
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
};

export const AdminQuickActions = () => {
  return (
    <section>
      <div className="mb-3">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">
          Szybkie akcje
        </h3>

        <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
          Najczęściej używane funkcje panelu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {actions.map((action) => (
          <Link
            key={action.path}
            to={action.path}
            className="
              group
              flex
              items-center
              gap-4
              rounded-[10px]
              border
              border-white/8
              bg-[#4C9FE5]/5
              p-4
              transition-all
              duration-300
              hover:border-[#4C9FE5]/25
              bg-[#4C9FE5]/10
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                text-[#E8E9E7]/40
                transition-colors
                duration-300
                group-hover:border-[#4C9FE5]/30
                group-hover:text-[#4C9FE5]
              "
            >
              <ActionIcon type={action.icon} />
            </div>

            <div className="min-w-0">
              <p className="text-[12px] font-medium text-[#E8E9E7]">
                {action.label}
              </p>

              <p className="mt-1 text-[12px] text-[#E8E9E7]/25">
                {action.description}
              </p>
            </div>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-auto h-3.5 w-3.5 text-[#E8E9E7]/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#4C9FE5]"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
};
