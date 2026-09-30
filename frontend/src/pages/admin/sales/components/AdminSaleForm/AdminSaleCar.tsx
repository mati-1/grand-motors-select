import type { CarType } from "../../../../../components/cars/cars";
import { FormSelect } from "../../../../../components/form/FormSelect";

type Props = {
  cars: CarType[];
  selectedCar?: CarType;
  value: string;
  onChange: (value: string) => void;
};

export const AdminSaleCar = ({ cars, selectedCar, value, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Samochód</h3>

        <p className="mt-1 text-[10px] text-white/30">
          Wybierz samochód, który został sprzedany.
        </p>
      </div>

      <div className="space-y-5 p-5">
        <FormSelect
          label="Samochód"
          value={value}
          placeholder="Wybierz samochód"
          options={cars.map((car) => ({
            value: car.id,
            label: `${car.brand} ${car.model} · ${car.year}`,
          }))}
          onChange={onChange}
        />

        {selectedCar && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-[8px] border border-white/8 bg-white/[0.02] p-3">
              <span className="text-[9px] text-white/25">Przebieg</span>

              <p className="mt-1 text-[11px] text-white/65">
                {selectedCar.mileage}
              </p>
            </div>

            <div className="rounded-[8px] border border-white/8 bg-white/[0.02] p-3">
              <span className="text-[9px] text-white/25">Silnik</span>

              <p className="mt-1 text-[11px] text-white/65">
                {selectedCar.engine}
              </p>
            </div>

            <div className="rounded-[8px] border border-white/8 bg-white/[0.02] p-3">
              <span className="text-[9px] text-white/25">Moc</span>

              <p className="mt-1 text-[11px] text-white/65">
                {selectedCar.power}
              </p>
            </div>

            <div className="rounded-[8px] border border-white/8 bg-white/[0.02] p-3">
              <span className="text-[9px] text-white/25">Cena ogłoszenia</span>

              <p className="mt-1 text-[11px] text-[#d2b878]">
                {selectedCar.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
