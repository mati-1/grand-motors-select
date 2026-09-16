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
      className={`relative whitespace-nowrap text-[10px] tracking-[0.08em] text-[#aaa] transition-colors hover:text-[#d2b878]   ${
        active ? "text-[#d2b878]" : "text-white/70 hover:text-[#d2b878]"
      }`}
    >
      {text}
    </a>
  );
};
