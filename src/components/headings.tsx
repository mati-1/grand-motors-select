export const MainHeadingComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`mt-3 font-semibold text-2xl md:text-4xl ${className || ""}`}
    >
      {children}
    </h1>
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
    <h3 className={`text-[12px] md:text-[14px] text-[#999] ${className || ""}`}>
      {children}
    </h3>
  );
};
