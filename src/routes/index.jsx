import React from "react";
import Home from "../pages/Dashboard/Home";
import Todos from "../pages/Dashboard/Todos";
import Index from "../pages/Index";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/settings",
      },
    ],
  },
];
