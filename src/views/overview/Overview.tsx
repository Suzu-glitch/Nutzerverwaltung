import UserCard from "./components/usercard/UserCard";
import type { User } from "../../types/User";

const SAMPLE_USERS: User[] = [
  {
    id: "1",
    username: "max",
    dateOfBirth: "2000-05-17",
    gender: "Weiblich",
    email: "max@example.de",
    postalAddress: "50225",
    phoneNumber: "6468498",
    website: "google.com",
  },
  {
    id: "2",
    username: "anna",
    dateOfBirth: "1995-02-03",
    gender: "Divers",
    email: "anna@example.de",
    postalAddress: "50667",
    phoneNumber: "1234567",
    website: "example.com",
  },
];

function Overview() {
  return (
    <section className="overview">
      {SAMPLE_USERS.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default Overview;
