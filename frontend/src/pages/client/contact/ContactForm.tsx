import { useState, type FormEvent } from "react";

import { FormInput } from "../../../components/form/FormInput";
import { FormTextarea } from "../../../components/form/FormTextarea";
import { FormSelect } from "../../../components/form/FormSelect";
import { showToast } from "../../../components/toast/toast";
import { ButtonComponent } from "../../../components/button";

const subjectOptions = [
  {
    value: "car",
    label: "Zapytanie o samochód",
  },
  {
    value: "inspection",
    label: "Umówienie oględzin",
  },
  {
    value: "detailing",
    label: "Detailing",
  },
  {
    value: "wrap",
    label: "Wrap",
  },
  {
    value: "other",
    label: "Inne",
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path
      d="M5 12.5L9.5 17L19 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 800);
    });

    showToast({
      type: "success",
      title: "Wysłano wiadomość",
      description: `Odpowiemy jak najszybciej to tylko możliwe`,
      successIcon: "mail",
    });
    setIsSubmitting(false);
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    setSubject("");
  };

  return (
    <div
      className="
        w-full
        rounded-[10px]
        border
        border-white/10
        bg-[#4C9FE5]/5
        p-5
        sm:p-7
        lg:p-8
        xl:p-9
      "
    >
      {isSent ? (
        <div
          className="
            flex
            min-h-107.5
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* ICON */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#4C9FE5]/30
              bg-[#4C9FE5]/10
              text-[#4C9FE5]
            "
          >
            <CheckIcon />
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-6
              text-[21px]
              font-medium
              tracking-[-0.02em]
              text-[#E8E9E7]
            "
          >
            Wiadomość została wysłana
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-85
              text-[11px]
              leading-[1.8]
              text-[#E8E9E7]/40
            "
          >
            Dziękujemy za kontakt. Otrzymaliśmy Twoje zapytanie i skontaktujemy
            się z Tobą tak szybko, jak to możliwe.
          </p>

          {/* DIVIDER */}
          <div
            className="
              mt-7
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#4C9FE5]/40" />

            <span className="text-[9px] text-[#E8E9E7]/25">
              Grand Motors Select
            </span>

            <span className="h-px w-8 bg-[#4C9FE5]/40" />
          </div>

          {/* SECONDARY INFO */}
          <p
            className="
              mt-7
              max-w-75
              text-[9px]
              leading-[1.7]
              text-[#E8E9E7]/25
            "
          >
            Jeśli sprawa jest pilna, możesz również skontaktować się z nami
            bezpośrednio telefonicznie.
          </p>

          {/* NEW MESSAGE */}
          <button
            type="button"
            onClick={handleReset}
            className="
              mt-6
              cursor-pointer
              text-[10px]
              text-[#4C9FE5]
              transition-colors
              duration-300
              hover:text-[#e0c98b]
            "
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      ) : (
        <>
          {/* =================================================
             HEADER
             ================================================= */}
          <div className="mb-6">
            <h2
              className="
                text-[18px]
                font-medium
                tracking-[-0.01em]
                text-[#E8E9E7]
              "
            >
              Napisz do nas
            </h2>

            <p
              className="
                mt-1.5
                text-[11px]
                leading-[1.7]
                text-[#E8E9E7]/40
              "
            >
              Wypełnij formularz, a skontaktujemy się z Tobą.
            </p>
          </div>

          {/* =================================================
             FORM
             ================================================= */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* NAME */}
            <FormInput
              id="name"
              name="name"
              label="Imię i nazwisko"
              type="text"
              required
              placeholder="Jan Kowalski"
            />

            {/* EMAIL + PHONE */}
            <div
              className="
                grid
                grid-cols-1
                gap-3.5
                sm:grid-cols-2
              "
            >
              <FormInput
                id="email"
                name="email"
                label="E-mail"
                type="email"
                required
                placeholder="jan@email.pl"
              />

              <FormInput
                id="phone"
                name="phone"
                label="Telefon"
                type="tel"
                placeholder="+48 123 456 789"
              />
            </div>

            {/* SUBJECT */}
            <FormSelect
              label="Temat"
              value={subject}
              onChange={setSubject}
              placeholder="Wybierz temat"
              options={subjectOptions}
            />

            {/* MESSAGE */}
            <FormTextarea
              id="message"
              name="message"
              label="Wiadomość"
              required
              rows={5}
              placeholder="Napisz, w czym możemy Ci pomóc..."
            />

            {/* SUBMIT */}
            <div className="pt-1">
              <ButtonComponent
                type="submit"
                variant="main"
                disabled={isSubmitting}
                className="min-w-full"
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
              </ButtonComponent>
            </div>

            {/* PRIVACY */}
            <p
              className="
                pt-0.5
                text-center
                text-[9px]
                leading-[1.6]
                text-[#E8E9E7]/25
              "
            >
              Wysyłając formularz, zgadzasz się na kontakt w sprawie przesłanego
              zapytania.
            </p>
          </form>
        </>
      )}
    </div>
  );
};
