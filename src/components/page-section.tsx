import { LineComponent } from "../components/line";
import { LogoComponent } from "../components/logo";

export const PageSectionComponent = ({
  image,
  children,
  type,
  id,
  className,
}: {
  image: string;
  type?: "left" | "right";
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className="relative flex scroll-mt-22 flex-col border-[#b99a5c]/20
          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 via-black/85 to-black/80"
    >
      <div
        className={`flex flex-col  ${type === "right" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        {/* IMAGE */}
        <div className="relative min-h-90 w-full shrink-0 overflow-hidden sm:min-h-105 lg:w-1/2">
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className ?? ""}`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.2), rgba(0,0,0,.85)), url('${image}')`,
            }}
          />

          <div className="absolute bottom-5 right-5 text-right text-[9px] tracking-[0.3em] sm:bottom-8 sm:right-8 sm:text-[10px] lg:bottom-12 lg:right-12 lg:text-[11px] lg:tracking-[0.4em]">
            <LogoComponent
              type="emblem"
              className="w-9! pointer-events-none grayscale opacity-20 lg:w-12!"
              clickable={false}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`flex w-full min-w-0 flex-col ${type === "left" ? "lg:items-end lg:text-right" : "justify-center"} px-6 py-10 sm:px-10 sm:py-15 lg:w-1/2 lg:px-[4vw] lg:py-23.5`}
        >
          {children}
        </div>
      </div>
      <LineComponent
        type={type === "right" ? "right" : "left"}
        className={type === "left" ? "self-start mt-0!" : "self-end mt-0!"}
      />
    </section>
  );
};
