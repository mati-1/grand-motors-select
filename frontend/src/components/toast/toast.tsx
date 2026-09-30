import { toast } from "sonner";
import { AppToast, type successIconType } from "./AppToast";

type ShowToastOptions = {
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
  duration?: number;
  successIcon?: successIconType;
};

export const showToast = ({
  type = "success",
  title,
  description,
  duration = 3500,
  successIcon,
}: ShowToastOptions) => {
  toast.custom(
    () => (
      <AppToast
        type={type}
        title={title}
        description={description}
        successIcon={successIcon}
      />
    ),
    {
      duration,
    },
  );
};
