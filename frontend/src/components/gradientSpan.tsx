export const GradientSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-linear-to-r from-[#7FC4F7] via-[#4C9FE5] to-[#2B6DB8] bg-clip-text text-transparent">
      {children}
    </span>
  );
};
