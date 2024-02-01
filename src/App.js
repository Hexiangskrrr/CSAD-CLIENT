import React from 'react'
import './App.css'
import {  BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './pages/Login/Login'
import Menu from './pages/Menu/Menu'
import Admin from './pages/Admin/Admin'



function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="menu" element={<Menu />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
