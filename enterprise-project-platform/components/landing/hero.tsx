export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-20 sm:pt-28 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Unified Product Development
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Build products.
            <br />
            <span className="text-gray-400">Together.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            One workspace for project management, team collaboration,
            documentation, communication, and product development.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/auth/signup"
              className="w-full rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
            >
              Get started
            </a>

            <a
              href="#product"
              className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:w-auto"
            >
              Explore platform
            </a>
          </div>
        </div>

        {/* Product Preview */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-200/60">
            {/* Browser Bar */}
            <div className="flex h-11 items-center gap-2 border-b border-gray-200 bg-white px-4">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />

              <div className="ml-4 flex h-7 flex-1 items-center rounded-md border border-gray-200 bg-gray-50 px-3">
                <span className="text-xs text-gray-400">
                  app.flowforge.com/dashboard
                </span>
              </div>
            </div>

            {/* Application Preview */}
            <div className="flex min-h-[420px] bg-white">
              {/* Sidebar */}
              <aside className="hidden w-52 shrink-0 border-r border-gray-200 bg-gray-50/70 p-4 sm:block">
                <div className="mb-7 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-950 text-xs font-bold text-white">
                    F
                  </div>

                  <span className="text-sm font-semibold text-gray-900">
                    FlowForge
                  </span>
                </div>

                <div className="space-y-1">
                  {[
                    "Dashboard",
                    "Projects",
                    "Tasks",
                    "Calendar",
                    "Messages",
                    "Files",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs font-medium ${
                        index === 0
                          ? "bg-gray-900 text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Workspace
                  </p>

                  <div className="rounded-lg px-3 py-2 text-xs text-gray-500">
                    Product Team
                  </div>

                  <div className="rounded-lg px-3 py-2 text-xs text-gray-500">
                    Settings
                  </div>
                </div>
              </aside>

              {/* Dashboard */}
              <div className="min-w-0 flex-1 p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Monday, August 11</p>
                    <h2 className="mt-1 text-xl font-semibold text-gray-950">
                      Good afternoon, Bharath
                    </h2>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600 sm:flex">
                    BK
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {[
                    ["Active Projects", "12"],
                    ["Pending Tasks", "28"],
                    ["Team Members", "24"],
                    ["Productivity", "87%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <p className="text-[11px] text-gray-400">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-gray-950">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-gray-200 p-5 lg:col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Project Progress
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Current project overview
                        </p>
                      </div>

                      <span className="text-xs font-medium text-gray-500">
                        This week
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      {[
                        ["Website Redesign", "78%"],
                        ["Mobile Application", "64%"],
                        ["Analytics Platform", "42%"],
                      ].map(([name, progress]) => (
                        <div key={name}>
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="font-medium text-gray-700">
                              {name}
                            </span>
                            <span className="text-gray-400">{progress}</span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                            <div
                              className="h-full rounded-full bg-gray-900"
                              style={{ width: progress }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-5">
                    <p className="text-sm font-semibold text-gray-900">
                      Recent Activity
                    </p>

                    <div className="mt-5 space-y-5">
                      {[
                        "New task assigned",
                        "Sprint updated",
                        "Document uploaded",
                        "Client commented",
                      ].map((activity) => (
                        <div key={activity} className="flex gap-3">
                          <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-900" />

                          <div>
                            <p className="text-xs font-medium text-gray-700">
                              {activity}
                            </p>
                            <p className="mt-1 text-[10px] text-gray-400">
                              A few minutes ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            One workspace. One source of truth. One product lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
}