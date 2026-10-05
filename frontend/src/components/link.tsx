export const LinkComponent = ({
  href,
  text,
  onClick,
  active = false,
}: {
  href: string;
  text: string;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-light whitespace-nowrap text-[13px] md:text-[12px] text-[#E8E9E7] transition-colors hover:text-[#4C9FE5]   ${
        active ? "text-[#4C9FE5]!" : "hover:text-[#4C9FE5]"
      }`}
    >
      {text}
    </a>
  );
};
