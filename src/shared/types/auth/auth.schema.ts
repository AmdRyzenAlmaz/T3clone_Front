import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(1, "Unique username is required")
      .max(36, "Too massive username"),
    email: z.string().email("Invalid Email"),
    password: z
      .string()
      .min(8, "Too short password")
      .max(24, "Too long password"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });
