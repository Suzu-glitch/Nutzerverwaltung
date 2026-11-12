import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/userform/UserForm";
import { UserContext } from "../../context/UserContext";
import type { UserFormData } from "../../types/User";

function EditView() {
  const { id } = useParams();
  const { users, dispatch } = useContext(UserContext);
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
    alert("Nutzer wurde aktualisiert");
    navigate("/overview");
  }

  return <UserForm key={userId} user={user} onSubmit={handleUpdateUser} />;
}

export default EditView;
