type Expense = {
  id: string;
  title: string;
  category: string;
  car?: string;
  description: string;
  date: string;
  amount: number;
};

const expenses: Expense[] = [
  {
    id: "1",
    title: "Zakup BMW G30 530i",
    category: "Zakup samochodu",
    car: "BMW G30 530i",
    description: "Zakup samochodu do dalszej sprzedaży",
    date: "29 września 2026",
    amount: 72000,
  },
  {
    id: "2",
    title: "Serwis BMW F30 340i",
    category: "Serwis i części",
    car: "BMW F30 340i",
    description: "Wymiana oleju i części eksploatacyjnych",
    date: "28 września 2026",
    amount: 1850,
  },
  {
    id: "3",
    title: "Transport samochodu",
    category: "Transport",
    car: "BMW G30 530i",
    description: "Transport samochodu do firmy",
    date: "27 września 2026",
    amount: 1200,
  },
  {
    id: "4",
    title: "Detailing BMW F30 340i",
    category: "Detailing",
    car: "BMW F30 340i",
    description: "Przygotowanie samochodu do sprzedaży",
    date: "26 września 2026",
    amount: 850,
  },
  {
    id: "5",
    title: "Reklama ogłoszeń",
    category: "Marketing",
    description: "Promowanie samochodów",
    date: "25 września 2026",
    amount: 450,
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminExpensesList = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/5
      "
    >
      <div className="flex flex-col justify-between gap-3 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">
            Ostatnie wydatki
          </h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Zarejestrowane operacje
          </p>
        </div>

        <span className="text-[10px] text-[#E8E9E7]/20">
          {expenses.length} operacji
        </span>
      </div>

      <div className="divide-y divide-white/5">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="
              flex
              flex-col
              gap-4
              px-5
              py-4
              transition-colors
              duration-300
              hover:bg-[ext-[#E8E9E7]/[0.015]
              sm:flex-row
              sm:items-center
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/8
                bg-[ext-[#E8E9E7]/[0.02]
                text-[#E8E9E7]/30
              "
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M12 5V19M12 19L7 14M12 19L17 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <p className="truncate text-[12px] text-[#E8E9E7]/70">
                  {expense.title}
                </p>

                <span className="w-fit rounded-[5px] border border-white/8 px-1.5 py-0.5 text-[8px] text-[#E8E9E7]/25">
                  {expense.category}
                </span>
              </div>

              <p className="mt-1 truncate text-[10px] text-[#E8E9E7]/20">
                {expense.car ? `${expense.car} · ` : ""}
                {expense.description}
              </p>

              <p className="mt-1 text-[9px] text-[#E8E9E7]/15 sm:hidden">
                {expense.date}
              </p>
            </div>

            <p className="hidden shrink-0 text-[9px] text-[#E8E9E7]/20 sm:block">
              {expense.date}
            </p>

            <p className="shrink-0 text-[12px] font-medium text-[#E8E9E7]/55">
              -{formatPrice(expense.amount)}
            </p>

            <button
              type="button"
              className="
                flex
                h-8
                shrink-0
                cursor-pointer
                items-center
                justify-center
                rounded-[8px]
                border
                border-white/8
                px-3
                text-[9px]
                text-[#E8E9E7]/30
                transition-all
                duration-300
                hover:border-white/15
                hover:text-[#E8E9E7]
              "
            >
              Szczegóły
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
