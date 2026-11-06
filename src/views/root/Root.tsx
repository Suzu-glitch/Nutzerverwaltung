import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <p>Hallo</p>
      <Outlet />
    </>
  );
}

export default Root;
