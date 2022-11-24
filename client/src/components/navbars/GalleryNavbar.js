// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const GalleryNavbar = () => {

  return (
    <nav className='nav'>
      <Link to ='/'>🤖</Link>
      <ul className='navicons'>
        <li>
          <Link to ='/login'>Upload |</Link>
        </li>
        <li>
          <Link to= '/gallery'>Logout |</Link>
        </li>
      </ul>

    </nav>

  )


}

export default GalleryNavbar