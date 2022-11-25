import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageUploadForm from './components/ImageUploadForm'
import FeedbackForm from './components/FeedbackForm'

import { useEffect } from 'react'
//import axios from 'axios'
import Home from './components/pages/Home'
import HomePageNavbar from './components/navbar/HomePageNavbar'
import Gallery from './components/pages/Gallery'
import Profile from './components/pages/Profile'

// components

import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'


const App = () => {
  return (

    <div className='site-wrapper'>
      <BrowserRouter>
        <HomePageNavbar />
        <Routes>
          <Route path="/projects/:projectId/reviews" element={<FeedbackForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/imageuploadform" element={<ImageUploadForm />} />
          <Route path="/project/:projectId" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App



