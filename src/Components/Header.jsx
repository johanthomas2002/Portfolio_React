import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom' // Import Link from react-router-dom

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "100px", position: "fixed", top: 0, width: "100%", zIndex: 1 }}>
        <Container>
          <img src="/images/My_photo.jpg" alt="my pic" style={{ height: "90px", width: "90px", borderRadius: "60%" }} />
          <h4 className='text-light ms-3'>JOHAN THOMAS</h4>
          <Nav className="ms-auto">
            {/* Use Link for SPA navigation */}
            <Nav.Link as={Link} to="/" className='me-5 fs-4'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='me-5 fs-4'>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className='me-5 fs-4'>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='me-5 fs-4'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
