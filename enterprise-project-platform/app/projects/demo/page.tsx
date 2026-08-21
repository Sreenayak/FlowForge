import Link from "next/link";

const sections = [
  { href: "/projects/demo/tasks", label: "Tasks", detail: "Plan and track delivery work." },
  { href: "/projects/demo/milestones", label: "Milestones", detail: "Follow important project checkpoints." },
  { href: "/projects/demo/files", label: "Files", detail: "Keep project documents together." },
  { href: "/projects/demo/team", label: "Team", detail: "Manage project collaborators." },
  { href: "/projects/demo/activity", label: "Activity", detail: "Review the latest project changes." },
];

export default function ProjectOverviewPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-gray-950">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 font-bold text-white">F</span>
            <span className="font-bold">FlowForge</span>
          </Link>
          <Link href="/projects" className="text-sm font-semibold text-gray-600 hover:text-gray-950">All projects</Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Acme Product Team</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Website Redesign</h1>
        <p className="mt-3 max-w-2xl text-gray-600">A central workspace for the team&apos;s design, engineering, and launch work.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm">
              <h2 className="font-bold">{section.label}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">{section.detail}</p>
              <span className="mt-6 inline-block text-sm font-semibold">Open {section.label.toLowerCase()} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}