import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import { HomePage } from "./routes/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
