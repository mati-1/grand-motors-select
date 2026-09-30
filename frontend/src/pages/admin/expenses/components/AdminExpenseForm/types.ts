export type AdminExpenseCategory =
  | "purchase"
  | "transport"
  | "excise"
  | "translation"
  | "registration"
  | "insurance"
  | "service"
  | "parts"
  | "tires"
  | "detailing"
  | "ppf"
  | "paint"
  | "bodywork"
  | "diagnostics"
  | "listing"
  | "commission"
  | "financing"
  | "office"
  | "marketing"
  | "fuel"
  | "accounting"
  | "software"
  | "other";

export type AdminExpenseType = "car" | "company";

export type AdminPaymentMethod = "bank_transfer" | "card" | "cash";

export type AdminExpenseFormValues = {
  amount: string;
  date: string;

  type: AdminExpenseType;
  category: AdminExpenseCategory;

  carId: string;

  description: string;

  paymentMethod: AdminPaymentMethod;
  account: string;

  documentNumber: string;
  documentUrl: string;
};
