import { useEffect, useRef, useState } from "react";

import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";

import ArrowIcon from "../../assets/icons/strzalka.svg?react";
import RemoveIcon from "../../assets/icons/zamknij.svg?react";
import PhoneIcon from "../../assets/icons/telefon.svg?react";
import CheckIcon from "../../assets/icons/ptaszek-podwojny.svg?react";
import HeartIcon from "../../assets/icons/serce.svg?react";

import { pageHeaderNavigation } from "./navigation";
import { carsList } from "../cars/cars";

import type { CarType } from "../cars/cars";
import { showToast } from "../toast/toast";

type MobileMenuComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
};

type MobileDropdown = "services" | "favorites" | null;

const getFavoriteStorageKey = (car: CarType) => `gms-favorite:${car.id}`;

const FAVORITES_CHANGED_EVENT = "gms-favorites-changed";

export const MobileMenuComponent = ({
  isOpen,
  onClose,
  activeSection,
}: MobileMenuComponentProps) => {
  const [openDropdown, setOpenDropdown] = useState<MobileDropdown>(null);

  const [favoriteCars, setFavoriteCars] = useState<CarType[]>([]);

  const [pendingRemovals, setPendingRemovals] = useState<Set<string>>(
    new Set(),
  );

  const removalTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {},
  );

  const homeNavigation = pageHeaderNavigation.find((item) => item.href === "/");

  const carsNavigation = pageHeaderNavigation.find(
    (item) => item.href === "/cars",
  );

  const contactNavigation = pageHeaderNavigation.find(
    (item) => item.href === "/contact",
  );

  const isContactPage = activeSection === "/contact";

  const loadFavorites = () => {
    const favorites = carsList.filter((car) => {
      return localStorage.getItem(getFavoriteStorageKey(car)) === "true";
    });

    setFavoriteCars(favorites);

    setPendingRemovals((current) => {
      const next = new Set(current);

      current.forEach((carId) => {
        const stillFavorite = favorites.some((car) => car.id === carId);

        if (!stillFavorite) {
          next.delete(carId);
        }
      });

      return next;
    });
  };

  useEffect(() => {
    loadFavorites();

    const handleFavoritesChanged = () => {
      loadFavorites();
    };

    window.addEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChanged);

    return () => {
      window.removeEventListener(
        FAVORITES_CHANGED_EVENT,
        handleFavoritesChanged,
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(removalTimers.current).forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleDropdown = (dropdown: MobileDropdown) => {
    if (dropdown === "favorites") {
      loadFavorites();
    }

    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

  const handleCloseMenu = () => {
    setOpenDropdown(null);
    onClose();
  };

  const removeFavorite = (car: CarType) => {
    const carId = car.id;

    if (pendingRemovals.has(carId)) {
      const timer = removalTimers.current[carId];

      if (timer) {
        clearTimeout(timer);
        delete removalTimers.current[carId];
      }

      localStorage.removeItem(getFavoriteStorageKey(car));

      setPendingRemovals((current) => {
        const next = new Set(current);
        next.delete(carId);
        return next;
      });

      showToast({
        type: "success",
        title: "Usunięto z ulubionych",
        description: `${car.brand} ${car.model}`,
        successIcon: "remove",
      });

      window.dispatchEvent(new Event(FAVORITES_CHANGED_EVENT));

      return;
    }

    setPendingRemovals((current) => {
      const next = new Set(current);
      next.add(carId);
      return next;
    });

    removalTimers.current[carId] = setTimeout(() => {
      setPendingRemovals((current) => {
        const next = new Set(current);
        next.delete(carId);
        return next;
      });

      delete removalTimers.current[carId];
    }, 3000);
  };

  const openCar = (car: CarType) => {
    handleCloseMenu();

    window.location.href = `/cars/${car.slug}`;
  };

  return (
    <div
      className={`
        fixed
        left-0
        top-23
        z-40
        w-full
        border-b
        border-white/10
        bg-black/30
        backdrop-blur-2xl
        transition-all
        duration-500
        lg:hidden
        ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }
      `}
    >
      <nav
        className="
          flex
          min-h-[calc(100vh-92px)]
          flex-col
          overflow-y-auto
          px-[4vw]
          py-7
        "
      >
        {/* ====================================================== */}
        {/* STRONA GŁÓWNA */}
        {/* ====================================================== */}

        {homeNavigation && (
          <div className="flex min-h-12 items-center border-b border-white/5 text-[13px]!">
            <LinkComponent
              href={homeNavigation.href}
              text={homeNavigation.label}
              active={activeSection === homeNavigation.href}
              onClick={handleCloseMenu}
            />
          </div>
        )}

        {/* ====================================================== */}
        {/* SAMOCHODY */}
        {/* ====================================================== */}

        {carsNavigation && (
          <div className="flex min-h-12 items-center border-b border-white/5 text-[13px]!">
            <LinkComponent
              href={carsNavigation.href}
              text={carsNavigation.label}
              active={activeSection === carsNavigation.href}
              onClick={handleCloseMenu}
            />
          </div>
        )}

        {/* ====================================================== */}
        {/* USŁUGI */}
        {/* ====================================================== */}

        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => toggleDropdown("services")}
            aria-expanded={openDropdown === "services"}
            className={`
              group
              flex
              min-h-12
              w-full
              cursor-pointer
              items-center
              justify-between
              border-b
              border-white/5
              text-left
              text-[13px]
              transition-colors
              duration-300
              ${
                openDropdown === "services" ||
                activeSection === "/detailing" ||
                activeSection === "/wrap"
                  ? "text-[#d2b878]"
                  : "text-white"
              }
            `}
          >
            <span>Usługi</span>

            <ArrowIcon
              className={`
                h-4
                w-4
                transition-transform
                duration-300
                ${openDropdown === "services" ? "rotate-90" : "rotate-270"}
              `}
            />
          </button>

          {/* SERVICES */}

          <div
            className={`
              grid
              overflow-hidden
              transition-all
              duration-300
              ${
                openDropdown === "services"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0">
              <div
                className="
                  flex
                  flex-col
                  gap-1
                  border-b
                  border-white/5
                  py-2
                  pl-4
                "
              >
                <LinkComponent
                  href="/detailing"
                  text="Detailing"
                  active={activeSection === "/detailing"}
                  onClick={handleCloseMenu}
                />

                <LinkComponent
                  href="/wrap"
                  text="Wrap"
                  active={activeSection === "/wrap"}
                  onClick={handleCloseMenu}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* ULUBIONE */}
        {/* ====================================================== */}

        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => toggleDropdown("favorites")}
            aria-expanded={openDropdown === "favorites"}
            className={`
              group
              flex
              min-h-12
              w-full
              cursor-pointer
              items-center
              justify-between
              border-b
              border-white/5
              text-left
              text-[13px]
              transition-colors
              duration-300
              ${openDropdown === "favorites" ? "text-[#d2b878]" : "text-white"}
            `}
          >
            <div className="flex items-center gap-3">
              <span>Ulubione</span>

              {favoriteCars.length > 0 && (
                <span
                  className="
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#b99a5c]/15
                    px-1.5
                    text-[9px]
                    text-[#c2ad7a]
                  "
                >
                  {favoriteCars.length}
                </span>
              )}
            </div>

            <ArrowIcon
              className={`
                h-4
                w-4
                transition-transform
                duration-300
                ${openDropdown === "favorites" ? "rotate-90" : "rotate-270"}
              `}
            />
          </button>

          {/* FAVORITES */}

          <div
            className={`
              grid
              overflow-hidden
              transition-all
              duration-300
              ${
                openDropdown === "favorites"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0">
              {favoriteCars.length > 0 ? (
                <div
                  className="
                    max-h-[45vh]
                    overflow-y-auto
                    border-b
                    border-white/5
                  "
                >
                  {favoriteCars.map((car) => {
                    const isPendingRemoval = pendingRemovals.has(car.id);

                    return (
                      <div
                        key={car.id}
                        className="
                          flex
                          items-center
                          gap-3
                          border-b
                          border-white/5
                          py-3
                          last:border-b-0
                        "
                      >
                        {/* IMAGE */}

                        <button
                          type="button"
                          onClick={() => openCar(car)}
                          className="
                            h-16
                            w-22
                            shrink-0
                            cursor-pointer
                            overflow-hidden
                            rounded-[10px]
                            bg-[#111]
                          "
                        >
                          <img
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </button>

                        {/* INFO */}

                        <button
                          type="button"
                          onClick={() => openCar(car)}
                          className="
                            min-w-0
                            flex-1
                            cursor-pointer
                            text-left
                          "
                        >
                          <div
                            className="
                              truncate
                              text-[12px]
                              font-medium
                              text-white
                            "
                          >
                            {car.brand} {car.model}
                          </div>

                          <div
                            className="
                              mt-1.5
                              flex
                              flex-wrap
                              items-center
                              gap-x-2
                              gap-y-1
                              text-[9px]
                              text-white/40
                            "
                          >
                            <span>{car.year}</span>

                            <span className="text-[#b99a5c]/50">·</span>

                            <span>{car.mileage}</span>

                            <span className="text-[#b99a5c]/50">·</span>

                            <span>{car.power}</span>
                          </div>

                          <div
                            className="
                              mt-1.5
                              text-[12px]
                              text-white
                            "
                          >
                            {car.price}
                          </div>
                        </button>

                        {/* REMOVE / CONFIRM */}

                        <button
                          type="button"
                          aria-label={
                            isPendingRemoval
                              ? `Potwierdź usunięcie ${car.brand} ${car.model}`
                              : `Usuń ${car.brand} ${car.model} z ulubionych`
                          }
                          aria-pressed={isPendingRemoval}
                          onClick={() => removeFavorite(car)}
                          className={`
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
                              isPendingRemoval
                                ? "border-[#b99a5c]/40 text-[#c2ad7a] hover:border-[#b99a5c]/60 hover:text-[#d2b878]"
                                : "border-white/10 text-[#777] hover:border-[#b99a5c]/30 hover:text-[#c2ad7a]"
                            }
                          `}
                        >
                          {isPendingRemoval ? (
                            <CheckIcon className="h-4 w-4" />
                          ) : (
                            <RemoveIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  className="
                    flex
                    min-h-32
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-white/5
                    px-6
                    text-center
                  "
                >
                  <HeartIcon className="w-6 h-6 mb-2" />

                  <div
                    className="
                      mt-2
                      text-[11px]
                      text-white/40
                    "
                  >
                    Nie masz jeszcze
                    <br />
                    ulubionych samochodów.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* KONTAKT */}
        {/* ====================================================== */}

        {contactNavigation && (
          <div className="mt-5">
            <ButtonComponent
              href={isContactPage ? "tel:+48514137133" : contactNavigation.href}
              type="secondary"
              className="w-full text-white text-[11px]!"
            >
              {isContactPage ? (
                <span className="flex items-center justify-center gap-1">
                  Zadzwoń
                  <PhoneIcon className="h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1">
                  {contactNavigation.label}
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                </span>
              )}
            </ButtonComponent>
          </div>
        )}
      </nav>
    </div>
  );
};
