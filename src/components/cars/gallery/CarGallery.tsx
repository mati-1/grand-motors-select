import { useState } from "react";
import type { CarType } from "../cars";

import { CarGalleryLightbox } from "./CarGalleryLightbox";
import { useCarGallery } from "./hooks/useCarGallery";

type CarGalleryProps = {
  images: string[];
  alt: string;
  car: CarType;
};

type GalleryTileProps = {
  image: string;
  alt: string;
  car: CarType;
  onClick: () => void;
  className?: string;
};

const GalleryTile = ({
  image,
  alt,
  car,
  onClick,
  className = "",
}: GalleryTileProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        relative
        min-h-0
        min-w-0
        cursor-pointer
        overflow-hidden
        border-0
        bg-[#080808]
        p-0
        text-left
        ${className}
      `}
    >
      <img
        src={image}
        alt={`${alt} - zdjęcie samochodu`}
        className={`
    absolute
    inset-0
    h-full
    w-full
    object-cover
    group-hover:opacity-90
    transition-opacity
    will-change-transform
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
    </button>
  );
};

type GalleryNavigationButtonProps = {
  direction: "previous" | "next";
  visible: boolean;
  onClick: () => void;
};

const GalleryNavigationButton = ({
  direction,
  visible,
  onClick,
}: GalleryNavigationButtonProps) => {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        isPrevious ? "Poprzednia grupa zdjęć" : "Następna grupa zdjęć"
      }
      className={`
        absolute
        top-1/2
        z-30
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
        font-light
        text-[#d2b878]
        backdrop-blur-md
        transition-all
        duration-400
        ease-out

        ${
          visible
            ? "pointer-events-auto translate-x-0 opacity-100"
            : `pointer-events-none opacity-0 ${
                isPrevious ? "-translate-x-3" : "translate-x-3"
              }`
        }

        hover:border-[#b99a5c]/60
        hover:bg-black/75

        ${isPrevious ? "left-4" : "right-4"}
      `}
    >
      {isPrevious ? "←" : "→"}
    </button>
  );
};

/* ========================================================= */
/* VIEW ALL BUTTON */
/* ========================================================= */

type GalleryViewAllButtonProps = {
  imageCount: number;
  onClick: () => void;
};

