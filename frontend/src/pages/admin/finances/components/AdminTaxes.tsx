import { useState, type FormEvent } from "react";
import { AdminCashFlow } from "./AdminCashFlow";
import {
  useFixedPayments,
  useCreateFixedPayment,
  useUpdateFixedPayment,
  useSetFixedPaymentPaid,
  useDeleteFixedPayment,
  type FixedPayment,
  type FixedPaymentInput,
} from "../../../../hooks/finance/useFixedPayments";
import { FormSelect } from "../../../../components/form/FormSelect";

const categories = [
  "Księgowość",
  "ZUS",
  "Podatki",
  "Oprogramowanie",
  "Telefon i internet",
  "Ubezpieczenie",
  "Inne",
];

const emptyForm = {
  name: "",
  amount: "",
  dueDay: "10",
  category: "Inne",
};

const buttonClass =
  "rounded-xl border border-white/10 px-3 py-2 text-xs text-[#E8E9E7] transition hover:bg-white/5 disabled:opacity-50";

const money = (amount: number) =>
  amount.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

const getMonth = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

const getDaysLeft = (day: number) => {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const due = new Date(
    now.getFullYear(),
    now.getMonth(),
    Math.min(day, lastDay),
  );
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((due.getTime() - today.getTime()) / 86400000);
};

type Props = {
  period: string;
  data: { summary?: { taxesFormatted?: string } };
};

