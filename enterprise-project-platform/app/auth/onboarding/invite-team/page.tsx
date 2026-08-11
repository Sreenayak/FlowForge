"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Invite = {
  email: string;
  role: string;
};

export default function InviteTeamPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Team Member");
  const [invites, setInvites] = useState<Invite[]>([]);

  const addInvite = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    if (!trimmedEmail.includes("@")) {
      return;
    }

    const alreadyAdded = invites.some(
      (invite) => invite.email.toLowerCase() === trimmedEmail.toLowerCase()
    );

    if (alreadyAdded) {
      return;
    }

    setInvites((current) => [
      ...current,
      {
        email: trimmedEmail,
        role,
      },
    ]);

    setEmail("");
  };

  const removeInvite = (emailToRemove: string) => {
    setInvites((current) =>
      current.filter((invite) => invite.email !== emailToRemove)
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-sm font-bold text-white">
                F
              </div>

              <span className="text-lg font-semibold text-gray-950">
                FlowForge
              </span>
            </Link>

            <div className="text-xs text-gray-400">
              Step 2 of 2
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:py-16">
          <div className="w-full max-w-3xl">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-900">
                  Invite your team
                </span>

                <span className="text-gray-400">
                  100%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-full rounded-full bg-gray-950" />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Team Setup
              </p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Bring your team into the workspace.
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Invite the people who will work with you on projects,
                documentation, communication, and product delivery.
              </p>
            </div>

            {/* Main Card */}
            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit}>
                {/* Invite Form */}
                <div>
                  <h2 className="text-base font-semibold text-gray-950">
                    Invite members
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Add team members using their work email addresses.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_180px_auto]">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="inviteEmail"
                      className="text-sm font-medium text-gray-800"
                    >
                      Email address
                    </label>

                    <input
                      id="inviteEmail"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="member@company.com"
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label
                      htmlFor="inviteRole"
                      className="text-sm font-medium text-gray-800"
                    >
                      Role
                    </label>

                    <select
                      id="inviteRole"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                    >
                      <option value="Project Manager">
                        Project Manager
                      </option>

                      <option value="Team Member">
                        Team Member
                      </option>

                      <option value="Client">
                        Client
                      </option>
                    </select>
                  </div>

                  {/* Add */}
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={addInvite}
                      className="h-12 w-full rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 sm:w-auto"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Invited Members */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-950">
                      Invited members
                    </h3>

                    <span className="text-xs text-gray-400">
                      {invites.length}{" "}
                      {invites.length === 1 ? "member" : "members"}
                    </span>
                  </div>

                  {invites.length === 0 ? (
                    <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-400">
                        +
                      </div>

                      <p className="mt-4 text-sm font-medium text-gray-700">
                        No team members added yet
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        You can invite members now or skip this step.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {invites.map((invite) => (
                        <div
                          key={invite.email}
                          className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                              {invite.email.charAt(0).toUpperCase()}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-gray-900">
                                {invite.email}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                {invite.role}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeInvite(invite.email)}
                            className="text-left text-xs font-medium text-gray-500 transition hover:text-gray-950 sm:text-right"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Role Explanation */}
                <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">
                    Role permissions
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        Project Manager
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Manage projects, sprints, tasks, milestones, and
                        reports.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        Team Member
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Work on assigned tasks, files, comments, and time
                        logs.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        Client
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        View progress, communicate, and approve deliverables
                        without modifying projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => router.push("/dashboard")}
                      className="h-12 rounded-xl px-6 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-950"
                    >
                      Skip for now
                    </button>

                    <button
                      type="submit"
                      className="h-12 rounded-xl bg-gray-950 px-7 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                      Continue to dashboard
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Note */}
            <p className="mt-6 text-center text-xs leading-5 text-gray-400">
              Invitations will be sent when the workspace is connected to
              the authentication system.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}