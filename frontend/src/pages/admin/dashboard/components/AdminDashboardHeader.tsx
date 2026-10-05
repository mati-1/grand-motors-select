export const AdminDashboardHeader = () => {
  const currentDate = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="flex flex-col justify-between gap-5 lg:flex-row sm:items-end">
      <div className="flex flex-col items-end lg:items-start">
        <span className="text-[11px] text-[#4C9FE5]">Panel zarządzania</span>

        <h2
          className="
            text-[24px]
            font-medium
            tracking-tight
            text-[#E8E9E7]
            sm:text-[28px]
          "
        >
          Dzień dobry, Mateusz
        </h2>

        <p className="mt-2 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
          Aktualny przegląd działalności Grand Motors Select.
        </p>
      </div>

      <div
        className="
          flex
          h-9
          items-center
          gap-2
          rounded-[10px]
          border
          border-white/8
          bg-[ext-[#E8E9E7]/2
          px-3
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#4C9FE5]" />

        <span className="text-[10px] text-[#E8E9E7]/40">{currentDate}</span>
      </div>
    </section>
  );
};
