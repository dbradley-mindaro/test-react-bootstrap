import { Nav, Container, Col } from 'react-bootstrap';
import OffCanvasMenu from '../offCanvasMenu'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Container>
            <Col xs={12} className="d-none d-sm-flex">
                <Nav defaultActiveKey="/home" as="ul" id="navbar">
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <OffCanvasMenu placement={"end"} name={"Menu"} id="offCanvasMenu"/>
        </Container>
    )
}

export default Navbar;