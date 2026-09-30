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
      className={`relative font-light whitespace-nowrap text-[13px] md:text-[12px] text-white transition-colors hover:text-[#d2b878]   ${
        active ? "text-[#d2b878]!" : "hover:text-[#d2b878]"
      }`}
    >
      {text}
    </a>
  );
};
