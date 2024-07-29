import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import { HomePage } from "./routes/index.tsx";
import { BlogPage } from "./routes/blog.tsx";
import { BlogEntry, blogEntryLoader } from "./routes/blog-entry.tsx";
import { NotFound } from "./routes/not-found.tsx";
import { TechnicalLogsPage } from "./routes/technical-logs.tsx";
import {
  TechnicalLogEntry,
  technicalLogLoader,
} from "./routes/technical-log-entry.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
      {
        path: "/blog/:entrySlug",
        element: <BlogEntry />,
        loader: blogEntryLoader,
      },
      { path: "/technical-logs", element: <TechnicalLogsPage /> },
      {
        path: "/technical-logs/:logSlug",
        element: <TechnicalLogEntry />,
        loader: technicalLogLoader,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
