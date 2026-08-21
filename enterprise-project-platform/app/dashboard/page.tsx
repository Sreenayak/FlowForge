"use client";

import Link from "next/link";

const projects = [
  {
    name: "Website Redesign",
    team: "Product Team",
    progress: 78,
    status: "On track",
  },
  {
    name: "Mobile Application",
    team: "Engineering",
    progress: 64,
    status: "On track",
  },
  {
    name: "Analytics Platform",
    team: "Data Team",
    progress: 42,
    status: "Needs attention",
  },
  {
    name: "Client Portal",
    team: "Product Team",
    progress: 31,
    status: "On track",
  },
];

const deadlines = [
  {
    title: "API Integration",
    project: "Mobile Application",
    date: "Tomorrow",
  },
  {
    title: "Design Review",
    project: "Website Redesign",
    date: "Aug 13",
  },
  {
    title: "Sprint Demo",
    project: "Analytics Platform",
    date: "Aug 15",
  },
  {
    title: "Client Approval",
    project: "Client Portal",
    date: "Aug 18",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">

      {/* =========================
          SIDEBAR
      ========================== */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-gray-200 px-6">

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white">
              F
            </div>

            <span className="text-lg font-bold">
              FlowForge
            </span>
          </Link>

        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">

          {/* WORKSPACE */}
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Workspace
          </p>

          {/* Overview */}
          <Link
            href="/dashboard"
            className="mb-1 flex w-full items-center gap-3 rounded-xl bg-gray-950 px-3 py-3 text-sm font-medium text-white"
          >
            <span className="flex w-5 justify-center">
              ⌂
            </span>

            <span>
              Overview
            </span>
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ▣
            </span>

            <span>
              Projects
            </span>
          </Link>

          {/* Tasks */}
          <Link
            href="/projects/demo/tasks"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ✓
            </span>

            <span>
              Tasks
            </span>
          </Link>

          {/* Sprints */}
          <Link
            href="/projects/demo/milestones"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ◫
            </span>

            <span>
              Sprints
            </span>
          </Link>

          {/* Calendar */}
          <Link
            href="/projects/demo/activity"
            className="mb-7 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              □
            </span>

            <span>
              Calendar
            </span>
          </Link>


          {/* COLLABORATION */}

          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Collaboration
          </p>

          <Link
            href="/projects/demo/files"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ▤
            </span>

            <span>
              Wiki
            </span>
          </Link>

          <Link
            href="/projects/demo/files"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ▱
            </span>

            <span>
              Files
            </span>
          </Link>

          <Link
            href="/projects/demo/team"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ◦
            </span>

            <span>
              Team Chat
            </span>
          </Link>

          <Link
            href="/projects/demo/activity"
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ◉
            </span>

            <span>
              Meetings
            </span>
          </Link>

          <Link
            href="/projects/demo/activity"
            className="mb-7 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ◷
            </span>

            <span>
              Time Tracking
            </span>
          </Link>


          {/* INSIGHTS */}

          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Insights
          </p>

          <Link
            href="/projects/demo/activity"
            className="mb-7 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ◒
            </span>

            <span>
              Analytics
            </span>
          </Link>


          {/* SYSTEM */}

          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            System
          </p>

          <Link
            href="/settings"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
          >
            <span className="flex w-5 justify-center">
              ⚙
            </span>

            <span>
              Settings
            </span>
          </Link>

        </nav>

      </aside>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <section className="lg:ml-64">

        {/* Header */}

        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">

          <div className="flex h-20 items-center justify-between px-5 sm:px-8">

            {/* Workspace title */}

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                Workspace
              </p>

              <h1 className="text-xl font-bold">
                Overview
              </h1>
            </div>


            {/* Header right */}

            <div className="flex items-center gap-3">

              {/* Search */}

              <button
                type="button"
                className="hidden h-11 w-56 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-left text-sm text-gray-400 transition hover:border-gray-300 md:flex"
              >
                <span>
                  ⌕
                </span>

                <span>
                  Search anything...
                </span>

                <span className="ml-auto text-xs text-gray-400">
                  ⌘ K
                </span>
              </button>


              {/* Notification */}

              <button
                type="button"
                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
              >
                ♢

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gray-950" />
              </button>


              {/* User */}

              <div className="flex items-center gap-3 rounded-xl px-2 py-1">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">
                  BK
                </div>

                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">
                    Bharath
                  </p>

                  <p className="text-xs text-gray-400">
                    Workspace Owner
                  </p>
                </div>

                <span className="hidden text-xs text-gray-400 sm:block">
                  ▾
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* Dashboard Content */}

        <div className="px-5 py-8 sm:px-8">

          {/* =========================
              STATISTICS
          ========================== */}

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              value="12"
              label="Projects"
              detail="+2 this month"
            />

            <StatCard
              value="28"
              label="Tasks"
              detail="8 due this week"
            />

            <StatCard
              value="7"
              label="Upcoming"
              detail="3 due tomorrow"
            />

            <StatCard
              value="87%"
              label="Workspace health"
              detail="+6% from last week"
            />

          </section>


          {/* =========================
              MAIN GRID
          ========================== */}

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">


            {/* Active Projects */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

                <div>
                  <h2 className="text-lg font-bold">
                    Active projects
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Current progress across your workspace
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="text-sm font-semibold text-gray-500 transition hover:text-gray-950"
                >
                  View all
                </Link>

              </div>


              <div className="divide-y divide-gray-100">

                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="px-6 py-5"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <h3 className="text-sm font-bold">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                          {project.team}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                          project.status === "Needs attention"
                            ? "bg-gray-950 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {project.status}
                      </span>

                    </div>


                    {/* Progress */}

                    <div className="mt-4 flex items-center gap-4">

                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">

                        <div
                          className="h-full rounded-full bg-gray-950"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />

                      </div>

                      <span className="w-10 text-right text-xs font-semibold text-gray-500">
                        {project.progress}%
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </section>


            {/* Upcoming Deadlines */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

                <div>
                  <h2 className="text-lg font-bold">
                    Upcoming deadlines
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    What needs attention next
                  </p>
                </div>

                <span className="text-xs text-gray-400">
                  7 items
                </span>

              </div>


              <div className="divide-y divide-gray-100">

                {deadlines.map((deadline) => (
                  <div
                    key={deadline.title}
                    className="flex items-center gap-4 px-6 py-5"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xs text-gray-500">
                      □
                    </div>


                    <div className="min-w-0 flex-1">

                      <h3 className="truncate text-sm font-bold">
                        {deadline.title}
                      </h3>

                      <p className="mt-1 truncate text-xs text-gray-400">
                        {deadline.project}
                      </p>

                    </div>


                    <span className="shrink-0 text-xs font-medium text-gray-500">
                      {deadline.date}
                    </span>

                  </div>
                ))}

              </div>

            </section>

          </div>


          {/* =========================
              LOWER SECTION
          ========================== */}

          <div className="mt-6 grid gap-6 lg:grid-cols-3">


            {/* Workspace Activity */}

            <section className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-bold">
                    Workspace activity
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Recent activity from your team
                  </p>
                </div>

                <span className="text-xs text-gray-400">
                  Today
                </span>

              </div>


              <div className="mt-6 space-y-5">

                <Activity
                  initials="AK"
                  name="Alex Kumar"
                  action="updated the Website Redesign project"
                  time="12 minutes ago"
                />

                <Activity
                  initials="SM"
                  name="Sarah Miller"
                  action="completed API integration task"
                  time="42 minutes ago"
                />

                <Activity
                  initials="RJ"
                  name="Rahul Jain"
                  action="uploaded Analytics documentation"
                  time="1 hour ago"
                />

                <Activity
                  initials="PM"
                  name="Priya Menon"
                  action="approved Client Portal deliverable"
                  time="2 hours ago"
                />

              </div>

            </section>


            {/* Quick Actions */}

            <section className="rounded-2xl border border-gray-200 bg-white p-6">

              <h2 className="text-lg font-bold">
                Quick actions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Start working on your workspace.
              </p>


              <div className="mt-6 space-y-3">

                <Link
                  href="/projects"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      Projects
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Manage projects
                    </p>
                  </div>

                  <span>
                    →
                  </span>
                </Link>


                <Link
                  href="/projects/demo/tasks"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      Tasks
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      View your tasks
                    </p>
                  </div>

                  <span>
                    →
                  </span>
                </Link>


                <Link
                  href="/projects/demo/activity"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      Meetings
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      View meetings
                    </p>
                  </div>

                  <span>
                    →
                  </span>
                </Link>


                <Link
                  href="/projects/demo/activity"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      Analytics
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Workspace insights
                    </p>
                  </div>

                  <span>
                    →
                  </span>
                </Link>

              </div>

            </section>

          </div>


          {/* Footer */}

          <footer className="mt-10 border-t border-gray-200 py-6">

            <div className="flex flex-col justify-between gap-3 text-xs text-gray-400 sm:flex-row">

              <p>
                © 2026 FlowForge. All rights reserved.
              </p>

              <div className="flex gap-5">

                <Link
                  href="/privacy"
                  className="hover:text-gray-700"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="hover:text-gray-700"
                >
                  Terms
                </Link>

                <Link
                  href="/security"
                  className="hover:text-gray-700"
                >
                  Security
                </Link>

              </div>

            </div>

          </footer>

        </div>

      </section>

    </main>
  );
}


/* ==========================================
   STAT CARD
========================================== */

function StatCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <div className="mt-3 flex items-end justify-between gap-3">

        <p className="text-3xl font-bold">
          {value}
        </p>

        <span className="text-xs text-gray-400">
          {detail}
        </span>

      </div>

    </div>
  );
}


/* ==========================================
   ACTIVITY ITEM
========================================== */

function Activity({
  initials,
  name,
  action,
  time,
}: {
  initials: string;
  name: string;
  action: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-[10px] font-semibold text-white">
        {initials}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm text-gray-700">
          <span className="font-semibold text-gray-950">
            {name}
          </span>{" "}
          {action}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {time}
        </p>

      </div>

    </div>
  );
}