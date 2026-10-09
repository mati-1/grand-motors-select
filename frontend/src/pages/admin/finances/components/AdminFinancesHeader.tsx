import { useState } from "react";

import { FinanceTransactionModal } from "./FinanceTransactionModal";

export const AdminFinancesHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="text-[11px] text-[#4C9FE5]">Finanse firmy</span>

          <h2 className="mt-1 text-[24px] font-medium tracking-tight text-[#E8E9E7] sm:text-[28px]">
            Finanse
          </h2>

          <p className="mt-2 max-w-150 text-[10px] leading-[1.7] text-[#E8E9E7]/30">
            Kontroluj przepływy pieniężne, kapitał zainwestowany w samochody,
            przychody, koszty i wynik firmy.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-[#4C9FE5]/20 bg-[#4C9FE5]/5 px-4 text-[10px] text-[#4C9FE5] transition-all duration-300 hover:border-[#4C9FE5]/40 hover:bg-[#4C9FE5]/10"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M12 5V19M5 12H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Dodaj operację
        </button>
      </section>

      <FinanceTransactionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
