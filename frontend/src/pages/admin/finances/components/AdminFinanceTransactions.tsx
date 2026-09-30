type Transaction = {
  id: number;
  title: string;
  description: string;
  date: string;
  amount: number;
  type: "income" | "expense";
};

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Sprzedaż BMW F30 340i",
    description: "Przychód ze sprzedaży samochodu",
    date: "29 września 2026",
    amount: 105000,
    type: "income",
  },
  {
    id: 2,
    title: "Zakup BMW G30 530i",
    description: "Zakup samochodu",
    date: "27 września 2026",
    amount: -72000,
    type: "expense",
  },
  {
    id: 3,
    title: "Serwis samochodu",
    description: "Części i robocizna",
    date: "26 września 2026",
    amount: -3200,
    type: "expense",
  },
  {
    id: 4,
    title: "Detailing",
    description: "Przygotowanie samochodu do sprzedaży",
    date: "25 września 2026",
    amount: -850,
    type: "expense",
  },
  {
    id: 5,
    title: "Sprzedaż BMW G11 740d",
    description: "Przychód ze sprzedaży samochodu",
    date: "22 września 2026",
    amount: 218000,
    type: "income",
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(Math.abs(value)) + " zł";
};

export const AdminFinanceTransactions = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
      "
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/7 px-5 py-4">
        <div>
          <h3 className="text-[14px] font-medium text-white">
            Ostatnie operacje
          </h3>

          <p className="mt-1 text-[11px] text-white/25">
            Historia przychodów i wydatków
          </p>
        </div>

        <button
          type="button"
          className="
            cursor-pointer
            text-[10px]
            text-white/30
            transition-colors
            duration-300
            hover:text-[#d2b878]
          "
        >
          Zobacz wszystkie
        </button>
      </div>

      <div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="
              flex
              items-center
              gap-4
              border-b
              border-white/5
              px-5
              py-4
              last:border-b-0
            "
          >
            <div
              className={`
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                ${
                  transaction.type === "income"
                    ? "border-[#b99a5c]/20 bg-[#b99a5c]/5 text-[#d2b878]"
                    : "border-white/8 bg-white/2 text-white/30"
                }
              `}
            >
              {transaction.type === "income" ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M12 19V5M12 5L7 10M12 5L17 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M12 5V19M12 19L7 14M12 19L17 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] text-white/70">
                {transaction.title}
              </p>

              <p className="mt-1 truncate text-[10px] text-white/20">
                {transaction.description} · {transaction.date}
              </p>
            </div>

            <span
              className={`
                shrink-0
                text-[12px]
                font-medium
                ${
                  transaction.type === "income"
                    ? "text-[#d2b878]"
                    : "text-white/45"
                }
              `}
            >
              {transaction.amount >= 0 ? "+" : "-"}
              {formatPrice(transaction.amount)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
