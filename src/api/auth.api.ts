import type { ILoginFormInput } from "@/features/auth/auth.interface";
import apiClient from "@/lib/apiClient";

export const userLogin = (payload: ILoginFormInput) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
};
