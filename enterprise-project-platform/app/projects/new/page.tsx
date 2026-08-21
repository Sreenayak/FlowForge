"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewProjectPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name")?.toString().trim();

		if (!name) {
			setError("Enter a project name to continue.");
			return;
		}

		router.push("/projects");
	};

	return (
		<main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-950">
			<div className="mx-auto max-w-2xl">
				<Link href="/projects" className="text-sm font-semibold hover:underline">
					Back to projects
				</Link>

				<div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
						Project setup
					</p>
					<h1 className="mt-3 text-3xl font-bold tracking-tight">Create a project</h1>
					<p className="mt-3 text-sm leading-6 text-gray-600">
						Give your team a clear place to plan, track, and deliver work.
					</p>

					<form className="mt-8 space-y-5" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="name" className="text-sm font-medium">
								Project name
							</label>
							<input
								id="name"
								name="name"
								required
								placeholder="Website redesign"
								className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
							/>
						</div>

						<div>
							<label htmlFor="description" className="text-sm font-medium">
								Description
							</label>
							<textarea
								id="description"
								name="description"
								rows={4}
								placeholder="What is this project for?"
								className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
							/>
						</div>

						{error && <p className="text-sm text-red-600" role="alert">{error}</p>}

						<button
							type="submit"
							className="h-12 w-full rounded-xl bg-gray-950 text-sm font-semibold text-white transition hover:bg-gray-800"
						>
							Create project
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
