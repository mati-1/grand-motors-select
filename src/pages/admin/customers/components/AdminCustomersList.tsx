type Customer = {
  id: string;
  name: string;
  type: "Osoba prywatna" | "Firma";
  phone: string;
  email: string;
  purchases: number;
  totalValue: number;
  lastPurchase: string;
};

const customers: Customer[] = [
  {
    id: "1",
    name: "Michał Kowalski",
    type: "Osoba prywatna",
    phone: "+48 600 123 456",
    email: "michal.kowalski@gmail.com",
    purchases: 2,
    totalValue: 184000,
    lastPurchase: "29 września 2026",
  },
  {
    id: "2",
    name: "Tomasz Nowak",
    type: "Osoba prywatna",
    phone: "+48 601 234 567",
    email: "tomasz.nowak@gmail.com",
    purchases: 1,
    totalValue: 105000,
    lastPurchase: "22 września 2026",
  },
  {
    id: "3",
    name: "Premium Cars Sp. z o.o.",
    type: "Firma",
    phone: "+48 602 345 678",
    email: "biuro@premiumcars.pl",
    purchases: 3,
    totalValue: 428000,
    lastPurchase: "18 września 2026",
  },
  {
    id: "4",
    name: "Kamil Wójcik",
    type: "Osoba prywatna",
    phone: "+48 603 456 789",
    email: "kamil.wojcik@gmail.com",
    purchases: 1,
    totalValue: 79000,
    lastPurchase: "12 września 2026",
  },
  {
    id: "5",
    name: "Auto Group Kraków",
    type: "Firma",
    phone: "+48 604 567 890",
    email: "kontakt@autogroup.pl",
    purchases: 2,
    totalValue: 312000,
    lastPurchase: "5 września 2026",
  },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
};

export const AdminCustomersList = () => {
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
      <div className="flex flex-col justify-between gap-3 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-white">Baza klientów</h3>

          <p className="mt-1 text-[11px] text-white/25">
            Klienci i historia ich transakcji
          </p>
        </div>

        <span className="text-[10px] text-white/20">
          {customers.length} klientów
        </span>
      </div>

      {/* DESKTOP */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-5 py-3 text-left text-[9px] font-normal text-white/20">
                Klient
              </th>

              <th className="px-4 py-3 text-left text-[9px] font-normal text-white/20">
                Kontakt
              </th>

              <th className="px-4 py-3 text-center text-[9px] font-normal text-white/20">
                Zakupy
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-white/20">
                Wartość zakupów
              </th>

              <th className="px-4 py-3 text-right text-[9px] font-normal text-white/20">
                Ostatni zakup
              </th>

              <th className="px-5 py-3 text-right text-[9px] font-normal text-white/20">
                Akcja
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="
                  border-b
                  border-white/5
                  last:border-b-0
                  transition-colors
                  duration-300
                  hover:bg-white/[0.015]
                "
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/8
                        bg-white/[0.025]
                        text-[10px]
                        text-[#b99a5c]
                      "
                    >
                      {customer.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[11px] text-white/70">
                        {customer.name}
                      </p>

                      <p className="mt-1 text-[9px] text-white/20">
                        {customer.type}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <p className="text-[10px] text-white/45">{customer.phone}</p>

                  <p className="mt-1 text-[9px] text-white/20">
                    {customer.email}
                  </p>
                </td>

                <td className="px-4 py-4 text-center">
                  <span className="text-[11px] text-white/50">
                    {customer.purchases}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <span className="text-[11px] text-[#d2b878]">
                    {formatPrice(customer.totalValue)}
                  </span>
                </td>

                <td className="px-4 py-4 text-right text-[9px] text-white/20">
                  {customer.lastPurchase}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    className="
                      h-8
                      cursor-pointer
                      rounded-[8px]
                      border
                      border-white/8
                      px-3
                      text-[9px]
                      text-white/35
                      transition-all
                      duration-300
                      hover:border-[#b99a5c]/25
                      hover:text-[#d2b878]
                    "
                  >
                    Szczegóły
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE */}
      <div className="divide-y divide-white/5 lg:hidden">
        {customers.map((customer) => (
          <div key={customer.id} className="p-5">
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/8
                  bg-white/[0.025]
                  text-[10px]
                  text-[#b99a5c]
                "
              >
                {customer.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] text-white/70">
                  {customer.name}
                </p>

                <p className="mt-1 text-[9px] text-white/20">{customer.type}</p>
              </div>

              <button
                type="button"
                className="
                  h-8
                  shrink-0
                  cursor-pointer
                  rounded-[8px]
                  border
                  border-white/8
                  px-3
                  text-[9px]
                  text-white/35
                "
              >
                Szczegóły
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div>
                <p className="text-[8px] text-white/20">Telefon</p>

                <p className="mt-1 text-[10px] text-white/45">
                  {customer.phone}
                </p>
              </div>

              <div>
                <p className="text-[8px] text-white/20">E-mail</p>

                <p className="mt-1 truncate text-[10px] text-white/45">
                  {customer.email}
                </p>
              </div>

              <div>
                <p className="text-[8px] text-white/20">Liczba zakupów</p>

                <p className="mt-1 text-[10px] text-white/45">
                  {customer.purchases}
                </p>
              </div>

              <div>
                <p className="text-[8px] text-white/20">Wartość zakupów</p>

                <p className="mt-1 text-[10px] text-[#d2b878]">
                  {formatPrice(customer.totalValue)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
