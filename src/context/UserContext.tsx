import { createContext, type Dispatch } from "react";
import type { User } from "../types/User";
import type { UserAction } from "../hooks/userManagementReducer";

type UserContextValue = {
  users: User[];
  dispatch: Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextValue>({
  users: [],
  dispatch: () => {},
});
