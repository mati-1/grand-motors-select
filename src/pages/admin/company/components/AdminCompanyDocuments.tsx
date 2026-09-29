const documents = [
  {
    id: "1",
    name: "Dokument rejestracyjny firmy",
    type: "Dokument firmowy",
    date: "12 września 2026",
  },
  {
    id: "2",
    name: "Polisa OC działalności",
    type: "Ubezpieczenie",
    date: "1 września 2026",
  },
  {
    id: "3",
    name: "Umowa księgowa",
    type: "Księgowość",
    date: "28 sierpnia 2026",
  },
];

export const AdminCompanyDocuments = () => {
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
            Dokumenty firmy
          </h3>

          <p className="mt-1 text-[11px] text-white/25">
            Dokumenty związane z działalnością firmy
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
          Dodaj dokument
        </button>
      </div>

      <div className="divide-y divide-white/5">
        {documents.map((document) => (
          <div
            key={document.id}
            className="
              flex
              items-center
              gap-4
              px-5
              py-4
              transition-colors
              duration-300
              hover:bg-white/[0.015]
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
                rounded-[8px]
                border
                border-white/8
                bg-white/[0.02]
                text-white/30
              "
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M6 3H14L18 7V21H6V3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M14 3V7H18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] text-white/60">
                {document.name}
              </p>

              <p className="mt-1 text-[9px] text-white/20">
                {document.type} · {document.date}
              </p>
            </div>

            <button
              type="button"
              className="
                hidden
                h-8
                cursor-pointer
                items-center
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
                sm:flex
              "
            >
              Otwórz
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
