import { useState } from "react";
import { FormSelect } from "../../../../components/form/FormSelect";

const typeOptions = [
  {
    value: "all",
    label: "Wszyscy klienci",
  },
  {
    value: "individual",
    label: "Osoby prywatne",
  },
  {
    value: "company",
    label: "Firmy",
  },
];

const activityOptions = [
  {
    value: "all",
    label: "Każda aktywność",
  },
  {
    value: "recent",
    label: "Ostatnia sprzedaż",
  },
  {
    value: "returning",
    label: "Powracający",
  },
  {
    value: "inactive",
    label: "Nieaktywni",
  },
];

const sortOptions = [
  {
    value: "newest",
    label: "Najnowsi",
  },
  {
    value: "oldest",
    label: "Najstarsi",
  },
  {
    value: "highest",
    label: "Najwyższa wartość zakupów",
  },
  {
    value: "name",
    label: "Nazwa A–Z",
  },
];

export const AdminCustomersFilters = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [activity, setActivity] = useState("all");
  const [sort, setSort] = useState("newest");

  return (
    <section
      className="
        rounded-[10px]
        border
        border-white/8
        bg-[#4C9FE5]/5
        p-4
      "
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="w-full">
          <label
            htmlFor="customer-search"
            className="mb-1.5 block text-[10px] text-[#E8E9E7]/45"
          >
            Wyszukaj klienta
          </label>

          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                h-3.5
                w-3.5
                -translate-y-1/2
                text-[#E8E9E7]/20
              "
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <input
              id="customer-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Imię, nazwisko, telefon, e-mail..."
              className="
                h-11
                w-full
                rounded-[8px]
                border
                border-white/10
                bg-[ext-[#E8E9E7]/[0.025]
                pl-10
                pr-4
                text-[12px]
                text-[#E8E9E7]
                outline-none
                placeholder:text-[#E8E9E7]/20
                transition-all
                duration-300
                focus:border-[#4C9FE5]/50
                focus:bg-[ext-[#E8E9E7]/[0.035]
              "
            />
          </div>
        </div>

        <FormSelect
          label="Typ klienta"
          value={type}
          options={typeOptions}
          onChange={setType}
        />

        <FormSelect
          label="Aktywność"
          value={activity}
          options={activityOptions}
          onChange={setActivity}
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
