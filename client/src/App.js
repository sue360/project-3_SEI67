import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageNavbar from './components/navbars/HomePageNavbar'
import Gallery from './components/pages/Gallery'
import Profile from './components/pages/Profile'
import NavbarAuth from './components/navbars/GalleryNavbar'

// components

import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'


const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects') // * <-- replace with your endpoint
    }
    getData()
  })

  return (

    <div className='site-wrapper'>
      <BrowserRouter>
        <HomePageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App



