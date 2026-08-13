"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  type CurrentUser,
  type UserRole,
} from "./roles";

import {
  hasPermission,
  type Permission,
} from "./permissions";

type AuthContextType = {
  user: CurrentUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  login: (user: CurrentUser) => void;
  logout: () => void;

  hasPermission: (permission: Permission) => boolean;
  hasRole: (...roles: UserRole[]) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "flowforge_current_user";

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEY);

      if (storedUser) {
        const parsedUser: CurrentUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to restore FlowForge session:", error);
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (newUser: CurrentUser) => {
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const checkPermission = (permission: Permission) => {
    if (!user) {
      return false;
    }

    return hasPermission(user.role, permission);
  };

  const checkRole = (...roles: UserRole[]) => {
    if (!user) {
      return false;
    }

    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: user !== null,

        login,
        logout,

        hasPermission: checkPermission,
        hasRole: checkRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}