import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import { HomePage } from "./routes/index.tsx";
import { BlogPage } from "./routes/blog.tsx";
import { BlogEntry, loader as entryLoader } from "./routes/blog-entry.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:entrySlug", element: <BlogEntry />, loader: entryLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
