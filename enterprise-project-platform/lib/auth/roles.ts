export type UserRole =
  | "OWNER"
  | "PROJECT_MANAGER"
  | "TEAM_MEMBER"
  | "CLIENT"
  | "ADMIN";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  workspaceId: string;
  workspaceName: string;
}