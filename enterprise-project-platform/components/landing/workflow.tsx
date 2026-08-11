const workflowSteps = [
  {
    number: "01",
    title: "Define",
    description:
      "Identify requirements, understand the problem, and establish the product goals with the team.",
    tags: ["Requirements", "Goals", "Initial planning"],
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Create the workspace and project, organize the team, define milestones, and prepare the work.",
    tags: ["Workspace", "Projects", "Milestones"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Break the work into tasks and sprints while the team develops and tracks progress together.",
    tags: ["Tasks", "Sprints", "Kanban"],
  },
  {
    number: "04",
    title: "Collaborate",
    description:
      "Keep discussions, documentation, meetings, files, and decisions connected to the product.",
    tags: ["Chat", "Wiki", "Meetings"],
  },
  {
    number: "05",
    title: "Review",
    description:
      "Give clients visibility into progress, collect feedback, review deliverables, and refine the product.",
    tags: ["Client access", "Feedback", "Approvals"],
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Complete the product, share the final deliverables, and continue tracking the product after implementation.",
    tags: ["Delivery", "Implementation", "Tracking"],
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="border-t border-gray-200 bg-gray-50 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            How It Works
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            From requirements
            <br />
            to product delivery.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            FlowForge keeps the entire product lifecycle connected, allowing
            teams to work incrementally, gather feedback, and improve the
            product throughout development.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-16 space-y-5">
          {/* Vertical line */}
          <div className="absolute bottom-8 left-10 top-8 hidden w-px bg-gray-300 lg:block" />

          {workflowSteps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-gray-300 sm:p-9 lg:p-10"
            >
              <div className="grid gap-7 lg:grid-cols-[64px_1fr_auto] lg:items-start">
                {/* Number */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-950 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                    {step.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Label */}
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 lg:pt-2">
                  Product Lifecycle
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}