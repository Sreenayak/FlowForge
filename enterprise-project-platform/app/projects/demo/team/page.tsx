"use client";

import { useMemo, useState } from "react";

type Role =
  | "Project Manager"
  | "Designer"
  | "Developer"
  | "Product Manager"
  | "QA Engineer";

type MemberStatus = "Active" | "Invited";

type TeamMember = {
  id: number;
  name: string;
  initials: string;
  email: string;
  role: Role;
  status: MemberStatus;
};

const initialMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bharath Kumar",
    initials: "BK",
    email: "bharath@flowforge.app",
    role: "Project Manager",
    status: "Active",
  },
  {
    id: 2,
    name: "Alex Kumar",
    initials: "AK",
    email: "alex@flowforge.app",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    initials: "RM",
    email: "rahul@flowforge.app",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Khan",
    initials: "SK",
    email: "sarah@flowforge.app",
    role: "Designer",
    status: "Active",
  },
  {
    id: 5,
    name: "John Davis",
    initials: "JD",
    email: "john@flowforge.app",
    role: "QA Engineer",
    status: "Active",
  },
  {
    id: 6,
    name: "Priya Shah",
    initials: "PS",
    email: "priya@flowforge.app",
    role: "Developer",
    status: "Invited",
  },
];

const roles: Role[] = [
  "Project Manager",
  "Designer",
  "Developer",
  "Product Manager",
  "QA Engineer",
];

export default function TeamPage() {
  const [members, setMembers] =
    useState<TeamMember[]>(initialMembers);

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] =
    useState<"All" | Role>("All");

  const [statusFilter, setStatusFilter] =
    useState<"All" | MemberStatus>("All");

  const [showInvite, setShowInvite] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [role, setRole] =
    useState<Role>("Developer");

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        member.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        member.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All" ||
        member.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" ||
        member.status === statusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [
    members,
    search,
    roleFilter,
    statusFilter,
  ]);

  const activeCount = members.filter(
    (member) => member.status === "Active"
  ).length;

  const invitedCount = members.filter(
    (member) => member.status === "Invited"
  ).length;

  const managerCount = members.filter(
    (member) => member.role === "Project Manager"
  ).length;

  const developerCount = members.filter(
    (member) => member.role === "Developer"
  ).length;

  const handleInvite = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    const initials = name
      .trim()
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const newMember: TeamMember = {
      id: Date.now(),
      name: name.trim(),
      initials,
      email: email.trim(),
      role,
      status: "Invited",
    };

    setMembers((current) => [
      ...current,
      newMember,
    ]);

    setName("");
    setEmail("");
    setRole("Developer");
    setShowInvite(false);
  };

  const removeMember = (id: number) => {
    setMembers((current) =>
      current.filter((member) => member.id !== id)
    );
  };

  const getRoleClasses = (memberRole: Role) => {
    if (memberRole === "Project Manager") {
      return "bg-purple-50 text-purple-700";
    }

    if (memberRole === "Designer") {
      return "bg-pink-50 text-pink-700";
    }

    if (memberRole === "Developer") {
      return "bg-blue-50 text-blue-700";
    }

    if (memberRole === "Product Manager") {
      return "bg-orange-50 text-orange-700";
    }

    return "bg-green-50 text-green-700";
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex min-h-[92px] max-w-[1500px] items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-lg font-bold text-white">
              F
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
                Workspace
              </p>

              <h1 className="text-2xl font-bold">
                Team
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/dashboard"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Overview
            </a>

            <a
              href="/projects/demo"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Project
            </a>

            <button
              onClick={() => setShowInvite(true)}
              className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + Invite member
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-[1500px] px-8 py-10">
        {/* Heading */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Acme Product Team
          </p>

          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">
                Team
              </h2>

              <p className="mt-3 max-w-2xl text-lg text-gray-500">
                Manage project members, roles, and access
                across the Website Redesign project.
              </p>
            </div>

            <button
              onClick={() => setShowInvite(true)}
              className="rounded-xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + Invite member
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Total members
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {members.length}
              </p>

              <p className="text-sm text-gray-400">
                Project team
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Active members
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {activeCount}
              </p>

              <p className="text-sm text-green-600">
                Active
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Invited
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {invitedCount}
              </p>

              <p className="text-sm text-orange-600">
                Pending
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Developers
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {developerCount}
              </p>

              <p className="text-sm text-blue-600">
                Engineering
              </p>
            </div>
          </div>
        </section>

        {/* Team Panel */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Toolbar */}
          <div className="flex flex-col gap-5 border-b border-gray-200 p-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full max-w-xl">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search team members..."
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setRoleFilter("All")}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                  roleFilter === "All"
                    ? "bg-gray-950 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                All roles
              </button>

              {roles.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setRoleFilter(item)
                  }
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                    roleFilter === item
                      ? "bg-gray-950 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 px-6 py-4">
            {(["All", "Active", "Invited"] as const).map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setStatusFilter(item)
                  }
                  className={`rounded-lg px-4 py-2 text-sm font-medium ${
                    statusFilter === item
                      ? "bg-gray-950 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Desktop header */}
          <div className="hidden grid-cols-[minmax(300px,2fr)_200px_100px_130px_100px] gap-6 border-b border-gray-200 bg-gray-50 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 md:grid">
            <span>Member</span>
            <span>Role</span>
            <span>Status</span>
            <span>Email</span>
            <span className="text-right">
              Action
            </span>
          </div>

          {/* Members */}
          {filteredMembers.length === 0 ? (
            <div className="px-7 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                👥
              </div>

              <p className="mt-5 text-lg font-semibold">
                No team members found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className={`grid gap-5 px-7 py-6 md:grid-cols-[minmax(300px,2fr)_200px_100px_130px_100px] md:items-center md:gap-6 ${
                  index !==
                  filteredMembers.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Member */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                    {member.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {member.name}
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-500">
                      {member.email}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div>
                  <span
                    className={`inline-flex rounded-lg px-3 py-2 text-xs font-semibold ${getRoleClasses(
                      member.role
                    )}`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${
                      member.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>

                {/* Email */}
                <div className="hidden md:block">
                  <span className="truncate text-sm text-gray-500">
                    {member.email}
                  </span>
                </div>

                {/* Action */}
                <div className="flex justify-start md:justify-end">
                  {member.id === 1 ? (
                    <span className="text-xs text-gray-400">
                      Owner
                    </span>
                  ) : (
                    <button
                      onClick={() =>
                        removeMember(member.id)
                      }
                      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </section>
      </div>

      {/* Invite modal */}
      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl">
            <div className="mb-7 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
                  Team
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Invite member
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Add someone to the Website Redesign
                  project.
                </p>
              </div>

              <button
                onClick={() => setShowInvite(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleInvite}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="e.g. Michael Scott"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="michael@company.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Role
                </label>

                <select
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value as Role)
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
                >
                  {roles.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() =>
                    setShowInvite(false)
                  }
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Send invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}