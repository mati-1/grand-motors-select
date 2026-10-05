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
        border-white/8
        bg-[#4C9FE5]/2
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">
            Ostatnie transakcje
          </h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Ostatnie operacje finansowe.
          </p>
        </div>

        <Link
          to="/admin/finances"
          className="
            text-[12px]
            text-[#E8E9E7]/30
            transition-colors
            duration-300
            hover:text-[#4C9FE5]
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
                  ? "border-b border-white/5"
                  : ""
              }
            `}
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
                text-[14px]
                ${
                  transaction.type === "income"
                    ? "bg-[#4C9FE5]/8 text-[#4C9FE5]"
                    : "bg-[ext-[#E8E9E7]/4 text-[#E8E9E7]/30"
                }
              `}
            >
              {transaction.type === "income" ? "+" : "−"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] text-[#E8E9E7]/70">
                {transaction.title}
              </p>

              <p className="mt-1 text-[11px] text-[#E8E9E7]/20">
                {transaction.date}
              </p>
            </div>

            <p
              className={`
                shrink-0
                text-[13px]
                font-medium
                ${
                  transaction.type === "income"
                    ? "text-[#4C9FE5]"
                    : "text-[#E8E9E7]/45"
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
