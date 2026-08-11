const clientActions = [
  {
    title: "View Progress",
    description: "See project progress, milestones, and development activity.",
  },
  {
    title: "Review Documents",
    description: "Access shared project documents and deliverables.",
  },
  {
    title: "Communicate",
    description: "Comment on tasks and communicate with the project team.",
  },
  {
    title: "Approve Deliverables",
    description: "Review completed work and provide approval when ready.",
  },
];

export default function ClientCollaboration() {
  return (
    <section
      id="client"
      className="border-t border-gray-200 bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Client Collaboration
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Keep clients involved.
            <br />
            Keep control with the team.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Clients can follow development, review documents, communicate
            with the team, and approve deliverables without gaining access
            to modify the project itself.
          </p>
        </div>

        {/* Client portal preview */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-3 shadow-xl shadow-gray-200/40 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {/* Portal header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-950 text-sm font-bold text-white">
                  F
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-950">
                    Client Portal
                  </p>

                  <p className="text-xs text-gray-400">
                    Website Redesign
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                  Client Access
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                  CL
                </div>
              </div>
            </div>

            {/* Portal content */}
            <div className="grid lg:grid-cols-[1fr_300px]">
              {/* Main content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      Project Overview
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-gray-950">
                      Website Redesign
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                      Track the current development progress and review the
                      latest project deliverables.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                    78% Complete
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-8">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-600">
                      Development progress
                    </span>

                    <span className="text-gray-400">
                      78%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[78%] rounded-full bg-gray-950" />
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-950">
                      Recent Deliverables
                    </h4>

                    <span className="text-xs text-gray-400">
                      3 items
                    </span>
                  </div>

                  <div className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200">
                    {[
                      ["Homepage Design", "Ready for review"],
                      ["Mobile Prototype", "Ready for review"],
                      ["Design Documentation", "Approved"],
                    ].map(([name, status]) => (
                      <div
                        key={name}
                        className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                            ↗
                          </div>

                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {name}
                            </p>

                            <p className="mt-0.5 text-xs text-gray-400">
                              Project deliverable
                            </p>
                          </div>
                        </div>

                        <span
                          className={`text-xs font-medium ${
                            status === "Approved"
                              ? "text-gray-900"
                              : "text-gray-500"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Permissions panel */}
              <aside className="border-t border-gray-200 bg-gray-50 p-6 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Client Permissions
                </p>

                <h4 className="mt-3 text-base font-semibold text-gray-950">
                  Controlled access
                </h4>

                <div className="mt-6 space-y-3">
                  {clientActions.map((action) => (
                    <div
                      key={action.title}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-gray-900">
                          {action.title}
                        </p>

                        <span className="text-xs text-gray-400">
                          Allowed
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        {action.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Restricted action */}
                <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-gray-900">
                      Modify Project
                    </p>

                    <span className="text-xs font-medium text-gray-500">
                      Restricted
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Clients cannot modify project structure, tasks, settings,
                    or team permissions.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Visibility", "Clients always know where the product stands."],
            ["Communication", "Feedback stays connected to the project."],
            ["Control", "Teams retain control over project modification."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="border-l-2 border-gray-900 pl-5"
            >
              <h3 className="text-sm font-semibold text-gray-950">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}