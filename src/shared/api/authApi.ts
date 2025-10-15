import type { SignInInputs, SignUpInputs } from "../types/auth/auth.types.ts";

interface SignResponse {
  data: {
    access_token: string;
    refresh_token: string;
  },
  success: boolean
}


export const signUpUser = async (userData: SignUpInputs): Promise<SignResponse> => {
  const res = await fetch('http://127.0.0.1:8000/sign-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const signInUser = async (userData: SignInInputs): Promise<SignResponse> => {
  const res = await fetch('http://127.0.0.1:8000/sign-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  return res.json();
}
