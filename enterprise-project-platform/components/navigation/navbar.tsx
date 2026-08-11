import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-sm font-semibold text-white">
            F
          </div>

          <span className="text-lg font-semibold text-gray-950">
            FlowForge
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-600 transition hover:text-gray-950"
          >
            Product
          </a>

          <a
            href="#solution"
            className="text-sm text-gray-600 transition hover:text-gray-950"
          >
            Solutions
          </a>

          <a
            href="#workflow"
            className="text-sm text-gray-600 transition hover:text-gray-950"
          >
            Workflow
          </a>

          <a
            href="#security"
            className="text-sm text-gray-600 transition hover:text-gray-950"
          >
            Security
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-gray-950 sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/auth/signup"
            className="rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}