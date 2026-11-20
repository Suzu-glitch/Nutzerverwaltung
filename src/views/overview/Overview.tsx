import { useMemo, useState, type ChangeEvent } from "react";
import useUsers from "../../hooks/useUsers";
import type { SortOption } from "../../types/SortOption";
import OverviewControls from "./components/overviewcontrols/OverviewControls";
import UserCard from "./components/usercard/UserCard";

function Overview() {
  const { users } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("created");

  const visibleUsers = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(normalizedSearchTerm),
    );

    if (sortOption === "name") {
      return [...filteredUsers].sort((first, second) =>
        first.username.localeCompare(second.username, "de"),
      );
    }

    if (sortOption === "dateOfBirth") {
      return [...filteredUsers].sort((first, second) =>
        first.dateOfBirth.localeCompare(second.dateOfBirth),
      );
    }

    return filteredUsers;
  }, [users, searchTerm, sortOption]);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortOption(event.target.value as SortOption);
  }

  if (users.length === 0) {
    return <p>Noch keine Nutzer angelegt</p>;
  }

  return (
    <section className="overview">
      <OverviewControls
        searchTerm={searchTerm}
        sortOption={sortOption}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
      />
      {visibleUsers.length === 0 ? (
        <p>Keine Nutzer gefunden</p>
      ) : (
        visibleUsers.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </section>
  );
}

export default Overview;
