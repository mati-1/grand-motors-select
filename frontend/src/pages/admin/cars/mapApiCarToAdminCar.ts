import type { ApiCar } from "../../../api/cars";
import type { AdminCar } from "./components/AdminCarRow";

export const mapApiCarToAdminCar = (car: ApiCar): AdminCar => ({
  ...car,
});
