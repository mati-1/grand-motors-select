import { useEffect } from "react";

type CarGalleryLightboxThumbnailsProps = {
  images: string[];
  activeIndex: number;
  thumbnailsRef: React.RefObject<HTMLDivElement | null>;
  showControls: boolean;
  onSelect: (index: number) => void;
  onScroll: (direction: "left" | "right") => void;
};

export const CarGalleryLightboxThumbnails = ({
  images,
  activeIndex,
  thumbnailsRef,
  showControls,
  onSelect,
  onScroll,
}: CarGalleryLightboxThumbnailsProps) => {
  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) return;

    const thumbnails = container.querySelectorAll<HTMLButtonElement>(
      "[data-gallery-thumbnail]",
    );

    const activeThumbnail = thumbnails[activeIndex];

    if (!activeThumbnail) return;

    const containerRect = container.getBoundingClientRect();

    const thumbnailRect = activeThumbnail.getBoundingClientRect();

    const isOutsideLeft = thumbnailRect.left < containerRect.left;

    const isOutsideRight = thumbnailRect.right > containerRect.right;

    const thumbnailWidth = activeThumbnail.offsetWidth;

    const gap = 8;

    const scrollAmount = (thumbnailWidth + gap) * 4;

    if (isOutsideRight) {
      const isLast = activeIndex === images.length - 1;

      if (isLast) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }

    if (isOutsideLeft) {
      const isFirst = activeIndex === 0;

      if (isFirst) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, images.length, thumbnailsRef]);

  return (
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
          onScroll("left");
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
          ${showControls ? "opacity-100" : "pointer-events-none opacity-0"}
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
          onScroll("right");
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
          ${showControls ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        →
      </button>

      {/* THUMBNAILS */}
      <div
        ref={thumbnailsRef}
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
          ${showControls ? "sm:px-12" : ""}
        `}
      >
        {images.map((image, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={`${image}-lightbox-${index}`}
              type="button"
              data-gallery-thumbnail
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(index);
              }}
              aria-label={`Wybierz zdjęcie ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
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
  );
};
