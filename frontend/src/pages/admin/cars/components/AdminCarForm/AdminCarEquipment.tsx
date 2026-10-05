import { useState } from "react";
import { FormInput } from "../../../../../components/form/FormInput";

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

export const AdminCarEquipment = ({ value, onChange }: Props) => {
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    const item = newItem.trim();

    if (!item) return;

    onChange([...value, item]);
    setNewItem("");
  };

  const removeItem = (index: number) => {
    onChange(value.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">Wyposażenie</h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Dodaj wyposażenie samochodu widoczne w ogłoszeniu.
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="flex-1">
            <FormInput
              id="equipment"
              label="Nowa pozycja"
              value={newItem}
              onChange={(event) => setNewItem(event.target.value)}
              placeholder="np. Harman Kardon"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addItem();
                }
              }}
            />
          </div>

          <button
            type="button"
            onClick={addItem}
            className="h-11 shrink-0 cursor-pointer self-end rounded-[10px] border border-white/10 px-4 text-[10px] text-[#E8E9E7]/50 transition-all duration-300 hover:border-[#4C9FE5]/30 hover:text-[#4C9FE5]"
          >
            Dodaj
          </button>
        </div>

        {value.length > 0 && (
          <div className="grid gap-2 md:grid-cols-2">
            {value.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center justify-between rounded-[10px] border border-white/8 bg-[ext-[#E8E9E7]/2 px-3 py-2.5"
              >
                <span className="text-[11px] text-[#E8E9E7]/55">{item}</span>

                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="cursor-pointer text-[10px] text-[#E8E9E7]/25 transition-colors hover:text-red-300"
                >
                  Usuń
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
