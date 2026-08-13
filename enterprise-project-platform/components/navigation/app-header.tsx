"use client";

import Link from "next/link";
import Logo from "./logo";
import { useAuth } from "@/lib/auth/auth-context";

type AppHeaderProps = {
  title: string;
  showBack?: boolean;
};

export default function AppHeader({
  title,
  showBack = false,
}: AppHeaderProps) {
  const {
    user,
    isLoading,
    isAuthenticated,
    logout,
    hasPermission,
  } = useAuth();

  if (isLoading) {
    return (
      <header className="border-b border-[#eadfd7] bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <Logo size="small" />
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-[#eadfd7] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard">
            <Logo size="small" />
          </Link>

          <div className="h-7 w-px bg-[#eadfd7]" />

          {showBack && (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-500 transition hover:text-[#ea580c]"
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
          {isAuthenticated && user && (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>

                <p className="text-xs text-gray-500">
                  {formatRole(user.role)}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-sm font-bold text-white">
                {getInitials(user.name)}
              </div>

              <button
                type="button"
                onClick={logout}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-[#fff4ea] hover:text-[#ea580c]"
              >
                Logout
              </button>
            </>
          )}

          {!isAuthenticated && !isLoading && (
            <Link
              href="/auth/login"
              className="rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>

      {/* Permission-aware quick navigation */}
      {isAuthenticated && user && (
        <div className="border-t border-[#eadfd7] bg-[#fff9f5]">
          <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-2">
            <NavLink href="/dashboard">
              Dashboard
            </NavLink>

            {hasPermission("project.view") && (
              <NavLink href="/projects">
                Projects
              </NavLink>
            )}

            {hasPermission("task.update") && (
              <NavLink href="/projects/demo/tasks">
                Tasks
              </NavLink>
            )}

            {hasPermission("milestone.manage") && (
              <NavLink href="/projects/demo/milestones">
                Milestones
              </NavLink>
            )}

            {hasPermission("file.view") && (
              <NavLink href="/projects/demo/files">
                Files
              </NavLink>
            )}

            {hasPermission("project.manage") && (
              <NavLink href="/projects/demo/team">
                Team
              </NavLink>
            )}

            {hasPermission("project.view") && (
              <NavLink href="/projects/demo/activity">
                Activity
              </NavLink>
            )}

            {hasPermission("workspace.manage") && (
              <NavLink href="/settings">
                Settings
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-[#ffe7d6] hover:text-[#ea580c]"
    >
      {children}
    </Link>
  );
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatRole(role: string): string {
  switch (role) {
    case "OWNER":
      return "Workspace Owner";

    case "PROJECT_MANAGER":
      return "Project Manager";

    case "TEAM_MEMBER":
      return "Team Member";

    case "CLIENT":
      return "Client";

    case "ADMIN":
      return "Admin";

    default:
      return role;
  }
}