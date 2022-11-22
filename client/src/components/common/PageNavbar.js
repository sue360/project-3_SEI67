
import { Link } from 'react-router-dom'

import { getToken, getPayload } from '../../components/helpers/auth'
import { useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



const PageNavbar = () => {


  useEffect(() => {
    getPayload()
  }, [])


  return (
    <Navbar expand="sm">
      <Container>
        <>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </>

      </Container>
    </Navbar>
  )
}

export default PageNavbar