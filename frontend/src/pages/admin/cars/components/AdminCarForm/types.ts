import type { CarType } from "../../../../../components/cars/cars";

export type AdminCarFormValues = Omit<CarType, "id" | "slug">;
