import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageUploadForm from './components/ImageUploadForm'
import FeedbackForm from './components/FeedbackForm'

import { useEffect } from 'react'
import axios from 'axios'

// components

import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'
import Profile from './components/pages/Profile'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/projects/:projectId/reviews" element={<FeedbackForm />} />
          <Route path="/projects/imageuploadform" element={<ImageUploadForm />} />
          <Route path="/projects/:projectId" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App