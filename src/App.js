import React from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import { CartProvider } from 'react-use-cart';
import AvailableFood from './components/Food/AvailableFood';

function App() {
  return (
    <CartProvider>
      <div>
        <div id='header'><Header/></div>
        <div id='availablefood'><AvailableFood/></div>
      </div>
    </CartProvider>
  );
}

export default App;

import {  BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './pages/Login/Login'
import Menu from './pages/Menu/Menu'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
