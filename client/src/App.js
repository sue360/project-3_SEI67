import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageNavbar from './components/navbars/HomePageNavbar'
import Gallery from './components/pages/Gallery'
import NavbarAuth from './components/navbars/GalleryNavbar'



const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  switch (window.location.pathname){
    case '/':
  }

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <HomePageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App



