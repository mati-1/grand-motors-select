import { useCallback, useState } from "react";

type UseGalleryNavigationProps = {
  images: string[];
  resetZoom: () => void;
};

export const useGalleryNavigation = ({
  images,
  resetZoom,
}: UseGalleryNavigationProps) => {
  const [activeIndex, setActiveIndexState] = useState(0);

  const setActiveIndex = useCallback(
    (index: number) => {
      if (!images.length) {
        return;
      }

      const nextIndex = Math.max(0, Math.min(index, images.length - 1));

      resetZoom();
      setActiveIndexState(nextIndex);
    },
    [images.length, resetZoom],
  );

  const previousImage = useCallback(() => {
    if (!images.length) {
      return;
    }

    resetZoom();

    setActiveIndexState((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  }, [images.length, resetZoom]);

  const nextImage = useCallback(() => {
    if (!images.length) {
      return;
    }

    resetZoom();

    setActiveIndexState((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  }, [images.length, resetZoom]);

  return {
    activeIndex,
    setActiveIndex,
    previousImage,
    nextImage,
  };
};
