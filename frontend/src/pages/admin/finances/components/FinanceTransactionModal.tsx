import { type FormEvent, useEffect, useState } from "react";

import { FormSelect } from "../../../../components/form/FormSelect";
import { useAdminCars } from "../../../../hooks/cars/useCars";
import {
  useCreateFinanceTransaction,
  useUpdateFinanceTransaction,
  type CreateFinanceTransactionInput,
  type FinanceTransaction,
  type FinanceTransactionCategory,
  type FinanceTransactionType,
} from "../../../../hooks/finance/useFinance";
import { ButtonComponent } from "../../../../components/button";

type Props = {
  open: boolean;
  onClose: () => void;
  transaction?: FinanceTransaction | null;
};

const typeOptions: {
  value: FinanceTransactionType;
  label: string;
}[] = [
  { value: "income", label: "Przychód" },
  { value: "expense", label: "Wydatek" },
  { value: "capital_in", label: "Wpłata kapitału" },
  { value: "capital_out", label: "Wypłata kapitału" },
];

const categoryOptions: {
  value: FinanceTransactionCategory;
  label: string;
}[] = [
  { value: "car_sale", label: "Sprzedaż samochodu" },
  { value: "car_purchase", label: "Zakup samochodu" },
  { value: "car_service", label: "Serwis" },
  { value: "car_parts", label: "Części" },
  { value: "detailing", label: "Detailing i przygotowanie" },
  { value: "transport", label: "Transport" },
  { value: "marketing", label: "Marketing" },
  { value: "insurance", label: "Ubezpieczenie" },
  { value: "tax", label: "Podatki" },
  { value: "company", label: "Koszty firmy" },
  { value: "other", label: "Pozostałe" },
];

const getDefaultCategory = (
  type: FinanceTransactionType,
): FinanceTransactionCategory => {
  if (type === "income") return "car_sale";
  if (type === "capital_in" || type === "capital_out") return "other";
  return "car_purchase";
};

