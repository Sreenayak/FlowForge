import { UserRole } from "./roles";

export type Permission =
  | "workspace.manage"
  | "workspace.invite"
  | "workspace.billing"
  | "workspace.analytics"
  | "workspace.integrations"

  | "project.create"
  | "project.manage"
  | "project.view"

  | "sprint.create"

  | "task.assign"
  | "task.update"
  | "task.comment"
  | "task.subtask"

  | "file.upload"
  | "file.view"

  | "time.track"

  | "milestone.manage"

  | "reports.generate"

  | "deliverable.approve"

  | "admin.users"
  | "admin.organizations"
  | "admin.permissions"
  | "admin.audit"
  | "admin.settings";

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  OWNER: [
    "workspace.manage",
    "workspace.invite",
    "workspace.billing",
    "workspace.analytics",
    "workspace.integrations",

    "project.create",
    "project.manage",
    "project.view",

    "sprint.create",

    "task.assign",
    "task.update",
    "task.comment",
    "task.subtask",

    "file.upload",
    "file.view",

    "time.track",

    "milestone.manage",

    "reports.generate",

    "deliverable.approve",
  ],

  PROJECT_MANAGER: [
    "project.create",
    "project.manage",
    "project.view",

    "sprint.create",

    "task.assign",
    "task.update",
    "task.comment",
    "task.subtask",

    "file.upload",
    "file.view",

    "milestone.manage",

    "reports.generate",

    "deliverable.approve",
  ],

  TEAM_MEMBER: [
    "project.view",

    "task.update",
    "task.comment",
    "task.subtask",

    "file.upload",
    "file.view",

    "time.track",
  ],

  CLIENT: [
    "project.view",
    "file.view",
    "task.comment",
    "deliverable.approve",
  ],

  ADMIN: [
    "workspace.manage",
    "workspace.invite",
    "workspace.billing",
    "workspace.analytics",
    "workspace.integrations",

    "project.create",
    "project.manage",
    "project.view",

    "sprint.create",

    "task.assign",
    "task.update",
    "task.comment",
    "task.subtask",

    "file.upload",
    "file.view",

    "time.track",

    "milestone.manage",

    "reports.generate",

    "deliverable.approve",

    "admin.users",
    "admin.organizations",
    "admin.permissions",
    "admin.audit",
    "admin.settings",
  ],
};

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}