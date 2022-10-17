import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProviders from "./context/auth";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProviders>
    <RouterProvider router={Router}>
    <App />
    </RouterProvider>
  </AuthProviders>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
