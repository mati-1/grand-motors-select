type DetailingLineProps = {
  className?: string;
};

export const DetailingLine = ({ className = "" }: DetailingLineProps) => {
  return (
    <div
      className={`h-px w-full bg-linear-to-r from-transparent via-[#b99a5c]/30 to-transparent ${className}`}
    />
  );
};
