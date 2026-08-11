"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ActivityType =
  | "All"
  | "Tasks"
  | "Projects"
  | "Milestones"
  | "Files"
  | "Team";

type Activity = {
  id: number;
  initials: string;
  name: string;
  action: string;
  target: string;
  type: Exclude<ActivityType, "All">;
  time: string;
  date: string;
  detail?: string;
};

const activities: Activity[] = [
  {
    id: 1,
    initials: "BK",
    name: "Bharath",
    action: "completed task",
    target: "Create mobile prototype",
    type: "Tasks",
    time: "12 minutes ago",
    date: "Today",
    detail: "The task was marked as completed.",
  },
  {
    id: 2,
    initials: "AK",
    name: "Ananya",
    action: "updated task",
    target: "Build responsive navigation",
    type: "Tasks",
    time: "38 minutes ago",
    date: "Today",
    detail: "Task status changed to In Progress.",
  },
  {
    id: 3,
    initials: "RM",
    name: "Rahul",
    action: "created milestone",
    target: "Final testing",
    type: "Milestones",
    time: "1 hour ago",
    date: "Today",
    detail: "A new milestone was added to Website Redesign.",
  },
  {
    id: 4,
    initials: "SK",
    name: "Sneha",
    action: "uploaded file",
    target: "Dashboard Preview.png",
    type: "Files",
    time: "2 hours ago",
    date: "Today",
    detail: "A new image was uploaded to the project files.",
  },
  {
    id: 5,
    initials: "BK",
    name: "Bharath",
    action: "updated project",
    target: "Website Redesign",
    type: "Projects",
    time: "3 hours ago",
    date: "Today",
    detail: "Project progress was updated to 78%.",
  },
  {
    id: 6,
    initials: "JD",
    name: "John",
    action: "joined the project",
    target: "Website Redesign",
    type: "Team",
    time: "Yesterday",
    date: "Yesterday",
    detail: "John joined as a Product Manager.",
  },
  {
    id: 7,
    initials: "RM",
    name: "Rahul",
    action: "completed milestone",
    target: "Discovery & Planning",
    type: "Milestones",
    time: "Yesterday",
    date: "Yesterday",
    detail: "8 of 8 milestone tasks were completed.",
  },
  {
    id: 8,
    initials: "AK",
    name: "Ananya",
    action: "uploaded file",
    target: "Homepage Design.fig",
    type: "Files",
    time: "Yesterday",
    date: "Yesterday",
    detail: "The latest homepage design was uploaded.",
  },
  {
    id: 9,
    initials: "SK",
    name: "Sneha",
    action: "created task",
    target: "Prepare API integration",
    type: "Tasks",
    time: "2 days ago",
    date: "Earlier",
    detail: "The task was assigned to Rahul.",
  },
  {
    id: 10,
    initials: "BK",
    name: "Bharath",
    action: "invited member",
    target: "John Davidson",
    type: "Team",
    time: "2 days ago",
    date: "Earlier",
    detail: "An invitation was sent to the new project member.",
  },
  {
    id: 11,
    initials: "RM",
    name: "Rahul",
    action: "created project",
    target: "Mobile Application",
    type: "Projects",
    time: "3 days ago",
    date: "Earlier",
    detail: "A new project was created in the workspace.",
  },
  {
    id: 12,
    initials: "JD",
    name: "John",
    action: "updated milestone",
    target: "Design Review",
    type: "Milestones",
    time: "4 days ago",
    date: "Earlier",
    detail: "Milestone progress was updated.",
  },
];

const filters: ActivityType[] = [
  "All",
  "Tasks",
  "Projects",
  "Milestones",
  "Files",
  "Team",
];

function getInitialsColor(initials: string) {
  const colors: Record<string, string> = {
    BK: "bg-gray-950 text-white",
    AK: "bg-gray-200 text-gray-900",
    RM: "bg-gray-800 text-white",
    SK: "bg-gray-300 text-gray-900",
    JD: "bg-gray-100 text-gray-900",
  };

  return colors[initials] || "bg-gray-200 text-gray-900";
}

export default function ActivityPage() {
  const [activeFilter, setActiveFilter] = useState<ActivityType>("All");
  const [search, setSearch] = useState("");

  const filteredActivities = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesFilter =
        activeFilter === "All" || activity.type === activeFilter;

      const matchesSearch =
        query.length === 0 ||
        activity.name.toLowerCase().includes(query) ||
        activity.action.toLowerCase().includes(query) ||
        activity.target.toLowerCase().includes(query) ||
        activity.type.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const totalActivities = activities.length;
  const taskActivities = activities.filter(
    (activity) => activity.type === "Tasks"
  ).length;
  const projectActivities = activities.filter(
    (activity) => activity.type === "Projects"
  ).length;
  const teamActivities = activities.filter(
    (activity) => activity.type === "Team"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex min-h-[92px] max-w-[1400px] items-center justify-between px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-lg font-bold text-white">
                F
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                  Workspace
                </p>
                <h1 className="text-2xl font-bold">Activity</h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950 sm:block"
            >
              Overview
            </Link>

            <Link
              href="/projects/demo"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950 sm:block"
            >
              Project
            </Link>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-[1400px] px-8 py-10 lg:px-12">
        {/* Intro */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Acme Product Team
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Activity</h2>

              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Stay up to date with everything happening across the Website
                Redesign project.
              </p>
            </div>

            <Link
              href="/projects/demo"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Back to project
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">Total activity</p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">{totalActivities}</p>
              <span className="text-sm text-gray-400">
                Across project
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">Task activity</p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">{taskActivities}</p>
              <span className="text-sm text-gray-400">Updates</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">Project activity</p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">{projectActivities}</p>
              <span className="text-sm text-gray-400">Changes</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">Team activity</p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">{teamActivities}</p>
              <span className="text-sm text-gray-400">Members</span>
            </div>
          </div>
        </section>

        {/* Activity container */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Search and filters */}
          <div className="border-b border-gray-200 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full max-w-xl">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search activity..."
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const active = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        active
                          ? "bg-gray-950 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Activity list */}
          <div>
            {filteredActivities.length === 0 ? (
              <div className="px-6 py-20 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  No activity found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing the filter or search term.
                </p>
              </div>
            ) : (
              filteredActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`flex gap-4 px-6 py-6 transition hover:bg-gray-50 ${
                    index !== filteredActivities.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${getInitialsColor(
                      activity.initials
                    )}`}
                  >
                    {activity.initials}
                  </div>

                  {/* Activity body */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-2 md:flex-row">
                      <div className="text-sm leading-6 text-gray-700">
                        <span className="font-semibold text-gray-950">
                          {activity.name}
                        </span>{" "}
                        {activity.action}{" "}
                        <span className="font-semibold text-gray-950">
                          {activity.target}
                        </span>
                      </div>

                      <span className="shrink-0 text-xs text-gray-400">
                        {activity.time}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {activity.detail}
                    </p>

                    <div className="mt-3">
                      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {activity.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex flex-col justify-between gap-2 text-sm text-gray-500 sm:flex-row sm:items-center">
              <span>
                Showing{" "}
                <strong className="font-semibold text-gray-900">
                  {filteredActivities.length}
                </strong>{" "}
                of{" "}
                <strong className="font-semibold text-gray-900">
                  {activities.length}
                </strong>{" "}
                activities
              </span>

              <span>Website Redesign</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}