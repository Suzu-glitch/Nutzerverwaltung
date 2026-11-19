import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/userform/UserForm";
import useToast from "../../hooks/useToast";
import useUsers from "../../hooks/useUsers";
import type { UserFormData } from "../../types/User";

function EditView() {
  const { id } = useParams();
  const { users, dispatch } = useUsers();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const user = users.find((currentUser) => currentUser.id === id);

  if (!user) {
    return <p>Nutzer wurde nicht gefunden</p>;
  }

  const userId = user.id;

  function handleUpdateUser(userData: UserFormData) {
    dispatch({
      type: "UPDATE_USER",
      user: { id: userId, ...userData },
    });
    showToast("Nutzer wurde aktualisiert");
    navigate("/overview");
  }

  function handleCancel() {
    navigate("/overview");
  }

  return (
    <UserForm
      key={userId}
      user={user}
      onSubmit={handleUpdateUser}
      onCancel={handleCancel}
    />
  );
}

export default EditView;
