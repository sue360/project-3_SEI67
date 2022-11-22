import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <h1>website name</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
