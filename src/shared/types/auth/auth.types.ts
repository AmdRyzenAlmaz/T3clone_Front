import type { z } from "zod";
import type { SignUpSchema } from "./auth.schema";

export type SignUpInputs = z.infer<typeof SignUpSchema>;
