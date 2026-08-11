const problems = [
  {
    number: "01",
    title: "Scattered project information",
    description:
      "Tasks, documents, files, and project decisions often live across different platforms.",
  },
  {
    number: "02",
    title: "Constant context switching",
    description:
      "Teams move between multiple tools just to understand what needs to be built and why.",
  },
  {
    number: "03",
    title: "Disconnected communication",
    description:
      "Important discussions can become separated from the tasks and decisions they belong to.",
  },
  {
    number: "04",
    title: "Limited project visibility",
    description:
      "Managers and clients can struggle to see the complete picture of development progress.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-gray-200 bg-gray-50 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Building software shouldn't mean managing a collection of tools.
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Modern teams often use separate platforms for project management,
            communication, documentation, files, meetings, and development.
            The result is fragmented information and constant context
            switching.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article key={problem.number} className="bg-white p-7 sm:p-8">
              <span className="text-sm font-semibold text-gray-400">
                {problem.number}
              </span>

              <h3 className="mt-10 text-lg font-semibold text-gray-950">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-4 border-l-2 border-gray-900 pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base font-medium leading-7 text-gray-800">
            Teams shouldn't have to search across multiple applications to
            understand their own product.
          </p>

          <span className="text-sm font-semibold text-gray-500">
            One project. One context.
          </span>
        </div>
      </div>
    </section>
  );
}