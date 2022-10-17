import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProviders from "./context/auth";
import { BrowserRouter } from "react-router-dom";;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProviders>
);

