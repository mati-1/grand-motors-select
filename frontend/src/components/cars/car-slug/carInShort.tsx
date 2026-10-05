import { SpecificationItem } from "./carInfo";

import EngineIcon from "../../../assets/icons/zebatka.svg?react";
import DriveIcon from "../../../assets/icons/naped.svg?react";
import PowerIcon from "../../../assets/icons/moc.svg?react";
import MileageIcon from "../../../assets/icons/przebieg.svg?react";
import YearIcon from "../../../assets/icons/rok.svg?react";
import TransmissionIcon from "../../../assets/icons/skrzynia-biegow.svg?react";
import type { CarType } from "../cars";
import { MainHeadingComponent } from "../../headings";

type Specification = {
  label: string;
  value: string | number;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const CarInShort = ({ car }: { car: CarType }) => {
  const specifications: Specification[] = [
    {
      label: "ROK",
      value: car.year,
      icon: YearIcon,
    },
    {
      label: "PRZEBIEG",
      value: `${car.mileage} km`,
      icon: MileageIcon,
    },
    {
      label: "SILNIK",
      value: car.engine,
      icon: EngineIcon,
    },
    {
      label: "MOC",
      value: `${car.power} KM`,
      icon: PowerIcon,
    },
    {
      label: "SKRZYNIA BIEGÓW",
      value: car.transmission,
      icon: TransmissionIcon,
    },
    {
      label: "NAPĘD",
      value: car.drive,
      icon: DriveIcon,
    },
  ];

  return (
    <section className="pt-3 flex flex-col gap-3 pb-5 lg:pt-8">
      <MainHeadingComponent
        className="
                mt-0!
                text-[16px]!
                md:text-[20px]!
            "
      >
        W skrócie
      </MainHeadingComponent>

      <div
        className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3
          "
      >
        {specifications.map((specification) => (
          <SpecificationItem
            key={specification.label}
            label={specification.label}
            value={specification.value}
            icon={specification.icon}
          />
        ))}
      </div>
    </section>
  );
};
