export type CarCondition = "Nowy" | "Używany";

export type CarStatus = "available" | "reservation" | "sold";

export type CarStatusType = "sale" | "preparing" | "sold";

export type CarInvoice = "VAT 23%" | "VAT MARŻA";

export type CarDetails = {
  body: string;
  color: string;
  interior: string;
  seats: string;
  doors: string;
  country: string;
};

export type CreateCarBody = {
  brand: string;
  model: string;
  condition: CarCondition;

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

  status: CarStatus;
  statusType?: CarStatusType;

  invoice: CarInvoice;

  featured: boolean;

  equipment: string[];

  details: CarDetails;
};
