import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import UserCard from "./components/usercard/UserCard";

function Overview() {
  const { users } = useContext(UserContext);

  if (users.length === 0) {
    return <p>Noch keine Nutzer angelegt</p>;
  }

  return (
    <section className="overview">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default Overview;
