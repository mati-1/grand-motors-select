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
        bg-[#090909]
      "
    >
      <div className="flex flex-col justify-between gap-3 border-b border-white/7 px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[14px] font-medium text-white">
            Użytkownicy i uprawnienia
          </h3>

          <p className="mt-1 text-[11px] text-white/25">
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
            text-white/40
            transition-all
            duration-300
            hover:border-[#b99a5c]/25
            hover:text-[#d2b878]
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
                border-[#b99a5c]/20
                bg-[#b99a5c]/5
                text-[10px]
                text-[#d2b878]
              "
            >
              A
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-white/60">{user.name}</p>

              <p className="mt-1 text-[9px] text-white/20">{user.email}</p>
            </div>

            <span className="w-fit rounded-[5px] border border-[#b99a5c]/15 bg-[#b99a5c]/5 px-2 py-1 text-[8px] text-[#b99a5c]">
              {user.role}
            </span>

            <span className="flex items-center gap-2 text-[9px] text-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b99a5c]" />
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
                text-white/30
                transition-all
                duration-300
                hover:border-white/15
                hover:text-white
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
