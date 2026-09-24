import type { CarType } from "../cars";

import { CarGalleryLightbox } from "./CarGalleryLightbox";
import { CarGalleryMain } from "./CarGalleryMain";
import { CarGalleryThumbnails } from "./CarGalleryThumbnails";
import { useCarGallery } from "./hooks/useCarGallery";

type CarGalleryProps = {
  images: string[];
  alt: string;
  car: CarType;
};

export const CarGallery = ({ images, alt, car }: CarGalleryProps) => {
  const gallery = useCarGallery({
    images,
  });

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* MAIN IMAGE */}

      <CarGalleryMain
        image={images[gallery.activeIndex]}
        alt={alt}
        car={car}
        onOpenLightbox={gallery.openLightbox}
        onPrevious={gallery.previousImage}
        onNext={gallery.nextImage}
      />

      {/* THUMBNAILS */}

      <CarGalleryThumbnails
        images={images}
        activeIndex={gallery.activeIndex}
        car={car}
        thumbnailsRef={gallery.thumbnailsRef}
        showControls={gallery.showThumbnailControls}
        onSelect={gallery.setActiveIndex}
        onScroll={gallery.scrollThumbnails}
      />

      {/* LIGHTBOX */}

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
