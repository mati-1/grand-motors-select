import type { CarType } from "../cars";

type CarGalleryMainProps = {
  image: string;
  alt: string;
  car: CarType;

  onOpenLightbox: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export const CarGalleryMain = ({
  image,
  alt,
  car,
  onOpenLightbox,
  onPrevious,
  onNext,
}: CarGalleryMainProps) => {
  return (
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
        src={image}
        alt={`${alt} - zdjęcie samochodu`}
        onClick={onOpenLightbox}
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

      <button
        type="button"
        onClick={onPrevious}
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

      <button
        type="button"
        onClick={onNext}
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
  );
};
