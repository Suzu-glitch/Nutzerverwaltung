import { useNavigate } from "react-router-dom";
import UserForm from "../../components/userform/UserForm";
import useToast from "../../hooks/useToast";
import useUsers from "../../hooks/useUsers";
import type { UserFormData } from "../../types/User";

function CreateView() {
  const { dispatch } = useUsers();
  const { showToast } = useToast();
  const navigate = useNavigate();

  function handleCreateUser(userData: UserFormData) {
    dispatch({
      type: "ADD_USER",
      user: { id: crypto.randomUUID(), ...userData },
    });
    showToast("Nutzer wurde erstellt");
    navigate("/overview");
  }

  return <UserForm onSubmit={handleCreateUser} />;
}

export default CreateView;
