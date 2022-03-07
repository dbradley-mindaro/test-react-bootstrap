import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

const getNavContent = () => {
  return (
    <>
      <Link className="nav-link" to={ROUTES.HOME}>
        Home
      </Link>
      <Link className="nav-link" to={ROUTES.ABOUT}>
        About Us
      </Link>
      <Link className="nav-link" to={ROUTES.CONTACTUS}>
        Contact Us
      </Link>
    </>
  );
};

const Topbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Mindaro</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{getNavContent()}</Nav>
        </Navbar.Collapse>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Mindaro</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {getNavContent()}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Topbar;
