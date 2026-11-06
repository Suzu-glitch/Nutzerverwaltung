import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  return <RouterProvider router={router} />;
}

export default App;
