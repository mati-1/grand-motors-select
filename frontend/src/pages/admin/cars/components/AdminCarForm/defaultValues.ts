import type { AdminCarFormValues } from "./types";

export const defaultCarFormValues: AdminCarFormValues = {
  brand: "",
  model: "",
  condition: "Używany",

  vin: "",
  year: new Date().getFullYear(),
  mileage: "",

  engine: "",
  power: "",
  transmission: "",
  drive: "",
  fuel: "",

  carvertical: false,

  price: "",
  location: "",
  voivodeship: "",

  negotiation: false,
  accidentFree: false,

  description: "",

  status: "available",
  invoice: "VAT MARŻA",

  featured: false,

  equipment: [],

  details: {
    body: "",
    color: "",
    interior: "",
    seats: "",
    doors: "",
    country: "",
  },
};
