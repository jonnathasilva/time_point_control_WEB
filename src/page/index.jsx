import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./Login";
import { Signup } from "./Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
