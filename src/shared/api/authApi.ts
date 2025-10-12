import type { SignUpInputs } from "../types/auth/auth.types.ts";

export const signUpUser = async (userData: SignUpInputs): Promise<void> => {
  const res = await fetch('http://127.0.0.1:8000/sign-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};
