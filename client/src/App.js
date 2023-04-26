import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import G_prof from "./admin/G_prof";
import G_admin from "./admin/G_admin";
import G_classe from "./admin/G_classe";
import G_planing from "./admin/G_planing";
import Navbar from "./admin/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>acuille</h1>,
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/G_PROF",
        element: <G_prof />,
      },
      {
        path: "/G_ADMIN",
        element: <G_admin />,
      },
      {
        path: "/G_classe",
        element: <G_classe />,
      },
      {
        path: "/G_PLANING",
        element: <G_planing />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
