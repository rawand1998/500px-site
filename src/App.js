import "./App.css";
import NavBar from "./Component/common/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import Popular from "./Component/Popular/Popular";
import Portofilio from "./Component/portofilo/Portofilio";
import RegisterWithEmail from "./Component/auth/RegisterWithEmail";
import EditProfile from "./Component/editProfile/EditProfile";

import  ProfileHome from './Component/ProfileHome/ProfileHome'
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="popular" element={<Popular />} />
        <Route path="profile/:id" element={<Portofilio />} />
        <Route path="registerform" element={<RegisterWithEmail />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="home" element={<ProfileHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
