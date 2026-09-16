export const LineComponent = (className: {
  className?: string;
  type?: "right" | "left";
}) => (
  <div
    className={`max-w-150 w-[50%] h-px bg-[#b8944a] bg-linear-to-r  mt-10 ${className.className} ${className.type === "right" ? "from-black/95 to-black/80" : "from-black/80 to-black/95"}`}
  ></div>
);
