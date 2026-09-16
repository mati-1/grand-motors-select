import logo from "../../public/logohd.png";
import emblemLogo from "../../public/logohd emblem.png";

export const LogoComponent = ({
  onClick,
  showText = false,
  resize,
  className,
  clickable = true,
  type = "full",
}: {
  onClick?: () => void;
  showText?: boolean;
  resize?: boolean;
  className?: string;
  type?: "full" | "emblem";
  clickable?: boolean;
}) => {
  return (
    <a
      href={"/"}
      onClick={onClick}
      className={
        !clickable
          ? "pointer-events-none"
          : "group flex items-center justify-center transition duration-300 hover:brightness-125"
      }
    >
      <img
        src={type === "full" ? logo : emblemLogo}
        alt="Grand Motors Select"
        className={`transition-all duration-500 ${resize && !showText ? "w-27" : "w-32"} ${className}`}
      />
      {type === "full" && (
        <span
          className={`
                      ml-4 hidden overflow-hidden whitespace-nowrap
                      border-l transition-all border-[#b99a5c]/40 opacity-0 pl-4
                      text-[9px] tracking-[0.25em] text-[#888]
                      ${
                        !showText
                          ? `-translate-x-2.5
                       duration-500
                       opacity-0`
                          : `opacity-100`
                      }
                      xl:block
                    `}
        >
          SELECTED PREMIUM CARS
        </span>
      )}
    </a>
  );
};
