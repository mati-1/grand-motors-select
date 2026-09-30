import { useState } from "react";
import type { AdminCarFormValues } from "./types";

type Props = {
  value: AdminCarFormValues["history"];
  onChange: (value: AdminCarFormValues["history"]) => void;
};

export const AdminCarHistory = ({ value, onChange }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addHistory = () => {
    if (!title.trim() || !description.trim()) return;

    onChange([
      ...value,
      {
        title: title.trim(),
        description: description.trim(),
      },
    ]);

    setTitle("");
    setDescription("");
  };

  const removeHistory = (index: number) => {
    onChange(value.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">
          Historia samochodu
        </h3>

        <p className="mt-1 text-[10px] text-white/30">
          Dodaj najważniejsze informacje dotyczące historii auta.
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[10px] text-white/45">
              Tytuł
            </label>

            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="np. Zakup w Niemczech"
              className="h-11 w-full rounded-[8px] border border-white/10 bg-white/[0.025] px-4 text-[12px] text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#b99a5c]/50 focus:bg-white/[0.035]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] text-white/45">
              Opis
            </label>

            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="np. Samochód sprowadzony od pierwszego właściciela"
              className="h-11 w-full rounded-[8px] border border-white/10 bg-white/[0.025] px-4 text-[12px] text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-[#b99a5c]/50 focus:bg-white/[0.035]"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={addHistory}
          className="h-10 cursor-pointer rounded-[8px] border border-white/10 px-4 text-[10px] text-white/50 transition-all duration-300 hover:border-[#b99a5c]/30 hover:text-[#d2b878]"
        >
          Dodaj wpis
        </button>

        {value.length > 0 && (
          <div className="space-y-2">
            {value.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex items-start justify-between gap-4 rounded-[8px] border border-white/8 bg-white/[0.02] p-3"
              >
                <div>
                  <p className="text-[11px] text-white/70">{item.title}</p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-white/30">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeHistory(index)}
                  className="shrink-0 cursor-pointer text-[10px] text-white/25 transition-colors hover:text-red-300"
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
