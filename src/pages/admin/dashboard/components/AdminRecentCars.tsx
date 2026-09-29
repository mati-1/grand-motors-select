import { Link } from "react-router-dom";

const cars = [
  {
    id: "1",
    name: "BMW G20 330i",
    details: "2020 · 58 200 km",
    purchase: "86 500 zł",
    investment: "91 850 zł",
    status: "Na sprzedaż",
    statusType: "sale",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800",
  },
  {
    id: "2",
    name: "Mercedes-Benz C43 AMG",
    details: "2019 · 71 400 km",
    purchase: "124 000 zł",
    investment: "131 700 zł",
    status: "Przygotowanie",
    statusType: "preparing",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800",
  },
  {
    id: "3",
    name: "Audi S6",
    details: "2017 · 94 100 km",
    purchase: "87 500 zł",
    investment: "93 200 zł",
    status: "Na sprzedaż",
    statusType: "sale",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800",
  },
];

export const AdminRecentCars = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/[0.08]
        bg-[#090909]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <h3 className="text-[11px] font-medium text-white">Samochody</h3>

          <p className="mt-1 text-[8px] text-white/25">
            Ostatnio dodane samochody.
          </p>
        </div>

        <Link
          to="/admin/cars"
          className="
            text-[9px]
            text-white/30
            transition-colors
            duration-300
            hover:text-[#d2b878]
          "
        >
          Zobacz wszystkie
        </Link>
      </div>

      {/* LIST */}
      <div>
        {cars.map((car, index) => (
          <Link
            key={car.id}
            to={`/admin/cars/${car.id}`}
            className={`
              group
              flex
              items-center
              gap-3
              px-5
              py-4
              transition-colors
              duration-300
              hover:bg-white/[0.02]
              ${index !== cars.length - 1 ? "border-b border-white/[0.05]" : ""}
            `}
          >
            <div className="h-12 w-[72px] shrink-0 overflow-hidden rounded-[6px] bg-white/5">
              <img
                src={car.image}
                alt={car.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium text-white">
                {car.name}
              </p>

              <p className="mt-1 text-[8px] text-white/25">{car.details}</p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-[9px] text-white/25">Inwestycja</p>

              <p className="mt-1 text-[10px] text-white">{car.investment}</p>
            </div>

            <div
              className={`
                hidden
                rounded-full
                px-2
                py-1
                text-[7px]
                sm:block
                ${
                  car.statusType === "sale"
                    ? "bg-[#b99a5c]/[0.07] text-[#b99a5c]"
                    : "bg-white/[0.05] text-white/35"
                }
              `}
            >
              {car.status}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
