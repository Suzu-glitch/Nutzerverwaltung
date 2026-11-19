import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.png";

function getLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? "sidebar__link sidebar__link--active" : "sidebar__link";
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src={logo} alt="Logo" />
      </div>
      <div className="sidebar__body">
        <NavLink className={getLinkClassName} to="/overview">
          Übersicht
        </NavLink>
        <NavLink className={getLinkClassName} to="/create">
          Erstellen
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
