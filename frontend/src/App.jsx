import React from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home.jsx"
import Post from "./pages/Post.jsx"
import "./index.css"
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  let user = true;

  return (
    <BrowserRouter>
      <Navbar user={user}/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App