"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push("/auth/verify-email");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Panel */}
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
              Start building
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight xl:text-5xl">
              Bring your entire product team into one workspace.
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-400">
              Plan projects, manage tasks, collaborate with your team,
              document decisions, communicate with clients, and deliver
              better products from one connected workspace.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <p className="text-sm font-semibold">
                  Projects
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Plan and track work
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <p className="text-sm font-semibold">
                  Collaboration
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Work together
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <p className="text-sm font-semibold">
                  Documentation
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Keep knowledge connected
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                <p className="text-sm font-semibold">
                  Client Access
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Share progress safely
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600">
            © 2026 FlowForge
          </p>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
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

            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Get started
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Start building and collaborating with your team.
              </p>
            </div>

            {/* Google Signup */}
            <button
              type="button"
              className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
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

            {/* Signup Form */}
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-800"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-800"
                >
                  Work email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-800"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  minLength={8}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-800"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  minLength={8}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-xs leading-5 text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <span>
                  I agree to the{" "}
                  <span className="font-medium text-gray-900">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-gray-900">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Create account
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-gray-950 hover:underline"
              >
                Sign in
              </Link>
            </p>

            {/* Verification Notice */}
            <p className="mt-8 text-center text-xs leading-5 text-gray-400">
              Your account will need to be verified before you can
              create a workspace.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}