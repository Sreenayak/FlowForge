"use client";

import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("Acme Product Team");
  const [workspaceUrl, setWorkspaceUrl] = useState("acme-team");
  const [companyName, setCompanyName] = useState("Acme Technologies");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [taskNotifications, setTaskNotifications] = useState(true);
  const [deadlineNotifications, setDeadlineNotifications] = useState(true);
  const [mentionNotifications, setMentionNotifications] = useState(true);

  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionSecurity, setSessionSecurity] = useState(true);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 text-lg font-bold text-white">
                F
              </div>
            </Link>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                Workspace
              </p>

              <h1 className="text-2xl font-bold">Settings</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
            >
              Overview
            </Link>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        {/* Page heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm text-gray-400">Workspace administration</p>

          <h2 className="text-4xl font-bold tracking-tight">Settings</h2>

          <p className="mt-3 text-lg text-gray-500">
            Manage your workspace information, notifications, and security
            preferences.
          </p>
        </div>

        {/* Success message */}
        {saved && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
              ✓
            </span>

            Changes saved successfully.
          </div>
        )}

        {/* =========================================================
            WORKSPACE DETAILS
        ========================================================== */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-7 py-6">
            <h3 className="text-xl font-bold">Workspace details</h3>

            <p className="mt-1 text-sm text-gray-500">
              Update the information your team uses to identify this
              workspace.
            </p>
          </div>

          <div className="space-y-7 px-7 py-7">
            {/* Workspace name */}
            <div>
              <label
                htmlFor="workspaceName"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Workspace name
              </label>

              <input
                id="workspaceName"
                type="text"
                value={workspaceName}
                onChange={(event) => setWorkspaceName(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            {/* Workspace URL */}
            <div>
              <label
                htmlFor="workspaceUrl"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Workspace URL
              </label>

              <div className="flex overflow-hidden rounded-xl border border-gray-200">
                <div className="flex items-center bg-gray-50 px-4 text-sm text-gray-400">
                  flowforge.app/
                </div>

                <input
                  id="workspaceUrl"
                  type="text"
                  value={workspaceUrl}
                  onChange={(event) => setWorkspaceUrl(event.target.value)}
                  className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                This will be used as your workspace's unique address.
              </p>
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="companyName"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Company or team
              </label>

              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            {/* Save */}
            <div className="flex items-center justify-end border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={handleSave}
                className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Save changes
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            NOTIFICATIONS
        ========================================================== */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-7 py-6">
            <h3 className="text-xl font-bold">Notifications</h3>

            <p className="mt-1 text-sm text-gray-500">
              Choose which workspace events should send you notifications.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Email */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Email notifications</p>
                <p className="mt-1 text-sm text-gray-500">
                  Receive important workspace updates by email.
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(event) =>
                  setEmailNotifications(event.target.checked)
                }
                className="h-5 w-5 accent-black"
              />
            </label>

            {/* Tasks */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Task updates</p>
                <p className="mt-1 text-sm text-gray-500">
                  Get notified when tasks are assigned or completed.
                </p>
              </div>

              <input
                type="checkbox"
                checked={taskNotifications}
                onChange={(event) =>
                  setTaskNotifications(event.target.checked)
                }
                className="h-5 w-5 accent-black"
              />
            </label>

            {/* Deadlines */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Deadline reminders</p>
                <p className="mt-1 text-sm text-gray-500">
                  Receive reminders about upcoming project deadlines.
                </p>
              </div>

              <input
                type="checkbox"
                checked={deadlineNotifications}
                onChange={(event) =>
                  setDeadlineNotifications(event.target.checked)
                }
                className="h-5 w-5 accent-black"
              />
            </label>

            {/* Mentions */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Mentions</p>
                <p className="mt-1 text-sm text-gray-500">
                  Get notified when another team member mentions you.
                </p>
              </div>

              <input
                type="checkbox"
                checked={mentionNotifications}
                onChange={(event) =>
                  setMentionNotifications(event.target.checked)
                }
                className="h-5 w-5 accent-black"
              />
            </label>
          </div>

          <div className="flex justify-end border-t border-gray-100 px-7 py-6">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Save changes
            </button>
          </div>
        </section>

        {/* =========================================================
            SECURITY
        ========================================================== */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-7 py-6">
            <h3 className="text-xl font-bold">Security</h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage authentication and workspace security preferences.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Two factor */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Two-factor authentication</p>

                <p className="mt-1 text-sm text-gray-500">
                  Add an additional verification step to protect your account.
                </p>
              </div>

              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(event) => setTwoFactor(event.target.checked)}
                className="h-5 w-5 accent-black"
              />
            </label>

            {/* Session */}
            <label className="flex cursor-pointer items-center justify-between px-7 py-5">
              <div>
                <p className="font-semibold">Secure sessions</p>

                <p className="mt-1 text-sm text-gray-500">
                  Keep authenticated sessions protected across devices.
                </p>
              </div>

              <input
                type="checkbox"
                checked={sessionSecurity}
                onChange={(event) =>
                  setSessionSecurity(event.target.checked)
                }
                className="h-5 w-5 accent-black"
              />
            </label>
          </div>

          <div className="flex justify-end border-t border-gray-100 px-7 py-6">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Save changes
            </button>
          </div>
        </section>

        {/* Footer actions */}
        <div className="flex justify-between py-10">
          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Back to dashboard
          </Link>

          <button
            type="button"
            onClick={handleSave}
            className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Save all changes
          </button>
        </div>
      </div>
    </main>
  );
}