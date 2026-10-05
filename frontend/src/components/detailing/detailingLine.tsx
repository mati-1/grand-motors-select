type DetailingLineProps = {
  className?: string;
};

export const DetailingLine = ({ className = "" }: DetailingLineProps) => {
  return (
    <div
      className={`h-px w-full bg-linear-to-r from-transparent via-[#4C9FE5]/30 to-transparent ${className}`}
    />
  );
};
