import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function useUsers() {
  return useContext(UserContext);
}

export default useUsers;
