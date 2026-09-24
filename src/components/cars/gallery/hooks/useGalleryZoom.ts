import { useCallback, useRef, useState } from "react";

import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import {
  LIGHTBOX_BASE_ZOOM,
  MAX_ZOOM,
  MIN_ZOOM,
  ZOOM_STEP,
} from "../carGallery.constants";

type UseGalleryZoomProps = {
  isLightboxOpen: boolean;
};

export const useGalleryZoom = ({ isLightboxOpen }: UseGalleryZoomProps) => {
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });

  const initialPosition = useRef({
    x: 0,
    y: 0,
  });

  const lastTouchDistance = useRef<number | null>(null);

  const lastTouchCenter = useRef<{
    x: number;
    y: number;
  } | null>(null);

  // --------------------------------------------------
  // RESET
  // --------------------------------------------------

  const resetZoom = useCallback(() => {
    setZoom(MIN_ZOOM);

    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);

    lastTouchDistance.current = null;
    lastTouchCenter.current = null;
  }, []);

  const resetLightboxZoom = useCallback(() => {
    setZoom(LIGHTBOX_BASE_ZOOM);

    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);

    lastTouchDistance.current = null;
    lastTouchCenter.current = null;
  }, []);

  // --------------------------------------------------
  // ZOOM
  // --------------------------------------------------

  const zoomIn = useCallback(() => {
    setZoom((current) => Math.min(current + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((current) => {
      const next = Math.max(current - ZOOM_STEP, MIN_ZOOM);

      if (next === MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return next;
    });
  }, []);

  const toggleZoom = useCallback(() => {
    setZoom((current) => {
      if (current > MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });

        return MIN_ZOOM;
      }

      return LIGHTBOX_BASE_ZOOM;
    });

    setIsDragging(false);
  }, []);

  // --------------------------------------------------
  // WHEEL
  // --------------------------------------------------

  const handleWheel = useCallback(
    (event: ReactWheelEvent<HTMLDivElement>) => {
      if (!isLightboxOpen) {
        return;
      }

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
    },
    [isLightboxOpen, zoomIn, zoomOut],
  );

  // --------------------------------------------------
  // POINTER DOWN
  // --------------------------------------------------

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (zoom <= MIN_ZOOM) {
        return;
      }

      event.preventDefault();

      setIsDragging(true);

      dragStart.current = {
        x: event.clientX,
        y: event.clientY,
      };

      initialPosition.current = {
        ...position,
      };

      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [position, zoom],
  );

  // --------------------------------------------------
  // POINTER MOVE
  // --------------------------------------------------

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging || zoom <= MIN_ZOOM) {
        return;
      }

      const deltaX = event.clientX - dragStart.current.x;

      const deltaY = event.clientY - dragStart.current.y;

      setPosition({
        x: initialPosition.current.x + deltaX,
        y: initialPosition.current.y + deltaY,
      });
    },
    [isDragging, zoom],
  );

  // --------------------------------------------------
  // POINTER UP
  // --------------------------------------------------

  const handlePointerUp = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) {
        return;
      }

      setIsDragging(false);

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    },
    [isDragging],
  );

  // --------------------------------------------------
  // DOUBLE CLICK
  // --------------------------------------------------

  const handleDoubleClick = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      toggleZoom();
    },
    [toggleZoom],
  );

  // --------------------------------------------------
  // TOUCH HELPERS
  // --------------------------------------------------

  const getTouchDistance = (
    touches: ReactTouchEvent<HTMLDivElement>["touches"],
  ) => {
    const first = touches[0];
    const second = touches[1];

    if (!first || !second) {
      return 0;
    }

    return Math.hypot(
      second.clientX - first.clientX,
      second.clientY - first.clientY,
    );
  };

  const getTouchCenter = (
    touches: ReactTouchEvent<HTMLDivElement>["touches"],
  ) => {
    const first = touches[0];
    const second = touches[1];

    if (!first || !second) {
      return {
        x: 0,
        y: 0,
      };
    }

    return {
      x: (first.clientX + second.clientX) / 2,
      y: (first.clientY + second.clientY) / 2,
    };
  };

  // --------------------------------------------------
  // TOUCH START
  // --------------------------------------------------

  const handleTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      if (event.touches.length !== 2) {
        return;
      }

      event.preventDefault();

      lastTouchDistance.current = getTouchDistance(event.touches);

      lastTouchCenter.current = getTouchCenter(event.touches);
    },
    [],
  );

  // --------------------------------------------------
  // TOUCH MOVE
  // --------------------------------------------------

  const handleTouchMove = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      if (event.touches.length !== 2) {
        return;
      }

      event.preventDefault();

      const distance = getTouchDistance(event.touches);

      const center = getTouchCenter(event.touches);

      if (!lastTouchDistance.current) {
        lastTouchDistance.current = distance;
        lastTouchCenter.current = center;

        return;
      }

      const scaleDifference = distance / lastTouchDistance.current;

      setZoom((current) =>
        Math.min(Math.max(current * scaleDifference, MIN_ZOOM), MAX_ZOOM),
      );

      if (lastTouchCenter.current) {
        setPosition((current) => ({
          x: current.x + center.x - lastTouchCenter.current!.x,

          y: current.y + center.y - lastTouchCenter.current!.y,
        }));
      }

      lastTouchDistance.current = distance;
      lastTouchCenter.current = center;
    },
    [],
  );

  // --------------------------------------------------
  // TOUCH END
  // --------------------------------------------------

  const handleTouchEnd = useCallback(() => {
    lastTouchDistance.current = null;
    lastTouchCenter.current = null;

    setIsDragging(false);
  }, []);

  return {
    zoom,
    position,
    isDragging,

    resetZoom,
    resetLightboxZoom,

    zoomIn,
    zoomOut,
    toggleZoom,

    handleWheel,

    handlePointerDown,
    handlePointerMove,
    handlePointerUp,

    handleDoubleClick,

    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
