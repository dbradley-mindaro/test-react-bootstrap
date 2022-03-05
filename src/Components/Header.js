import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Links } from '../Styles/Styled';


const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Links to="/" >
                  Home
                </Links>
              </Nav.Link >
              <Nav.Link>
                <Links to="/about" >
                  About
                </Links>
              </Nav.Link>
              <Nav.Link>
                <Links to="/contact" >
                  Contact
                </Links>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

