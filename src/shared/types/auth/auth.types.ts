import type { z } from "zod";
import { SignInSchema, type SignUpSchema } from "./auth.schema";

export type SignUpInputs = z.infer<typeof SignUpSchema>;
export type SignInInputs = z.infer<typeof SignInSchema>;
