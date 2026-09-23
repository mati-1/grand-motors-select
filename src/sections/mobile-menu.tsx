import { LinkComponent } from "../components/link";
import { ButtonComponent } from "../components/button";
import { pageHeaderNavigation } from "../components/header/navigation";

export const MobileMenuComponent = ({
  isOpen,
  onClose,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}) => {
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
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 pointer-events-none opacity-0"
        }
      `}
    >
      <nav className="flex min-h-[calc(100vh-92px)] flex-col gap-5 overflow-y-auto px-[5vw] py-7">
        {pageHeaderNavigation.map((n) => {
          const isActive = n.href === activeSection;
          const isContactPage = activeSection === "/contact";

          if (n.href === "/contact") {
            return (
              <ButtonComponent
                key={n.label}
                href={isContactPage ? "tel:+48514137133" : "/contact"}
                type="main"
                onClick={onClose}
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
              onClick={onClose}
            />
          );
        })}
      </nav>
    </div>
  );
};
