import { useCallback, useEffect, useRef, useState } from "react";

import { useGalleryNavigation } from "./useGalleryNavigation";
import { useGalleryZoom } from "./useGalleryZoom";

type UseCarGalleryProps = {
  images: string[];
};

export const useCarGallery = ({ images }: UseCarGalleryProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // --------------------------------------------------
  // THUMBNAIL REFS
  // --------------------------------------------------

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const lightboxThumbnailsRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  // THUMBNAIL CONTROLS
  // --------------------------------------------------

  const [showThumbnailControls, setShowThumbnailControls] = useState(false);

  const [showLightboxThumbnailControls, setShowLightboxThumbnailControls] =
    useState(false);

  // --------------------------------------------------
  // ZOOM
  // --------------------------------------------------

  const zoom = useGalleryZoom({
    isLightboxOpen,
  });

  // --------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------

  const navigation = useGalleryNavigation({
    images,
    resetZoom: zoom.resetZoom,
  });

  // --------------------------------------------------
  // LIGHTBOX
  // --------------------------------------------------

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);

    zoom.resetLightboxZoom();
  }, [zoom.resetLightboxZoom]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);

    zoom.resetZoom();
  }, [zoom.resetZoom]);

  // --------------------------------------------------
  // THUMBNAIL SCROLL
  // --------------------------------------------------

  const scrollThumbnails = useCallback((direction: "left" | "right") => {
    const container = thumbnailsRef.current;

    if (!container) {
      return;
    }

    const amount = container.clientWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  const scrollLightboxThumbnails = useCallback(
    (direction: "left" | "right") => {
      const container = lightboxThumbnailsRef.current;

      if (!container) {
        return;
      }

      const amount = container.clientWidth * 0.7;

      container.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    },
    [],
  );

  // --------------------------------------------------
  // CHECK THUMBNAIL OVERFLOW
  // --------------------------------------------------

  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) {
      return;
    }

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

  // --------------------------------------------------
  // CHECK LIGHTBOX THUMBNAIL OVERFLOW
  // --------------------------------------------------

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const container = lightboxThumbnailsRef.current;

    if (!container) {
      return;
    }

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

  // --------------------------------------------------
  // BODY SCROLL LOCK
  // --------------------------------------------------

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

  // --------------------------------------------------
  // KEYBOARD
  // --------------------------------------------------

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigation.previousImage();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigation.nextImage();
        return;
      }

      if (event.key === "0") {
        event.preventDefault();
        zoom.resetZoom();
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoom.zoomIn();
        return;
      }

      if (event.key === "-") {
        event.preventDefault();
        zoom.zoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isLightboxOpen,
    closeLightbox,
    navigation.previousImage,
    navigation.nextImage,
    zoom.resetZoom,
    zoom.zoomIn,
    zoom.zoomOut,
  ]);

  // --------------------------------------------------
  // ACTIVE THUMBNAIL - MAIN
  // --------------------------------------------------

  useEffect(() => {
    const container = thumbnailsRef.current;

    if (!container) {
      return;
    }

    const activeThumbnail = container.querySelector<HTMLElement>(
      `[data-thumbnail-index="${navigation.activeIndex}"]`,
    );

    activeThumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [navigation.activeIndex]);

  // --------------------------------------------------
  // ACTIVE THUMBNAIL - LIGHTBOX
  // --------------------------------------------------

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const container = lightboxThumbnailsRef.current;

    if (!container) {
      return;
    }

    const activeThumbnail = container.querySelector<HTMLElement>(
      `[data-thumbnail-index="${navigation.activeIndex}"]`,
    );

    activeThumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [navigation.activeIndex, isLightboxOpen]);

  // --------------------------------------------------
  // RETURN
  // --------------------------------------------------

  return {
    // Navigation
    activeIndex: navigation.activeIndex,
    setActiveIndex: navigation.setActiveIndex,
    previousImage: navigation.previousImage,
    nextImage: navigation.nextImage,

    // Lightbox
    isLightboxOpen,
    openLightbox,
    closeLightbox,

    // Zoom
    zoom: zoom.zoom,
    position: zoom.position,
    isDragging: zoom.isDragging,

    resetZoom: zoom.resetZoom,
    resetLightboxZoom: zoom.resetLightboxZoom,

    zoomIn: zoom.zoomIn,
    zoomOut: zoom.zoomOut,
    toggleZoom: zoom.toggleZoom,

    handleWheel: zoom.handleWheel,

    handlePointerDown: zoom.handlePointerDown,

    handlePointerMove: zoom.handlePointerMove,

    handlePointerUp: zoom.handlePointerUp,

    handleDoubleClick: zoom.handleDoubleClick,

    handleTouchStart: zoom.handleTouchStart,

    handleTouchMove: zoom.handleTouchMove,

    handleTouchEnd: zoom.handleTouchEnd,

    // Main thumbnails
    thumbnailsRef,
    showThumbnailControls,
    scrollThumbnails,

    // Lightbox thumbnails
    lightboxThumbnailsRef,
    showLightboxThumbnailControls,
    scrollLightboxThumbnails,
  };
};
