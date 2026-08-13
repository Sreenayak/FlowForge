"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") || "").toString().trim();
    const password = (formData.get("password") || "").toString();

    if (!email || !password) {
      setError("Please provide both email and password.");
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace this simulated auth with a real API call
      await new Promise((res) => setTimeout(res, 600));

      // On success navigate to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side */}
        <div className="hidden bg-gray-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-gray-950">
              F
            </div>

            <span className="text-lg font-semibold">
              FlowForge
            </span>
          </Link>

          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Enterprise Workspace
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight xl:text-5xl">
              Build products with your entire team in one place.
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-400">
              Projects, tasks, documentation, communication, meetings,
              files, and client collaboration connected in one workspace.
            </p>
          </div>

          <p className="text-xs text-gray-600">
            © 2026 FlowForge
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-10 flex items-center gap-3 lg:hidden"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-sm font-bold text-white">
                F
              </div>

              <span className="text-lg font-semibold text-gray-950">
                FlowForge
              </span>
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Welcome back
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Sign in to your workspace
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Continue working on your projects with your team.
              </p>
            </div>

            {/* Google */}
            <button
              type="button"
              className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              onClick={() => alert("Google sign-in not implemented yet.")}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs font-bold">
                G
              </span>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-800"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-800"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-gray-500 hover:text-gray-950"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />
              </div>

              <div>
                {error && (
                  <p className="mb-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-gray-950 hover:underline"
              >
                Create an account
              </Link>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-gray-400">
              By continuing, you agree to the FlowForge Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}