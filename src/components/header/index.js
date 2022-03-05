import "./index.css";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="sm" fixed="top">
      <Container>
        <Navbar.Brand href="/">Mindaro</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body className="navbar-light">
            <Nav>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          in={false}
        >
          <Nav>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
