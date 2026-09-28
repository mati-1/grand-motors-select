import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";
import { LogoComponent } from "../logo";
import { MobileMenuComponent } from "../../sections/mobile-menu";
import ArrowIcon from "../../assets/icons/strzalka.svg?react";
import PhoneIcon from "../../assets/icons/telefon.svg?react";
import { pageHeaderNavigation } from "./navigation";

export const HeaderComponent = () => {
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#b99a5c]/10 bg-linear-to-r from-black via-black/55 to-black/55 backdrop-blur-md">
        <div
          className={`
            mx-auto flex items-center justify-between
            px-[4vw] lg:px-[13vw]
            transition-all duration-500
            ${!scrolled || menuOpen ? "h-25" : "h-21"}
          `}
        >
          {/* LOGO */}

          <LogoComponent onClick={closeMenu} resize={scrolled} />

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-10 lg:flex">
            {pageHeaderNavigation.map((n) => {
              const isActive = n.href === location.pathname;
              const isContactPage = location.pathname === "/contact";

              if (n.href === "/contact") {
                return (
                  <ButtonComponent
                    key={n.label}
                    href={isContactPage ? "tel:+48514137133" : "/contact"}
                    type="secondary"
                    className="text-white text-[11px]!"
                  >
                    {isContactPage ? (
                      <span className="flex items-center gap-1">
                        Zadzwoń <PhoneIcon className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        {n.label} <ArrowIcon className="w-4 h-4 rotate-180" />
                      </span>
                    )}
                  </ButtonComponent>
                );
              }

              return (
                <LinkComponent
                  key={n.label}
                  href={n.href}
                  text={n.label}
                  active={isActive}
                />
              );
            })}
          </nav>

          {/* BURGER */}
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
      ${menuOpen ? "scale-x-0 opacity-0" : "translate-x-1 opacity-100"}
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

      {/* MOBILE MENU */}

      <MobileMenuComponent
        isOpen={menuOpen}
        onClose={closeMenu}
        activeSection={location.pathname}
      />
    </>
  );
};

export default HeaderComponent;
