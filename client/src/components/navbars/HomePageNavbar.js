// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const HomePageNavbar = () => {


  return (
    <nav className='nav'>
      <Link to ='/'>🤖</Link>
      <ul className='navicons'>
        <li>
          <Link to ='/login'>Login |</Link>
        </li>
        <li>
          <Link to= '/gallery'>Gallery |</Link>
        </li>
        <li>
          <Link to='/register'>Register |</Link>
        </li>
        <li>
          <Link to='/projects/imageuploadform'>Upload |</Link>
        </li>
      </ul>

    </nav>

  )
}

export default HomePageNavbar