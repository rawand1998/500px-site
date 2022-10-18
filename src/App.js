import "./App.css";
import NavBar from "./Component/common/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Router from "./routes/Router";

import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <NavBar />
      <Routes>
        {Router.routes.map((route, Index) => (
          <Route path={route.path} element={route.element} key={Index} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
