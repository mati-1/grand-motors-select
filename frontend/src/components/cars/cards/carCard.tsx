import type { CarType } from "../cars";
import { CarCardDefault } from "./carCardDefault";
import { CarCardHorizontal } from "./carCardHorizontal";

type CarCardProps = {
  car: CarType;
  variant?: "default" | "horizontal";
};

export const CarCard = ({ car, variant = "default" }: CarCardProps) => {
  if (variant === "horizontal") {
    return (
      <>
        {/* MOBILE */}
        <div className="block sm:hidden">
          <CarCardDefault car={car} />
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:block">
          <CarCardHorizontal car={car} />
        </div>
      </>
    );
  }

  return <CarCardDefault car={car} />;
};
