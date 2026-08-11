const aiFeatures = [
  {
    number: "01",
    title: "Project Risk Prediction",
    description:
      "Surface potential project risks by analyzing progress, deadlines, workload, blockers, and activity patterns.",
  },
  {
    number: "02",
    title: "Workspace AI Chatbot",
    description:
      "Ask questions about projects, tasks, documentation, files, meetings, and workspace activity using project context.",
  },
  {
    number: "03",
    title: "Meeting Summarization",
    description:
      "Turn meeting discussions into structured summaries, decisions, action items, and follow-up tasks.",
  },
];

export default function AIFeatures() {
  return (
    <section
      id="ai"
      className="border-t border-gray-800 bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Intelligent Workspace
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI that understands
            <br />
            the work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            FlowForge can use the context already inside the workspace to
            help teams identify risks, find information, and turn meetings
            into actionable work.
          </p>
        </div>

        {/* AI Feature Cards */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {aiFeatures.map((feature, index) => (
            <article
              key={feature.number}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gray-700 hover:bg-gray-800 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">
                  {feature.number}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 text-xs text-gray-400 transition group-hover:border-gray-500 group-hover:text-white">
                  AI
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {feature.description}
              </p>

              {/* Mini visual */}
              {index === 0 && (
                <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Project Health
                    </span>

                    <span className="text-xs font-medium text-gray-300">
                      82 / 100
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-800">
                    <div className="h-full w-[82%] rounded-full bg-white" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Risk level
                    </span>

                    <span className="rounded-full border border-gray-700 px-2.5 py-1 text-[10px] font-medium text-gray-300">
                      Moderate
                    </span>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-4">
                  <div className="rounded-lg bg-gray-900 p-3">
                    <p className="text-[10px] text-gray-500">
                      You
                    </p>

                    <p className="mt-1 text-xs text-gray-300">
                      Which tasks are blocking the current sprint?
                    </p>
                  </div>

                  <div className="mt-3 rounded-lg border border-gray-800 p-3">
                    <p className="text-[10px] text-gray-500">
                      FlowForge AI
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      3 tasks are currently blocking the sprint. Two are
                      waiting for code review and one depends on an unfinished
                      API task.
                    </p>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-600">
                        Decisions
                      </p>

                      <p className="mt-1 text-xs text-gray-300">
                        Move release candidate to final testing.
                      </p>
                    </div>

                    <div className="border-t border-gray-800 pt-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-600">
                        Action Items
                      </p>

                      <p className="mt-1 text-xs text-gray-300">
                        Prepare final testing checklist.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* AI principle */}
        <div className="mt-8 rounded-2xl border border-gray-800 bg-white p-7 text-gray-950 sm:p-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Context First
              </p>

              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                AI should work with the project, not around it.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                The goal is to make useful project information easier to
                understand and act on without forcing teams into another
                disconnected tool.
              </p>
            </div>

            <div className="shrink-0 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
              <p className="text-xs text-gray-400">
                Workspace context
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                Projects + Tasks + Docs + Meetings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}