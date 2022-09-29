import "./App.css";
import NavBar from "./Component/common/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/header/Header";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="clients" element={<Clients />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="findWork" element={<FindWork />} />
      <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
