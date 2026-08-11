import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Logo */}
          <Link
            href="/"
            className="mb-10 flex items-center justify-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-950 text-sm font-bold text-white">
              F
            </div>

            <span className="text-lg font-semibold text-gray-950">
              FlowForge
            </span>
          </Link>

          {/* Verification Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

            {/* Email Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6.5C4 5.67157 4.67157 5 5.5 5H18.5C19.3284 5 20 5.67157 20 6.5V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M5 7L12 12L19 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Verify your email
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Check your inbox
              </h1>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                We sent a verification link to
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-950">
                your@email.com
              </p>
            </div>

            {/* Verification Information */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-900">
                Verification required
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Verify your email address before creating a FlowForge
                workspace.
              </p>
            </div>

            {/* Resend */}
            <button
              type="button"
              className="mt-6 h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Resend verification email
            </button>

            {/* Change Email */}
            <button
              type="button"
              className="mt-3 h-12 w-full rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              Use a different email
            </button>

            {/* Back */}
            <div className="mt-8 text-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-gray-500 hover:text-gray-950"
              >
                Back to sign in
              </Link>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-gray-400">
            © 2026 FlowForge. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}