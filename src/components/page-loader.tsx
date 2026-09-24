import { useEffect, useState } from "react";

import { LogoComponent } from "./logo";

type PageLoaderProps = {
  videoSrc?: string;
  imageSources?: string[];
};

const MIN_IMAGE_LOADER_TIME = 1100;
const CLOSE_DELAY = 300;
const FADE_DURATION = 900;

const getVideoStorageKey = (videoSrc: string) => `gms-video-loaded:${videoSrc}`;

const getGalleryStorageKey = (imageSources: string[]) =>
  `gms-gallery-loaded:${imageSources.slice(0, 10).join("|")}`;

export const PageLoader = ({ videoSrc, imageSources }: PageLoaderProps) => {
  const galleryImages = imageSources?.slice(0, 10) ?? [];

  const galleryStorageKey =
    galleryImages.length > 0 ? getGalleryStorageKey(galleryImages) : undefined;

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

  useEffect(() => {
    let closeTimeout: ReturnType<typeof setTimeout> | undefined;
    let removeTimeout: ReturnType<typeof setTimeout> | undefined;
    let handled = false;

    /*
     * =========================
     * VIDEO
     * =========================
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

      const handleReady = () => {
        if (handled) return;

        handled = true;

        closeTimeout = setTimeout(() => {
          setClosing(true);
        }, CLOSE_DELAY);

        removeTimeout = setTimeout(() => {
          /*
           * Dopiero po zakończeniu loadera zapisujemy,
           * że video zostało przygotowane.
           */
          sessionStorage.setItem(storageKey, "true");

          setLoading(false);
        }, CLOSE_DELAY + FADE_DURATION);
      };

      video.addEventListener("loadeddata", handleReady);
      video.addEventListener("canplay", handleReady);

      video.src = videoSrc;
      video.load();

      return () => {
        handled = true;

        video.removeEventListener("loadeddata", handleReady);
        video.removeEventListener("canplay", handleReady);

        video.src = "";

        if (closeTimeout) {
          clearTimeout(closeTimeout);
        }

        if (removeTimeout) {
          clearTimeout(removeTimeout);
        }
      };
    }

    /*
     * =========================
     * GALLERY
     * =========================
     */

    if (galleryImages.length > 0 && galleryStorageKey) {
      const storageKey = galleryStorageKey;

      /*
       * Jeżeli galeria była już przygotowana
       * podczas tej sesji, nic nie pokazujemy.
       */
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

      const handleImageReady = (index: number) => {
        if (handled) return;

        if (loadedIndexes.has(index)) {
          return;
        }

        loadedIndexes.add(index);
        loadedImages += 1;

        /*
         * Czekamy na wszystkie 10 zdjęć.
         */
        if (loadedImages < images.length) {
          return;
        }

        handled = true;

        const elapsed = performance.now() - startedAt;

        /*
         * Loader zawsze pozostaje widoczny
         * przez minimum 1.8 sekundy.
         */
        const remainingTime = Math.max(0, MIN_IMAGE_LOADER_TIME - elapsed);

        /*
         * Najpierw spokojna pauza,
         * później rozpoczynamy fade.
         */
        closeTimeout = setTimeout(() => {
          setClosing(true);
        }, remainingTime + CLOSE_DELAY);

        /*
         * Po zakończeniu fade-out:
         * - zapisujemy galerię
         * - zdejmujemy loader
         */
        removeTimeout = setTimeout(
          () => {
            sessionStorage.setItem(storageKey, "true");

            setLoading(false);
          },
          remainingTime + CLOSE_DELAY + FADE_DURATION,
        );
      };

      images.forEach((image, index) => {
        const handleLoad = () => {
          handleImageReady(index);
        };

        const handleError = () => {
          /*
           * Jeżeli jedno zdjęcie nie może się załadować,
           * nie blokujemy całego loadera.
           */
          handleImageReady(index);
        };

        /*
         * Listenery przed src.
         */
        image.addEventListener("load", handleLoad);
        image.addEventListener("error", handleError);

        /*
         * Rozpoczynamy ładowanie.
         */
        image.src = galleryImages[index];

        /*
         * Obsługa zdjęć znajdujących się już w cache.
         */
        if (image.complete) {
          handleImageReady(index);
        }
      });

      return () => {
        /*
         * Bardzo ważne:
         *
         * Nie zapisujemy sessionStorage tutaj.
         *
         * Dzięki temu React StrictMode może wykonać
         * effect ponownie bez uznania galerii za gotową.
         */
        handled = true;

        if (closeTimeout) {
          clearTimeout(closeTimeout);
        }

        if (removeTimeout) {
          clearTimeout(removeTimeout);
        }
      };
    }

    setLoading(false);

    return () => {
      handled = true;

      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }

      if (removeTimeout) {
        clearTimeout(removeTimeout);
      }
    };
  }, [videoSrc, imageSources, galleryStorageKey]);

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
