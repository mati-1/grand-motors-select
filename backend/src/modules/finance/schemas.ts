import { z } from "zod";

export const financeTransactionTypeSchema = z.enum([
  "income",
  "expense",
  "capital_in",
  "capital_out",
]);

export const financeTransactionCategorySchema = z.enum([
  "car_sale",
  "car_purchase",
  "car_service",
  "car_parts",
  "detailing",
  "transport",
  "marketing",
  "insurance",
  "tax",
  "company",
  "other",
]);

export const createFinanceTransactionSchema = z.object({
  type: financeTransactionTypeSchema,

  category: financeTransactionCategorySchema,

  title: z.string().trim().min(1, "Tytuł jest wymagany.").max(200),

  description: z.string().trim().max(1000).optional(),

  amount: z.number().positive("Kwota musi być większa od 0."),

  date: z.string().datetime().optional(),

  carId: z.string().optional(),

  affectsProfit: z.boolean().default(true),
});

export const financeTransactionIdParamsSchema = z.object({
  id: z.string(),
});

export const updateFinanceTransactionSchema = z
  .object({
    type: financeTransactionTypeSchema.optional(),
    category: financeTransactionCategorySchema.optional(),
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().trim().max(1000).nullable().optional(),
    amount: z.number().positive().optional(),
    date: z.string().datetime().optional(),
    carId: z.string().nullable().optional(),
    affectsProfit: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Podaj przynajmniej jedno pole do aktualizacji.",
  });
