import { useEffect, useState } from "react";

import HeartIcon from "../assets/icons/serce.svg?react";

import type { CarType } from "./cars/cars";

import { showToast } from "./toast/toast";

type CarFavoriteProps = {
  car: CarType;
};

const getStorageKey = (carId: string) => `gms-favorite:${carId}`;

const FAVORITES_CHANGED_EVENT = "gms-favorites-changed";

export const CarFavorite = ({ car }: CarFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadFavorite = () => {
      setIsFavorite(localStorage.getItem(getStorageKey(car.id)) === "true");
    };

    loadFavorite();

    window.addEventListener(FAVORITES_CHANGED_EVENT, loadFavorite);

    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, loadFavorite);
    };
  }, [car.id]);

  const handleToggleFavorite = () => {
    const nextValue = !isFavorite;

    localStorage.setItem(getStorageKey(car.id), String(nextValue));

    setIsFavorite(nextValue);

    window.dispatchEvent(new Event(FAVORITES_CHANGED_EVENT));

    showToast({
      type: "success",
      title: nextValue ? "Dodano do ulubionych" : "Usunięto z ulubionych",
      description: `${car.brand} ${car.model}`,
      successIcon: nextValue ? "heart" : "remove",
    });
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
        group/favorite
        relative
        z-20
        flex
        h-9
        w-9
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-[10px]
        border
        transition-all
        duration-300
        ${
          isFavorite
            ? "border-[#b99a5c]/40 bg-[#d2b878]/10 text-[#d2b878]"
            : "border-white/10 text-[#777] hover:border-white/20 hover:text-[#aaa]"
        }
      `}
    >
      <span className="transition-transform duration-300">
        <HeartIcon className="h-4 w-4" />
      </span>
    </button>
  );
};
