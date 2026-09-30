import type { AdminSaleFormValues } from "./types";

export const defaultSaleFormValues: AdminSaleFormValues = {
  carId: "",

  salePrice: "",
  saleDate: new Date().toISOString().split("T")[0],

  customerType: "individual",

  customerName: "",
  customerEmail: "",
  customerPhone: "",

  companyName: "",
  nip: "",

  paymentMethod: "bank_transfer",
  account: "",

  invoiceNumber: "",
  notes: "",
};
