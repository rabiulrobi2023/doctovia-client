import z from "zod";
import { LoginFormSchema } from "./schemas/loginFormSchema";

export type ILoginFormInput = z.infer<typeof LoginFormSchema>;

export interface IGetMeResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  googleId: string | null;
  authProvider: AuthProvider;
  emailVerified: boolean;
  role: Role;
  status: UserStatus;
  needPasswordChange: boolean;
  imageUrl: string;
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
}

export enum AuthProvider {
  GOOGLE = "GOOGLE",
  CREDENTIAL = "CREDENTIAL",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
  DELETED = "DELETED",
}
