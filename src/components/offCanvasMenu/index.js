import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Button, Offcanvas } from 'react-bootstrap';

import './styles.css';

function OffCanvasMenu({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2" id="btn">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
              <Nav.Link as={Link} to="/contact">contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default OffCanvasMenu;