export const AdminTaxes = ({ period, data }: Props) => {
  const query = useFixedPayments();
  const create = useCreateFixedPayment();
  const update = useUpdateFixedPayment();
  const setPaid = useSetFixedPaymentPaid();
  const remove = useDeleteFixedPayment();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<FixedPayment | null>(null);
  const [form, setForm] = useState({ ...emptyForm });
  const [error, setError] = useState("");

  const payments = query.data ?? [];
  const month = getMonth();
  const saving = create.isPending || update.isPending;

  const openForm = (payment?: FixedPayment) => {
    setEditing(payment ?? null);
    setForm(
      payment
        ? {
            name: payment.name,
            amount: String(payment.amount),
            dueDay: String(payment.dueDay),
            category: payment.category,
          }
        : { ...emptyForm },
    );
    setError("");
    setModalOpen(true);
  };

  const closeForm = () => {
    if (saving) return;
    setModalOpen(false);
    setEditing(null);
    setError("");
  };

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = Number(form.amount.replace(",", "."));
    const dueDay = Number(form.dueDay);

    if (
      !form.name.trim() ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      !Number.isInteger(dueDay) ||
      dueDay < 1 ||
      dueDay > 31
    ) {
      setError("Sprawdź nazwę, kwotę i dzień płatności.");
      return;
    }

    const payload: FixedPaymentInput = {
      name: form.name.trim(),
      amount,
      dueDay,
      category: form.category,
    };

    setError("");

    try {
      if (editing) {
        await update.mutateAsync({ id: editing.id, data: payload });
      } else {
        await create.mutateAsync(payload);
      }

      setModalOpen(false);
      setEditing(null);
      setForm({ ...emptyForm });
    } catch {
      setError("Nie udało się zapisać płatności.");
    }
  };

  const togglePaid = async (payment: FixedPayment) => {
    setError("");

    try {
      await setPaid.mutateAsync({
        id: payment.id,
        month,
        paid: !payment.paidMonths.includes(month),
      });
    } catch {
      setError(`Nie udało się zmienić statusu: ${payment.name}.`);
    }
  };

  const deletePayment = async (payment: FixedPayment) => {
    if (!window.confirm(`Usunąć „${payment.name}”?`)) return;

    try {
      await remove.mutateAsync(payment.id);
      setError("");
    } catch {
      setError(`Nie udało się usunąć: ${payment.name}.`);
    }
  };

  const total = payments.reduce((sum, p) => sum + p.amount, 0);
  const paid = payments
    .filter((p) => p.paidMonths.includes(month))
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-2">
        <AdminCashFlow period={period} />

        <section className="rounded-2xl border border-white/8 bg-[#111820] p-5">
          <h3 className="text-sm font-semibold text-[#E8E9E7]">Podatki</h3>
          <p className="mt-2 text-xs text-[#E8E9E7]/40">
            Kwota z podsumowania finansowego
          </p>
          <p className="mt-2 text-2xl font-semibold text-[#4C9FE5]">
            {data?.summary?.taxesFormatted ?? "0,00 zł"}
          </p>
        </section>
      </div>

      <section className="overflow-hidden rounded-2xl border border-white/8 bg-[#111820]">
        <header className="flex items-center justify-between gap-3 border-b border-white/8 p-5">
          <div>
            <h3 className="text-sm font-semibold text-[#E8E9E7]">
              Stałe płatności
            </h3>
            <p className="mt-1 text-xs text-[#E8E9E7]/40">
              Miesięczne koszty i terminy
            </p>
          </div>

          <button
            type="button"
            onClick={() => openForm()}
            className="rounded-xl bg-[#4C9FE5] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#3B8BD0]"
          >
            + Dodaj
          </button>
        </header>

        <div className="grid grid-cols-3 gap-2 border-b border-white/8 p-4">
          {[
            { label: "Miesięcznie", amount: total, color: "text-[#E8E9E7]" },
            { label: "Opłacono", amount: paid, color: "text-emerald-400" },
            {
              label: "Pozostało",
              amount: total - paid,
              color: "text-amber-300",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[10px] text-[#E8E9E7]/45">{item.label}</p>
              <p className={`mt-2 text-sm font-semibold ${item.color}`}>
                {money(item.amount)}
              </p>
            </div>
          ))}
        </div>

        {error && !modalOpen && (
          <p
            role="alert"
            className="m-4 rounded-xl bg-red-400/10 p-3 text-xs text-red-300"
          >
            {error}
          </p>
        )}

        {query.isPending ? (
          <p className="p-6 text-sm text-[#E8E9E7]/50">Ładowanie...</p>
        ) : query.isError ? (
          <div className="p-6 text-sm text-red-300">
            Błąd pobierania płatności.{" "}
            <button
              type="button"
              onClick={() => void query.refetch()}
              className="underline"
            >
              Spróbuj ponownie
            </button>
          </div>
        ) : payments.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm text-[#E8E9E7]/70">Brak stałych płatności</p>
            <button
              type="button"
              onClick={() => openForm()}
              className="mt-3 text-xs text-[#4C9FE5]"
            >
              Dodaj pierwszą płatność
            </button>
          </div>
        ) : (
          <div className="divide-y divide-white/8">
            {[...payments]
              .sort(
                (a, b) =>
                  Number(a.paidMonths.includes(month)) -
                    Number(b.paidMonths.includes(month)) || a.dueDay - b.dueDay,
              )
              .map((payment) => {
                const isPaid = payment.paidMonths.includes(month);
                const days = getDaysLeft(payment.dueDay);
                const busy =
                  (setPaid.isPending && setPaid.variables?.id === payment.id) ||
                  (remove.isPending && remove.variables === payment.id);

                return (
                  <div
                    key={payment.id}
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#E8E9E7]">
                        {payment.name}
                      </p>
                      <p className="mt-1 text-xs text-[#E8E9E7]/40">
                        {payment.category} · dzień {payment.dueDay}
                      </p>
                      <p
                        className={`mt-1 text-xs ${
                          isPaid
                            ? "text-emerald-400"
                            : days < 0
                              ? "text-red-400"
                              : days <= 3
                                ? "text-amber-300"
                                : "text-[#E8E9E7]/50"
                        }`}
                      >
                        {isPaid
                          ? "Opłacono"
                          : days < 0
                            ? `${Math.abs(days)} dni po terminie`
                            : days === 0
                              ? "Termin dzisiaj"
                              : `Pozostało ${days} dni`}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mr-1 text-sm font-semibold text-[#E8E9E7]">
                        {money(payment.amount)}
                      </span>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void togglePaid(payment)}
                        className={buttonClass}
                      >
                        {isPaid ? "Cofnij" : "Opłacono"}
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => openForm(payment)}
                        className={buttonClass}
                      >
                        Edytuj
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void deletePayment(payment)}
                        className={`${buttonClass} text-red-300`}
                      >
                        Usuń
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !saving) closeForm();
          }}
        >
          <div className="my-auto w-full max-w-lg overflow-hidden rounded-[14px] border border-white/10 bg-[#101214] shadow-2xl">
            <header className="flex items-center justify-between border-b border-white/7 px-5 py-4">
              <div>
                <h3 className="text-[14px] font-medium text-[#E8E9E7]">
                  {editing ? "Edytuj płatność" : "Dodaj stałą płatność"}
                </h3>
                <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
                  Ustaw miesięczną kwotę i termin płatności.
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                disabled={saving}
                aria-label="Zamknij modal"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#E8E9E7]/40 transition hover:text-[#E8E9E7] disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            <form onSubmit={save} className="space-y-5 p-5">
              <label className="block space-y-2">
                <span className="text-[11px] text-[#E8E9E7]/45">
                  Nazwa płatności
                </span>
                <input
                  autoFocus
                  required
                  maxLength={120}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Np. Księgowość"
                  className="h-10 w-full rounded-[9px] border border-white/8 bg-white/[0.025] px-3 text-[12px] text-[#E8E9E7]/80 outline-none placeholder:text-[#E8E9E7]/20 focus:border-[#4C9FE5]/40"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block space-y-2">
                  <span className="text-[11px] text-[#E8E9E7]/45">
                    Kwota miesięczna
                  </span>
                  <div className="relative">
                    <input
                      required
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={form.amount}
                      onChange={(e) =>
                        setForm({ ...form, amount: e.target.value })
                      }
                      placeholder="350,00"
                      className="h-10 w-full rounded-[9px] border border-white/8 bg-white/[0.025] px-3 pr-10 text-[12px] text-[#E8E9E7]/80 outline-none placeholder:text-[#E8E9E7]/20 focus:border-[#4C9FE5]/40"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#E8E9E7]/30">
                      PLN
                    </span>
                  </div>
                </label>

                <label className="block space-y-2">
                  <span className="text-[11px] text-[#E8E9E7]/45">
                    Dzień płatności
                  </span>
                  <input
                    required
                    type="number"
                    min="1"
                    max="31"
                    value={form.dueDay}
                    onChange={(e) =>
                      setForm({ ...form, dueDay: e.target.value })
                    }
                    className="h-10 w-full rounded-[9px] border border-white/8 bg-white/[0.025] px-3 text-[12px] text-[#E8E9E7]/80 outline-none focus:border-[#4C9FE5]/40"
                  />
                </label>
              </div>

              <FormSelect
                label="Kategoria"
                value={form.category}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, category: value }))
                }
                options={categories.map((category) => ({
                  value: category,
                  label: category,
                }))}
              />

              {error && (
                <div className="rounded-[9px] border border-red-400/10 bg-red-400/5 px-3 py-2.5">
                  <p className="text-[10px] text-red-300/90">{error}</p>
                </div>
              )}

              <footer className="flex justify-end gap-2 border-t border-white/7 pt-5">
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="h-10 rounded-[9px] bg-white/5 px-4 text-[10px] text-[#E8E9E7]/50 transition hover:text-[#E8E9E7] disabled:opacity-40"
                >
                  Anuluj
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="h-10 rounded-[9px] bg-[#4C9FE5] px-4 text-[10px] font-medium text-white transition hover:bg-[#3B8BD0] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? "Zapisywanie..."
                    : editing
                      ? "Zapisz zmiany"
                      : "Dodaj płatność"}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
