import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import Root from "./views/root/Root";
import Overview from "./views/overview/Overview";
import CreateView from "./views/create/CreateView";
import EditView from "./views/edit/EditView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
