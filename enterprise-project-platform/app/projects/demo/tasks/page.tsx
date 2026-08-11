"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type TaskStatus = "Todo" | "In Progress" | "Completed";
type Priority = "Low" | "Medium" | "High";

type Task = {
  id: number;
  title: string;
  assignee: string;
  status: TaskStatus;
  priority: Priority;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finalize homepage design",
    assignee: "BK",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    title: "Build responsive navigation",
    assignee: "AK",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Prepare API integration",
    assignee: "RM",
    status: "Todo",
    priority: "High",
  },
  {
    id: 4,
    title: "Create mobile prototype",
    assignee: "SK",
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Write project documentation",
    assignee: "JD",
    status: "Todo",
    priority: "Low",
  },
  {
    id: 6,
    title: "Perform design review",
    assignee: "BK",
    status: "Todo",
    priority: "High",
  },
];

export default function ProjectTasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | TaskStatus>("All");

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
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

  const changePriority = (id: number, priority: Priority) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, priority }
          : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || task.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressCount = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const todoCount = tasks.filter(
    (task) => task.status === "Todo"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href="/projects/demo"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-lg font-bold text-white">
                F
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                  Project
                </p>
                <h1 className="text-lg font-semibold">
                  Website Redesign
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Dashboard
            </Link>

            <Link
              href="/projects"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Projects
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-sm font-semibold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Project Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 lg:px-10">
          <Link
            href="/projects/demo"
            className="border-b-2 border-gray-950 py-4 text-sm font-semibold text-gray-950"
          >
            Overview
          </Link>

          <Link
            href="/projects/demo/tasks"
            className="border-b-2 border-gray-950 py-4 text-sm font-semibold text-gray-950"
          >
            Tasks
          </Link>

          <span className="py-4 text-sm text-gray-500">
            Milestones
          </span>

          <span className="py-4 text-sm text-gray-500">
            Files
          </span>

          <span className="py-4 text-sm text-gray-500">
            Team
          </span>

          <span className="py-4 text-sm text-gray-500">
            Activity
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Page heading */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-400">
              Acme Product Team
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              Project Tasks
            </h2>

            <p className="mt-3 text-base text-gray-500">
              Manage and track work across the Website Redesign project.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            + Add task
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              Total tasks
            </p>

            <p className="mt-3 text-3xl font-bold">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              To do
            </p>

            <p className="mt-3 text-3xl font-bold">
              {todoCount}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              In progress
            </p>

            <p className="mt-3 text-3xl font-bold">
              {inProgressCount}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-3 text-3xl font-bold">
              {completedCount}
            </p>
          </div>
        </div>

        {/* Task container */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Search + filters */}
          <div className="flex flex-col gap-4 border-b border-gray-200 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search tasks..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-gray-950 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                ["All", "Todo", "In Progress", "Completed"] as const
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
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

          {/* Tasks */}
          <div>
            {filteredTasks.length === 0 ? (
              <div className="px-6 py-16 text-center">
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
                  className="flex flex-col gap-4 border-b border-gray-100 px-6 py-5 last:border-b-0 lg:flex-row lg:items-center lg:justify-between"
                >
                  {/* Left side */}
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      aria-label={`Mark ${task.title} as ${
                        task.status === "Completed"
                          ? "incomplete"
                          : "completed"
                      }`}
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${
                        task.status === "Completed"
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-300 bg-white hover:border-gray-950"
                      }`}
                    >
                      {task.status === "Completed" && "✓"}
                    </button>

                    <div>
                      <h3
                        className={`text-base font-semibold ${
                          task.status === "Completed"
                            ? "text-gray-400 line-through"
                            : "text-gray-950"
                        }`}
                      >
                        {task.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Assigned to {task.assignee}
                      </p>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Status */}
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        task.status === "Completed"
                          ? "bg-green-50 text-green-700"
                          : task.status === "In Progress"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {task.status}
                    </span>

                    {/* Priority */}
                    <select
                      value={task.priority}
                      onChange={(event) =>
                        changePriority(
                          task.id,
                          event.target.value as Priority
                        )
                      }
                      className={`rounded-lg border px-3 py-2 text-sm font-medium outline-none ${
                        task.priority === "High"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : task.priority === "Medium"
                          ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                          : "border-green-200 bg-green-50 text-green-700"
                      }`}
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
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}