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
