import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function Root() {
  return (
    <div className="root">
      <Sidebar />
      <main className="root__content">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
