import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";
import { LogoComponent } from "../logo";
import { MobileMenuComponent } from "./mobile-menu";

import HeartIcon from "../../assets/icons/serce.svg?react";
import ArrowIcon from "../../assets/icons/strzalka.svg?react";
import RemoveIcon from "../../assets/icons/zamknij.svg?react";
import PhoneIcon from "../../assets/icons/telefon.svg?react";
import CheckIcon from "../../assets/icons/ptaszek-podwojny.svg?react";

import { pageHeaderNavigation } from "./navigation";
import type { CarType } from "../../components/cars/cars";
import { showToast } from "../toast/toast";

type DropdownType = "services" | "favorites" | null;

const FAVORITES_CHANGED_EVENT = "gms-favorites-changed";

const getFavoriteStorageKey = (carId: string) => `gms-favorite:${carId}`;

const getFavoriteIds = () => {
  const favoriteIds: string[] = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);

    if (!key?.startsWith("gms-favorite:")) continue;

    if (localStorage.getItem(key) !== "true") continue;

    favoriteIds.push(key.replace("gms-favorite:", ""));
  }

  return favoriteIds;
};

export const HeaderComponent = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  const [favoriteCars, setFavoriteCars] = useState<CarType[]>([]);

  const [pendingRemovals, setPendingRemovals] = useState<Set<string>>(
    new Set(),
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const removalTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {},
  );

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 600);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      Object.values(removalTimers.current).forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  const loadFavorites = async () => {
    const favoriteIds = getFavoriteIds();

    if (favoriteIds.length === 0) {
      setFavoriteCars([]);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/api/cars`, {
        credentials: "include",
      });

      if (!response.ok) {
        setFavoriteCars([]);
        return;
      }

      const data: { cars: any[] } = await response.json();

      const availableCars = data.cars;

      const availableCarIds = new Set(availableCars.map((car) => car.id));

      const validFavoriteIds = favoriteIds.filter((id) =>
        availableCarIds.has(id),
      );

      const invalidFavoriteIds = favoriteIds.filter(
        (id) => !availableCarIds.has(id),
      );

      invalidFavoriteIds.forEach((id) => {
        localStorage.removeItem(getFavoriteStorageKey(id));
      });

      const favorites = availableCars.filter((car) =>
        validFavoriteIds.includes(car.id),
      );

      const mappedFavorites: CarType[] = favorites.map((car) => {
        const sortedImages = [...car.images].sort(
          (a: any, b: any) => a.position - b.position,
        );

        const imageUrls = sortedImages.map((image: any) => image.url);

        return {
          id: car.id,
          slug: car.slug,
          brand: car.brand,
          model: car.model,
          condition: car.condition,
          vin: car.vin,
          year: car.year,
          mileage: car.mileage,
          engine: car.engine,
          power: car.power,
          transmission: car.transmission,
          drive: car.drive,
          fuel: car.fuel,
          carvertical: car.carvertical,
          price: car.price,
          image: imageUrls[0] ?? "/logohd emblem.png",
          images: imageUrls,
          location: car.location,
          voivodeship: car.voivodeship,
          negotiation: car.negotiation,
          accidentFree: car.accidentFree,
          description: car.description,
          status: car.status,
          invoice: car.invoice,
          equipment: car.equipment,
          details: {
            body: car.body,
            color: car.color,
            interior: car.interior,
            seats: car.seats,
            doors: car.doors,
            country: car.country,
          },
          history: [],
          featured: car.featured,
        };
      });

      setFavoriteCars(mappedFavorites);

      setPendingRemovals((current) => {
        const next = new Set(current);

        current.forEach((carId) => {
          if (!validFavoriteIds.includes(carId)) {
            next.delete(carId);
          }
        });

        return next;
      });
    } catch {
      setFavoriteCars([]);
    }
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
    if (!openDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  const toggleDropdown = (dropdown: DropdownType) => {
    if (dropdown === "favorites") {
      loadFavorites();
    }

    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

  const removeFavorite = (car: CarType) => {
    const carId = car.id;

    if (pendingRemovals.has(carId)) {
      const timer = removalTimers.current[carId];

      if (timer) {
        clearTimeout(timer);
        delete removalTimers.current[carId];
      }

      localStorage.removeItem(getFavoriteStorageKey(carId));

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

  const isContactPage = location.pathname === "/contact";

  const homeNavigation = pageHeaderNavigation.find((item) => item.href === "/");

  const carsNavigation = pageHeaderNavigation.find(
    (item) => item.href === "/cars",
  );

  const contactNavigation = pageHeaderNavigation.find(
    (item) => item.href === "/contact",
  );

  return (
    <>
      <header
        className="
          fixed
          left-0
          top-0
          z-10000
          w-full
          border-b
          border-white/10
          bg-[#b99a5c]/10
          bg-linear-to-r
          from-black
          via-black/55
          to-black/55
          backdrop-blur-md
        "
      >
        <div
          className={`
            mx-auto
            flex
            items-center
            justify-between
            px-[4vw]
            min-[1200px]:px-[13vw]
            transition-all
            duration-500
            ${!scrolled || menuOpen ? "h-25" : "h-21"}
          `}
        >
          <LogoComponent onClick={closeMenu} resize={scrolled} />

          <div
            ref={dropdownRef}
            className="
              hidden
              items-center
              lg:flex
            "
          >
            <nav
              className="
                flex
                items-center
                gap-10
              "
            >
              {homeNavigation && (
                <LinkComponent
                  href={homeNavigation.href}
                  text={homeNavigation.label}
                  active={location.pathname === homeNavigation.href}
                />
              )}

              {carsNavigation && (
                <LinkComponent
                  href={carsNavigation.href}
                  text={carsNavigation.label}
                  active={location.pathname === carsNavigation.href}
                />
              )}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  aria-expanded={openDropdown === "services"}
                  className={`
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    text-[12px]
                    transition-colors
                    duration-300
                    ${
                      openDropdown === "services" ||
                      location.pathname === "/detailing" ||
                      location.pathname === "/wrap"
                        ? "text-[#d2b878]"
                        : "text-white hover:text-[#d2b878]"
                    }
                  `}
                >
                  <span>Usługi</span>

                  <ArrowIcon
                    className={`
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      ${
                        openDropdown === "services" ? "rotate-90" : "rotate-270"
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    absolute
                    right-0
                    top-[calc(100%+18px)]
                    flex
                    w-52
                    origin-top-right
                    flex-col
                    gap-2
                    rounded-[10px]
                    border
                    border-white/10
                    bg-[#080808]/95
                    p-4
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ${
                      openDropdown === "services"
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <LinkComponent
                    href="/detailing"
                    text="Detailing"
                    active={location.pathname === "/detailing"}
                  />

                  <LinkComponent
                    href="/wrap"
                    text="Wrap"
                    active={location.pathname === "/wrap"}
                  />
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("favorites")}
                  aria-expanded={openDropdown === "favorites"}
                  className={`
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    text-[12px]
                    transition-colors
                    duration-300
                    ${
                      openDropdown === "favorites"
                        ? "text-[#d2b878]"
                        : "text-white hover:text-[#d2b878]"
                    }
                  `}
                >
                  <span>Ulubione</span>

                  {favoriteCars.length > 0 && (
                    <span
                      className="
                        flex
                        h-4
                        min-w-4
                        items-center
                        justify-center
                        rounded-full
                        bg-[#b99a5c]/15
                        px-1
                        text-[8px]
                        text-[#c2ad7a]
                      "
                    >
                      {favoriteCars.length}
                    </span>
                  )}

                  <ArrowIcon
                    className={`
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      ${
                        openDropdown === "favorites"
                          ? "rotate-90"
                          : "rotate-270"
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    absolute
                    right-0
                    top-[calc(100%+18px)]
                    w-97.5
                    origin-top-right
                    rounded-[10px]
                    border
                    border-white/10
                    bg-[#080808]/97
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ${
                      openDropdown === "favorites"
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      px-5
                      py-4
                    "
                  >
                    <div className="mt-1 text-[14px] font-normal text-white">
                      Polubione samochody
                    </div>
                  </div>

                  {favoriteCars.length > 0 ? (
                    <div className="max-h-90 overflow-y-auto">
                      {favoriteCars.map((car) => {
                        const isPendingRemoval = pendingRemovals.has(car.id);

                        return (
                          <div
                            key={car.id}
                            className="
                              group/favorite-car
                              flex
                              items-center
                              gap-3
                              border-b
                              border-white/5
                              px-4
                              py-3
                              transition-colors
                              duration-300
                              last:border-b-0
                              hover:bg-white/2.5
                            "
                          >
                            <button
                              type="button"
                              onClick={() => {
                                window.location.href = `/cars/${car.id}`;
                              }}
                              className="
                                h-14
                                w-20
                                shrink-0
                                cursor-pointer
                                overflow-hidden
                                rounded-[5px]
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
                                  transition-transform
                                  duration-500
                                "
                              />
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                window.location.href = `/cars/${car.id}`;
                              }}
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
                                  items-center
                                  gap-2
                                  text-[9px]
                                  text-white/40
                                "
                              >
                                <span>{car.year}</span>·
                                <span>{car.mileage}</span>·
                                <span>{car.power}</span>
                              </div>

                              <div className="mt-1.5 text-[12px] text-white">
                                {car.price}
                              </div>
                            </button>

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
                                group/remove
                                flex
                                h-8
                                w-8
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
                        min-h-36
                        flex-col
                        items-center
                        justify-center
                        px-6
                        text-center
                      "
                    >
                      <HeartIcon className="mb-2 h-6 w-6" />

                      <div className="text-[11px] text-white/50">
                        Nie masz jeszcze
                        <br />
                        ulubionych samochodów.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {contactNavigation && (
                <ButtonComponent
                  href={
                    isContactPage ? "tel:+48514137133" : contactNavigation.href
                  }
                  type="secondary"
                  className="text-[11px]! text-white"
                >
                  {isContactPage ? (
                    <span className="flex items-center gap-1">
                      Zadzwoń
                      <PhoneIcon className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      {contactNavigation.label}
                      <ArrowIcon className="h-4 w-4 rotate-180" />
                    </span>
                  )}
                </ButtonComponent>
              )}
            </nav>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            className="
              group
              relative
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              lg:hidden
            "
          >
            <span
              className={`
                absolute
                h-px
                w-6
                bg-[#c2ad7a]
                transition-all
                duration-300
                ease-[cubic-bezier(0.76,0,0.24,1)]
                ${menuOpen ? "rotate-45" : "-translate-y-1.25"}
              `}
            />

            <span
              className={`
                absolute
                h-px
                w-4
                bg-[#c2ad7a]
                transition-all
                duration-200
                ease-out
                ${
                  menuOpen ? "scale-x-0 opacity-0" : "translate-x-1 opacity-100"
                }
              `}
            />

            <span
              className={`
                absolute
                h-px
                w-6
                bg-[#c2ad7a]
                transition-all
                duration-300
                ease-[cubic-bezier(0.76,0,0.24,1)]
                ${menuOpen ? "-rotate-45" : "translate-y-1.25"}
              `}
            />
          </button>
        </div>
      </header>

      <MobileMenuComponent
        isOpen={menuOpen}
        onClose={closeMenu}
        activeSection={location.pathname}
      />
    </>
  );
};

export default HeaderComponent;
