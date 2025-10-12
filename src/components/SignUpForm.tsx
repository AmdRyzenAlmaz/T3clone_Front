import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpUser } from "../shared/api/authApi.ts";
import type { SignUpInputs } from "../shared/types/auth/auth.types.ts";
import { SignUpSchema } from "../shared/types/auth/auth.schema.ts";


function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(SignUpSchema),
    mode: "onSubmit",
  })

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    const response = await signUpUser(data)
    console.log("AAAAAAAAAAAAA")
    console.log(response)
  }

  console.log(watch("username"))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-8 pt-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-800 flex flex-col gap-5"
    >

      <input
        {...register("username")}
        placeholder="Username"
        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 border transition focus:outline-none
          ${errors.username
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          }`}
      />
      {errors.username && (
        <span className="text-xs text-red-400">{errors.userName.message}</span>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 border transition focus:outline-none
          ${errors.email
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          }`}
      />
      {errors.email && (
        <span className="text-xs text-red-400">{errors.email.message}</span>
      )}

      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 border transition focus:outline-none
          ${errors.password
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          }`}
      />
      {errors.password && (
        <span className="text-xs text-red-400">{errors.password.message}</span>
      )}

      <input
        {...register("confirm_password")}
        placeholder="Confirm Password"
        type="password"
        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 border transition focus:outline-none
          ${errors.confirm_password
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          }`}
      />
      {errors.confirm_password && (
        <span className="text-xs text-red-400">{errors.confirm_password.message}</span>
      )}

      <button
        type="submit"
        className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
