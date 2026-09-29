import { FormInput } from "../../../../components/form/FormInput";
import { FormSelect } from "../../../../components/form/FormSelect";

const vatOptions = [
  {
    value: "vat",
    label: "VAT czynny",
  },
  {
    value: "exempt",
    label: "Zwolniony z VAT",
  },
];

const defaultInvoiceOptions = [
  {
    value: "margin",
    label: "VAT marża",
  },
  {
    value: "vat23",
    label: "VAT 23%",
  },
];

export const AdminCompanyDetails = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-white/8
        bg-[#090909]
      "
    >
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Dane firmy</h3>

        <p className="mt-1 text-[11px] text-white/25">
          Informacje wykorzystywane na dokumentach i fakturach
        </p>
      </div>

      <div className="space-y-4 p-5">
        <FormInput
          id="company-name"
          label="Nazwa firmy"
          defaultValue="Grand Motors Select"
        />

        <FormInput
          id="company-full-name"
          label="Pełna nazwa przedsiębiorcy"
          placeholder="Imię i nazwisko / pełna nazwa"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput id="company-nip" label="NIP" placeholder="0000000000" />

          <FormInput id="company-regon" label="REGON" placeholder="000000000" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            label="Status VAT"
            value="vat"
            options={vatOptions}
            onChange={() => {}}
          />

          <FormSelect
            label="Domyślna faktura"
            value="margin"
            options={defaultInvoiceOptions}
            onChange={() => {}}
          />
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="mb-3 text-[10px] text-white/30">Adres siedziby</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_100px]">
            <FormInput
              id="company-street"
              label="Ulica"
              placeholder="Nazwa ulicy"
            />

            <FormInput id="company-building" label="Numer" placeholder="12" />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[110px_1fr]">
            <FormInput
              id="company-postal"
              label="Kod pocztowy"
              placeholder="32-000"
            />

            <FormInput
              id="company-city"
              label="Miejscowość"
              placeholder="Bochnia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
