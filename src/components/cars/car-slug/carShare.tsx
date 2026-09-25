import { useEffect, useState } from "react";

import type { CarType } from "../cars";

type CarShareProps = {
  car: CarType;
};

const ShareIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path d="M12 16V3" strokeLinecap="round" />

    <path d="M7 8l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M5 13v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5" strokeLinecap="round" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />

    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CarShare = ({ car }: CarShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareTitle = `${car.brand} ${car.model} — GRAND MOTORS SELECT`;
  const shareText = `Sprawdź ${car.brand} ${car.model} w GRAND MOTORS SELECT.`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // Użytkownik zamknął natywne menu.
      }

      return;
    }

    setIsOpen(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* SHARE BUTTON */}

      <button
        type="button"
        onClick={handleShare}
        aria-label="Udostępnij ofertę"
        className="
          group
          flex
          h-9
          w-9
          cursor-pointer
          items-center
          justify-center
          border
          border-white/10
          bg-white/2
          text-[#777]
          transition-all
          duration-300
          hover:border-[#b99a5c]/40
          hover:bg-[#b99a5c]/5
          hover:text-[#d2b878]
        "
      >
        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <ShareIcon />
        </span>
      </button>

      {/* DESKTOP SHARE MODAL */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-100
            flex
            items-end
            justify-center
            bg-black/70
            p-4
            backdrop-blur-md
            sm:items-center
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              w-full
              max-w-md
              border
              border-white/10
              bg-[#080808]
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-5
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    tracking-[0.3em]
                    text-[#b99a5c]
                  "
                >
                  GRAND MOTORS SELECT
                </p>

                <h2
                  className="
                    mt-2
                    text-[18px]
                    font-normal
                    tracking-[0.02em]
                    text-white
                  "
                >
                  Udostępnij ofertę
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Zamknij"
                className="
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  text-[20px]
                  text-[#555]
                  transition-colors
                  duration-300
                  hover:text-[#d2b878]
                "
              >
                ×
              </button>
            </div>

            {/* CAR */}

            <div
              className="
                border-b
                border-white/10
                px-6
                py-5
              "
            >
              <p
                className="
                  text-[9px]
                  tracking-[0.25em]
                  text-[#555]
                "
              >
                OFERTA
              </p>

              <p
                className="
                  mt-2
                  text-[14px]
                  tracking-[0.04em]
                  text-[#ccc]
                "
              >
                {car.brand} {car.model}
              </p>
            </div>

            {/* OPTIONS */}

            <div
              className="
                grid
                grid-cols-2
                gap-px
                bg-white/10
              "
            >
              {/* FACEBOOK */}

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  min-h-24
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  bg-[#080808]
                  text-[#777]
                  transition-colors
                  duration-300
                  hover:bg-[#b99a5c]/5
                  hover:text-[#d2b878]
                "
              >
                <span className="font-serif text-[20px]">f</span>

                <span className="text-[8px] tracking-[0.2em]">FACEBOOK</span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:?subject=${encodeURIComponent(
                  shareTitle,
                )}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`}
                className="
                  group
                  flex
                  min-h-24
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  bg-[#080808]
                  text-[#777]
                  transition-colors
                  duration-300
                  hover:bg-[#b99a5c]/5
                  hover:text-[#d2b878]
                "
              >
                <MailIcon />

                <span className="text-[8px] tracking-[0.2em]">E-MAIL</span>
              </a>
            </div>

            {/* COPY */}

            <div className="p-5">
              <button
                type="button"
                onClick={copyLink}
                className="
                  group
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-between
                  gap-4
                  border
                  border-white/10
                  bg-white/2
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-[#b99a5c]/40
                  hover:bg-[#b99a5c]/5
                "
              >
                <div className="min-w-0">
                  <span
                    className="
                      block
                      text-[9px]
                      tracking-[0.25em]
                      text-[#555]
                    "
                  >
                    LINK DO OFERTY
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      truncate
                      text-[11px]
                      text-[#777]
                    "
                  >
                    {shareUrl}
                  </span>
                </div>

                <span
                  className="
                    shrink-0
                    text-[9px]
                    tracking-[0.2em]
                    text-[#b99a5c]
                  "
                >
                  {copied ? "SKOPIOWANO ✓" : "KOPIUJ"}
                </span>
              </button>
            </div>

            {/* MOBILE */}

            <div className="px-5 pb-5 sm:hidden">
              <button
                type="button"
                onClick={handleShare}
                className="
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  border
                  border-[#b99a5c]/30
                  bg-[#b99a5c]/5
                  px-5
                  py-4
                  text-[9px]
                  tracking-[0.25em]
                  text-[#d2b878]
                  transition-all
                  duration-300
                  hover:bg-[#b99a5c]/10
                "
              >
                <ShareIcon />
                UDOSTĘPNIJ PRZEZ URZĄDZENIE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
