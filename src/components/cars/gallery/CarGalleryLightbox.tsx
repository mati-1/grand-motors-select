import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  RefObject,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import type { CarType } from "../cars";
import type { GalleryPosition } from "./carGallery.types";

import { CarGalleryLightboxThumbnails } from "./CarGalleryLightboxThumbnails";

type CarGalleryLightboxProps = {
  images: string[];
  alt: string;
  car: CarType;

  activeIndex: number;

  zoom: number;
  position: GalleryPosition;
  isDragging: boolean;

  showThumbnailControls: boolean;

  thumbnailsRef: RefObject<HTMLDivElement | null>;

  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;

  onSelectImage: (index: number) => void;

  onScrollThumbnails: (direction: "left" | "right") => void;

  onWheel: (event: ReactWheelEvent<HTMLDivElement>) => void;

  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;

  onPointerMove: (event: ReactPointerEvent<HTMLDivElement>) => void;

  onPointerUp: (event: ReactPointerEvent<HTMLDivElement>) => void;

  onDoubleClick: (event: ReactMouseEvent<HTMLDivElement>) => void;

  onTouchStart: (event: ReactTouchEvent<HTMLDivElement>) => void;

  onTouchMove: (event: ReactTouchEvent<HTMLDivElement>) => void;

  onTouchEnd: () => void;
};

export const CarGalleryLightbox = ({
  images,
  alt,
  car,
  activeIndex,
  zoom,
  position,
  isDragging,
  showThumbnailControls,
  thumbnailsRef,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
  onScrollThumbnails,
  onWheel,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onDoubleClick,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: CarGalleryLightboxProps) => {
  return (
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
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
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
            zoom > 1
              ? isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
              : "cursor-zoom-in"
          }
        `}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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
              max-h-full
              max-w-full
              object-contain
              lg:max-h-[120%]
              lg:max-w-[120%]
              ${car.status === "sold" ? "grayscale-100" : ""}
            `}
            style={{
              transform: `
                translate3d(
                  ${position.x}px,
                  ${position.y}px,
                  0
                )
                scale(${zoom})
              `,
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
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onPrevious();
          }}
          onDoubleClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onTouchStart={(event) => event.stopPropagation()}
          onTouchEnd={(event) => event.stopPropagation()}
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
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onNext();
          }}
          onDoubleClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onTouchStart={(event) => event.stopPropagation()}
          onTouchEnd={(event) => event.stopPropagation()}
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
      {/* THUMBNAILS */}
      {/* ================================================= */}

      <CarGalleryLightboxThumbnails
        images={images}
        activeIndex={activeIndex}
        thumbnailsRef={thumbnailsRef}
        showControls={showThumbnailControls}
        onSelect={onSelectImage}
        onScroll={onScrollThumbnails}
      />
    </div>
  );
};
