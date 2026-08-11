const securityFeatures = [
  {
    number: "01",
    title: "Role-Based Access",
    description:
      "Control what owners, managers, team members, clients, and administrators can access and manage.",
  },
  {
    number: "02",
    title: "Secure Authentication",
    description:
      "Support protected authentication, secure sessions, email verification, and controlled account access.",
  },
  {
    number: "03",
    title: "Organization Permissions",
    description:
      "Manage permissions at the organization and workspace level to keep access aligned with responsibilities.",
  },
  {
    number: "04",
    title: "Audit Logging",
    description:
      "Record important activity across the platform to improve accountability and operational visibility.",
  },
  {
    number: "05",
    title: "Protected File Uploads",
    description:
      "Validate uploaded files and keep project assets within controlled workspace access.",
  },
  {
    number: "06",
    title: "API Authorization",
    description:
      "Protect application resources with authorization middleware and permission-aware access control.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="border-t border-gray-200 bg-gray-50 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Security & Control
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Built for controlled
            <br />
            collaboration.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            FlowForge is designed to keep project information protected while
            giving every participant the level of access they actually need.
          </p>
        </div>

        {/* Security overview */}
        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_320px]">
          {/* Main security grid */}
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <article
                key={feature.number}
                className="border-b border-gray-200 p-6 transition hover:bg-gray-50 sm:p-7"
              >
                <span className="text-xs font-semibold text-gray-400">
                  {feature.number}
                </span>

                <div className="mt-7 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-xs font-semibold text-white">
                  ✓
                </div>

                <h3 className="mt-6 text-base font-semibold text-gray-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* Access control preview */}
          <aside className="rounded-3xl bg-gray-950 p-7 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Access Control
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              The right access for the right role.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Permissions can be structured around the responsibilities of
              each participant in the product lifecycle.
            </p>

            <div className="mt-8 space-y-3">
              {[
                ["Workspace Owner", "Full workspace control"],
                ["Project Manager", "Project & team management"],
                ["Team Member", "Assigned work access"],
                ["Client", "View, comment & approve"],
                ["Admin", "Platform-wide management"],
              ].map(([role, access]) => (
                <div
                  key={role}
                  className="rounded-xl border border-gray-800 bg-gray-900 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white">
                      {role}
                    </p>

                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    {access}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Security principle */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Security Principle
              </p>

              <h3 className="mt-3 text-xl font-semibold text-gray-950 sm:text-2xl">
                Collaboration without unnecessary access.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                Every role should have access to the information and actions
                required for its responsibilities, without exposing unrelated
                project controls.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
                Identity
              </span>

              <span className="text-gray-300">→</span>

              <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
                Role
              </span>

              <span className="text-gray-300">→</span>

              <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
                Permission
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}