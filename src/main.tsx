import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeadsIndex from "./routes/leads/LeadsIndex";
import LeadDetails from "./routes/leads/LeadDetails";
const router = createBrowserRouter([
  {
    path: "/leads",
    element: <LeadsIndex />,
  },
  {
    path: "/leads/:id/details",
    element: <LeadDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
