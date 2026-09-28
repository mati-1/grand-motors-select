import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";
import { LogoComponent } from "../logo";
import { MobileMenuComponent } from "../../sections/mobile-menu";

import ArrowIcon from "../../assets/icons/strzalka.svg?react";
import RemoveIcon from "../../assets/icons/zamknij.svg?react";
import PhoneIcon from "../../assets/icons/telefon.svg?react";
import CheckIcon from "../../assets/icons/ptaszek-podwojny.svg?react";

import { pageHeaderNavigation } from "./navigation";
import { carsList } from "../../components/cars/cars";

import type { CarType } from "../../components/cars/cars";

type DropdownType = "services" | "favorites" | null;

const getFavoriteStorageKey = (car: CarType) => `gms-favorite:${car.id}`;

const FAVORITES_CHANGED_EVENT = "gms-favorites-changed";

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

  /*
   * ============================================================
   * SCROLL
   * ============================================================
   */

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

  /*
   * ============================================================
   * MOBILE MENU SCROLL LOCK
   * ============================================================
   */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * ============================================================
   * CLEANUP TIMERS
   * ============================================================
   */

  useEffect(() => {
    return () => {
      Object.values(removalTimers.current).forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  /*
   * ============================================================
   * LOAD FAVORITES
   * ============================================================
   */

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

  /*
   * ============================================================
   * OUTSIDE CLICK + ESC
   * ============================================================
   */

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

  /*
   * ============================================================
   * DROPDOWN
   * ============================================================
   */

  const toggleDropdown = (dropdown: DropdownType) => {
    if (dropdown === "favorites") {
      loadFavorites();
    }

    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

  /*
   * ============================================================
   * FAVORITE REMOVE CONFIRMATION
   * ============================================================
   */

  const removeFavorite = (car: CarType) => {
    const carId = car.id;

    // Jeśli już czekamy na potwierdzenie — usuń samochód.
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

  /*
   * ============================================================
   * NAVIGATION
   * ============================================================
   */

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
          z-50
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

          {/* ================================================== */}
          {/* DESKTOP NAV */}
          {/* ================================================== */}

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

              {/* ================================================== */}
              {/* USŁUGI */}
              {/* ================================================== */}

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
                      ${openDropdown === "services" ? "rotate-90" : "rotate-275"}
                    `}
                  />
                </button>

                {/* SERVICES DROPDOWN */}

                <div
                  className={`
                    absolute
                    right-0
                    top-[calc(100%+18px)]
                    w-52
                    origin-top-right
                    border
                    border-white/10
                    bg-[#080808]/95
                    p-4
                    flex flex-col gap-2
                    rounded-[10px]
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

              {/* ================================================== */}
              {/* ULUBIONE */}
              {/* ================================================== */}

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
                          : "rotate-275"
                      }
                    `}
                  />
                </button>

                {/* FAVORITES DROPDOWN */}

                <div
                  className={`
                    absolute
                    right-0
                    top-[calc(100%+18px)]
                    w-97.5
                    origin-top-right
                    border
                    border-white/10
                    bg-[#080808]/97
                    shadow-2xl
                    rounded-[10px]
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
                  {/* HEADER */}

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
                    <div
                      className="
                        mt-1
                        text-[14px]
                        font-normal
                        text-white
                      "
                    >
                      Polubione samochody
                    </div>
                  </div>

                  {/* FAVORITES LIST */}

                  {favoriteCars.length > 0 ? (
                    <div
                      className="
                        max-h-90
                        overflow-y-auto
                      "
                    >
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
                            {/* IMAGE */}

                            <button
                              type="button"
                              onClick={() => {
                                window.location.href = `/cars/${car.slug}`;
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

                            {/* INFO */}

                            <button
                              type="button"
                              onClick={() => {
                                window.location.href = `/cars/${car.slug}`;
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
                      <div
                        className="
                          text-[25px]
                          font-light
                          text-white/15
                        "
                      >
                        ♡
                      </div>

                      <div
                        className="
                          text-[11px]
                          text-white/50
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

              {/* ================================================== */}
              {/* KONTAKT */}
              {/* ================================================== */}

              {contactNavigation && (
                <ButtonComponent
                  href={
                    isContactPage ? "tel:+48514137133" : contactNavigation.href
                  }
                  type="secondary"
                  className="text-white text-[11px]!"
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

          {/* ================================================== */}
          {/* BURGER */}
          {/* ================================================== */}

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

      {/* ====================================================== */}
      {/* MOBILE MENU */}
      {/* ====================================================== */}

      <MobileMenuComponent
        isOpen={menuOpen}
        onClose={closeMenu}
        activeSection={location.pathname}
      />
    </>
  );
};

export default HeaderComponent;
