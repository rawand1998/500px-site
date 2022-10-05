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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
function App() {;

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="popular" element={<Popular />} />
        <Route path="profile" element={<Portofilio />} />
        <Route path="registerform" element={<RegisterWithEmail />} />
        {/* />
      {/* <Route path="about" element={<About />} />
      <Route path="clients" element={<Clients />} />
      <Route path="enterprise" element={<Enterprise />} />
       />
   
      <Route path="findWork" element={<FindWork />} />
      <Route path="*" element={<Error />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
