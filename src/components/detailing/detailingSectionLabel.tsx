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
      <span className="text-[9px]  text-[#b99a5c]">{number}</span>

      <span className="h-px w-8 bg-[#b99a5c]/50" />

      <span className="text-[9px]  text-[#777]">{children}</span>
    </div>
  );
};
