import { FormInput } from "../../../../components/form/FormInput";
import { FormSelect } from "../../../../components/form/FormSelect";

const frequencyOptions = [
  {
    value: "monthly",
    label: "Miesięcznie",
  },
  {
    value: "yearly",
    label: "Rocznie",
  },
  {
    value: "one-time",
    label: "Jednorazowo",
  },
];

const fixedCosts = [
  {
    name: "Księgowość",
    category: "Księgowość",
    amount: "500 zł",
  },
  {
    name: "Telefon",
    category: "Telekomunikacja",
    amount: "100 zł",
  },
  {
    name: "Hosting i domena",
    category: "Oprogramowanie",
    amount: "50 zł",
  },
  {
    name: "Marketing",
    category: "Marketing",
    amount: "1 000 zł",
  },
];

export const AdminCompanyFixedCosts = () => {
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
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Koszty stałe</h3>

        <p className="mt-1 text-[11px] text-white/25">
          Regularne koszty niezwiązane z konkretnym samochodem
        </p>
      </div>

      <div className="p-5">
        <div className="mb-5 rounded-[9px] border border-[#b99a5c]/15 bg-[#b99a5c]/[0.035] p-4">
          <p className="text-[9px] text-white/25">
            Szacunkowy miesięczny koszt stały
          </p>

          <p className="mt-1 text-[20px] font-medium text-[#d2b878]">
            1 650 zł
          </p>
        </div>

        <div className="space-y-2">
          {fixedCosts.map((cost) => (
            <div
              key={cost.name}
              className="
                flex
                items-center
                justify-between
                gap-4
                rounded-[8px]
                border
                border-white/5
                bg-white/[0.015]
                px-3
                py-3
              "
            >
              <div className="min-w-0">
                <p className="truncate text-[10px] text-white/55">
                  {cost.name}
                </p>

                <p className="mt-1 text-[8px] text-white/20">{cost.category}</p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="text-[10px] text-white/45">{cost.amount}</span>

                <button
                  type="button"
                  className="cursor-pointer text-[9px] text-white/20 hover:text-white/60"
                >
                  Edytuj
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-white/5 pt-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormInput
              id="new-cost-name"
              label="Nazwa kosztu"
              placeholder="np. Ubezpieczenie"
            />

            <FormInput
              id="new-cost-amount"
              label="Kwota"
              type="number"
              placeholder="0"
            />

            <FormSelect
              label="Częstotliwość"
              value="monthly"
              options={frequencyOptions}
              onChange={() => {}}
            />

            <button
              type="button"
              className="
                mt-auto
                h-11
                cursor-pointer
                rounded-[8px]
                border
                border-white/8
                text-[10px]
                text-white/40
                transition-all
                duration-300
                hover:border-[#b99a5c]/25
                hover:text-[#d2b878]
              "
            >
              Dodaj koszt stały
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
