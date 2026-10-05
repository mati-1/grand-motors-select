import { ContactForm } from "./ContactForm";

export const ContactHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050505]
        pt-32
        pb-16
        sm:pt-36
        sm:pb-20
        lg:pt-40
        lg:pb-24
      "
    >
      {/* ================================================= */}
      {/* SUBTLE BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-100
          w-100
          rounded-full
          bg-[#4C9FE5]/2
          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          px-[4vw]
          min-[1200px]:px-[13vw]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-20
            xl:gap-28
          "
        >
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div className="max-w-130">
            <h1
              className="
                text-[clamp(42px,6vw,60px)]
                font-medium
                leading-[0.98]
                tracking-[-0.03em]
                text-[#E8E9E7]
              "
            >
              W czym możemy pomóc?
            </h1>

            <p
              className="
                mt-7
                max-w-110
                text-[12px]
                leading-[1.9]
                text-[#999]
                sm:text-[13px]
                lg:text-[14px]
              "
            >
              Masz pytanie dotyczące konkretnego samochodu, chcesz umówić
              oględziny lub porozmawiać o przygotowaniu auta? Napisz do nas —
              odpowiemy możliwie szybko.
            </p>

            {/* ================================================= */}
            {/* CONTACT DETAILS */}
            {/* ================================================= */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
              "
            >
              <a
                href="tel:+48123456789"
                className="
                  group
                  border-l
                  border-white/10
                  pl-4
                  transition-colors
                  duration-300
                  hover:border-[#4C9FE5]
                "
              >
                <span
                  className="
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.08em]
                    text-[#E8E9E7]/35
                  "
                >
                  Telefon
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[12px]
                    text-[#E8E9E7]
                    transition-colors
                    duration-300
                    group-hover:text-[#4C9FE5]
                  "
                >
                  +48 514 137 133 (Mateusz)
                </span>
              </a>

              <a
                href="mailto:biuro@grandmotorsselect.pl"
                className="
                  group
                  border-l
                  border-white/10
                  pl-4
                  transition-colors
                  duration-300
                  hover:border-[#4C9FE5]
                "
              >
                <span
                  className="
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.08em]
                    text-[#E8E9E7]/35
                  "
                >
                  E-mail
                </span>

                <span
                  className="
                    mt-1
                    block
                    truncate
                    text-[12px]
                    text-[#E8E9E7]
                    transition-colors
                    duration-300
                    group-hover:text-[#4C9FE5]
                  "
                >
                  biuro@grandmotorsselect.pl
                </span>
              </a>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT — FORM */}
          {/* ================================================= */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
