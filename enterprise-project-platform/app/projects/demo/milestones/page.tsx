"use client";

import { useMemo, useState } from "react";

type MilestoneStatus = "Completed" | "In Progress" | "Upcoming";

type Milestone = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  progress: number;
  status: MilestoneStatus;
  tasks: number;
  completedTasks: number;
};

const initialMilestones: Milestone[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "Define project requirements, user goals, scope, and initial product direction.",
    dueDate: "Aug 05",
    progress: 100,
    status: "Completed",
    tasks: 8,
    completedTasks: 8,
  },
  {
    id: 2,
    title: "Design System",
    description:
      "Create the visual system, responsive layouts, navigation, and core interface components.",
    dueDate: "Aug 12",
    progress: 82,
    status: "In Progress",
    tasks: 11,
    completedTasks: 9,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Build the main product experience, integrate functionality, and connect project workflows.",
    dueDate: "Aug 20",
    progress: 58,
    status: "In Progress",
    tasks: 17,
    completedTasks: 10,
  },
  {
    id: 4,
    title: "Final Testing",
    description:
      "Complete testing, resolve remaining issues, and prepare the product for client review.",
    dueDate: "Aug 28",
    progress: 20,
    status: "Upcoming",
    tasks: 10,
    completedTasks: 2,
  },
];

export default function MilestonesPage() {
  const [milestones, setMilestones] =
    useState<Milestone[]>(initialMilestones);

  const [filter, setFilter] = useState<"All" | MilestoneStatus>("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const filteredMilestones = useMemo(() => {
    return milestones.filter((milestone) => {
      const matchesFilter =
        filter === "All" || milestone.status === filter;

      const searchText =
        `${milestone.title} ${milestone.description}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [milestones, filter, search]);

  const completedCount = milestones.filter(
    (milestone) => milestone.status === "Completed"
  ).length;

  const activeCount = milestones.filter(
    (milestone) => milestone.status === "In Progress"
  ).length;

  const upcomingCount = milestones.filter(
    (milestone) => milestone.status === "Upcoming"
  ).length;

  const handleCreateMilestone = () => {
    if (!newTitle.trim()) {
      return;
    }

    const newMilestone: Milestone = {
      id: Date.now(),
      title: newTitle.trim(),
      description:
        newDescription.trim() ||
        "New milestone for the Website Redesign project.",
      dueDate: newDueDate.trim() || "Not set",
      progress: 0,
      status: "Upcoming",
      tasks: 0,
      completedTasks: 0,
    };

    setMilestones((current) => [...current, newMilestone]);

    setNewTitle("");
    setNewDescription("");
    setNewDueDate("");
    setShowModal(false);
  };

  const handleStatusChange = (
    id: number,
    status: MilestoneStatus
  ) => {
    setMilestones((current) =>
      current.map((milestone) => {
        if (milestone.id !== id) {
          return milestone;
        }

        let progress = milestone.progress;

        if (status === "Completed") {
          progress = 100;
        }

        if (status === "Upcoming" && progress === 100) {
          progress = 0;
        }

        return {
          ...milestone,
          status,
          progress,
        };
      })
    );
  };

  const getStatusClasses = (status: MilestoneStatus) => {
    if (status === "Completed") {
      return "bg-green-50 text-green-700 border-green-200";
    }

    if (status === "In Progress") {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }

    return "bg-gray-50 text-gray-600 border-gray-200";
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
                Milestones
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/dashboard"
              className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
            >
              Overview
            </a>

            <a
              href="/projects/demo"
              className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
            >
              Project
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + New milestone
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-[1500px] px-8 py-10">
        {/* Intro */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Acme Product Team
          </p>

          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">
                Milestones
              </h2>

              <p className="mt-3 max-w-2xl text-lg text-gray-500">
                Track major project goals, deadlines, and progress
                across the Website Redesign project.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="rounded-xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + Create milestone
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Total milestones
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {milestones.length}
              </p>

              <p className="text-sm text-gray-400">
                Across project
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {completedCount}
              </p>

              <p className="text-sm text-green-600">
                Finished
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              In progress
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {activeCount}
              </p>

              <p className="text-sm text-blue-600">
                Active
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Upcoming
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {upcomingCount}
              </p>

              <p className="text-sm text-gray-400">
                Not started
              </p>
            </div>
          </div>
        </section>

        {/* Search + filters */}
        <section className="rounded-2xl border border-gray-200 bg-white">
          <div className="flex flex-col gap-5 border-b border-gray-200 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-xl">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search milestones..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                ["All", "Upcoming", "In Progress", "Completed"] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    filter === item
                      ? "bg-gray-950 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div>
            {filteredMilestones.length === 0 ? (
              <div className="px-6 py-20 text-center">
                <p className="text-lg font-semibold">
                  No milestones found
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search or filter.
                </p>
              </div>
            ) : (
              filteredMilestones.map((milestone, index) => (
                <article
                  key={milestone.id}
                  className={`p-7 ${
                    index !== filteredMilestones.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex min-w-0 flex-1 gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold">
                            {milestone.title}
                          </h3>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClasses(
                              milestone.status
                            )}`}
                          >
                            {milestone.status}
                          </span>
                        </div>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
                          {milestone.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-500">
                          <span>
                            <strong className="text-gray-900">
                              {milestone.completedTasks}
                            </strong>{" "}
                            / {milestone.tasks} tasks completed
                          </span>

                          <span>
                            Due{" "}
                            <strong className="text-gray-900">
                              {milestone.dueDate}
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full xl:w-[360px]">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">
                          Progress
                        </span>

                        <span className="text-sm font-semibold">
                          {milestone.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-gray-950 transition-all duration-500"
                          style={{
                            width: `${milestone.progress}%`,
                          }}
                        />
                      </div>

                      <div className="mt-4">
                        <select
                          value={milestone.status}
                          onChange={(event) =>
                            handleStatusChange(
                              milestone.id,
                              event.target
                                .value as MilestoneStatus
                            )
                          }
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium outline-none focus:border-gray-400"
                        >
                          <option value="Upcoming">
                            Upcoming
                          </option>

                          <option value="In Progress">
                            In Progress
                          </option>

                          <option value="Completed">
                            Completed
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Create Milestone Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
          <div className="w-full max-w-xl rounded-2xl bg-white p-7 shadow-2xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                  Project
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Create milestone
                </h3>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Milestone name
                </label>

                <input
                  value={newTitle}
                  onChange={(event) =>
                    setNewTitle(event.target.value)
                  }
                  placeholder="e.g. Beta release"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Description
                </label>

                <textarea
                  value={newDescription}
                  onChange={(event) =>
                    setNewDescription(event.target.value)
                  }
                  placeholder="Describe what this milestone should achieve..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Due date
                </label>

                <input
                  value={newDueDate}
                  onChange={(event) =>
                    setNewDueDate(event.target.value)
                  }
                  placeholder="e.g. Sep 15"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>
            </div>

            <div className="mt-7 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateMilestone}
                className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Create milestone
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}