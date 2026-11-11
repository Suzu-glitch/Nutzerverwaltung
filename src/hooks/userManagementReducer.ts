import type { User } from "../types/User";

export type UserAction =
  | { type: "ADD_USER"; user: User }
  | { type: "REMOVE_USER"; id: string }
  | { type: "UPDATE_USER"; user: User };

export function userManagementReducer(
  users: User[],
  action: UserAction,
): User[] {
  switch (action.type) {
    case "ADD_USER":
      return [...users, action.user];
    case "REMOVE_USER":
      return users.filter((user) => user.id !== action.id);
    case "UPDATE_USER":
      return users.map((user) =>
        user.id === action.user.id ? action.user : user,
      );
    default:
      return users;
  }
}
