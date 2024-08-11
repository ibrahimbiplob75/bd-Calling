import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DisplayUser from "./component/DisplayUser";
import UpdateData from "./component/UpdateData";
import App from "./App";
import PostUser from "./component/PostUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/register",
    element:<PostUser></PostUser>
  },
  {
    path: "/users",
    element: <DisplayUser />,
    loader: () => fetch("http://localhost:3000/users"),
  },
  {
    path: "/users/:id",
    element: <UpdateData />,
    loader: ({ params }) => {
      return fetch(`http://localhost:3000/users/${params.id}`);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
