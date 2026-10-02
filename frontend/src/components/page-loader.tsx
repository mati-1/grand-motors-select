import { useEffect, useState } from "react";
import { LogoComponent } from "./logo";

type PageLoaderProps = {
  videoSrc?: string;
  imageSources?: string[];
  ready?: boolean;
};

const MIN_IMAGE_LOADER_TIME = 300;
const CLOSE_DELAY = 200;
const FADE_DURATION = 700;
const MAX_WAIT_TIME = 6000;

const getVideoStorageKey = (videoSrc: string) => `gms-video-loaded:${videoSrc}`;

export const PageLoader = ({
  videoSrc,
  imageSources,
  ready = true,
}: PageLoaderProps) => {
  const galleryImages = imageSources?.filter(Boolean) ?? [];
  const hasVideo = Boolean(videoSrc);
  const hasGallery = galleryImages.length > 0;

  const [loading, setLoading] = useState(() => {
    if (hasVideo) {
      return sessionStorage.getItem(getVideoStorageKey(videoSrc!)) !== "true";
    }

    return hasGallery;
  });

  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let closeTimeout: ReturnType<typeof setTimeout> | undefined;
    let removeTimeout: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    let finished = false;

    const finishLoading = (storageKey?: string) => {
      if (cancelled || finished) {
        return;
      }

      finished = true;

      closeTimeout = setTimeout(() => {
        if (!cancelled) {
          setClosing(true);
        }
      }, CLOSE_DELAY);

      removeTimeout = setTimeout(() => {
        if (cancelled) {
          return;
        }

        if (storageKey) {
          sessionStorage.setItem(storageKey, "true");
        }

        setLoading(false);
      }, CLOSE_DELAY + FADE_DURATION);
    };

    if (hasVideo && videoSrc) {
      const storageKey = getVideoStorageKey(videoSrc);

      if (sessionStorage.getItem(storageKey) === "true") {
        setLoading(false);
        setClosing(false);

        return () => {
          if (closeTimeout) clearTimeout(closeTimeout);
          if (removeTimeout) clearTimeout(removeTimeout);
          if (fallbackTimeout) clearTimeout(fallbackTimeout);
        };
      }

      setLoading(true);
      setClosing(false);

      const video = document.createElement("video");

      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.src = videoSrc;

      const handleReady = () => {
        finishLoading(storageKey);
      };

      const handleError = () => {
        finishLoading(storageKey);
      };

      video.addEventListener("loadeddata", handleReady);
      video.addEventListener("canplay", handleReady);
      video.addEventListener("error", handleError);

      video.load();

      fallbackTimeout = setTimeout(() => {
        finishLoading(storageKey);
      }, MAX_WAIT_TIME);

      return () => {
        cancelled = true;

        video.removeEventListener("loadeddata", handleReady);
        video.removeEventListener("canplay", handleReady);
        video.removeEventListener("error", handleError);

        video.src = "";

        if (closeTimeout) clearTimeout(closeTimeout);
        if (removeTimeout) clearTimeout(removeTimeout);
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
    }

    if (hasGallery) {
      if (!ready) {
        setLoading(true);
        setClosing(false);

        return () => {
          cancelled = true;

          if (closeTimeout) clearTimeout(closeTimeout);
          if (removeTimeout) clearTimeout(removeTimeout);
          if (fallbackTimeout) clearTimeout(fallbackTimeout);
        };
      }

      setLoading(true);
      setClosing(false);

      const startedAt = performance.now();

      const images = galleryImages.map((src) => {
        const image = new Image();
        image.src = src;
        return image;
      });

      let loadedImages = 0;
      const loadedIndexes = new Set<number>();

      const handleImageReady = (index: number) => {
        if (cancelled || finished) {
          return;
        }

        if (loadedIndexes.has(index)) {
          return;
        }

        loadedIndexes.add(index);
        loadedImages += 1;

        if (loadedImages >= images.length) {
          const elapsed = performance.now() - startedAt;
          const remainingTime = Math.max(0, MIN_IMAGE_LOADER_TIME - elapsed);

          setTimeout(() => {
            finishLoading();
          }, remainingTime);
        }
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

        if (image.complete) {
          handleImageReady(index);
        }
      });

      fallbackTimeout = setTimeout(() => {
        finishLoading();
      }, MAX_WAIT_TIME);

      return () => {
        cancelled = true;

        images.forEach((image, index) => {
          image.removeEventListener("load", () => handleImageReady(index));
          image.removeEventListener("error", () => handleImageReady(index));
        });

        if (closeTimeout) clearTimeout(closeTimeout);
        if (removeTimeout) clearTimeout(removeTimeout);
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
    }

    setLoading(false);

    return () => {
      cancelled = true;

      if (closeTimeout) clearTimeout(closeTimeout);
      if (removeTimeout) clearTimeout(removeTimeout);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, [videoSrc, galleryImages.join("|"), ready]);

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
