import { FormTextarea } from "../../../../../components/form/FormTextarea";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const AdminCarDescription = ({ value, onChange }: Props) => {
  return (
    <section className="rounded-[10px] border border-white/8 bg-[#4C9FE5]/5">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#E8E9E7]">Opis</h3>

        <p className="mt-1 text-[10px] text-[#E8E9E7]/30">
          Opis samochodu widoczny na stronie.
        </p>
      </div>

      <div className="p-5">
        <FormTextarea
          id="description"
          label="Opis samochodu"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Opisz samochód, jego historię oraz najważniejsze informacje..."
          rows={8}
        />
      </div>
    </section>
  );
};
