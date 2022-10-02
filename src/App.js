import "./App.css";
import NavBar from "./Component/common/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/header/Header";
import Home from "./Component/Home/Home"
import Login from "./Component/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
        {/* />
      {/* <Route path="about" element={<About />} />
      <Route path="clients" element={<Clients />} />
      <Route path="enterprise" element={<Enterprise />} />
       />
      <Route path="register" element={<Register />} />
      <Route path="findWork" element={<FindWork />} />
      <Route path="*" element={<Error />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
