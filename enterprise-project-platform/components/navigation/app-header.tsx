import Link from "next/link";
import Logo from "./logo";

type AppHeaderProps = {
  title: string;
  showBack?: boolean;
};

export default function AppHeader({
  title,
  showBack = false,
}: AppHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard">
            <Logo size="small" />
          </Link>

          <div className="h-7 w-px bg-gray-200" />

          {showBack && (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
            >
              ← Back
            </Link>
          )}

          <h1 className="text-lg font-semibold text-gray-950">
            {title}
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Overview
          </Link>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
            BK
          </div>
        </div>
      </div>
    </header>
  );
}