import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { ProtectRouter } from "~/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRouter>
        <Home />
      </ProtectRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export const Router = () => (
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
