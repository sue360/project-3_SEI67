// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const HomePageNavbar = () => {


  return (
    <nav className='nav'>
      <a href='/'>🤖</a>
      <ul className='navicons'>
        <li>
          <a href='/login'>Login |</a>
        </li>
        <li>
          <a href='/gallery'>Gallery</a>
        </li>
      </ul>

    </nav>

  )
}

export default HomePageNavbar