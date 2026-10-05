import { useState } from "react";

type BankAccount = {
  id: string;
  name: string;
  bank: string;
  number: string;
  balance: number;
  currency: string;
  primary: boolean;
};

const initialAccounts: BankAccount[] = [
  {
    id: "1",
    name: "Konto główne",
    bank: "Bank firmowy",
    number: "•••• •••• •••• 4821",
    balance: 184250,
    currency: "PLN",
    primary: true,
  },
  {
    id: "2",
    name: "Konto dodatkowe",
    bank: "Bank firmowy",
    number: "•••• •••• •••• 1937",
    balance: 24800,
    currency: "PLN",
    primary: false,
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminCompanyBankAccounts = () => {
  const [accounts] = useState(initialAccounts);

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
      <div className="flex flex-col justify-between gap-3 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-[#E8E9E7]">
            Rachunki bankowe
          </h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Konta wykorzystywane do obsługi finansów firmy
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            h-8
            cursor-pointer
            items-center
            gap-1.5
            rounded-[8px]
            border
            border-white/8
            px-3
            text-[9px]
            text-[#E8E9E7]/40
            transition-all
            duration-300
            hover:border-[#4C9FE5]/25
            hover:text-[#4C9FE5]
          "
        >
          <span className="text-[13px] leading-none">+</span>
          Dodaj rachunek
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 p-5 lg:grid-cols-2">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="
              rounded-[10px]
              border
              border-white/8
              bg-[ext-[#E8E9E7]/[0.015]
              p-4
              transition-colors
              duration-300
              hover:border-white/12
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-[12px] font-medium text-[#E8E9E7]/70">
                    {account.name}
                  </h4>

                  {account.primary && (
                    <span className="rounded-[5px] border border-[#4C9FE5]/20 bg-[#4C9FE5]/2 px-1.5 py-0.5 text-[8px] text-[#4C9FE5]">
                      Główny
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[9px] text-[#E8E9E7]/20">
                  {account.bank}
                </p>
              </div>

              <button
                type="button"
                className="
                  cursor-pointer
                  text-[9px]
                  text-[#E8E9E7]/20
                  transition-colors
                  hover:text-[#E8E9E7]/60
                "
              >
                Edytuj
              </button>
            </div>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] text-[#E8E9E7]/20">Numer rachunku</p>

                <p className="mt-1 text-[10px] tracking-[0.05em] text-[#E8E9E7]/40">
                  {account.number}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[9px] text-[#E8E9E7]/20">Saldo</p>

                <p className="mt-1 text-[14px] font-medium text-[#4C9FE5]">
                  {formatPrice(account.balance)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
