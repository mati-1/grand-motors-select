import { useEffect, useState } from "react";

import type { CarType } from "../cars";

type CarGalleryProps = {
  images: string[];
  alt: string;
  car: CarType;
};

export const CarGallery = ({ images, alt, car }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  /*
   * Blokujemy scroll strony podczas otwartego popupu.
   */
  useEffect(() => {
    if (!isLightboxOpen) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  /*
   * ESC zamyka popup.
   */
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div
        className="
          group
          relative
          aspect-16/10
          overflow-hidden
          bg-[#090909]
          md:cursor-default
        "
      >
        <img
          src={images[activeIndex]}
          alt={`${alt} - zdjęcie ${activeIndex + 1}`}
          onClick={openLightbox}
          className={`
            h-full
            w-full
            object-cover
            brightness-[0.72]
            transition-opacity
            duration-500
            md:cursor-default
            ${car.status === "sold" ? "grayscale-100" : ""}
          `}
        />

        {/* MOBILE OPEN HINT */}
        <button
          type="button"
          onClick={openLightbox}
          aria-label="Powiększ zdjęcie"
          className="
            absolute
            bottom-4
            right-4
            flex
            h-9
            w-9
            items-center
            justify-center
            border
            border-white/15
            bg-black/60
            text-[14px]
            text-[#aaa]
            backdrop-blur-sm
            transition
            duration-300
            hover:border-[#b99a5c]/50
            hover:text-[#d2b878]
            md:hidden
          "
        >
          ⤢
        </button>

        {/* COUNTER */}
        <div
          className="
            absolute
            left-5
            top-5
            border
            border-[#b99a5c]/30
            bg-black/60
            px-3
            py-2
            text-[8px]
            tracking-[0.2em]
            text-[#d2b878]
            backdrop-blur-sm
          "
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Poprzednie zdjęcie"
          className="
            absolute
            left-4
            top-1/2
            hidden
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-black/50
            text-[#aaa]
            opacity-0
            transition
            duration-300
            hover:border-[#b99a5c]/50
            hover:text-[#d2b878]
            group-hover:opacity-100
            md:flex
          "
        >
          ←
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Następne zdjęcie"
          className="
            absolute
            right-4
            top-1/2
            hidden
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-black/50
            text-[#aaa]
            opacity-0
            transition
            duration-300
            hover:border-[#b99a5c]/50
            hover:text-[#d2b878]
            group-hover:opacity-100
            md:flex
          "
        >
          →
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`
              relative
              aspect-4/3
              cursor-pointer
              overflow-hidden
              border
              transition
              duration-300
              ${
                activeIndex === index
                  ? "border-[#b99a5c]/70"
                  : "border-white/10 hover:border-white/25"
              }
            `}
          >
            <img
              src={image}
              alt={`${alt} - miniatura ${index + 1}`}
              className={`
                h-full
                w-full
                object-cover
                transition
                duration-300
                ${car.status === "sold" ? "grayscale-100" : ""}
                ${
                  activeIndex === index
                    ? "brightness-75"
                    : "brightness-50 hover:brightness-70"
                }
              `}
            />

            {activeIndex === index && (
              <span className="absolute inset-x-0 bottom-0 h-px bg-[#b99a5c]" />
            )}
          </button>
        ))}
      </div>

      {/* MOBILE LIGHTBOX */}
      {isLightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-100
            flex
            items-center
            justify-center
            bg-black/95
            backdrop-blur-md
            md:hidden
          "
          onClick={closeLightbox}
        >
          {/* TOP BAR */}
          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-10
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-black/40
              px-5
              py-4
            "
            onClick={(event) => event.stopPropagation()}
          >
            <span
              className="
                text-[8px]
                tracking-[0.3em]
                text-[#555]
              "
            >
              GMS / VEHICLE GALLERY
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Zamknij"
              className="
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                text-[18px]
                font-light
                text-[#aaa]
                transition
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
              "
            >
              ×
            </button>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
              px-4
              py-20
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`${alt} - zdjęcie ${activeIndex + 1}`}
              className={`
                max-h-full
                max-w-full
                object-contain
                ${car.status === "sold" ? "grayscale-100" : ""}
              `}
            />

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={previousImage}
              aria-label="Poprzednie zdjęcie"
              className="
                absolute
                left-3
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/60
                text-[18px]
                text-[#aaa]
                backdrop-blur-sm
                transition
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
              "
            >
              ←
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Następne zdjęcie"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/60
                text-[18px]
                text-[#aaa]
                backdrop-blur-sm
                transition
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
              "
            >
              →
            </button>
          </div>

          {/* BOTTOM COUNTER */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              border
              border-[#b99a5c]/30
              bg-black/60
              px-4
              py-2
              text-[8px]
              tracking-[0.25em]
              text-[#d2b878]
              backdrop-blur-sm
            "
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  );
};
