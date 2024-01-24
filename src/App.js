import React from 'react'
import './App.css'
import AvailableFood from './components/Food/AvailableFood'
import Header from './components/Layout/Header/Header'


import { CartProvider } from 'react-use-cart'





function App() {

  return(
    <CartProvider>
    <div>
      <div id='header'><Header/></div>
      <div id='availablefood'><AvailableFood/></div>
    </div>
    </CartProvider>
  )
}


export default App









/*
import React from 'react'
import { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div>
      
      {(typeof backendData.users === "undefined") ? (
        <p>loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}


export default App
*/