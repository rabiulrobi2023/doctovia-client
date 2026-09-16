import { getMe, googleLogin, logOut, userLogin } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: googleLogin,
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
};



export const useLogout = () => {
  return useMutation({
    mutationFn: logOut,
  });
};

