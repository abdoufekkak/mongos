import React from "react";
import "./App.css";
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
import Accueil from "./admin/Accueil.js";

import PLANING from "./professeur/PLANING.jsx";
import NavbarProf from "./professeur/NavbarProf";
import L_Module from "./professeur/L_Module.jsx";
import A_Etudiant from "./professeur/A_Etudiant.jsx";

import Login from "./admin/Login.js";

import Module from "./professeur/Module";


const Layout = () => {
  return (
    <span>
      <Navbar />
      <Outlet />
    </span>
  );
};

const Layout_P = () => {
  return (
    <span>
      <NavbarProf />
      <Outlet />
    </span>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/login",
    element: <Login />,
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
  {
    path: "/",
    element: <Layout_P />,
    children: [
      {
        path: "/user/PLANING",
        element: <PLANING />,
      },
      {
        path: "/user/L_Module",
        element: <L_Module />,
      },
      {
        path: "/user/A_Etudiant",
        element: <A_Etudiant />,
      },
      {
        path: "/user/module",
        element: <Module />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
