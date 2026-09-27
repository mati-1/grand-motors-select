import { useEffect, useState } from "react";

import type { CarType } from "../cars";

type CarFavoriteProps = {
  car: CarType;
};

const getStorageKey = (car: CarType) => `gms-favorite:${car.id}`;

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path
      d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8C3.2 5.9 5.2 4 7.8 4c1.5 0 2.9.8 4.2 2.1C13.3 4.8 14.7 4 16.2 4c2.6 0 4.6 1.9 4.6 4.8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CarFavorite = ({ car }: CarFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storageKey = getStorageKey(car);

    const savedFavorite = localStorage.getItem(storageKey) === "true";

    setIsFavorite(savedFavorite);
  }, [car]);

  const handleToggleFavorite = () => {
    const nextValue = !isFavorite;

    setIsFavorite(nextValue);

    localStorage.setItem(getStorageKey(car), String(nextValue));
  };

  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      aria-label={
        isFavorite
          ? "Usuń samochód z ulubionych"
          : "Dodaj samochód do ulubionych"
      }
      aria-pressed={isFavorite}
      className={`
        group
        flex
        h-9
        w-9
        cursor-pointer
        items-center
        justify-center
        border
        transition-all
        duration-300

        ${
          isFavorite
            ? "border-[#b99a5c]/40 text-[#d2b878]"
            : "border-white/10 text-[#777]"
        }
      `}
    >
      <span
        className="
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <HeartIcon filled={isFavorite} />
      </span>
    </button>
  );
};
