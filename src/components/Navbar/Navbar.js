import React, { useState } from "react";
import { Container, Navbar, Row, Col, Offcanvas } from "react-bootstrap";
import logo from "../../assets/fitnessnu-logo.png";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

function NavbarComp(props) {
  const [show, setShow] = useState(false);

  const canvasToggle = () => setShow((t) => !t);

  const { pathname } = useLocation();

  return (
    <Container fluid className="black">
      <Container>
        <Row>
          <Col md={1} sm={1} xs={3} className="navimg">
            <img src={logo} alt="brand" />
          </Col>
          <Col md={11} sm={11} xs={9}>
            <Navbar bg="black" variant="dark" expand="md">
              <Container className="justify-content-end">
                <Navbar.Toggle onClick={canvasToggle} />
                <Navbar.Collapse className="flex justify-content-end hide-about">
                  <ul className="nav navbar-nav navbar-right">
                    {routes.map(({ name, path }) => (
                      <li
                        className={pathname === path ? "active" : ""}
                        key={path}
                      >
                        <Link to={path}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <br />
      <Offcanvas show={show} onHide={canvasToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FitnessNU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="canvas-nav">
            {routes.map(({ name, path }) => (
              <div key={path}>
                <Link className={pathname === path ? "active" : ""} to={path}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default NavbarComp;
