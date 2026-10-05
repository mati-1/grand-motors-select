type DetailingSectionLabelProps = {
  number: string;
  children: React.ReactNode;
};

export const DetailingSectionLabel = ({
  number,
  children,
}: DetailingSectionLabelProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[9px]  text-[#4C9FE5]">{number}</span>

      <span className="h-px w-8 bg-[#4C9FE5]/50" />

      <span className="text-[9px]  text-[#777]">{children}</span>
    </div>
  );
};
