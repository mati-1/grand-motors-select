const integrations = [
  {
    name: "Google Maps",
    description: "Mapa lokalizacji firmy i samochodów.",
    status: "Skonfigurowano",
    connected: true,
  },
  {
    name: "Google Analytics",
    description: "Statystyki ruchu na stronie Grand Motors Select.",
    status: "Nie skonfigurowano",
    connected: false,
  },
  {
    name: "Poczta e-mail",
    description: "Wysyłka wiadomości z formularza kontaktowego.",
    status: "Nie skonfigurowano",
    connected: false,
  },
];

export const AdminIntegrationsSettings = () => {
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
        <h3 className="text-[14px] font-medium text-white">Integracje</h3>

        <p className="mt-1 text-[11px] text-white/25">
          Zewnętrzne usługi połączone z panelem
        </p>
      </div>

      <div className="divide-y divide-white/5">
        {integrations.map((integration) => (
          <div
            key={integration.name}
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
                rounded-[8px]
                border
                border-white/8
                bg-white/[0.02]
                text-[10px]
                text-white/40
              "
            >
              {integration.name.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-white/60">{integration.name}</p>

              <p className="mt-1 text-[9px] text-white/20">
                {integration.description}
              </p>
            </div>

            <span
              className={`
                w-fit
                rounded-[5px]
                border
                px-2
                py-1
                text-[8px]
                ${
                  integration.connected
                    ? "border-[#b99a5c]/15 bg-[#b99a5c]/5 text-[#b99a5c]"
                    : "border-white/8 bg-white/[0.02] text-white/25"
                }
              `}
            >
              {integration.status}
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
                hover:border-[#b99a5c]/25
                hover:text-[#d2b878]
              "
            >
              {integration.connected ? "Konfiguruj" : "Połącz"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
