type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

const users: AdminUser[] = [
  {
    id: "1",
    name: "Administrator",
    email: "admin@grandmotorsselect.pl",
    role: "Administrator",
    status: "active",
  },
];

export const AdminUsersSettings = () => {
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
            Użytkownicy i uprawnienia
          </h3>

          <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
            Konta mające dostęp do panelu administracyjnego
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
          Dodaj użytkownika
        </button>
      </div>

      <div className="divide-y divide-white/5">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              flex
              flex-col
              gap-4
              px-5
              py-4
              sm:flex-row
              sm:items-center
            "
          >
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
                border-[#4C9FE5]/20
                bg-[#4C9FE5]/2
                text-[10px]
                text-[#4C9FE5]
              "
            >
              A
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-[#E8E9E7]/60">{user.name}</p>

              <p className="mt-1 text-[9px] text-[#E8E9E7]/20">{user.email}</p>
            </div>

            <span className="w-fit rounded-[5px] border border-[#4C9FE5]/15 bg-[#4C9FE5]/2 px-2 py-1 text-[8px] text-[#4C9FE5]">
              {user.role}
            </span>

            <span className="flex items-center gap-2 text-[9px] text-[#E8E9E7]/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4C9FE5]" />
              Aktywny
            </span>

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
                text-[#E8E9E7]/30
                transition-all
                duration-300
                hover:border-white/15
                hover:text-[#E8E9E7]
              "
            >
              Zarządzaj
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
