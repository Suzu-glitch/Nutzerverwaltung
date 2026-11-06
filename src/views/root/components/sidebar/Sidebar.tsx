import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src={logo} alt="Logo" />
      </div>
      <div className="sidebar__body">
        <Link className="sidebar__link" to="/overview">
          Übersicht
        </Link>
        <Link className="sidebar__link" to="/create">
          Erstellen
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
