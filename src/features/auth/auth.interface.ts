import z from "zod";
import { LoginFormSchema } from "./schemas/loginFormSchema";

export type ILoginFormInput = z.infer<typeof LoginFormSchema>;
