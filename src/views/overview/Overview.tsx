import useUsers from "../../hooks/useUsers";
import UserCard from "./components/usercard/UserCard";

function Overview() {
  const { users } = useUsers();

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
