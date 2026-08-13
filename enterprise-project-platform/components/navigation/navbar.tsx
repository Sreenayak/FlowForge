"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="medium" />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Home
          </Link>

          <Link
            href="/#features"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Features
          </Link>

          <Link
            href="/#solutions"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Solutions
          </Link>

          <Link
            href="/#security"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Security
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/auth/signup"
            className="rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}