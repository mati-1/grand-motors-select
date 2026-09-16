export const MainHeadingComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`mt-3 font-serif text-2xl md:text-4xl font-normal ${className || ""}`}
    >
      {children}
    </h2>
  );
};

export const SubHeadingComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={`text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#999] ${className || ""}`}
    >
      {children}
    </h3>
  );
};
