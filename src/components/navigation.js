import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    navBarStyle: {
        backgroundColor: "lightblue  !important",
        marginTop: "10px",
        fontWeight: "500",
    },
    navBarCollapseStyle: {
        backgroundColor: "lightblue !important",
    },
    navLinkStyle: {
        fontSize: "25px",
        color: "#000 !important",
    },
    collapsenavLinkStyle: {
        fontSize: "15px",
        color: "#000 !important",
    }
}));
export default function NavigationComponent() {
    const classes = useStyles();
    return (
        <>
            <Navbar bg="light" expand="lg" className={classes.navBarStyle}>
                <Container className={classes.containerStyle}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className={classes.navLinkStyle}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className={classes.navLinkStyle}>
                                About
                            </Nav.Link>

                            <Nav.Link as={Link} to="/contact" className={classes.navLinkStyle}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg="light" collapseOnSelect expand="sm" fixed="top" className={classes.navBarCollapseStyle}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/home" className={classes.collapsenavLinkStyle}>
                                    Home
                            </Nav.Link>
                                <Nav.Link as={Link} to="/about" className={classes.collapsenavLinkStyle}>
                                    About
                            </Nav.Link>

                                <Nav.Link as={Link} to="/contact" className={classes.collapsenavLinkStyle}>
                                    Contact Us
                            </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );

}