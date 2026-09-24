import { useEffect, useRef, useState } from "react";

import type { CarType } from "../cars";

type CarGalleryProps = {
  images: string[];
  alt: string;
  car: CarType;
};

const MIN_ZOOM = 1;
const LIGHTBOX_BASE_ZOOM = 1.2;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

export const CarGallery = ({ images, alt, car }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [zoom, setZoom] = useState(MIN_ZOOM);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const [showThumbnailControls, setShowThumbnailControls] = useState(false);

  const [showLightboxThumbnailControls, setShowLightboxThumbnailControls] =
    useState(false);

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const lightboxThumbnailsRef = useRef<HTMLDivElement>(null);

  const imageAreaRef = useRef<HTMLDivElement>(null);

  const lastPointerPosition = useRef({
    x: 0,
    y: 0,
  });

  const pinchDistance = useRef<number | null>(null);

  const pinchStartZoom = useRef(MIN_ZOOM);

  /*
   * =========================================================
   * RESET ZOOM
   * =========================================================
   */

  const resetZoom = () => {
    setZoom(MIN_ZOOM);

    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);
  };

  /*
   * Reset dla lightboxa.
   *
   * Lightbox otwiera się lekko przybliżony.
   */

  const resetLightboxZoom = () => {
    setZoom(LIGHTBOX_BASE_ZOOM);

    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);
  };

  /*
   * =========================================================
   * IMAGE NAVIGATION
   * =========================================================
   */

  const previousImage = () => {
    setIsDragging(false);

    pinchDistance.current = null;

    setPosition({
      x: 0,
      y: 0,
    });

    if (isLightboxOpen) {
      setZoom(LIGHTBOX_BASE_ZOOM);
    } else {
      setZoom(MIN_ZOOM);
    }

    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setIsDragging(false);

    pinchDistance.current = null;

    setPosition({
      x: 0,
      y: 0,
    });

    if (isLightboxOpen) {
      setZoom(LIGHTBOX_BASE_ZOOM);
    } else {
      setZoom(MIN_ZOOM);
    }

    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const selectImage = (index: number) => {
    setIsDragging(false);

    pinchDistance.current = null;

    setPosition({
      x: 0,
      y: 0,
    });

    if (isLightboxOpen) {
      setZoom(LIGHTBOX_BASE_ZOOM);
    } else {
      setZoom(MIN_ZOOM);
    }

    setActiveIndex(index);
  };

  /*
   * =========================================================
   * THUMBNAIL SLIDER
   * =========================================================
   */

  const scrollThumbnails = (direction: "left" | "right") => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const amount = container.clientWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollLightboxThumbnails = (direction: "left" | "right") => {
    const container = lightboxThumbnailsRef.current;

    if (!container) return;

    const amount = container.clientWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /*
   * =========================================================
   * OPEN / CLOSE LIGHTBOX
   * =========================================================
   */

  const openLightbox = () => {
    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);

    pinchDistance.current = null;

    setZoom(LIGHTBOX_BASE_ZOOM);

    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    resetZoom();

    setIsLightboxOpen(false);
  };

  /*
   * =========================================================
   * ZOOM
   * =========================================================
   */

  const changeZoom = (value: number) => {
    const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));

    setZoom(nextZoom);

    if (nextZoom === MIN_ZOOM) {
      setPosition({
        x: 0,
        y: 0,
      });
    }
  };

  const zoomIn = () => {
    setZoom((currentZoom) => {
      const nextZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);

      return nextZoom;
    });
  };

  const zoomOut = () => {
    setZoom((currentZoom) => {
      const nextZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);

      if (nextZoom === MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return nextZoom;
    });
  };

  /*
   * =========================================================
   * DESKTOP WHEEL ZOOM
   * =========================================================
   */

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!isLightboxOpen) return;

    /*
     * Zoom działa wyłącznie wtedy, kiedy wheel
     * jest wykonywany bezpośrednio w obszarze zdjęcia.
     *
     * Dzięki temu scrollowanie / interakcja z innymi
     * elementami lightboxa nie zmienia zoomu.
     */

    const target = event.target as HTMLElement;

    if (!target.closest("[data-lightbox-image]")) {
      return;
    }

    event.preventDefault();

    if (event.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  /*
   * =========================================================
   * POINTER DRAG
   * =========================================================
   */

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    /*
     * Nie reaguj na kliknięcia przycisków.
     */

    const target = event.target as HTMLElement;

    if (target.closest("button")) {
      return;
    }

    if (zoom <= MIN_ZOOM) {
      return;
    }

    setIsDragging(true);

    lastPointerPosition.current = {
      x: event.clientX,
      y: event.clientY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= MIN_ZOOM) {
      return;
    }

    const deltaX = event.clientX - lastPointerPosition.current.x;

    const deltaY = event.clientY - lastPointerPosition.current.y;

    lastPointerPosition.current = {
      x: event.clientX,
      y: event.clientY,
    };

    setPosition((current) => ({
      x: current.x + deltaX,
      y: current.y + deltaY,
    }));
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already be released.
    }
  };

  /*
   * =========================================================
   * DOUBLE CLICK / DOUBLE TAP
   * =========================================================
   */

  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    /*
     * Nie wykonuj zoomu po dwukliku na przyciskach.
     */

    if (target.closest("button")) {
      return;
    }

    if (zoom > LIGHTBOX_BASE_ZOOM) {
      resetLightboxZoom();
    } else {
      changeZoom(2);
    }
  };

  /*
   * =========================================================
   * MOBILE PINCH
   * =========================================================
   */

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) {
      return 0;
    }

    const first = touches[0];

    const second = touches[1];

    const x = first.clientX - second.clientX;

    const y = first.clientY - second.clientY;

    return Math.sqrt(x * x + y * y);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    /*
     * Przyciski nie uczestniczą w żadnych gestach obrazu.
     */

    if (target.closest("button")) {
      return;
    }

    if (event.touches.length === 2) {
      pinchDistance.current = getTouchDistance(event.touches);

      pinchStartZoom.current = zoom;

      return;
    }

    if (event.touches.length === 1 && zoom > MIN_ZOOM) {
      lastPointerPosition.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };

      setIsDragging(true);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    /*
     * PINCH ZOOM
     */

    if (event.touches.length === 2 && pinchDistance.current) {
      event.preventDefault();

      const currentDistance = getTouchDistance(event.touches);

      const scale = currentDistance / pinchDistance.current;

      changeZoom(pinchStartZoom.current * scale);

      return;
    }

    /*
     * PAN
     */

    if (event.touches.length === 1 && isDragging && zoom > MIN_ZOOM) {
      event.preventDefault();

      const touch = event.touches[0];

      const deltaX = touch.clientX - lastPointerPosition.current.x;

      const deltaY = touch.clientY - lastPointerPosition.current.y;

      lastPointerPosition.current = {
        x: touch.clientX,
        y: touch.clientY,
      };

      setPosition((current) => ({
        x: current.x + deltaX,
        y: current.y + deltaY,
      }));
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length < 2) {
      pinchDistance.current = null;
    }

    if (event.touches.length === 0) {
      setIsDragging(false);
    }
  };

  /*
   * =========================================================
   * CHECK THUMBNAIL OVERFLOW
   * =========================================================
   */

  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const checkOverflow = () => {
      setShowThumbnailControls(
        container.scrollWidth > container.clientWidth + 1,
      );
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);

    resizeObserver.observe(container);

    window.addEventListener("resize", checkOverflow);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", checkOverflow);
    };
  }, [images.length]);

  /*
   * =========================================================
   * CHECK LIGHTBOX THUMBNAIL OVERFLOW
   * =========================================================
   */

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const container = lightboxThumbnailsRef.current;

    if (!container) return;

    const checkOverflow = () => {
      setShowLightboxThumbnailControls(
        container.scrollWidth > container.clientWidth + 1,
      );
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);

    resizeObserver.observe(container);

    window.addEventListener("resize", checkOverflow);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", checkOverflow);
    };
  }, [images.length, isLightboxOpen]);

  /*
   * =========================================================
   * SCROLL LOCK
   * =========================================================
   */

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  /*
   * =========================================================
   * KEYBOARD
   * =========================================================
   */

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }

      if (event.key === "0") {
        resetLightboxZoom();
      }

      if (event.key === "+" || event.key === "=") {
        zoomIn();
      }

      if (event.key === "-" || event.key === "_") {
        zoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  /*
   * =========================================================
   * KEEP ACTIVE THUMBNAIL VISIBLE
   * =========================================================
   */

  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const activeThumbnail = container.children[activeIndex] as
      | HTMLElement
      | undefined;

    if (!activeThumbnail) return;

    activeThumbnail.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const container = lightboxThumbnailsRef.current;

    if (!container) return;

    const activeThumbnail = container.children[activeIndex] as
      | HTMLElement
      | undefined;

    if (!activeThumbnail) return;

    activeThumbnail.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, isLightboxOpen]);

  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* ================================================= */}
      {/* MAIN IMAGE */}
      {/* ================================================= */}

      <div
        className="
          group
          relative
          aspect-16/10
          w-full
          min-w-0
          overflow-hidden
          bg-[#080808]
        "
      >
        <img
          src={images[activeIndex]}
          alt={`${alt} - zdjęcie samochodu`}
          onClick={openLightbox}
          className={`
            h-full
            w-full
            cursor-zoom-in
            object-cover
            transition-[filter]
            duration-500
            group-hover:brightness-[1.10]
            ${car.status === "sold" ? "grayscale-100" : ""}
          `}
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-black/35
            via-transparent
            to-black/5
          "
        />

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
            h-11
            w-11
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-black/35
            text-[20px]
            font-light
            text-[#aaa]
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#b99a5c]/60
            hover:bg-black/60
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
            h-11
            w-11
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-black/35
            text-[20px]
            font-light
            text-[#aaa]
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#b99a5c]/60
            hover:bg-black/60
            hover:text-[#d2b878]
            group-hover:opacity-100
            md:flex
          "
        >
          →
        </button>
      </div>

      {/* ================================================= */}
      {/* THUMBNAILS */}
      {/* ================================================= */}

      <div
        className="
          relative
          mt-3
          w-full
          min-w-0
        "
      >
        {/* LEFT */}

        <button
          type="button"
          onClick={() => scrollThumbnails("left")}
          aria-label="Przewiń zdjęcia w lewo"
          className={`
            absolute
            left-2
            top-1/2
            z-20
            hidden
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-[#080808]/90
            text-[18px]
            font-light
            text-[#999]
            shadow-[0_4px_20px_rgba(0,0,0,0.35)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#b99a5c]/50
            hover:text-[#d2b878]
            sm:flex
            ${
              showThumbnailControls
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
        >
          ←
        </button>

        {/* RIGHT */}

        <button
          type="button"
          onClick={() => scrollThumbnails("right")}
          aria-label="Przewiń zdjęcia w prawo"
          className={`
            absolute
            right-2
            top-1/2
            z-20
            hidden
            h-10
            w-10
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            border
            border-white/10
            bg-[#080808]/90
            text-[18px]
            font-light
            text-[#999]
            shadow-[0_4px_20px_rgba(0,0,0,0.35)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#b99a5c]/50
            hover:text-[#d2b878]
            sm:flex
            ${
              showThumbnailControls
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
        >
          →
        </button>

        {/* SLIDER */}

        <div
          ref={thumbnailsRef}
          className={`
            flex
            w-full
            min-w-0
            max-w-full
            gap-2
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            pb-1
            touch-pan-x
            overscroll-x-contain
            scrollbar-none
            [&::-webkit-scrollbar]:hidden
            ${showThumbnailControls ? "sm:px-14" : ""}
          `}
        >
          {images.map((image, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => selectImage(index)}
                aria-label="Wybierz zdjęcie"
                aria-current={isActive ? "true" : undefined}
                className={`
                  group/thumb
                  relative
                  h-18
                  w-27
                  shrink-0
                  cursor-pointer
                  overflow-hidden
                  border
                  bg-[#080808]
                  transition-all
                  duration-300
                  sm:h-22
                  sm:w-33
                  ${
                    isActive
                      ? "border-[#d2b878]"
                      : "border-white/8 hover:border-white/25"
                  }
                `}
              >
                <img
                  src={image}
                  alt=""
                  draggable={false}
                  className={`
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-400
                    ${car.status === "sold" ? "grayscale-100" : ""}
                    ${
                      isActive
                        ? "brightness-[0.82]"
                        : "brightness-[0.52] group-hover/thumb:brightness-[0.72]"
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    inset-x-0
                    bottom-0
                    h-px
                    bg-[#d2b878]
                    transition-opacity
                    duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================= */}
      {/* LIGHTBOX */}
      {/* ================================================= */}

      {isLightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-9999
            flex
            flex-col
            bg-[#b99a5c]/20
            bg-linear-to-r
            from-black/90
            via-black/75
            to-black/90
            backdrop-blur-md
          "
        >
          {/* ================================================= */}
          {/* TOP BAR */}
          {/* ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              px-5
              py-4
              sm:px-7
              sm:py-5
            "
          >
            {/* CLOSE */}

            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label="Zamknij galerię"
              className="
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/30
                text-[20px]
                font-light
                text-[#aaa]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
              "
            >
              ×
            </button>
          </div>

          {/* ================================================= */}
          {/* IMAGE AREA */}
          {/* ================================================= */}

          <div
            ref={imageAreaRef}
            className={`
              relative
              flex
              min-h-0
              flex-1
              items-center
              justify-center
              overflow-hidden
              px-4
              pb-4
              select-none
              sm:px-14
              sm:pb-6
              ${
                zoom > MIN_ZOOM
                  ? isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                  : "cursor-zoom-in"
              }
            `}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onDoubleClick={handleDoubleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* IMAGE */}

            <div
              data-lightbox-image
              className="
                relative
                flex
                h-full
                w-full
                items-center
                justify-center
                overflow-visible
              "
            >
              <img
                src={images[activeIndex]}
                alt={`${alt} - zdjęcie samochodu`}
                draggable={false}
                className={`
                  lg:max-h-[120%]
                  max-h-full
                  lg:max-w-[120%]
                  max-w-full
                  object-contain
                  ${car.status === "sold" ? "grayscale-100" : ""}
                `}
                style={{
                  transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isDragging ? "none" : "transform 180ms ease-out",
                  willChange: "transform",
                }}
              />
            </div>

            {/* ================================================= */}
            {/* PREVIOUS */}
            {/* ================================================= */}

            <button
              type="button"
              onPointerDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
              onPointerUp={(event) => {
                event.stopPropagation();
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();

                previousImage();
              }}
              onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
              onTouchStart={(event) => {
                event.stopPropagation();
              }}
              onTouchEnd={(event) => {
                event.stopPropagation();
              }}
              aria-label="Poprzednie zdjęcie"
              className="
                absolute
                left-3
                top-1/2
                z-30
                flex
                h-12
                w-12
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/50
                text-[20px]
                font-light
                text-[#aaa]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#b99a5c]/60
                hover:bg-black/70
                hover:text-[#d2b878]
                sm:left-7
                sm:h-13
                sm:w-13
              "
            >
              ←
            </button>

            {/* ================================================= */}
            {/* NEXT */}
            {/* ================================================= */}

            <button
              type="button"
              onPointerDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
              onPointerUp={(event) => {
                event.stopPropagation();
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();

                nextImage();
              }}
              onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
              onTouchStart={(event) => {
                event.stopPropagation();
              }}
              onTouchEnd={(event) => {
                event.stopPropagation();
              }}
              aria-label="Następne zdjęcie"
              className="
                absolute
                right-3
                top-1/2
                z-30
                flex
                h-12
                w-12
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/50
                text-[20px]
                font-light
                text-[#aaa]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#b99a5c]/60
                hover:bg-black/70
                hover:text-[#d2b878]
                sm:right-7
                sm:h-13
                sm:w-13
              "
            >
              →
            </button>
          </div>

          {/* ================================================= */}
          {/* LIGHTBOX THUMBNAILS */}
          {/* ================================================= */}

          <div
            className="
              relative
              shrink-0
              border-t
              border-white/8
              bg-black/35
              px-4
              py-4
              sm:px-16
              sm:py-5
            "
          >
            {/* LEFT */}

            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();

                scrollLightboxThumbnails("left");
              }}
              aria-label="Przewiń zdjęcia w lewo"
              className={`
                absolute
                left-4
                top-1/2
                z-20
                hidden
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/80
                text-[17px]
                text-[#999]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
                sm:flex
                ${
                  showLightboxThumbnailControls
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }
              `}
            >
              ←
            </button>

            {/* RIGHT */}

            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();

                scrollLightboxThumbnails("right");
              }}
              aria-label="Przewiń zdjęcia w prawo"
              className={`
                absolute
                right-4
                top-1/2
                z-20
                hidden
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-white/10
                bg-black/80
                text-[17px]
                text-[#999]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#b99a5c]/50
                hover:text-[#d2b878]
                sm:flex
                ${
                  showLightboxThumbnailControls
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }
              `}
            >
              →
            </button>

            {/* THUMBNAILS */}

            <div
              ref={lightboxThumbnailsRef}
              className={`
                flex
                w-full
                gap-2
                overflow-x-auto
                overflow-y-hidden
                scroll-smooth
                pb-1
                touch-pan-x
                overscroll-x-contain
                scrollbar-none
                [&::-webkit-scrollbar]:hidden
                ${showLightboxThumbnailControls ? "sm:px-12" : ""}
              `}
            >
              {images.map((image, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={`${image}-lightbox-${index}`}
                    type="button"
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();

                      selectImage(index);
                    }}
                    aria-label="Wybierz zdjęcie"
                    className={`
                      shrink-0
                      cursor-pointer
                      overflow-hidden
                      border
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#d2b878]"
                          : "border-white/10 opacity-50 hover:opacity-80"
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt=""
                      draggable={false}
                      className="
                        h-14
                        w-21
                        object-cover
                        sm:h-16
                        sm:w-24
                      "
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
