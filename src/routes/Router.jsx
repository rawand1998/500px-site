import React, { lazy } from "react";
const Register = lazy(() => import("../pages/auth/Register"));
const Login = lazy(() => import("../pages/auth/Login"));
const Popular = lazy(() => import("../Component/Popular/Popular"));
const Portofilio = lazy(() => import("../pages/portofilio/Portofilio"));
const RegisterWithEmail = lazy(() =>
  import("../pages/auth/RegisterWithEmail")
);
const EditProfile = lazy(() => import("../pages/editProfile/EditProfile"));
const ProfileHome = lazy(() => import("../Component/ProfileHome/ProfileHome"));
const Home = lazy(() => import("../pages/Home/Home"));
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
