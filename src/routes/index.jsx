import React from "react";
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
];
