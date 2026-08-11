"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Project Management",
    description:
      "See the entire project at a glance. Track progress, milestones, deadlines, priorities, and team members without leaving the project workspace.",
    tags: ["Projects", "Milestones", "Deadlines"],
  },
  {
    number: "02",
    title: "Task Management",
    description:
      "Create, assign, organize, and track work with detailed tasks, subtasks, labels, priorities, attachments, checklists, and dependencies.",
    tags: ["Tasks", "Subtasks", "Dependencies"],
  },
  {
    number: "03",
    title: "Kanban & Sprints",
    description:
      "Break work into manageable stages and sprints while the entire team tracks progress through a shared workflow.",
    tags: ["Kanban", "Sprints", "Backlog"],
  },
  {
    number: "04",
    title: "Documentation",
    description:
      "Keep technical knowledge, project decisions, specifications, and shared documentation connected directly to the work.",
    tags: ["Wiki", "Markdown", "Version History"],
  },
  {
    number: "05",
    title: "Team Communication",
    description:
      "Keep conversations connected to projects with channels, direct messages, threaded discussions, mentions, reactions, and file sharing.",
    tags: ["Chat", "Channels", "Threads"],
  },
  {
    number: "06",
    title: "Meetings & Calendar",
    description:
      "Organize meetings, agendas, notes, action items, deadlines, sprint dates, and team availability in one connected environment.",
    tags: ["Meetings", "Calendar", "Action Items"],
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const feature = features[activeFeature];

  return (
    <section
      id="features"
      className="bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Core Platform
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Everything connected
            <br />
            to the work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            FlowForge brings the tools teams use throughout the product
            lifecycle into one connected environment.
          </p>
        </div>

        {/* Feature interface */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-800 bg-gray-900">
          <div className="grid lg:grid-cols-[290px_1fr]">
            {/* Feature navigation */}
            <div className="border-b border-gray-800 lg:border-b-0 lg:border-r">
              {features.map((item, index) => {
                const active = index === activeFeature;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    className={`flex w-full items-center gap-4 border-b border-gray-800 px-6 py-5 text-left transition ${
                      active
                        ? "bg-white text-gray-950"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-semibold">
                      {item.number}
                    </span>

                    <span className="text-sm font-medium">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Feature content */}
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {feature.title}
              </p>

              <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                {getFeatureHeadline(activeFeature)}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
                {feature.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project preview */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-gray-700 bg-gray-950">
                <div className="border-b border-gray-800 px-5 py-4">
                  <p className="text-xs text-gray-500">Project</p>

                  <div className="mt-1 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white">
                      Website Redesign
                    </p>

                    <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3">
                  <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
                    <p className="text-xs text-gray-500">Progress</p>
                    <p className="mt-2 text-2xl font-semibold">78%</p>
                  </div>

                  <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
                    <p className="text-xs text-gray-500">Tasks</p>
                    <p className="mt-2 text-2xl font-semibold">32 / 41</p>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="mt-2 text-2xl font-semibold">Aug 28</p>
                  </div>
                </div>

                <div className="border-t border-gray-800 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      Project completion
                    </p>

                    <p className="text-xs text-gray-400">78%</p>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-800">
                    <div
                      className="h-full rounded-full bg-white"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getFeatureHeadline(index: number) {
  const headlines = [
    "See the entire project at a glance.",
    "Turn scattered work into organized execution.",
    "Move work from backlog to completion.",
    "Keep product knowledge connected to the work.",
    "Keep conversations close to the work.",
    "Plan meetings and important dates together.",
  ];

  return headlines[index];
}