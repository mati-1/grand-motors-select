type AdminStatCardProps = {
  label: string;
  value: string;
  description: string;
  change: string;
  positive?: boolean;
  icon: string;
};

const StatIcon = ({ type }: { type: string }) => {
  if (type === "capital") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M4 7.5L12 4L20 7.5V18L12 21L4 18V7.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M4 7.5L12 11L20 7.5M12 11V21"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "profit") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 18L10 13L13 16L19 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9H19V13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "cars") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 16.5V11.5L7 6.5H17L19 11.5V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="15" r="1" fill="currentColor" />
        <circle cx="17" cy="15" r="1" fill="currentColor" />
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

export const AdminStatCard = ({
  label,
  value,
  description,
  change,
  positive = true,
  icon,
}: AdminStatCardProps) => {
  return (
    <div
      className="
        group
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
        p-5
        transition-all
        duration-300
        hover:border-white/13
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-[10px]
            border
            border-[#b99a5c]/20
            bg-[#b99a5c]/[0.07]
            text-[#d2b878]
          "
        >
          <StatIcon type={icon} />
        </div>

        <span
          className={`
            rounded-full
            px-2
            py-1
            text-[11px]
            ${
              positive
                ? "bg-[#b99a5c]/[0.07] text-[#b99a5c]"
                : "bg-red-400/[0.07] text-red-300"
            }
          `}
        >
          {change}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-[12px] text-white/30">{label}</p>

        <p className="mt-1.5 text-[21px] font-medium text-white">{value}</p>

        <p className="mt-1 text-[11px] text-white/40">{description}</p>
      </div>
    </div>
  );
};
