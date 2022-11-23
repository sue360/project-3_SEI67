// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const ProfileNavbar = () => {


  return (
    <nav className='nav_auth'>
      <a href='/'>🤖</a>
      <ul className='navicons_auth'>
        <li>
          <a href='/gallery/upload'>Upload |</a>
        </li>
        <li>
          <a href='/gallery'>Gallery |</a>
        </li>
        <li>
          <a href='/logout'>Logout</a>
        </li>
      </ul>

    </nav>

  )
}

export default ProfileNavbar