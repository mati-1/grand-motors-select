import type { SortOption } from "../../../hooks/useCarFilters";

export const priceOptions = [
  { value: "all", label: "Dowolna" },
  { value: "50000", label: "50 000 PLN" },
  { value: "100000", label: "100 000 PLN" },
  { value: "150000", label: "150 000 PLN" },
  { value: "200000", label: "200 000 PLN" },
  { value: "250000", label: "250 000 PLN" },
  { value: "300000", label: "300 000 PLN" },
];

export const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "default",
    label: "Domyślne",
  },
  {
    value: "priceAsc",
    label: "Cena — Rosnąco",
  },
  {
    value: "priceDesc",
    label: "Cena — Malejąco",
  },
  {
    value: "yearDesc",
    label: "Najnowsze",
  },
  {
    value: "mileageAsc",
    label: "Przebieg — Rosnąco",
  },
];

export const fuelOptions = [
  {
    value: "all",
    label: "Dowolne",
  },
  {
    value: "Benzyna",
    label: "Benzyna",
  },
  {
    value: "Diesel",
    label: "Diesel",
  },
  {
    value: "Elektryczne",
    label: "Eelektryczne",
  },
];
