import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../components/headings";
import { LineComponent } from "../../components/line";
import { ButtonComponent } from "../../components/button";

type Car = {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  engine: string;
  price: string;
  image: string;
};

const cars: Car[] = [
  {
    brand: "BMW",
    model: "M550i xDrive",
    year: "2018",
    mileage: "68 000 km",
    engine: "4.4 V8",
    price: "115 000 PLN",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    brand: "Mercedes-Benz",
    model: "C63 AMG",
    year: "2016",
    mileage: "72 000 km",
    engine: "4.0 V8",
    price: "159 000 PLN",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    brand: "Audi",
    model: "S6 Avant",
    year: "2020",
    mileage: "54 000 km",
    engine: "3.0 V6",
    price: "189 000 PLN",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
  },
];

const CarCard = ({ car }: { car: Car }) => {
  return (
    <article
      className="group overflow-hidden border border-[#b99a5c]/20
          bg-[#b99a5c]/20
          bg-linear-to-r from-black/90 to-black/70 transition duration-500 hover:-translate-y-1.5 hover:border-[#b99a5c]/40"
    >
      <div className="h-65 overflow-hidden border-b border-white/10">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover brightness-[0.62] contrast-105 transition duration-500 group-hover:scale-[1.04] group-hover:brightness-[0.72]"
        />
      </div>

      <div className="p-6">
        <h3 className="text-base font-normal">
          {car.brand} <span className="text-[#888]">{car.model}</span>
        </h3>

        <div className="mt-3 flex gap-4.5 text-[9px] tracking-[0.08em] text-[#777]">
          <span>{car.year}</span>
          <span>{car.mileage}</span>
          <span>{car.engine}</span>
        </div>

        <div className="mt-6 flex flex-row items-center justify-between">
          <strong className="font-serif text-[21px] font-normal text-[#d2b878]">
            {car.price}
          </strong>
          <ButtonComponent
            href="#cars"
            size="small"
            type="main"
            className="opacity-0 group-hover:opacity-100 transition-all duration-400"
          >
            SPRAWDŹ →
          </ButtonComponent>
        </div>
      </div>
    </article>
  );
};

export const CarsComponent = () => {
  return (
    <section
      id="cars"
      className="flex scroll-mt-23 flex-col justify-center gap-4.5 w-full"
    >
      <div className="bg-[#060606] px-[5vw] py-10 sm:py-20 flex flex-col gap-8 md:gap-11">
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div>
            <SubHeadingComponent>
              NASZA AKTUALNA <span className="text-[#d2b878]">OFERTA</span>
            </SubHeadingComponent>

            <MainHeadingComponent>ZOBACZ NASZE SAMOCHODY</MainHeadingComponent>
          </div>

          <ButtonComponent href="#cars" size="big">
            SPRAWDŹ OFERTĘ →
          </ButtonComponent>
        </div>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={`${car.brand}-${car.model}`} car={car} />
          ))}
        </div>
      </div>
      <LineComponent className="mt-0!" />
    </section>
  );
};
