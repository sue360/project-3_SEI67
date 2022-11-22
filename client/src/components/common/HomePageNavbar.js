// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const PageNavbar = () => {


  return (
    <nav className='nav'>
      <a href='/'>🤖</a>
      <ul className='navicons'>
        <li>
          <a href='/Login'>Login |</a>
        </li>
        <li>
          <a href='/Login'>Register</a>
        </li>
      </ul>

    </nav>

  )
}

export default PageNavbar