const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const toDateInput = (date: string) => {
  const value = new Date(date);
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const FinanceTransactionModal = ({
  open,
  onClose,
  transaction = null,
}: Props) => {
  const createMutation = useCreateFinanceTransaction();
  const updateMutation = useUpdateFinanceTransaction();
  const cars = useAdminCars();

  const isEditing = Boolean(transaction);
  const isPending = createMutation.isPending || updateMutation.isPending;

  const [type, setType] = useState<FinanceTransactionType>("expense");
  const [category, setCategory] =
    useState<FinanceTransactionCategory>("car_purchase");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(getToday());
  const [carId, setCarId] = useState("");
  const [affectsProfit, setAffectsProfit] = useState(true);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!open) return;

    setType(transaction?.type ?? "expense");
    setCategory(transaction?.category ?? getDefaultCategory("expense"));
    setTitle(transaction?.title ?? "");
    setDescription(transaction?.description ?? "");
    setAmount(transaction ? String(transaction.amount) : "");
    setDate(transaction ? toDateInput(transaction.date) : getToday());
    setCarId(transaction?.carId ?? "");
    setAffectsProfit(transaction?.affectsProfit ?? true);
    setFormError("");
  }, [open, transaction]);

  const carOptions = [
    { value: "", label: "Brak przypisanego samochodu" },
    ...(cars.data?.cars ?? []).map((car) => ({
      value: car.id,
      label: `${car.brand} ${car.model} — ${car.year}`,
    })),
  ];

  const handleTypeChange = (value: string) => {
    const newType = value as FinanceTransactionType;

    setType(newType);
    setCategory(getDefaultCategory(newType));
    setAffectsProfit(
      newType === "capital_in" || newType === "capital_out" ? false : true,
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const parsedAmount = Number(amount.replace(",", "."));

    if (!title.trim()) {
      setFormError("Tytuł jest wymagany.");
      return;
    }

    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setFormError("Kwota musi być większa od zera.");
      return;
    }

    if (!date) {
      setFormError("Wybierz datę operacji.");
      return;
    }

    const effectiveAffectsProfit =
      type === "capital_in" || type === "capital_out" ? false : affectsProfit;

    const dateIso = new Date(`${date}T12:00:00`).toISOString();

    try {
      if (transaction) {
        await updateMutation.mutateAsync({
          transactionId: transaction.id,
          data: {
            type,
            category,
            title: title.trim(),
            description: description.trim() || null,
            amount: parsedAmount,
            date: dateIso,
            carId: carId || null,
            affectsProfit: effectiveAffectsProfit,
          },
        });
      } else {
        const payload: CreateFinanceTransactionInput = {
          type,
          category,
          title: title.trim(),
          description: description.trim() || undefined,
          amount: parsedAmount,
          date: dateIso,
          carId: carId || undefined,
          affectsProfit: effectiveAffectsProfit,
        };

        await createMutation.mutateAsync(payload);
      }

      onClose();
    } catch {
      setFormError(
        isEditing
          ? "Nie udało się zaktualizować operacji."
          : "Nie udało się dodać operacji.",
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isPending) {
          onClose();
        }
      }}
    >
      <div className="my-auto w-full max-w-lg overflow-hidden rounded-[14px] border border-white/10 bg-[#101214] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/7 px-5 py-4">
          <div>
            <h3 className="text-[14px] font-medium text-[#E8E9E7]">
              {isEditing ? "Edytuj operację" : "Dodaj operację"}
            </h3>

            <p className="mt-1 text-[10px] text-[#E8E9E7]/25">
              {isEditing
                ? "Zaktualizuj dane operacji finansowej."
                : "Dodaj przychód, wydatek lub operację kapitałową."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            aria-label="Zamknij modal"
            className="flex h-9 bg-white/5 w-9 cursor-pointer items-center justify-center rounded-full text-[#E8E9E7]/30 transition hover:bg-white/5 hover:text-[#E8E9E7]/70 disabled:cursor-not-allowed disabled:opacity-40"
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
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <div className="grid grid-cols-2 gap-3">
            <FormSelect
              label="Typ operacji"
              options={typeOptions}
              value={type}
              onChange={handleTypeChange}
            />

            <FormSelect
              label="Kategoria"
              options={categoryOptions}
              value={category}
              onChange={(value) =>
                setCategory(value as FinanceTransactionCategory)
              }
            />
          </div>

          <label className="block space-y-2">
            <span className="block text-[11px] text-[#E8E9E7]/45">Tytuł</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              maxLength={200}
              placeholder="np. Zakup BMW G30 530i"
              className="h-10 w-full rounded-[9px] border border-white/8 bg-white/2.5 px-3 text-[12px] text-[#E8E9E7]/70 outline-none placeholder:text-[#E8E9E7]/15 focus:border-[#4C9FE5]/30"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-2">
              <span className="block text-[11px] text-[#E8E9E7]/45">Kwota</span>
              <div className="relative">
                <input
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  required
                  inputMode="decimal"
                  placeholder="72 000"
                  className="h-10 w-full rounded-[9px] border border-white/8 bg-white/2.5 px-3 pr-10 text-[12px] text-[#E8E9E7]/70 outline-none placeholder:text-[#E8E9E7]/15 focus:border-[#4C9FE5]/30"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#E8E9E7]/20">
                  PLN
                </span>
              </div>
            </label>

            <label className="space-y-2">
              <span className="block text-[11px] text-[#E8E9E7]/35">Data</span>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                className="h-10 w-full rounded-[9px] border border-white/8 bg-white/2.5 px-3 text-[12px] text-[#E8E9E7]/70 outline-none focus:border-[#4C9FE5]/30"
              />
            </label>
          </div>

          <FormSelect
            label="Samochód"
            options={carOptions}
            value={carId}
            onChange={setCarId}
          />

          <label className="block space-y-2">
            <span className="block text-[11px] text-[#E8E9E7]/35">Opis</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              maxLength={1000}
              placeholder="Opcjonalny opis operacji..."
              className="w-full resize-none rounded-[9px] border border-white/8 bg-white/2.5 px-3 py-3 text-[12px] text-[#E8E9E7]/70 outline-none placeholder:text-[#E8E9E7]/15 focus:border-[#4C9FE5]/30"
            />
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={affectsProfit}
              onChange={(event) => setAffectsProfit(event.target.checked)}
              disabled={type === "capital_in" || type === "capital_out"}
              className="h-3.5 w-3.5 accent-[#4C9FE5]"
            />
            <span className="text-[11px] text-[#E8E9E7]/40">
              Operacja wpływa na zysk
            </span>
          </label>

          {formError && (
            <div className="rounded-[9px] border border-red-400/10 bg-red-400/5 px-3 py-2.5">
              <p className="text-[10px] text-red-300/80">{formError}</p>
            </div>
          )}

          <div className="flex justify-end gap-2 border-t border-white/7 pt-5">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="h-10 cursor-pointer rounded-[9px] bg-white/5 px-4 text-[10px] text-[#E8E9E7]/30 transition hover:text-[#E8E9E7]/60 disabled:opacity-40"
            >
              Anuluj
            </button>

            <ButtonComponent
              variant="secondary"
              size="small"
              disabled={isPending}
            >
              {" "}
              {isPending
                ? "Zapisywanie..."
                : isEditing
                  ? "Zapisz zmiany"
                  : "Dodaj operację"}
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};
