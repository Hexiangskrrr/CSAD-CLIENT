import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import AdminAuth from "./pages/Admin/AdminAuth";
import AdminConsole from "./pages/Admin/AdminConsole";
import KitchenAuth from "./pages/Kitchen/KitchenAuth";
import KitchenConsole from "./pages/Kitchen/KitchenConsole";
import About from "./pages/About/About";

function App() {
  const [isAdminAuthenticated, IsAdminAuthenticated] = useState(false);
  const [isKitchenAuthenticated, IsKitchenAuthenticated] = useState(false);

  const handleAdminAuth = () => {
    IsAdminAuthenticated(true);
  };

  const handleKitchenAuth = () => {
    IsKitchenAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route
          path="/admin"
          element={<AdminAuth onAdminAuth={handleAdminAuth} />}
        />
        {isAdminAuthenticated ? (
          <Route path="/adminconsole" element={<AdminConsole />} />
        ) : null}

        <Route
          path="/kitchen"
          element={<KitchenAuth onKitchenAuth={handleKitchenAuth} />}
        />
        {isKitchenAuthenticated ? (
          <Route path="/kitchenconsole" element={<KitchenConsole />} />
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
