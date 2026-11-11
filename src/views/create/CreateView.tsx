import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/userform/UserForm";
import { UserContext } from "../../context/UserContext";
import type { UserFormData } from "../../types/User";

function CreateView() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function handleCreateUser(userData: UserFormData) {
    dispatch({
      type: "ADD_USER",
      user: { id: crypto.randomUUID(), ...userData },
    });
    alert("Nutzer wurde erstellt");
    navigate("/overview");
  }

  return <UserForm onSubmit={handleCreateUser} />;
}

export default CreateView;
