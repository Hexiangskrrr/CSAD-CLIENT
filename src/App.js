import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import AdminAuth from "./pages/Admin/AdminAuth";
import AdminConsole from "./pages/Admin/AdminConsole";
import Kitchen from "./pages/Kitchen/OrderList";

function App() {
  const [isAdminAuthenticated, IsAdminAuthenticated] = useState(false);

  const handleAdminAuth = () => {
    IsAdminAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route
          path="/admin"
          element={<AdminAuth onAdminAuth={handleAdminAuth} />}
        />
        {isAdminAuthenticated ? (
          <Route path="/adminconsole" element={<AdminConsole />} />
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
