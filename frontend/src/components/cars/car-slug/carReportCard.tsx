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
        rounded-[10px]
        overflow-hidden
        border
        border-white/10
        bg-[#080808]
        transition-all
        duration-500
        hover:border-[#4C9FE5]/30
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
          bg-[#4C9FE5]
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      {/* TOP */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/6
          px-5
          py-4
          sm:px-6
        "
      >
        <div className="flex items-center gap-2.5">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#4C9FE5]
            "
          />

          <span
            className="
              text-[8px]
              font-normal
              
              text-[#555]
            "
          >
            GMS / RAPORT HISTORII POJAZDU
          </span>
        </div>

        <span
          className="
            text-[8px]
            
            text-[#444]
          "
        >
          PDF
        </span>
      </div>

      {/* CONTENT */}
      <div
        className="
          px-5
          py-6
          sm:px-6
          sm:py-7
        "
      >
        <p
          className="
            text-[9px]
            font-normal
            
            text-[#555]
          "
        >
          CARVERTICAL
        </p>

        <h3
          className="
            mt-2.5
            text-[20px]
            font-normal
            leading-[1.2]
            
            text-[#c8c8c8]
            sm:text-[22px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[10px]
            font-normal
            leading-normal
            
            text-[#666]
          "
        >
          {subtitle}
        </p>

        <div className="my-6 h-px w-full bg-[ext-[#E8E9E7]/6" />

        {/* DOWNLOAD */}
        <a
          href={fileUrl}
          download={fileName}
          className="
            group/download
            inline-flex
            min-h-10
            items-center
            gap-3
            text-[9px]
            font-normal
            
            text-[#888]
            transition-colors
            duration-300
            hover:text-[#4C9FE5]
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
              text-[#666]
              transition-all
              duration-300
              group-hover/download:border-[#4C9FE5]/40
              group-hover/download:text-[#4C9FE5]
            "
          >
            ↓
          </span>

          <span>POBIERZ RAPORT</span>

          <span
            className="
              text-[11px]
              text-[#555]
              transition-transform
              duration-300
              group-hover/download:translate-x-0.5
            "
          >
            →
          </span>
        </a>
      </div>

      {/* BOTTOM META */}
      <div
        className="
          border-t
          border-white/6
          px-5
          py-3
          sm:px-6
        "
      >
        <span
          className="
            text-[8px]
            font-normal
            
            text-[#444]
          "
        >
          BEZPIECZNE POBIERANIE ✓
        </span>
      </div>
    </div>
  );
};
