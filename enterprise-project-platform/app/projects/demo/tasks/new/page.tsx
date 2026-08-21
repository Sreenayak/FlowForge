"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewTaskPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = new FormData(event.currentTarget).get("title")?.toString().trim();

    if (!title) {
      setError("Enter a task title to continue.");
      return;
    }

    router.push("/projects/demo/tasks");
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-6 py-12 text-gray-950">
      <div className="mx-auto max-w-2xl">
        <Link href="/projects/demo/tasks" className="text-sm font-semibold hover:underline">Back to tasks</Link>
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Website Redesign</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Create a task</h1>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="text-sm font-medium">Task title</label>
              <input id="title" name="title" required placeholder="Prepare launch checklist" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10" />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea id="description" name="description" rows={4} placeholder="Add context for the team" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10" />
            </div>
            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
            <button type="submit" className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white hover:bg-gray-800">Create task</button>
          </form>
        </div>
      </div>
    </main>
  );
}