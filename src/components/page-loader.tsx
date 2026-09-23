import { useEffect, useState } from "react";

import { LogoComponent } from "./logo";

type PageLoaderProps = {
  videoSrc?: string;
};

const getStorageKey = (videoSrc: string) => `gms-video-loaded:${videoSrc}`;

export const PageLoader = ({ videoSrc }: PageLoaderProps) => {
  const [loading, setLoading] = useState(() => {
    if (!videoSrc) return false;

    return sessionStorage.getItem(getStorageKey(videoSrc)) !== "true";
  });

  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!videoSrc) {
      setLoading(false);
      return;
    }

    const storageKey = getStorageKey(videoSrc);

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
      sessionStorage.setItem(storageKey, "true");

      setTimeout(() => {
        setClosing(true);
      }, 300);

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);

    video.src = videoSrc;
    video.load();

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.src = "";
    };
  }, [videoSrc]);

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
        transition-all duration-900 ease-[cubic-bezier(0.76,0,0.24,1)]
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
