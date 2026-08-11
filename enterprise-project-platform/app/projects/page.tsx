"use client";

import Link from "next/link";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finalize homepage design",
    description:
      "Complete the final homepage design and prepare it for review.",
    assignee: "BK",
    priority: "High",
    status: "In Progress",
    dueDate: "Aug 14",
  },
  {
    id: 2,
    title: "Build responsive navigation",
    description:
      "Implement responsive navigation for desktop and mobile.",
    assignee: "AK",
    priority: "Medium",
    status: "In Progress",
    dueDate: "Aug 16",
  },
  {
    id: 3,
    title: "Prepare API integration",
    description:
      "Prepare the API integration required for the website.",
    assignee: "RM",
    priority: "High",
    status: "Todo",
    dueDate: "Aug 18",
  },
  {
    id: 4,
    title: "Review design documentation",
    description:
      "Review the latest project design documentation.",
    assignee: "SK",
    priority: "Low",
    status: "Completed",
    dueDate: "Aug 12",
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [filter, setFilter] = useState<
    "All" | "Todo" | "In Progress" | "Completed"
  >("All");

  const [search, setSearch] = useState("");

  const toggleTask = (id: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Todo"
                  : "Completed",
            }
          : task
      )
    );
  };

  const changePriority = (
    id: number,
    priority: Task["priority"]
  ) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, priority }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "All" || task.status === filter;

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getPriorityClass = (
    priority: Task["priority"]
  ) => {
    if (priority === "High") {
      return "border-red-200 bg-red-50 text-red-700";
    }

    if (priority === "Medium") {
      return "border-yellow-200 bg-yellow-50 text-yellow-700";
    }

    return "border-gray-200 bg-gray-50 text-gray-600";
  };

  const getStatusClass = (
    status: Task["status"]
  ) => {
    if (status === "Completed") {
      return "border-green-200 bg-green-50 text-green-700";
    }

    if (status === "In Progress") {
      return "border-blue-200 bg-blue-50 text-blue-700";
    }

    return "border-gray-200 bg-gray-50 text-gray-600";
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1020]">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">

          <Link
            href="/dashboard"
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#080d1a] text-lg font-bold text-white">
              F
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Workspace
              </p>

              <h1 className="text-xl font-semibold">
                Website Redesign
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-5">

            <Link
              href="/projects/demo"
              className="text-sm font-medium text-gray-500 hover:text-black"
            >
              Overview
            </Link>

            <Link
              href="/projects/demo/tasks/new"
              className="rounded-lg bg-[#080d1a] px-5 py-3 text-sm font-semibold text-white"
            >
              + New task
            </Link>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#080d1a] text-sm font-semibold text-white">
              BK
            </div>

          </div>

        </div>
      </header>

      {/* PROJECT NAVIGATION */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] gap-8 px-8">

          <Link
            href="/projects/demo"
            className="py-4 text-sm font-medium text-gray-500"
          >
            Overview
          </Link>

          <Link
            href="/projects/demo/tasks"
            className="border-b-2 border-[#080d1a] py-4 text-sm font-semibold"
          >
            Tasks
          </Link>

          <Link
            href="/projects/demo/milestones"
            className="py-4 text-sm font-medium text-gray-500"
          >
            Milestones
          </Link>

          <Link
            href="/projects/demo/files"
            className="py-4 text-sm font-medium text-gray-500"
          >
            Files
          </Link>

          <Link
            href="/projects/demo/team"
            className="py-4 text-sm font-medium text-gray-500"
          >
            Team
          </Link>

          <Link
            href="/projects/demo/activity"
            className="py-4 text-sm font-medium text-gray-500"
          >
            Activity
          </Link>

        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1400px] px-8 py-10">

        <div className="flex items-end justify-between">

          <div>
            <p className="mb-2 text-sm text-gray-400">
              Acme Product Team
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              Tasks
            </h2>

            <p className="mt-3 text-base text-gray-500">
              Manage and track work across the Website Redesign project.
            </p>
          </div>

          <Link
            href="/projects/demo/tasks/new"
            className="rounded-lg bg-[#080d1a] px-5 py-3 text-sm font-semibold text-white"
          >
            + Create task
          </Link>

        </div>

        {/* SUMMARY */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              Total tasks
            </p>

            <p className="mt-4 text-3xl font-bold">
              {tasks.length}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Across this project
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              To do
            </p>

            <p className="mt-4 text-3xl font-bold">
              {
                tasks.filter(
                  (task) => task.status === "Todo"
                ).length
              }
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Waiting to start
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              In progress
            </p>

            <p className="mt-4 text-3xl font-bold">
              {
                tasks.filter(
                  (task) =>
                    task.status === "In Progress"
                ).length
              }
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Currently being worked on
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-4 text-3xl font-bold">
              {
                tasks.filter(
                  (task) =>
                    task.status === "Completed"
                ).length
              }
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Finished work
            </p>
          </div>

        </div>

        {/* TASK CONTAINER */}
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">

          {/* SEARCH / FILTER */}
          <div className="flex flex-col gap-4 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">

            <div className="relative w-full max-w-md">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                type="text"
                placeholder="Search tasks..."
                className="w-full rounded-lg border border-gray-200 px-10 py-3 text-sm outline-none focus:border-gray-500"
              />

            </div>

            <div className="flex gap-2">

              {(
                [
                  "All",
                  "Todo",
                  "In Progress",
                  "Completed",
                ] as const
              ).map((item) => (

                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                    filter === item
                      ? "bg-[#080d1a] text-white"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* TASKS */}
          <div>

            {filteredTasks.length === 0 ? (

              <div className="p-12 text-center">

                <p className="text-lg font-semibold">
                  No tasks found
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing your search or filter.
                </p>

              </div>

            ) : (

              filteredTasks.map((task) => (

                <div
                  key={task.id}
                  className="border-b border-gray-200 p-6 last:border-b-0"
                >

                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    {/* TASK INFORMATION */}
                    <div className="flex items-start gap-4">

                      <button
                        onClick={() =>
                          toggleTask(task.id)
                        }
                        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                          task.status === "Completed"
                            ? "border-[#080d1a] bg-[#080d1a] text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {task.status === "Completed"
                          ? "✓"
                          : ""}
                      </button>

                      <div>

                        <h3
                          className={`text-base font-semibold ${
                            task.status === "Completed"
                              ? "text-gray-400 line-through"
                              : ""
                          }`}
                        >
                          {task.title}
                        </h3>

                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {task.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">

                          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
                            Assigned to {task.assignee}
                          </span>

                          <select
                            value={task.priority}
                            onChange={(event) =>
                              changePriority(
                                task.id,
                                event.target
                                  .value as Task["priority"]
                              )
                            }
                            className={`rounded-full border px-3 py-1 text-xs font-medium outline-none ${getPriorityClass(
                              task.priority
                            )}`}
                          >
                            <option value="Low">
                              Low priority
                            </option>

                            <option value="Medium">
                              Medium priority
                            </option>

                            <option value="High">
                              High priority
                            </option>
                          </select>

                        </div>

                      </div>

                    </div>

                    {/* STATUS */}
                    <div className="flex items-center gap-4">

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClass(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>

                      <span className="text-sm text-gray-400">
                        Due {task.dueDate}
                      </span>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </section>

    </main>
  );
}