import type { ChangeEvent } from "react";
import type { SortOption } from "../../../../types/SortOption";

type OverviewControlsProps = {
  searchTerm: string;
  sortOption: SortOption;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function OverviewControls({
  searchTerm,
  sortOption,
  onSearchChange,
  onSortChange,
}: OverviewControlsProps) {
  return (
    <div className="overview-controls">
      <input
        className="overview-controls__input"
        type="search"
        placeholder="Nach Username suchen"
        aria-label="Nach Username suchen"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <select
        className="overview-controls__select"
        aria-label="Sortierung"
        value={sortOption}
        onChange={onSortChange}
      >
        <option value="created">Reihenfolge der Erstellung</option>
        <option value="name">Name A bis Z</option>
        <option value="dateOfBirth">Geburtsdatum, älteste zuerst</option>
      </select>
    </div>
  );
}

export default OverviewControls;
