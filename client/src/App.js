import { useEffect } from 'react'
import axios from 'axios'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageNavbar from './components/common/HomePageNavbar'



const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <HomePageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App


// import from React



//Import components 
//import PageNavbar from './components/pages/common/PageNavbar'

