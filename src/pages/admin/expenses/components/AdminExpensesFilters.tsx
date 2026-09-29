import { useState } from "react";
import { FormSelect } from "../../../../components/form/FormSelect";

const categoryOptions = [
  {
    value: "all",
    label: "Wszystkie kategorie",
  },
  {
    value: "purchase",
    label: "Zakup samochodu",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "service",
    label: "Serwis i części",
  },
  {
    value: "detailing",
    label: "Detailing",
  },
  {
    value: "fuel",
    label: "Paliwo",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "office",
    label: "Firma",
  },
  {
    value: "other",
    label: "Pozostałe",
  },
];

const periodOptions = [
  {
    value: "month",
    label: "Ten miesiąc",
  },
  {
    value: "previous-month",
    label: "Poprzedni miesiąc",
  },
  {
    value: "year",
    label: "Ten rok",
  },
  {
    value: "all",
    label: "Cały okres",
  },
];

const sortOptions = [
  {
    value: "newest",
    label: "Najnowsze",
  },
  {
    value: "oldest",
    label: "Najstarsze",
  },
  {
    value: "highest",
    label: "Najwyższa kwota",
  },
  {
    value: "lowest",
    label: "Najniższa kwota",
  },
];

export const AdminExpensesFilters = () => {
  const [category, setCategory] = useState("all");
  const [period, setPeriod] = useState("month");
  const [sort, setSort] = useState("newest");

  return (
    <section
      className="
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
        p-4
      "
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <FormSelect
          label="Kategoria"
          value={category}
          options={categoryOptions}
          onChange={setCategory}
        />

        <FormSelect
          label="Okres"
          value={period}
          options={periodOptions}
          onChange={setPeriod}
        />

        <FormSelect
          label="Sortowanie"
          value={sort}
          options={sortOptions}
          onChange={setSort}
        />
      </div>
    </section>
  );
};
