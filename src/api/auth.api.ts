import type { IGetMeResponse, ILoginFormInput } from "@/features/auth/auth.interface";
import apiClient from "@/lib/apiClient";

export const userLogin = (payload: ILoginFormInput) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
};

export const getMe = () => {
  return apiClient<IGetMeResponse>("/auth/me", {
    method: "GET",
  });
};

export const logOut = () => {
  return apiClient("/auth/logout", {
    method: "POST",
  });
};
