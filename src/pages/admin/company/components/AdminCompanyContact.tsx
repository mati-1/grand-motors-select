import { FormInput } from "../../../../components/form/FormInput";

export const AdminCompanyContact = () => {
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
        <h3 className="text-[14px] font-medium text-white">
          Kontakt i obecność online
        </h3>

        <p className="mt-1 text-[11px] text-white/25">
          Dane kontaktowe wykorzystywane na stronie firmy
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            id="company-phone"
            label="Telefon"
            type="tel"
            placeholder="+48 000 000 000"
          />

          <FormInput
            id="company-email"
            label="E-mail"
            type="email"
            placeholder="kontakt@grandmotorsselect.pl"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            id="company-sales-email"
            label="E-mail sprzedażowy"
            type="email"
            placeholder="sprzedaz@grandmotorsselect.pl"
          />

          <FormInput
            id="company-accounting-email"
            label="E-mail księgowy"
            type="email"
            placeholder="ksiegowosc@grandmotorsselect.pl"
          />
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="mb-3 text-[10px] text-white/30">Obecność online</p>

          <div className="space-y-4">
            <FormInput
              id="company-website"
              label="Strona internetowa"
              placeholder="grandmotorsselect.pl"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInput
                id="company-instagram"
                label="Instagram"
                placeholder="@grand_motors_select"
              />

              <FormInput
                id="company-facebook"
                label="Facebook"
                placeholder="grandmotorsselect"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="mb-3 text-[10px] text-white/30">Godziny pracy</p>

          <div className="space-y-2">
            {[
              "Poniedziałek",
              "Wtorek",
              "Środa",
              "Czwartek",
              "Piątek",
              "Sobota",
            ].map((day) => (
              <div
                key={day}
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
                  py-2.5
                "
              >
                <span className="text-[10px] text-white/40">{day}</span>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="
                      h-7
                      rounded-[6px]
                      border
                      border-white/8
                      bg-[#090909]
                      px-2
                      text-[9px]
                      text-white/50
                      outline-none
                    "
                  />

                  <span className="text-[9px] text-white/15">—</span>

                  <input
                    type="time"
                    defaultValue="18:00"
                    className="
                      h-7
                      rounded-[6px]
                      border
                      border-white/8
                      bg-[#090909]
                      px-2
                      text-[9px]
                      text-white/50
                      outline-none
                    "
                  />
                </div>
              </div>
            ))}

            <div
              className="
                flex
                items-center
                justify-between
                rounded-[8px]
                border
                border-white/5
                bg-white/[0.015]
                px-3
                py-2.5
              "
            >
              <span className="text-[10px] text-white/40">Niedziela</span>

              <span className="text-[9px] text-white/20">Zamknięte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
