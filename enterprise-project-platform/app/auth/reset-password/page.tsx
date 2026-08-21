"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useState } from "react";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordShell>Loading reset form...</ResetPasswordShell>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setError(null);

    if (password.length < 8) {
      setError("Your new password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmation) {
      setError("The passwords do not match.");
      return;
    }

    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    const result = await response.json();

    if (!response.ok) {
      setError(result.error || "This reset link is invalid or expired.");
      return;
    }

    setMessage(result.message);
  };

  return (
    <ResetPasswordShell>
        <Link href="/auth/login" className="text-sm font-semibold hover:underline">Back to sign in</Link>
        <h1 className="mt-10 text-3xl font-bold tracking-tight">Choose a new password</h1>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div><label htmlFor="password" className="text-sm font-medium">New password</label><input id="password" type="password" required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10" /></div>
          <div><label htmlFor="confirmation" className="text-sm font-medium">Confirm new password</label><input id="confirmation" type="password" required minLength={8} value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10" /></div>
          {message && <p className="text-sm text-green-700" role="status">{message}</p>}
          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" disabled={!token} className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60">Update password</button>
        </form>
    </ResetPasswordShell>
  );
}

function ResetPasswordShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12 text-gray-950">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {children}
      </div>
    </main>
  );
}