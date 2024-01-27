import React from 'react'
import './Menu.css'
import AvailableFood from '../../components/Food/AvailableFood'
import Header from '../../components/Layout/Header/Header'


import { CartProvider } from 'react-use-cart'





function Menu() {

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