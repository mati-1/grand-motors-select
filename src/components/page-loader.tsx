import { useEffect, useState } from "react";

import { LogoComponent } from "./logo";

type PageLoaderProps = {
  videoSrc?: string;
  imageSources?: string[];
};

const MIN_IMAGE_LOADER_TIME = 1000;
const CLOSE_DELAY = 300;
const FADE_DURATION = 900;
const MAX_WAIT_TIME = 6000;

const getVideoStorageKey = (videoSrc: string) => `gms-video-loaded:${videoSrc}`;

const getGalleryStorageKey = (signature: string) =>
  `gms-gallery-loaded:${signature}`;

export const PageLoader = ({ videoSrc, imageSources }: PageLoaderProps) => {
  const gallerySignature = imageSources?.slice(0, 10).join("|") ?? "";

  const galleryImages =
    gallerySignature.length > 0 ? gallerySignature.split("|") : [];

  const galleryStorageKey =
    gallerySignature.length > 0
      ? getGalleryStorageKey(gallerySignature)
      : undefined;

  /*
   * =========================================================
   * INITIAL STATE
   * =========================================================
   */

  const [loading, setLoading] = useState(() => {
    if (videoSrc) {
      return sessionStorage.getItem(getVideoStorageKey(videoSrc)) !== "true";
    }

    if (galleryStorageKey) {
      return sessionStorage.getItem(galleryStorageKey) !== "true";
    }

    return false;
  });

  const [closing, setClosing] = useState(false);

  /*
   * =========================================================
   * EFFECT
   * =========================================================
   */

  useEffect(() => {
    let closeTimeout: ReturnType<typeof setTimeout> | undefined;
    let removeTimeout: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let handled = false;

    /*
     * =======================================================
     * VIDEO
     * =======================================================
     */

    if (videoSrc) {
      const storageKey = getVideoStorageKey(videoSrc);

      if (sessionStorage.getItem(storageKey) === "true") {
        setLoading(false);
        return;
      }

      setLoading(true);
      setClosing(false);

      const video = document.createElement("video");

      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;

      const finishLoading = () => {
        if (handled) return;

        handled = true;

        closeTimeout = setTimeout(() => {
          setClosing(true);
        }, CLOSE_DELAY);

        removeTimeout = setTimeout(() => {
          sessionStorage.setItem(storageKey, "true");
          setLoading(false);
        }, CLOSE_DELAY + FADE_DURATION);
      };

      const handleReady = () => {
        finishLoading();
      };

      const handleError = () => {
        finishLoading();
      };

      video.addEventListener("loadeddata", handleReady);

      video.addEventListener("canplay", handleReady);

      video.addEventListener("error", handleError);

      video.src = videoSrc;
      video.load();

      fallbackTimeout = setTimeout(() => {
        finishLoading();
      }, MAX_WAIT_TIME);

      return () => {
        handled = true;

        video.removeEventListener("loadeddata", handleReady);

        video.removeEventListener("canplay", handleReady);

        video.removeEventListener("error", handleError);

        video.src = "";

        if (closeTimeout) {
          clearTimeout(closeTimeout);
        }

        if (removeTimeout) {
          clearTimeout(removeTimeout);
        }

        if (fallbackTimeout) {
          clearTimeout(fallbackTimeout);
        }
      };
    }

    /*
     * =======================================================
     * GALLERY
     * =======================================================
     */

    if (galleryImages.length > 0 && galleryStorageKey) {
      const storageKey = galleryStorageKey;

      if (sessionStorage.getItem(storageKey) === "true") {
        setLoading(false);
        return;
      }

      setLoading(true);
      setClosing(false);

      const startedAt = performance.now();

      const images = galleryImages.map(() => new Image());

      let loadedImages = 0;

      const loadedIndexes = new Set<number>();

      const finishLoading = () => {
        if (handled) return;

        handled = true;

        const elapsed = performance.now() - startedAt;

        const remainingTime = Math.max(0, MIN_IMAGE_LOADER_TIME - elapsed);

        closeTimeout = setTimeout(() => {
          setClosing(true);
        }, remainingTime + CLOSE_DELAY);

        removeTimeout = setTimeout(
          () => {
            sessionStorage.setItem(storageKey, "true");

            setLoading(false);
          },
          remainingTime + CLOSE_DELAY + FADE_DURATION,
        );
      };

      const handleImageReady = (index: number) => {
        if (handled) return;

        if (loadedIndexes.has(index)) {
          return;
        }

        loadedIndexes.add(index);
        loadedImages += 1;

        if (loadedImages < images.length) {
          return;
        }

        finishLoading();
      };

      images.forEach((image, index) => {
        const handleLoad = () => {
          handleImageReady(index);
        };

        const handleError = () => {
          handleImageReady(index);
        };

        image.addEventListener("load", handleLoad);
        image.addEventListener("error", handleError);
        image.src = galleryImages[index];

        if (image.complete) {
          handleImageReady(index);
        }
      });

      fallbackTimeout = setTimeout(() => {
        finishLoading();
      }, MAX_WAIT_TIME);

      return () => {
        handled = true;

        if (closeTimeout) {
          clearTimeout(closeTimeout);
        }

        if (removeTimeout) {
          clearTimeout(removeTimeout);
        }

        if (fallbackTimeout) {
          clearTimeout(fallbackTimeout);
        }
      };
    }

    /*
     * =======================================================
     * BRAK VIDEO / GALERII
     * =======================================================
     */

    setLoading(false);

    return () => {
      handled = true;

      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }

      if (removeTimeout) {
        clearTimeout(removeTimeout);
      }

      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
    };
  }, [videoSrc, gallerySignature, galleryStorageKey]);

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 z-9999
        flex items-center justify-center
        overflow-hidden
        bg-[#050505]
        transition-all duration-900
        ease-[cubic-bezier(0.76,0,0.24,1)]
        ${closing ? "pointer-events-none opacity-0" : "opacity-100"}
      `}
    >
      <div
        className={`
          flex flex-col items-center gap-6
          transition-all duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            closing
              ? "-translate-y-3 scale-[0.98] opacity-0 blur-[2px]"
              : "translate-y-0 scale-100 opacity-100 blur-0"
          }
        `}
      >
        <div
          className={`
            transition-all duration-1000
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${closing ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"}
          `}
        >
          <LogoComponent
            clickable={false}
            type="emblem"
            className="w-14! lg:w-17!"
          />
        </div>

        <div className="relative h-px w-24 overflow-hidden bg-white/10">
          <div
            className="
              absolute inset-y-0 left-0
              w-full
              bg-[#d2b878]
              blur-[0.3px]
              animate-[loader_1.8s_ease-in-out_infinite]
            "
          />
        </div>

        <span
          className={`
            text-[8px]
            tracking-[0.35em]
            text-[#666]
            transition-all duration-700
            ${closing ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"}
          `}
        >
          GRAND MOTORS SELECT
        </span>
      </div>
    </div>
  );
};
