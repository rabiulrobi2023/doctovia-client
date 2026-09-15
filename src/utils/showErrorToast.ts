import { FetchError } from "ofetch";
import { toast } from "sonner";

const getErrorMessage = (
  error: unknown,
  fallBack = "Something went wrong",
): string => {
  if (error instanceof FetchError) {
    const data = error.data;
    return data.message || fallBack;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return fallBack;
};

export const showErrorToast = (
  error: unknown,
  title: string | null = "Error",
) => {
  return toast.error(title ?? "", {
    description: getErrorMessage(error),
  });
};
