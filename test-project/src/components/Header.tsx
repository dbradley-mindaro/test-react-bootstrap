import { Container, Nav, Navbar, NavLink, Offcanvas } from "react-bootstrap"

const HeaderNav = () => {
  return (
    <Nav className="flex gap-3">
      <NavLink href="/" className="nav-link">
        Home
      </NavLink>
      <NavLink href="/about" className="nav-link">
        About
      </NavLink>
      <NavLink href="/contact" className="nav-link">
        Contact Us
      </NavLink>
    </Nav>
  )
}

const Header = () => {
  return (
    <Navbar collapseOnSelect className="navbar navbar-dark bg-dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand href="/">William's Test Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className="bg-dark" closeVariant="white"></Offcanvas.Header>
          <Offcanvas.Body className="navbar-dark bg-dark">
            <HeaderNav />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Collapse
          className="justify-content-center"
          in={false}
        >
          <HeaderNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header