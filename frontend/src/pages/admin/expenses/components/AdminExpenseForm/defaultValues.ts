import type { AdminExpenseFormValues } from "./types";

export const defaultExpenseFormValues: AdminExpenseFormValues = {
  amount: "",
  date: new Date().toISOString().split("T")[0],

  type: "car",
  category: "service",

  carId: "",

  description: "",

  paymentMethod: "bank_transfer",
  account: "",

  documentNumber: "",
  documentUrl: "",
};
