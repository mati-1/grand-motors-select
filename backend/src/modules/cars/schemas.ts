import { z } from "zod";

export const carIdParamsSchema = {
  type: "object",
  required: ["id"],
  properties: {
    id: {
      type: "string",
      minLength: 1,
    },
  },
} as const;

export const createCarSchema = z.object({
  brand: z.string().trim().min(1, "Marka jest wymagana."),
  model: z.string().trim().min(1, "Model jest wymagany."),

  condition: z.enum(["Nowy", "Używany"]),

  vin: z.string().trim().min(1, "VIN jest wymagany."),

  year: z
    .number()
    .int()
    .min(1900, "Rok produkcji jest nieprawidłowy.")
    .max(2100, "Rok produkcji jest nieprawidłowy."),

  mileage: z.string().trim().min(1, "Przebieg jest wymagany."),

  engine: z.string().trim().min(1, "Silnik jest wymagany."),
  power: z.string().trim().min(1, "Moc jest wymagana."),
  transmission: z.string().trim().min(1, "Skrzynia biegów jest wymagana."),
  drive: z.string().trim().min(1, "Napęd jest wymagany."),
  fuel: z.string().trim().min(1, "Rodzaj paliwa jest wymagany."),

  carvertical: z.boolean(),

  price: z.string().trim().min(1, "Cena jest wymagana."),
  location: z.string().trim().min(1, "Lokalizacja jest wymagana."),
  voivodeship: z.string().trim().min(1, "Województwo jest wymagane."),

  negotiation: z.boolean(),
  accidentFree: z.boolean(),

  description: z.string().trim().min(1, "Opis jest wymagany."),

  status: z.enum(["available", "reservation", "sold"]),

  statusType: z.enum(["sale", "preparing", "sold"]).optional(),

  invoice: z.enum(["VAT 23%", "VAT MARŻA"]),

  featured: z.boolean(),

  equipment: z.array(z.string().trim().min(1)).default([]),

  details: z.object({
    body: z.string().trim().min(1, "Typ nadwozia jest wymagany."),
    color: z.string().trim().min(1, "Kolor jest wymagany."),
    interior: z.string().trim().min(1, "Wnętrze jest wymagane."),
    seats: z.string().trim().min(1, "Liczba miejsc jest wymagana."),
    doors: z.string().trim().min(1, "Liczba drzwi jest wymagana."),
    country: z.string().trim().min(1, "Kraj pochodzenia jest wymagany."),
  }),
});

export const updateCarImageSchema = z.object({
  isPrimary: z.boolean().optional(),
  position: z.number().int().min(0).optional(),
});

export const updateCarImagePrimarySchema = z.object({
  isPrimary: z.boolean(),
});

export const updateCarImagePositionSchema = z.object({
  position: z.number().int().min(0),
});

export const updateCarSchema = createCarSchema.partial();

export type CreateCarInput = z.infer<typeof createCarSchema>;

export type UpdateCarInput = z.infer<typeof updateCarSchema>;

export type UpdateCarImageInput = z.infer<typeof updateCarImageSchema>;

export type UpdateCarImagePrimaryInput = z.infer<
  typeof updateCarImagePrimarySchema
>;

export type UpdateCarImagePositionInput = z.infer<
  typeof updateCarImagePositionSchema
>;
