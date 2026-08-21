"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send the reset email.");
      }

      setMessage(result.message);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to send the reset email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12 text-gray-950">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <Link href="/auth/login" className="text-sm font-semibold hover:underline">Back to sign in</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Account recovery</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Reset your password</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">Enter your account email and we&apos;ll send a secure reset link.</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email address</label>
            <input id="email" name="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10" />
          </div>
          {message && <p className="text-sm text-green-700" role="status">{message}</p>}
          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" disabled={loading} className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Sending reset link..." : "Send reset link"}
          </button>
        </form>
      </div>
    </main>
  );
}