import { useState } from "react";
import { useForm } from "react-hook-form";

import { ButtonComponent } from "../../components/button";
import { DetailingSectionLabel } from "../../components/detailing/detailingSectionLabel";
import { MainHeadingComponent } from "../../components/headings";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

type ContactInputProps = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ContactInput = ({
  label,
  id,
  placeholder,
  error,
  ...props
}: ContactInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-[10px]
          tracking-[0.18em]
          text-[#777]
        "
      >
        {label}
      </label>

      <input
        id={id}
        placeholder={placeholder}
        {...props}
        className="
          h-12
          w-full
          border
          border-white/10
          bg-black/30
          px-4
          text-[12px]
          tracking-wider
          text-white
          outline-none
          transition-colors
          placeholder:text-[#444]
          focus:border-[#b99a5c]/60
        "
      />

      {error && (
        <p className="mt-2 text-[8px] tracking-wider text-[#9c7a3c]">{error}</p>
      )}
    </div>
  );
};

const ContactSuccess = () => {
  return (
    <div className="mx-auto max-w-180 py-10 text-center">
      <span className="text-[9px] tracking-[0.25em] text-[#b99a5c]">
        DZIĘKUJEMY
      </span>

      <h3 className="mt-4 text-2xl tracking-[-0.02em] text-[#ddd]">
        WIADOMOŚĆ ZOSTAŁA PRZESŁANA.
      </h3>

      <p
        className="
          mx-auto
          mt-4
          max-w-130
          text-[10px]
          leading-[1.8]
          tracking-[0.04em]
          text-[#777]
        "
      >
        Dziękujemy za kontakt z GRAND MOTORS SELECT. Odpowiemy najszybciej, jak
        to możliwe.
      </p>
    </div>
  );
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Nowa wiadomość:", data);

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <section
        id="contact-form"
        className="
          scroll-mt-23
          border-b
          border-white/5
          px-[5vw]
        py-16
        sm:py-24
        "
      >
        <ContactSuccess />
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="
        scroll-mt-23
        border-b
        border-white/5
        px-[5vw]
        py-20
        sm:py-27
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-14
          lg:grid-cols-[0.75fr_1.25fr]
          lg:gap-24
        "
      >
        {/* LEFT */}

        <div>
          <DetailingSectionLabel number="02">WIADOMOŚĆ</DetailingSectionLabel>

          <MainHeadingComponent className="mt-6 text-[clamp(42px,5vw,60px)]!">
            NAPISZ
            <br />
            <span className="text-[#d2b878]">DO NAS.</span>
          </MainHeadingComponent>

          <p className="mt-7 max-w-100 text-[14px] leading-[1.9] text-[#666]">
            Masz pytanie dotyczące samochodu, chcesz umówić oględziny albo
            interesuje Cię detailing lub wrap? Zostaw wiadomość — skontaktujemy
            się z Tobą.
          </p>

          <div
            className="
              mt-10
              border-t
              border-white/10
              pt-5
            "
          >
            <span className="text-[8px] tracking-[0.25em] text-[#444]">
              ODPOWIEMY
            </span>

            <p className="mt-2 text-[10px] tracking-wider text-[#777]">
              NAJSZYBCIEJ, JAK TO MOŻLIWE.
            </p>
          </div>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="max-w-190"
        >
          {/* NAME + PHONE */}

          <div className="grid gap-5 sm:grid-cols-2">
            <ContactInput
              label="IMIĘ"
              id="contact-name"
              placeholder="Twoje imię"
              type="text"
              autoComplete="name"
              {...register("name", {
                required: "Podaj swoje imię.",
                minLength: {
                  value: 2,
                  message: "Imię musi mieć minimum 2 znaki.",
                },
              })}
              error={errors.name?.message}
            />

            <ContactInput
              label="TELEFON"
              id="contact-phone"
              placeholder="+48 ..."
              type="tel"
              autoComplete="tel"
              {...register("phone", {
                required: "Podaj numer telefonu.",
                minLength: {
                  value: 7,
                  message: "Podaj poprawny numer telefonu.",
                },
              })}
              error={errors.phone?.message}
            />
          </div>

          {/* EMAIL */}

          <div className="mt-5">
            <ContactInput
              label="E-MAIL"
              id="contact-email"
              placeholder="adres@email.pl"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Podaj adres e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Podaj poprawny adres e-mail.",
                },
              })}
              error={errors.email?.message}
            />
          </div>

          {/* SUBJECT */}

          <div className="mt-5">
            <label
              htmlFor="contact-subject"
              className="
                mb-2
                block
                text-[10px]
                tracking-[0.18em]
                text-[#777]
              "
            >
              TEMAT
            </label>

            <select
              id="contact-subject"
              {...register("subject", {
                required: "Wybierz temat wiadomości.",
              })}
              className="
                h-12
                w-full
                cursor-pointer
                appearance-none
                border
                border-white/10
                bg-[#080808]
                px-4
                text-[10px]
                tracking-wider
                text-[#ccc]
                outline-none
                transition-colors
                focus:border-[#b99a5c]/60
              "
            >
              <option value="" disabled className="bg-[#080808] text-[#444]">
                Wybierz temat
              </option>

              <option value="samochod" className="bg-[#080808]">
                SAMOCHÓD
              </option>

              <option value="ogledziny" className="bg-[#080808]">
                OGLĘDZINY
              </option>

              <option value="detailing" className="bg-[#080808]">
                DETAILING
              </option>

              <option value="wrap" className="bg-[#080808]">
                WRAP
              </option>

              <option value="inne" className="bg-[#080808]">
                INNE
              </option>
            </select>

            {errors.subject && (
              <p className="mt-2 text-[10px] tracking-wider text-[#9c7a3c]">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* MESSAGE */}

          <div className="mt-5">
            <label
              htmlFor="contact-message"
              className="
                mb-2
                block
                text-[10px]
                tracking-[0.18em]
                text-[#777]
              "
            >
              WIADOMOŚĆ
            </label>

            <textarea
              id="contact-message"
              rows={6}
              maxLength={1000}
              placeholder="Napisz, w czym możemy pomóc..."
              className="
                w-full
                resize-none
                border
                border-white/10
                bg-black/30
                px-4
                py-4
                text-[12px]
                leading-[1.8]
                tracking-[0.04em]
                text-white
                outline-none
                transition-colors
                placeholder:text-[#444]
                focus:border-[#b99a5c]/60
              "
              {...register("message", {
                required: "Napisz treść wiadomości.",
                minLength: {
                  value: 10,
                  message: "Wiadomość musi mieć minimum 10 znaków.",
                },
                maxLength: {
                  value: 1000,
                  message: "Wiadomość może mieć maksymalnie 1000 znaków.",
                },
              })}
            />

            <div className="mt-2 flex justify-between">
              {errors.message ? (
                <span className="text-[10px] tracking-wider text-[#9c7a3c]">
                  {errors.message.message}
                </span>
              ) : (
                <span />
              )}

              <span className="text-[9px] tracking-widest text-[#444]">
                MAKS. 1000 ZNAKÓW
              </span>
            </div>
          </div>

          {/* CONSENT */}

          <label
            htmlFor="contact-consent"
            className="
              mt-6
              flex
              cursor-pointer
              items-start
              gap-3
            "
          >
            <input
              id="contact-consent"
              type="checkbox"
              className="
                mt-0.5
                h-3
                w-3
                shrink-0
                cursor-pointer
                accent-[#b99a5c]
              "
              {...register("consent", {
                required: "Wymagana jest zgoda na przetwarzanie danych.",
              })}
            />

            <span
              className="
                text-[10px]
                leading-[1.7]
                tracking-[0.03em]
                text-[#666]
              "
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              obsługi zapytania kontaktowego.
            </span>
          </label>

          {errors.consent && (
            <p className="mt-2 text-[10px] tracking-wider text-[#9c7a3c]">
              {errors.consent.message}
            </p>
          )}

          {/* ACTION */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span
              className="
                text-[10px]
                leading-[1.6]
                tracking-[0.08em]
                text-[#444]
                sm:max-w-65
              "
            >
              Odpowiemy na podany adres e-mail lub numer telefonu.
            </span>

            <ButtonComponent type="main" size="big" className="cursor-pointer">
              WYŚLIJ WIADOMOŚĆ →
            </ButtonComponent>
          </div>
        </form>
      </div>
    </section>
  );
};
