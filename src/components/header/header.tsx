import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";
import { LogoComponent } from "../logo";
import { MobileMenuComponent } from "../../sections/mobile-menu";

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
            px-[5vw]
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
                    type="main"
                  >
                    {isContactPage ? "ZADZWOŃ →" : n.label}
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
            aria-label="Menu"
            className="relative flex h-10 w-10 cursor-pointer flex-col items-end justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`
                h-px bg-[#d2b878]
                transition-all duration-300
                ${menuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}
              `}
            />

            <span
              className={`
                h-px bg-[#d2b878]
                transition-all duration-300
                ${menuOpen ? "w-0 opacity-0" : "w-4"}
              `}
            />

            <span
              className={`
                h-px bg-[#d2b878]
                transition-all duration-300
                ${menuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"}
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
