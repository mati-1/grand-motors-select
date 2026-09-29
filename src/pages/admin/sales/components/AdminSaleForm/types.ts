export type AdminSalePaymentMethod =
  | "bank_transfer"
  | "card"
  | "cash"
  | "financing";

export type AdminCustomerType = "individual" | "company";

export type AdminSaleFormValues = {
  carId: string;

  salePrice: string;
  saleDate: string;

  customerType: AdminCustomerType;
  customerName: string;
  customerEmail: string;
  customerPhone: string;

  companyName: string;
  nip: string;

  paymentMethod: AdminSalePaymentMethod;
  account: string;

  invoiceNumber: string;
  notes: string;
};
