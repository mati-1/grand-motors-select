import { useState, useRef } from "react";

import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";

import { ButtonComponent } from "../../../components/button";
import { ReviewForm } from "./reviewForm";

type Review = {
  id: number;
  name: string;
  car: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Michał K.",
    car: "BMW M550i xDrive",
    rating: 5,
    text: "Bardzo profesjonalne podejście. Samochód zgodny z opisem, cała dokumentacja przygotowana, a cały proces zakupu przebiegł bez żadnych problemów.",
    date: "Wrzesień 2026",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Kamil W.",
    car: "Mercedes-Benz C63 AMG",
    rating: 4,
    text: "Duży plus za możliwość niezależnego sprawdzenia samochodu. Zero nacisku na szybką decyzję. Auto dokładnie takie, jakiego szukałem.",
    date: "Sierpień 2026",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Paweł S.",
    car: "BMW 530i",
    rating: 4,
    text: "Świetny kontakt i bardzo dobre przygotowanie auta. Widać, że ktoś przykłada uwagę do szczegółów. Na pewno wrócę przy kolejnym zakupie.",
    date: "Sierpień 2026",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Tomasz R.",
    car: "Audi S6 Avant",
    rating: 4,
    text: "Bardzo sprawny i transparentny zakup. Wszystko zostało dokładnie wyjaśnione przed podpisaniem umowy.",
    date: "Lipiec 2026",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 5,
    name: "Daniel M.",
    car: "BMW 540i",
    rating: 5,
    text: "Profesjonalne podejście od pierwszego kontaktu aż do odbioru samochodu. Szczególnie doceniam przygotowaną dokumentację.",
    date: "Lipiec 2026",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 6,
    name: "Łukasz P.",
    car: "Mercedes-Benz E53 AMG",
    rating: 4,
    text: "Samochód dokładnie sprawdzony przed zakupem, bardzo dobry kontakt i konkretne podejście. Wszystko przebiegło tak, jak powinno.",
    date: "Czerwiec 2026",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
];

type ReviewCardProps = {
  review: Review;
  expanded: boolean;
  onToggle: () => void;
};

const ReviewCard = ({ review, expanded, onToggle }: ReviewCardProps) => {
  return (
    <div
      className={`
        relative
        flex
        h-82.5
        shrink-0
        flex-col
        gap-2
        border
        border-white/5
        p-6
        transition-all
        duration-300
        hover:bg-white/2.5
        ${expanded ? "w-80 bg-white/[0.035]" : "w-70"}
      `}
    >
      {/* AUTHOR */}
      <div className="flex flex-row-reverse items-center justify-end gap-3">
        <h3 className="line-clamp-4 text-[15px] leading-[1.8] text-[#888]">
          {review.name}
        </h3>

        <img
          src={review.avatar}
          alt={review.name}
          className="
            h-14
            w-14
            shrink-0
            rounded-full
            border
            border-[#9c7a3c]/30
            object-cover
          "
        />
      </div>

      {/* RATING */}
      <RatingDisplay rating={review.rating} />

      {/* TEXT */}
      <div>
        <p
          className={
            expanded
              ? "text-[13px] leading-[1.8] text-[#888]"
              : "line-clamp-3 text-[13px] leading-[1.8] text-[#888]"
          }
        >
          {review.text}
        </p>

        {review.text.length > 120 && (
          <button
            type="button"
            onClick={onToggle}
            className="
              mt-1
              cursor-pointer
              text-[13px]
              font-semibold
              text-[#9c7a3c]
              underline
            "
          >
            {expanded ? "Pokaż mniej" : "Pokaż więcej"}
          </button>
        )}
      </div>

      {/* META */}
      <div className="absolute bottom-5 left-5">
        <span className="block text-[10px] tracking-[0.12em] text-[#555]">
          {review.car}
        </span>

        <span className="mt-1 block text-[10px] tracking-[0.12em] text-[#444]">
          {review.date}
        </span>
      </div>
    </div>
  );
};

const RatingDisplay = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 text-[#b8944a]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export const ReviewsComponent = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const openReviewForm = () => {
    setIsFormOpen(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const closeReviewForm = () => {
    setIsFormOpen(false);

    setTimeout(() => {
      reviewsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <section
      id="reviews"
      ref={reviewsRef}
      className="
        scroll-mt-21
        border-[#b99a5c]/20
        bg-[#b99a5c]/20
        bg-linear-to-r
        from-black/90
        via-black/80
        to-black/90
        px-[5vw]
        py-10
        sm:py-25
      "
    >
      <div className="flex flex-col gap-8 md:gap-11">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <SubHeadingComponent>
              OPINIE NASZYCH <span className="text-[#d2b878]">KLIENTÓW</span>
            </SubHeadingComponent>

            <MainHeadingComponent>OPINIE</MainHeadingComponent>
          </div>

          {!isFormOpen && (
            <ButtonComponent
              size="big"
              onClick={openReviewForm}
              className="cursor-pointer"
            >
              WYSTAW OPINIĘ →
            </ButtonComponent>
          )}
        </div>

        {/* REVIEWS */}
        <div
          className="
            flex
            flex-row
            justify-between
            gap-6
            overflow-x-auto
            pb-7
            scrollbar-hide
          "
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              expanded={expanded === review.id}
              onToggle={() =>
                setExpanded(expanded === review.id ? null : review.id)
              }
            />
          ))}
        </div>

        {/* FORM */}
        <div
          ref={formRef}
          className={`
            grid
            scroll-mt-23
            overflow-hidden
            transition-all
            duration-500
            ${
              isFormOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div
              className="
                border-y
                border-[#b99a5c]/20
                bg-black/30
                px-5
                py-8
                sm:px-8
                sm:py-10
                lg:px-12
                lg:py-12
              "
            >
              <ReviewForm onClose={closeReviewForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
