import { useEffect, useReducer, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import { userManagementReducer } from "../hooks/userManagementReducer";
import type { User } from "../types/User";

const STORAGE_KEY = "users";

function loadUsers(): User[] {
  try {
    const storedUsers = localStorage.getItem(STORAGE_KEY);

    if (!storedUsers) {
      return [];
    }

    const parsedUsers = JSON.parse(storedUsers);
    return Array.isArray(parsedUsers) ? parsedUsers : [];
  } catch {
    return [];
  }
}

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [users, dispatch] = useReducer(userManagementReducer, [], loadUsers);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
