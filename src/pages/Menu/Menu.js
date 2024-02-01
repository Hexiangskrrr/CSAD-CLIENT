import React from 'react'
import './Menu.css'
import AvailableFood from '../../components/Food/AvailableFood/AvailableFood'
import Header from '../../components/Layout/Header/Header'
import {  useEffect  } from 'react'


import { CartProvider } from 'react-use-cart'





function Menu() {


  useEffect(() => {
    sessionStorage.clear()
    localStorage.clear()
  }, []);

  return(
    <CartProvider>
    <div>
      <div id='header'><Header/></div>
      <div id='availablefood'><AvailableFood/></div>
    </div>
    </CartProvider>
  )
}


export default Menu