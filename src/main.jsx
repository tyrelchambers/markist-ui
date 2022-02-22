import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet, ReactLocation, Router } from "react-location";
import { routes } from "./routes";

const queryClient = new QueryClient();

const location = new ReactLocation();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