const GalleryViewAllButton = ({
  imageCount,
  onClick,
}: GalleryViewAllButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Zobacz wszystkie ${imageCount} zdjęć`}
      className="
    group
    absolute
    bottom-3
    right-3
    z-30
    flex
    h-9
    cursor-pointer
    items-center
    justify-center
    gap-2
    border
    border-white/15
    bg-[#080808]/90
    px-3.5
    backdrop-blur-md
    transition-all
    duration-300
    hover:border-[#b99a5c]/30
    hover:bg-[#0c0c0c]/95
  "
    >
      <span
        className="
      whitespace-nowrap
      text-[9px]
      font-medium
      tracking-[0.12em]
      text-[#aaa]
      transition-colors
      duration-300
      group-hover:text-[#c2ad7a]
    "
      >
        Zobacz {imageCount} zdjęć
      </span>

      <span
        className="
      text-[11px]
      text-[#777]
      transition-all
      duration-300
      group-hover:translate-x-0.5
      group-hover:text-[#b99a5c]
    "
      >
        →
      </span>
    </button>
  );
};

/* ========================================================= */
/* DESKTOP SLIDE */
/* ========================================================= */

type GalleryDesktopSlideProps = {
  images: string[];
  alt: string;
  car: CarType;
  startIndex: number;
  isFirstSlide: boolean;
  onOpenImage: (index: number) => void;
};

const GalleryDesktopSlide = ({
  images,
  alt,
  car,
  startIndex,
  isFirstSlide,
  onOpenImage,
}: GalleryDesktopSlideProps) => {
  const slideSize = isFirstSlide ? 5 : 6;

  const slideImages = images.slice(startIndex, startIndex + slideSize);

  if (!slideImages.length) {
    return null;
  }

  if (isFirstSlide) {
    return (
      <div
        className="
          grid
          h-full
          w-full
          grid-cols-[1.8fr_1fr_1fr]
          grid-rows-2
          gap-2
        "
      >
        <GalleryTile
          image={slideImages[0]}
          alt={alt}
          car={car}
          onClick={() => onOpenImage(startIndex)}
          className="row-span-2"
        />

        {slideImages[1] && (
          <GalleryTile
            image={slideImages[1]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 1)}
          />
        )}

        {slideImages[2] && (
          <GalleryTile
            image={slideImages[2]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 2)}
          />
        )}

        {slideImages[3] && (
          <GalleryTile
            image={slideImages[3]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 3)}
          />
        )}

        {slideImages[4] && (
          <GalleryTile
            image={slideImages[4]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 4)}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className="
        grid
        h-full
        w-full
        grid-cols-3
        grid-rows-2
        gap-2
      "
    >
      {slideImages.map((image, index) => {
        const imageIndex = startIndex + index;

        return (
          <GalleryTile
            key={`${image}-${imageIndex}`}
            image={image}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(imageIndex)}
          />
        );
      })}
    </div>
  );
};

/* ========================================================= */
/* DESKTOP SLIDER */
/* ========================================================= */

type CarGalleryDesktopSliderProps = {
  images: string[];
  alt: string;
  car: CarType;
  activeSlide: number;
  onOpenImage: (index: number) => void;
  onOpenGallery: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

const CarGalleryDesktopSlider = ({
  images,
  alt,
  car,
  activeSlide,
  onOpenImage,
  onOpenGallery,
  onPrevious,
  onNext,
}: CarGalleryDesktopSliderProps) => {
  const firstSlideSize = 5;
  const nextSlideSize = 6;

  const slideCount =
    images.length <= firstSlideSize
      ? 1
      : 1 + Math.ceil((images.length - firstSlideSize) / nextSlideSize);

  const safeSlide = Math.min(activeSlide, Math.max(slideCount - 1, 0));

  const slides = Array.from({ length: slideCount }, (_, index) => index);

  const isFirstSlide = safeSlide === 0;
  const isLastSlide = safeSlide === slideCount - 1;

  return (
    <div
      className="
        group/gallery
        relative
        hidden
        aspect-video
        w-full
        min-w-0
        overflow-hidden
        rounded-[10px]
        bg-black
        lg:block
      "
    >
      {/* SLIDER TRACK */}

      <div
        className="
          flex
          h-full
          w-full
          transition-transform
          duration-350
          ease-[cubic-bezier(0.76,0,0.24,1)]
        "
        style={{
          transform: `translateX(-${safeSlide * 100}%)`,
        }}
      >
        {slides.map((slideIndex) => {
          const startIndex =
            slideIndex === 0
              ? 0
              : firstSlideSize + (slideIndex - 1) * nextSlideSize;

          return (
            <div
              key={slideIndex}
              className="
                h-full
                w-full
                min-w-full
                shrink-0
              "
            >
              <GalleryDesktopSlide
                images={images}
                alt={alt}
                car={car}
                startIndex={startIndex}
                isFirstSlide={slideIndex === 0}
                onOpenImage={onOpenImage}
              />
            </div>
          );
        })}
      </div>

      {/* PREVIOUS */}

      {slideCount > 1 && (
        <GalleryNavigationButton
          direction="previous"
          visible={!isFirstSlide}
          onClick={onPrevious}
        />
      )}

      {/* NEXT */}

      {slideCount > 1 && (
        <GalleryNavigationButton
          direction="next"
          visible={!isLastSlide}
          onClick={onNext}
        />
      )}

      {/* VIEW ALL */}

      <GalleryViewAllButton
        imageCount={images.length}
        onClick={onOpenGallery}
      />
    </div>
  );
};

/* ========================================================= */
/* MOBILE SLIDE */
/* ========================================================= */

type GalleryMobileSlideProps = {
  images: string[];
  alt: string;
  car: CarType;
  startIndex: number;
  isFirstSlide: boolean;
  onOpenImage: (index: number) => void;
};

const GalleryMobileSlide = ({
  images,
  alt,
  car,
  startIndex,
  isFirstSlide,
  onOpenImage,
}: GalleryMobileSlideProps) => {
  const slideSize = isFirstSlide ? 3 : 4;

  const slideImages = images.slice(startIndex, startIndex + slideSize);

  if (!slideImages.length) {
    return null;
  }

  if (isFirstSlide) {
    return (
      <div
        className="
          grid
          h-full
          w-full
          grid-cols-[1.8fr_1fr]
          grid-rows-2
          gap-2
        "
      >
        <GalleryTile
          image={slideImages[0]}
          alt={alt}
          car={car}
          onClick={() => onOpenImage(startIndex)}
          className="row-span-2"
        />

        {slideImages[1] && (
          <GalleryTile
            image={slideImages[1]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 1)}
          />
        )}

        {slideImages[2] && (
          <GalleryTile
            image={slideImages[2]}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(startIndex + 2)}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className="
        grid
        h-full
        w-full
        grid-cols-2
        grid-rows-2
        gap-2
      "
    >
      {slideImages.map((image, index) => {
        const imageIndex = startIndex + index;

        return (
          <GalleryTile
            key={`${image}-${imageIndex}`}
            image={image}
            alt={alt}
            car={car}
            onClick={() => onOpenImage(imageIndex)}
          />
        );
      })}
    </div>
  );
};

/* ========================================================= */
/* MOBILE SLIDER */
/* ========================================================= */

type CarGalleryMobileSliderProps = {
  images: string[];
  alt: string;
  car: CarType;
  activeSlide: number;
  onOpenImage: (index: number) => void;
  onOpenGallery: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

const CarGalleryMobileSlider = ({
  images,
  alt,
  car,
  activeSlide,
  onOpenImage,
  onOpenGallery,
  onPrevious,
  onNext,
}: CarGalleryMobileSliderProps) => {
  const firstSlideSize = 3;
  const nextSlideSize = 4;

  const slideCount =
    images.length <= firstSlideSize
      ? 1
      : 1 + Math.ceil((images.length - firstSlideSize) / nextSlideSize);

  const safeSlide = Math.min(activeSlide, Math.max(slideCount - 1, 0));

  const slides = Array.from({ length: slideCount }, (_, index) => index);

  const isFirstSlide = safeSlide === 0;
  const isLastSlide = safeSlide === slideCount - 1;

  return (
    <div
      className="
        group/mobile-gallery
        relative
        aspect-4/3
        w-full
        min-w-0
        overflow-hidden
        rounded-[10px]
        bg-[#080808]
        lg:hidden
      "
    >
      {/* SLIDER TRACK */}

      <div
        className="
          flex
          h-full
          w-full
          transition-transform
          duration-350
          ease-[cubic-bezier(0.76,0,0.24,1)]
        "
        style={{
          transform: `translateX(-${safeSlide * 100}%)`,
        }}
      >
        {slides.map((slideIndex) => {
          const startIndex =
            slideIndex === 0
              ? 0
              : firstSlideSize + (slideIndex - 1) * nextSlideSize;

          return (
            <div
              key={slideIndex}
              className="
                h-full
                w-full
                min-w-full
                shrink-0
              "
            >
              <GalleryMobileSlide
                images={images}
                alt={alt}
                car={car}
                startIndex={startIndex}
                isFirstSlide={slideIndex === 0}
                onOpenImage={onOpenImage}
              />
            </div>
          );
        })}
      </div>

      {/* PREVIOUS */}

      {slideCount > 1 && (
        <GalleryNavigationButton
          direction="previous"
          visible={!isFirstSlide}
          onClick={onPrevious}
        />
      )}

      {/* NEXT */}

      {slideCount > 1 && (
        <GalleryNavigationButton
          direction="next"
          visible={!isLastSlide}
          onClick={onNext}
        />
      )}

      {/* VIEW ALL */}

      <GalleryViewAllButton
        imageCount={images.length}
        onClick={onOpenGallery}
      />
    </div>
  );
};

/* ========================================================= */
/* MAIN COMPONENT */
/* ========================================================= */

export const CarGallery = ({ images, alt, car }: CarGalleryProps) => {
  const gallery = useCarGallery({
    images,
  });

  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  if (!images.length) {
    return null;
  }

  const desktopFirstSlideSize = 5;
  const desktopNextSlideSize = 6;

  const mobileFirstSlideSize = 3;
  const mobileNextSlideSize = 4;

  const desktopSlideCount =
    images.length <= desktopFirstSlideSize
      ? 1
      : 1 +
        Math.ceil(
          (images.length - desktopFirstSlideSize) / desktopNextSlideSize,
        );

  const mobileSlideCount =
    images.length <= mobileFirstSlideSize
      ? 1
      : 1 +
        Math.ceil((images.length - mobileFirstSlideSize) / mobileNextSlideSize);

  const handleOpenImage = (index: number) => {
    gallery.setActiveIndex(index);
    gallery.openLightbox();
  };

  const handleOpenGallery = () => {
    gallery.setActiveIndex(0);
    gallery.openLightbox();
  };

  const previousDesktopSlide = () => {
    setDesktopSlide((current) => Math.max(current - 1, 0));
  };

  const nextDesktopSlide = () => {
    setDesktopSlide((current) => Math.min(current + 1, desktopSlideCount - 1));
  };

  const previousMobileSlide = () => {
    setMobileSlide((current) => Math.max(current - 1, 0));
  };

  const nextMobileSlide = () => {
    setMobileSlide((current) => Math.min(current + 1, mobileSlideCount - 1));
  };

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* ========================================= */}
      {/* DESKTOP */}
      {/* ========================================= */}

      <CarGalleryDesktopSlider
        images={images}
        alt={alt}
        car={car}
        activeSlide={desktopSlide}
        onOpenImage={handleOpenImage}
        onOpenGallery={handleOpenGallery}
        onPrevious={previousDesktopSlide}
        onNext={nextDesktopSlide}
      />

      {/* ========================================= */}
      {/* MOBILE */}
      {/* ========================================= */}

      <CarGalleryMobileSlider
        images={images}
        alt={alt}
        car={car}
        activeSlide={mobileSlide}
        onOpenImage={handleOpenImage}
        onOpenGallery={handleOpenGallery}
        onPrevious={previousMobileSlide}
        onNext={nextMobileSlide}
      />

      {gallery.isLightboxOpen && (
        <CarGalleryLightbox
          images={images}
          alt={alt}
          car={car}
          activeIndex={gallery.activeIndex}
          zoom={gallery.zoom}
          position={gallery.position}
          isDragging={gallery.isDragging}
          showThumbnailControls={gallery.showLightboxThumbnailControls}
          thumbnailsRef={gallery.lightboxThumbnailsRef}
          onClose={gallery.closeLightbox}
          onPrevious={gallery.previousImage}
          onNext={gallery.nextImage}
          onSelectImage={gallery.setActiveIndex}
          onScrollThumbnails={gallery.scrollLightboxThumbnails}
          onWheel={gallery.handleWheel}
          onPointerDown={gallery.handlePointerDown}
          onPointerMove={gallery.handlePointerMove}
          onPointerUp={gallery.handlePointerUp}
          onDoubleClick={gallery.handleDoubleClick}
          onTouchStart={gallery.handleTouchStart}
          onTouchMove={gallery.handleTouchMove}
          onTouchEnd={gallery.handleTouchEnd}
        />
      )}
    </div>
  );
};
