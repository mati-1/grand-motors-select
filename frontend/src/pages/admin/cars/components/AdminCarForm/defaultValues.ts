import type { AdminCarFormValues } from "./types";

export const defaultCarFormValues: AdminCarFormValues = {
  accidentFree: true,

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

  image: "",
  images: [],

  negotiation: false,

  description: "",

  status: "available",

  invoice: "VAT MARŻA",

  equipment: [],

  details: {
    body: "",
    color: "",
    interior: "",
    seats: "",
    doors: "",
    country: "",
  },

  history: [],

  featured: false,
};
