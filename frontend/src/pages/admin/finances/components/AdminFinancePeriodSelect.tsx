import { FormSelect } from "../../../../components/form/FormSelect";
import { type FinancePeriodOption } from "../../../../hooks/finance/useFinance";

type Props = {
  value: string;
  options: FinancePeriodOption[];
  onChange: (value: string) => void;
};

export const AdminFinancePeriodSelect = ({
  value,
  options,
  onChange,
}: Props) => {
  return (
    <div className="w-full sm:w-57.5">
      <FormSelect
        label="Okres"
        options={options.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
