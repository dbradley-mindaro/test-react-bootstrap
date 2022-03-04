import {Link} from "react-router-dom"
import {Navbar,Container,Nav, Offcanvas} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const Navigation = () => {

    return(
        <>
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Mindaro.io</Navbar.Brand>
    <Navbar.Toggle  aria-controls="offcanvasNavbar" />
   
    <NavbarCollapse id="diff">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav>
      </NavbarCollapse>
    
    <Navbar.Offcanvas
    
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
        
        
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Mindaro.io</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    
  </Container>
</Navbar>

        </>
    )
}

export default Navigation;

