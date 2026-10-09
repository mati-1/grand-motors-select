import { useState } from "react";

import {
  useDeleteFinanceTransaction,
  useFinanceTransactions,
  type FinanceTransaction,
} from "../../../../hooks/finance/useFinance";

import { FinanceTransactionModal } from "./FinanceTransactionModal";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pl-PL").format(Math.abs(value)) + " zł";

const getTransactionValue = (type: string, amount: number) => {
  if (type === "expense" || type === "capital_out") {
    return -Math.abs(amount);
  }

  return Math.abs(amount);
};

const TransactionIcon = ({ positive }: { positive: boolean }) => (
  <div
    className={`flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full border ${
      positive
        ? "border-green-500/40 bg-green-500/3 text-green-500/70"
        : "border-red-500/40 bg-red-500/3 text-red-500/70"
    }`}
  >
    {positive ? "+" : "-"}
  </div>
);

export const AdminFinanceTransactions = ({ period }: { period: string }) => {
  const { data, isLoading, isError } = useFinanceTransactions(period);
  const deleteMutation = useDeleteFinanceTransaction();

  const [editing, setEditing] = useState<FinanceTransaction | null>(null);

  const handleDelete = async (transactionId: string) => {
    const confirmed = window.confirm("Czy na pewno chcesz usunąć tę operację?");

    if (!confirmed) return;

    try {
      await deleteMutation.mutateAsync(transactionId);
    } catch {
      window.alert("Nie udało się usunąć operacji.");
    }
  };

  if (isLoading) {
    return (
      <section className="overflow-hidden rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
        <div className="border-b border-white/7 px-5 py-4">
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">
            Ostatnie operacje
          </h3>
        </div>

        <div className="divide-y divide-white/5">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="animate-pulse px-5 py-4">
              <div className="h-4 w-1/3 rounded bg-white/5" />
              <div className="mt-2 h-3 w-1/2 rounded bg-white/5" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="overflow-hidden rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
        <div className="p-5">
          <p className="text-[11px] text-red-300/60">
            Nie udało się pobrać operacji finansowych.
          </p>
        </div>
      </section>
    );
  }

  const transactions = data.transactions.slice(0, 10);

  return (
    <>
      <section className="overflow-hidden rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
        <div className="flex items-center justify-between gap-4 border-b border-white/7 px-5 py-4">
          <div>
            <h3 className="text-[14px] font-medium text-[#E8E9E7]">
              Ostatnie operacje
            </h3>

            <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
              Historia przychodów i wydatków
            </p>
          </div>

          <span className="text-[11px] text-[#E8E9E7]/20">
            {data.transactions.length} operacji
          </span>
        </div>

        {transactions.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <p className="text-[11px] text-[#E8E9E7]/30">
              Brak operacji w wybranym okresie
            </p>
          </div>
        ) : (
          <div>
            {transactions.map((transaction) => {
              const value = getTransactionValue(
                transaction.type,
                transaction.amount,
              );

              const positive = value >= 0;

              return (
                <div
                  key={transaction.id}
                  className="group flex items-center gap-4 border-b border-white/5 px-5 py-4 last:border-b-0"
                >
                  <TransactionIcon positive={positive} />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] md:text-[13px] text-[#E8E9E7]/70">
                      {transaction.title}
                      {transaction.car && (
                        <>
                          {" · "}
                          {transaction.car.brand} {transaction.car.model}
                        </>
                      )}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-[#E8E9E7]/30">
                      {transaction.description ?? transaction.categoryLabel}
                      {" · "}
                      {formatDate(transaction.date)}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 text-[11px] md:text-[13px] font-medium ${
                      positive ? "text-green-500/60" : "text-red-400/70"
                    }`}
                  >
                    {positive ? "+" : "-"}
                    {formatPrice(value)}
                  </span>

                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setEditing(transaction)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-[#E8E9E7]/40 transition hover:bg-[#4C9FE5]/10 hover:text-[#7FC4F7]"
                      title="Edytuj operację"
                      aria-label={`Edytuj: ${transaction.title}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 20H21"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(transaction.id)}
                      disabled={deleteMutation.isPending}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-[#E8E9E7]/30 transition hover:bg-red-400/5 hover:text-red-300/80 disabled:cursor-not-allowed disabled:opacity-40"
                      title="Usuń operację"
                      aria-label={`Usuń: ${transaction.title}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7H19M10 11V17M14 11V17M8 7L9 4H15L16 7M7 7L8 20H16L17 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <FinanceTransactionModal
        open={editing !== null}
        transaction={editing}
        onClose={() => setEditing(null)}
      />
    </>
  );
};
