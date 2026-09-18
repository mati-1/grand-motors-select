type CarReportCardProps = {
  title: string;
  subtitle: string;
  fileUrl: string;
  fileName?: string;
};

export const CarReportCard = ({
  title,
  subtitle,
  fileUrl,
  fileName = "carvertical-report.pdf",
}: CarReportCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-[#090909]
        transition-all
        duration-500
        hover:border-[#b99a5c]/35
      "
    >
      {/* GOLD ACCENT */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-px
          origin-top
          scale-y-0
          bg-[#b99a5c]
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      {/* TOP */}
      <div className="flex items-start justify-between border-b border-white/5 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b99a5c]" />

          <span className="text-[8px] tracking-[0.28em] text-[#777]">
            GMS / RAPORT HISTORII POJAZDU
          </span>
        </div>

        <span className="text-[10px] tracking-[0.2em] text-[#444]">PDF</span>
      </div>

      {/* CONTENT */}
      <div className="px-5 py-7 sm:px-7 sm:py-8">
        <p className="text-[9px] tracking-[0.3em] text-[#555]">CARVERTICAL</p>

        <h3 className="mt-3 font-serif text-[22px] tracking-[0.02em] text-[#ddd] sm:text-[26px]">
          {title}
        </h3>

        <p className="mt-2 text-[10px] tracking-[0.12em] text-[#666]">
          {subtitle}
        </p>

        {/* DIVIDER */}
        <div className="my-7 h-px w-full bg-white/5" />

        {/* DOWNLOAD */}
        <a
          href={fileUrl}
          download={fileName}
          className="
            group/download
            inline-flex
            items-center
            gap-4
            text-[9px]
            tracking-[0.22em]
            text-[#aaa]
            transition-colors
            duration-300
            hover:text-[#d2b878]
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-white/10
              text-[12px]
              text-[#777]
              transition-all
              duration-300
              group-hover/download:border-[#b99a5c]/50
              group-hover/download:text-[#b99a5c]
            "
          >
            ↓
          </span>

          <span>POBIERZ RAPORT</span>
        </a>
      </div>

      {/* BOTTOM META */}
      <div className="border-t border-white/5 px-5 py-3 sm:px-7">
        <span className="text-[10px] tracking-[0.18em] text-[#444]">
          BEZPIECZNE POBIERANIE ✓
        </span>
      </div>
    </div>
  );
};
