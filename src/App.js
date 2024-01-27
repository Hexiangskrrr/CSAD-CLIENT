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