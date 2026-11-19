import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ToastProvider from "./context/ToastProvider";
import UserProvider from "./context/UserProvider";
import Root from "./views/root/Root";
import Overview from "./views/overview/Overview";
import CreateView from "./views/create/CreateView";
import EditView from "./views/edit/EditView";
import ErrorPage from "./views/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/overview" replace /> },
      { path: "/overview", element: <Overview /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  return (
    <ToastProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ToastProvider>
  );
}

export default App;
