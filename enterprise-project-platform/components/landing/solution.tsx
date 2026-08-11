export default function Solution() {
  const solutions = [
    {
      number: "01",
      title: "Project Management",
      description:
        "Plan projects, milestones, tasks, sprints, priorities, and deadlines from one workspace.",
    },
    {
      number: "02",
      title: "Team Collaboration",
      description:
        "Keep conversations, comments, meetings, and project activity connected to the work.",
    },
    {
      number: "03",
      title: "Documentation",
      description:
        "Create and maintain project documentation, wiki pages, technical notes, and shared knowledge.",
    },
    {
      number: "04",
      title: "Files & Assets",
      description:
        "Store project files, documents, designs, videos, and other assets alongside the work.",
    },
    {
      number: "05",
      title: "Client Collaboration",
      description:
        "Give clients controlled visibility into progress, documents, deliverables, feedback, and approvals.",
    },
    {
      number: "06",
      title: "Analytics & Insights",
      description:
        "Understand project progress, workload, productivity, time, and overall project health.",
    },
  ];

  return (
    <section
      id="solution"
      className="border-t border-gray-200 bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            The Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Everything your team needs.
            <br />
            Connected in one workspace.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            FlowForge brings project management, collaboration, documentation,
            communication, and product visibility together so teams can work
            from a shared source of truth.
          </p>
        </div>

        {/* Workspace preview */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {/* Workspace header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-950 text-sm font-semibold text-white">
                  F
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-950">
                    Product Team
                  </p>

                  <p className="text-xs text-gray-400">
                    Unified workspace
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Search workspace
              </button>
            </div>

            {/* Solution grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  key={solution.number}
                  className="min-h-[220px] border-b border-gray-200 p-7 last:border-b-0 sm:border-r lg:min-h-[235px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      {solution.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-gray-950" />
                  </div>

                  <h3 className="mt-10 text-base font-semibold text-gray-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-7 text-center text-sm text-gray-400">
          One workspace. One source of truth. One product lifecycle.
        </p>
      </div>
    </section>
  );
}