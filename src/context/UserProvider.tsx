import { useEffect, useReducer, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import { userManagementReducer } from "../hooks/userManagementReducer";
import type { User } from "../types/User";

const STORAGE_KEY = "users";

function loadUsers(): User[] {
  const storedUsers = localStorage.getItem(STORAGE_KEY);

  if (!storedUsers) {
    return [];
  }

  return JSON.parse(storedUsers);
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
