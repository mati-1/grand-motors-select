import type { CarType } from "../cars";

type CarGalleryThumbnailsProps = {
  images: string[];
  activeIndex: number;
  car: CarType;

  thumbnailsRef: React.RefObject<HTMLDivElement | null>;

  showControls: boolean;

  onSelect: (index: number) => void;
  onScroll: (direction: "left" | "right") => void;
};

export const CarGalleryThumbnails = ({
  images,
  activeIndex,
  car,
  thumbnailsRef,
  showControls,
  onSelect,
  onScroll,
}: CarGalleryThumbnailsProps) => {
  return (
    <div
      className="
        relative
        mt-3
        w-full
        min-w-0
      "
    >
      <button
        type="button"
        onClick={() => onScroll("left")}
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
          ${showControls ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        ←
      </button>

      <button
        type="button"
        onClick={() => onScroll("right")}
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
          ${showControls ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        →
      </button>

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
          ${showControls ? "sm:px-14" : ""}
        `}
      >
        {images.map((image, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Wybierz zdjęcie ${index + 1}`}
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
  );
};
