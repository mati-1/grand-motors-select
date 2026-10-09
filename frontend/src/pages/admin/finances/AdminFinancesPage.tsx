import { useState } from "react";

import { AdminFinancesHeader } from "./components/AdminFinancesHeader";
import { AdminFinanceStats } from "./components/AdminFinanceStats";
import { AdminFinanceTransactions } from "./components/AdminFinanceTransactions";
import { AdminFinanceCars } from "./components/AdminFinanceCars";
import { AdminFinancePeriodSelect } from "./components/AdminFinancePeriodSelect";

import { useFinance } from "../../../hooks/finance/useFinance";
import { AdminTaxes } from "./components/AdminTaxes";

export const AdminFinancesPage = () => {
  const [period, setPeriod] = useState("lifetime");

  const [activeTab, setActiveTab] = useState<"overview" | "cars">("overview");

  const { data } = useFinance(period);

  const periodOptions = data?.periods ?? [
    {
      value: "lifetime",
      label: "Cała historia",
      type: "lifetime" as const,
      year: null,
      month: null,
    },
  ];

  return (
    <div className="space-y-8">
      <AdminFinancesHeader />

      <div className="flex flex-col justify-between gap-4 border-b border-white/7 pb-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`
                cursor-pointer
                rounded-[10px]
                px-3
                py-2
                text-[11px]
                transition
                ${
                  activeTab === "overview"
                    ? "bg-[#4C9FE5]/10 text-[#4C9FE5]"
                    : "text-[#E8E9E7]/25 hover:text-[#E8E9E7]/50"
                }
              `}
            >
              Finanse
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("cars")}
              className={`
                cursor-pointer
                rounded-[10px]
                px-3
                py-2
                text-[11px]
                transition
                ${
                  activeTab === "cars"
                    ? "bg-[#4C9FE5]/10 text-[#4C9FE5]"
                    : "text-[#E8E9E7]/25 hover:text-[#E8E9E7]/50"
                }
              `}
            >
              Samochody
            </button>
          </div>
        </div>

        <AdminFinancePeriodSelect
          value={period}
          options={periodOptions}
          onChange={setPeriod}
        />
      </div>

      {activeTab === "overview" ? (
        <>
          <AdminFinanceStats period={period} />

          <AdminTaxes period={period} data={data ?? ([] as any)} />

          <AdminFinanceTransactions period={period} />
        </>
      ) : (
        <AdminFinanceCars period={period} />
      )}
    </div>
  );
};
