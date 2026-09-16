import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../../components/button";
import { useState } from "react";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";
import { ReviewSuccess } from "./reviewSuccess";
import { RatingInput, ReviewInput } from "./reviewInput";

type ReviewFormData = {
  name: string;
  car: string;
  text: string;
  consent: boolean;
};

type ReviewFormProps = {
  onClose: () => void;
};

export const ReviewForm = ({ onClose }: ReviewFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      car: "",
      text: "",
      consent: false,
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    const newReview = {
      ...data,
      rating,
    };

    console.log("Nowa opinia:", newReview);

    setSubmitted(true);

    reset();
    setRating(0);
  };

  if (submitted) {
    return <ReviewSuccess onClose={onClose} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        mx-auto
        max-w-190
      "
    >
      {/* HEADER */}
      <div className="mb-8">
        <SubHeadingComponent>
          TWOJE <span className="text-[#d2b878]">DOŚWIADCZENIE</span>
        </SubHeadingComponent>

        <MainHeadingComponent>DODAJ SWOJĄ OPINIĘ</MainHeadingComponent>
      </div>

      {/* NAME + CAR */}
      <div className="grid gap-5 sm:grid-cols-2">
        <ReviewInput
          label="IMIĘ"
          id="review-name"
          placeholder="Twoje imię"
          type="text"
          {...register("name", {
            required: "Podaj swoje imię.",
            minLength: {
              value: 2,
              message: "Imię musi mieć minimum 2 znaki.",
            },
          })}
          error={errors.name?.message}
        />

        <ReviewInput
          label="SAMOCHÓD"
          id="review-car"
          placeholder="np. BMW M550i xDrive"
          type="text"
          {...register("car", {
            required: "Podaj model samochodu.",
            minLength: {
              value: 2,
              message: "Podaj poprawny model samochodu.",
            },
          })}
          error={errors.car?.message}
        />
      </div>

      {/* RATING */}
      <RatingInput
        value={rating}
        onChange={setRating}
        error={rating === 0 ? "Wybierz ocenę przed wysłaniem." : undefined}
      />

      {/* TEXT */}
      <div className="mt-7">
        <label
          htmlFor="review-text"
          className="
            mb-2
            block
            text-[8px]
            tracking-[0.18em]
            text-[#777]
          "
        >
          TREŚĆ OPINII
        </label>

        <textarea
          id="review-text"
          rows={6}
          maxLength={1000}
          placeholder="Napisz kilka słów o swoim doświadczeniu..."
          className="
            w-full
            resize-none
            border
            border-white/10
            bg-black/30
            px-4
            py-4
            text-[10px]
            leading-[1.8]
            tracking-[0.04em]
            text-white
            outline-none
            transition-colors
            placeholder:text-[#444]
            focus:border-[#b99a5c]/60
          "
          {...register("text", {
            required: "Napisz kilka słów o swoim doświadczeniu.",
            minLength: {
              value: 10,
              message: "Opinia musi mieć minimum 10 znaków.",
            },
            maxLength: {
              value: 1000,
              message: "Opinia może mieć maksymalnie 1000 znaków.",
            },
          })}
        />

        <div className="mt-2 flex justify-between">
          {errors.text ? (
            <span className="text-[8px] tracking-wider text-[#9c7a3c]">
              {errors.text.message}
            </span>
          ) : (
            <span />
          )}

          <span className="text-[7px] tracking-widest text-[#444]">
            Maks. 1000 znaków
          </span>
        </div>
      </div>

      {/* CONSENT */}
      <label
        htmlFor="review-consent"
        className="
          mt-6
          flex
          cursor-pointer
          items-start
          gap-3
        "
      >
        <input
          id="review-consent"
          type="checkbox"
          className="mt-0.5 accent-[#b99a5c]"
          {...register("consent", {
            required: "Wymagana jest zgoda na publikację opinii.",
          })}
        />

        <span
          className="
            text-[8px]
            leading-[1.7]
            tracking-[0.03em]
            text-[#666]
          "
        >
          Wyrażam zgodę na publikację mojej opinii na stronie GRAND MOTORS
          SELECT.
        </span>
      </label>

      {errors.consent && (
        <p className="mt-2 text-[8px] tracking-wider text-[#9c7a3c]">
          {errors.consent.message}
        </p>
      )}

      {/* ACTIONS */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <ButtonComponent type="main" size="big" className="cursor-pointer">
          WYŚLIJ OPINIĘ →
        </ButtonComponent>

        <ButtonComponent
          type="secondary"
          size="big"
          onClick={onClose}
          className="cursor-pointer"
        >
          ZAMKNIJ FORMULARZ
        </ButtonComponent>
      </div>
    </form>
  );
};
