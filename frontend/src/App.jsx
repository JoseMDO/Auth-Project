import {React, useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home.jsx"
import Post from "./pages/Post.jsx"

import "./index.css"
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser =  () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      }).then(res => {
        if (res.status === 200) return res.json();
        throw new Error("Authentication failed!")
      }).then(resObject=>{
        setUser(resObject.user)
      }).catch( err => {
        console.log(err);
      })
    }
    getUser()
  }, [])


  console.log(user)


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