/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import AccessForm from "../Component/AccessForm/AccessForm";

import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import LoginForm from "../Component/Forms/LoginForm";
import Status from "../Component/Status/Status";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/form",
        element: <AccessForm />,
      },
      {
        path: "/status",
        element: <Status />,
      },
      //   {
      //     path: "/home",
      //     element: <Home />,
      //   },
    ],
  },
  {
    path: "/sign-in",
    element: <LoginForm />,
  },
]);
