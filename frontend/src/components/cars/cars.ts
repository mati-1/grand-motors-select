export type CarType = {
  id: string;
  slug: string;
  accidentFree: boolean;
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
  image: string;
  images: string[];
  negotiation: boolean;
  description: string;
  status: "available" | "sold" | "reservation";
  invoice: "VAT 23%" | "VAT MARŻA";
  createdAt: string;
  equipment: string[];

  details: {
    body: string;
    color: string;
    interior: string;
    seats: string;
    doors: string;
    country: string;
  };

  history: {
    title: string;
    description: string;
  }[];

  featured?: boolean;
};

export const carsYears = [
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  2025,
];
