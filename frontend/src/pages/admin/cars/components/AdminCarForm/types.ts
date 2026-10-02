export type AdminCarFormValues = {
  brand: string;
  model: string;
  condition: "Nowy" | "Używany";

  vin: string;
  year: number;
  mileage: string;

  engine: string;
  power: string;
  transmission: string;
  drive: string;
  fuel: string;

  carvertical: boolean;

  price: string;
  location: string;
  voivodeship: string;

  negotiation: boolean;
  accidentFree: boolean;

  description: string;

  status: "available" | "reservation" | "sold";
  invoice: "VAT 23%" | "VAT MARŻA";

  featured: boolean;

  equipment: string[];

  details: {
    body: string;
    color: string;
    interior: string;
    seats: string;
    doors: string;
    country: string;
  };
};
