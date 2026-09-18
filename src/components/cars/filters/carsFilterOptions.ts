import type { SortOption } from "../../../hooks/useCarFilters";

export const priceOptions = [
  { value: "all", label: "DOWOLNA" },
  { value: "50000", label: "50 000 ZŁ" },
  { value: "100000", label: "100 000 ZŁ" },
  { value: "150000", label: "150 000 ZŁ" },
  { value: "200000", label: "200 000 ZŁ" },
  { value: "250000", label: "250 000 ZŁ" },
  { value: "300000", label: "300 000 ZŁ" },
];

export const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "default",
    label: "DOMYŚLNE",
  },
  {
    value: "priceAsc",
    label: "CENA — ROSNĄCO",
  },
  {
    value: "priceDesc",
    label: "CENA — MALEJĄCO",
  },
  {
    value: "yearDesc",
    label: "NAJNOWSZE",
  },
  {
    value: "mileageAsc",
    label: "PRZEBIEG — ROSNĄCO",
  },
];

export const fuelOptions = [
  {
    value: "all",
    label: "DOWOLNE",
  },
  {
    value: "Benzyna",
    label: "BENZYNA",
  },
  {
    value: "Diesel",
    label: "DIESEL",
  },
  {
    value: "Elektryczne",
    label: "ELEKTRYCZNE",
  },
];
