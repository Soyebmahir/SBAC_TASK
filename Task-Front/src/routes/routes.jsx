/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import AccessForm from "../Component/AccessForm/AccessForm";

import MainLayout from "../layout/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AccessForm />,
      },
      {
        path: "/form",
        element: <AccessForm />,
      },
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "/home",
      //     element: <Home />,
      //   },
    ],
  },
  {
    path: "/login-coopers",
    // element: <Login />,
  },
]);
