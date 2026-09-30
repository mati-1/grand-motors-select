import logo from "../../public/nowe-logo.png";
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
        className={`transition-all duration-500 ${resize && !showText ? "w-46 md:w-48" : "w-49 md:w-51"} ${className}`}
      />
    </a>
  );
};
