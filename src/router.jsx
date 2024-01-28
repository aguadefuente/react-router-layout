import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Root from "./layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
