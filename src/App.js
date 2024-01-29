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