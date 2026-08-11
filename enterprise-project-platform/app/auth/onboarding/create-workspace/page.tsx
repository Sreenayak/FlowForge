"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateWorkspacePage() {
  const router = useRouter();

  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceSlug, setWorkspaceSlug] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [purpose, setPurpose] = useState("");
  const [logoName, setLogoName] = useState("");

  const handleWorkspaceNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setWorkspaceName(value);

    const generatedSlug = value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setWorkspaceSlug(generatedSlug);
  };

  const handleLogoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setLogoName(file.name);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Frontend prototype only.
     * Backend/database integration will be added later.
     */

    router.push("/auth/onboarding/invite-team");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-sm font-bold text-white">
              F
            </div>

            <span className="text-lg font-semibold text-gray-950">
              FlowForge
            </span>
          </Link>

          <Link
            href="/auth/login"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
            Sign out
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl">

          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-gray-900">
                Workspace setup
              </span>

              <span className="text-gray-400">
                Step 1 of 2
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-1/2 rounded-full bg-gray-950" />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Create your workspace
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Set up your workspace.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Create the shared environment where your team will manage
              projects, documentation, communication, and product
              development.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit}>

              {/* Workspace Details */}
              <section>
                <h2 className="text-xl font-semibold text-gray-950">
                  Workspace details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Give your team a recognizable workspace identity.
                </p>

                <div className="mt-7 space-y-6">

                  {/* Workspace Name */}
                  <div>
                    <label
                      htmlFor="workspaceName"
                      className="text-sm font-medium text-gray-900"
                    >
                      Workspace name
                    </label>

                    <input
                      id="workspaceName"
                      type="text"
                      required
                      value={workspaceName}
                      onChange={handleWorkspaceNameChange}
                      placeholder="e.g. Acme Product Team"
                      className="mt-2 h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                    />
                  </div>

                  {/* Workspace URL */}
                  <div>
                    <label
                      htmlFor="workspaceSlug"
                      className="text-sm font-medium text-gray-900"
                    >
                      Workspace URL
                    </label>

                    <div className="mt-2 flex h-14 overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-gray-950">
                      <div className="flex items-center border-r border-gray-200 bg-gray-50 px-5 text-sm text-gray-400">
                        flowforge.app/
                      </div>

                      <input
                        id="workspaceSlug"
                        type="text"
                        required
                        value={workspaceSlug}
                        onChange={(event) =>
                          setWorkspaceSlug(
                            event.target.value
                              .toLowerCase()
                              .replace(/[^a-z0-9-]/g, "-")
                          )
                        }
                        placeholder="acme-team"
                        className="min-w-0 flex-1 px-5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                      />
                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      This will be used as your workspace&apos;s unique
                      address.
                    </p>
                  </div>

                  {/* Company + Team Size */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="companyName"
                        className="text-sm font-medium text-gray-900"
                      >
                        Company or team
                      </label>

                      <input
                        id="companyName"
                        type="text"
                        required
                        value={companyName}
                        onChange={(event) =>
                          setCompanyName(event.target.value)
                        }
                        placeholder="e.g. Acme Technologies"
                        className="mt-2 h-14 w-full rounded-xl border border-gray-200 px-5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="teamSize"
                        className="text-sm font-medium text-gray-900"
                      >
                        Team size
                      </label>

                      <select
                        id="teamSize"
                        required
                        value={teamSize}
                        onChange={(event) =>
                          setTeamSize(event.target.value)
                        }
                        className="mt-2 h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-sm text-gray-900 outline-none focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                      >
                        <option value="">
                          Select team size
                        </option>

                        <option value="1-5">
                          1-5 people
                        </option>

                        <option value="6-20">
                          6-20 people
                        </option>

                        <option value="21-50">
                          21-50 people
                        </option>

                        <option value="51-100">
                          51-100 people
                        </option>

                        <option value="101-500">
                          101-500 people
                        </option>

                        <option value="500+">
                          500+ people
                        </option>
                      </select>
                    </div>

                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="my-10 border-t border-gray-200" />

              {/* Workspace Logo */}
              <section>
                <h2 className="text-xl font-semibold text-gray-950">
                  Workspace logo
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add a logo so your workspace is easy to recognize.
                </p>

                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">

                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50">
                    <span className="text-2xl font-semibold text-gray-400">
                      F
                    </span>
                  </div>

                  <div>
                    <label
                      htmlFor="logo"
                      className="inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                    >
                      Upload logo
                    </label>

                    <input
                      id="logo"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleLogoChange}
                      className="hidden"
                    />

                    <p className="mt-2 text-xs text-gray-400">
                      {logoName
                        ? logoName
                        : "PNG, JPG, or WebP. Recommended size: 512 × 512px."}
                    </p>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="my-10 border-t border-gray-200" />

              {/* Purpose */}
              <section>
                <h2 className="text-xl font-semibold text-gray-950">
                  What will your team use FlowForge for?
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  This helps personalize your workspace experience.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {/* Software */}
                  <label
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      purpose === "software-development"
                        ? "border-gray-950 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value="software-development"
                      checked={
                        purpose === "software-development"
                      }
                      onChange={(event) =>
                        setPurpose(event.target.value)
                      }
                      required
                      className="sr-only"
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                          purpose === "software-development"
                            ? "border-gray-950"
                            : "border-gray-400"
                        }`}
                      >
                        {purpose === "software-development" && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-950" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Software development
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Build and manage software products with
                          your development team.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Product */}
                  <label
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      purpose === "product-development"
                        ? "border-gray-950 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value="product-development"
                      checked={
                        purpose === "product-development"
                      }
                      onChange={(event) =>
                        setPurpose(event.target.value)
                      }
                      className="sr-only"
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                          purpose === "product-development"
                            ? "border-gray-950"
                            : "border-gray-400"
                        }`}
                      >
                        {purpose === "product-development" && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-950" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Product development
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Plan, build, review, and deliver products
                          with a connected team.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Agency */}
                  <label
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      purpose === "client-projects"
                        ? "border-gray-950 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value="client-projects"
                      checked={purpose === "client-projects"}
                      onChange={(event) =>
                        setPurpose(event.target.value)
                      }
                      className="sr-only"
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                          purpose === "client-projects"
                            ? "border-gray-950"
                            : "border-gray-400"
                        }`}
                      >
                        {purpose === "client-projects" && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-950" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Client projects
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Manage projects, clients, deliverables,
                          and approvals in one place.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Other */}
                  <label
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      purpose === "other"
                        ? "border-gray-950 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value="other"
                      checked={purpose === "other"}
                      onChange={(event) =>
                        setPurpose(event.target.value)
                      }
                      className="sr-only"
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                          purpose === "other"
                            ? "border-gray-950"
                            : "border-gray-400"
                        }`}
                      >
                        {purpose === "other" && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-950" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Other
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Use FlowForge for another type of
                          collaborative work.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </section>

              {/* Actions */}
              <div className="mt-10 flex flex-col-reverse gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">

                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-950"
                >
                  Back
                </Link>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-950 px-8 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Continue
                </button>

              </div>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            You can change your workspace settings later.
          </p>
        </div>
      </section>
    </main>
  );
}