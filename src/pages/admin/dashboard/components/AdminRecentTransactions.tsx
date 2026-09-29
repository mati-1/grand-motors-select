import { Link } from "react-router-dom";

const transactions = [
  {
    id: "1",
    title: "Sprzedaż BMW F30 330i",
    date: "28 września 2026",
    amount: "+109 900 zł",
    type: "income",
  },
  {
    id: "2",
    title: "Transport BMW G20 330i",
    date: "27 września 2026",
    amount: "-2 400 zł",
    type: "expense",
  },
  {
    id: "3",
    title: "Detailing Audi S6",
    date: "26 września 2026",
    amount: "-850 zł",
    type: "expense",
  },
  {
    id: "4",
    title: "Sprzedaż Mercedes C43 AMG",
    date: "24 września 2026",
    amount: "+148 500 zł",
    type: "income",
  },
  {
    id: "5",
    title: "Zakup BMW G20 330i",
    date: "22 września 2026",
    amount: "-86 500 zł",
    type: "expense",
  },
];

export const AdminRecentTransactions = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/[0.08]
        bg-[#090909]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <h3 className="text-[11px] font-medium text-white">
            Ostatnie transakcje
          </h3>

          <p className="mt-1 text-[8px] text-white/25">
            Ostatnie operacje finansowe.
          </p>
        </div>

        <Link
          to="/admin/finances"
          className="
            text-[9px]
            text-white/30
            transition-colors
            duration-300
            hover:text-[#d2b878]
          "
        >
          Zobacz wszystkie
        </Link>
      </div>

      {/* TRANSACTIONS */}
      <div>
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className={`
              flex
              items-center
              gap-3
              px-5
              py-4
              ${
                index !== transactions.length - 1
                  ? "border-b border-white/[0.05]"
                  : ""
              }
            `}
          >
            <div
              className={`
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[10px]
                ${
                  transaction.type === "income"
                    ? "bg-[#b99a5c]/[0.08] text-[#d2b878]"
                    : "bg-white/[0.04] text-white/30"
                }
              `}
            >
              {transaction.type === "income" ? "+" : "−"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] text-white/70">
                {transaction.title}
              </p>

              <p className="mt-1 text-[7px] text-white/20">
                {transaction.date}
              </p>
            </div>

            <p
              className={`
                shrink-0
                text-[9px]
                font-medium
                ${
                  transaction.type === "income"
                    ? "text-[#d2b878]"
                    : "text-white/45"
                }
              `}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
