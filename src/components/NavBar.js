import React, { useState, useLayoutEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const NavBar = () => {
  const [show, setShow] = useState(false);
  const width = useWindowSize();
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return width > 768 ? (
    <Navbar bg="light" variant="light" className="margin">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand-nav">
          Mindaro
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" className="font-nav">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Mindaro</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            className="widthOverride offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Mindaro
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                onClick={toggleShow}
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
