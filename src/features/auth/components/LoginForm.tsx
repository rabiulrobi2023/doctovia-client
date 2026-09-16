"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import type { ILoginFormInput } from "../auth.interface";
import { LoginFormSchema } from "../schemas/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";
import { useGoogleLogin, useLogin } from "../hooks/auth.hook";
import { useRouter } from "next/navigation";
import { showErrorToast, showSuccessTost } from "@/utils/showToast";
import { SpacedSpinner } from "@/components/ui/spinner";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<ILoginFormInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "admin1@gmail.com",
      password: "Admin@123",
    },
  });

  const { mutate: login, isPending } = useLogin();
  const router = useRouter();

  const onSubmit = (values: ILoginFormInput) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };

    login(loginData, {
      onSuccess: (res) => {
        showSuccessTost(res.message || "Login successful");
        router.replace("/");
      },
      onError: (error) => {
        showErrorToast(error, null);
      },
    });
  };

  const { mutate: googleLogin } = useGoogleLogin();

  const handleGoogleOnSuccess = (idToken?: string) => {
    if (!idToken) {
      showErrorToast("Google token not found");
      return;
    }
    googleLogin(idToken, {
      onSuccess: (res) => {
        showSuccessTost(res.message || "Login successfully", null);
        router.push("/");
      },
      onError: (err) => {
        showErrorToast(err.message, null);
      },
    });
  };

  const handleGoogleError = () => {
    showErrorToast("Google login fail", null);
  };

  return (
    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="example@mail.com"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Password</FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="password"
                />
                <Button
                  className="hover:bg-transparent absolute right-2 "
                  type="button"
                  variant={"ghost"}
                  onClick={() => setShowPassword((pre) => !pre)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="size-6 text-gray-600" />
                  ) : (
                    <Eye className="size-6 text-gray-600" />
                  )}
                </Button>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {!isPending ? (
          <Button className="w-full" type="submit" id="login-form">
            {" "}
            Login
          </Button>
        ) : (
          <Button className="w-full" type="submit" id="login-form" disabled>
            {" "}
            Logging... <SpacedSpinner />
          </Button>
        )}
        <FieldSeparator>Or</FieldSeparator>
        <GoogleLogin
          size="medium"
          onSuccess={(res) => handleGoogleOnSuccess(res.credential)}
          onError={() => handleGoogleError()}
        />
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
