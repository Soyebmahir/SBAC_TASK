/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import AccessForm from "../Component/AccessForm/AccessForm";

import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import LoginForm from "../Component/Forms/LoginForm";
import Status from "../Component/Status/Status";
import ShowDetails from "../Component/ShowDetails/ShowDetails";
import AccessRequest from "../pages/AccessRequest/AccessRequest";

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
      {
        path: "/form_edit/:id",
        element: <ShowDetails />,
      },
      {
        path: "/access-request",
        element: <AccessRequest />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <LoginForm />,
  },
]);
