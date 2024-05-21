import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Admin from './Admin.jsx'

function App() {
  return (
   <> <header>
   <div className="container">
   <nav className='navbar'>
      <button>tasty</button>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Speciatelist</li>
        <li>Reservation</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button><li><Link to={'/admin'} className='admin'>Admin</Link></li></button>
    </nav>
   </div>
 </header>

  <BrowserRouter>
  <Routes>
    <Route element={<Admin/>} path="/"/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App