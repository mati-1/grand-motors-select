import type { ApiCar } from "../../../api/cars";

export const colorByStatus = ({
  status,
  hasBg,
}: {
  status: ApiCar["statusType"];
  hasBg?: boolean;
}) => {
  if (status === "sale")
    return hasBg ? "bg-green-500/20" : "border-green-500/20";
  if (status === "preparing")
    return hasBg ? "bg-yellow-500/20" : "border-yellow-500/20";

  return hasBg ? "bg-red-500/20" : "border-red-500/20";
};
