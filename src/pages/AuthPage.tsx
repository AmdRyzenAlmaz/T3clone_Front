import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-500">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-xl px-4 py-16">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {isSignUp ? "Sign Up" : "Sign In"}
            </span>
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {isSignUp
              ? "Create your account in seconds."
              : "Welcome back! Please log into your account."}
          </p>
        </header>

        {/* Conditional form rendering */}
        {isSignUp ? <SignUpForm /> : <SignInForm />}

        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          {isSignUp ? (
            <>
              By signing up, you agree to our{" "}
              <a href="#" className="underline decoration-dashed hover:decoration-solid">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline decoration-dashed hover:decoration-solid">
                Privacy Policy
              </a>.
              <p className="mt-3">
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-indigo-400 hover:underline"
                >
                  Sign in
                </button>
              </p>
            </>
          ) : (
            <p>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-indigo-400 hover:underline"
              >
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default AuthPage;
