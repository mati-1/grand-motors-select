import { useState } from "react";

type CarGalleryProps = {
  images: string[];
  alt: string;
};

export const CarGallery = ({ images, alt }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="group relative aspect-16/10 overflow-hidden bg-[#090909]">
        <img
          src={images[activeIndex]}
          alt={`${alt} - zdjęcie ${activeIndex + 1}`}
          className="
            h-full
            w-full
            object-cover
            brightness-[0.72]
            transition-opacity
            duration-500
          "
        />

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
            flex
            h-10
            w-10
            -translate-y-1/2
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
            flex
            h-10
            w-10
            -translate-y-1/2
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
    </div>
  );
};
