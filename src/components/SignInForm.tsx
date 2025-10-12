import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema for Sign In
const SignInSchema = z.object({
  userEmail: z.string().email("Invalid Email"),
  password: z.string().min(8, "Too short password").max(24, "Too long password"),
});

type SignInInputs = z.infer<typeof SignInSchema>;

function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInInputs>({
    resolver: zodResolver(SignInSchema),
    mode: "onSubmit",
  });

  // Submit handler (log to console as requested)
  const onSubmit: SubmitHandler<SignInInputs> = (data) => console.log(data);

  // Example watch (optional debug)
  console.log(watch("userEmail"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-8 pt-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-800 flex flex-col gap-5"
    >
      <input
        {...register("userEmail")}
        placeholder="Email"
        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 border transition focus:outline-none
          ${errors.userEmail
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          }`}
      />
      {errors.userEmail && (
        <span className="text-xs text-red-400">{errors.userEmail.message}</span>
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

      <button
        type="submit"
        className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
      >
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
