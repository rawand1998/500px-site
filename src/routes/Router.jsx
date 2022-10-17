import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Register = lazy(() => import("../Component/auth/Register"));
const Login = lazy(() => import("../Component/auth/Login"));
const Popular = lazy(() => import("../Component/Popular/Popular"));
const Portofilio = lazy(() => import("../Component/portofilo/Portofilio"));
const RegisterWithEmail = lazy(() =>
  import("../Component/auth/RegisterWithEmail")
);
const EditProfile = lazy(() => import("../Component/editProfile/EditProfile"));
const ProfileHome = lazy(() => import("../Component/ProfileHome/ProfileHome"));
const Home = lazy(() => import("../Component/Home/Home"));
const Router = {
  routes: [
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "popular", element: <Popular /> },
    { path: "profile", element: <Portofilio />, params: { id: "id" } },
    { path: "registerform", element: <RegisterWithEmail /> },
    { path: "edit", element: <EditProfile /> },
    { path: "home", element: <ProfileHome /> },
  ],
};

export default Router;
