import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    contactText: {
        textAlign: 'center',
        marginTop: '70px',
        fontSize: '40px',
        fontColor: '#212429',
    },
    formContent: {
        marginLeft: '243px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
        },
    },
    formControl: {
        width: '65%',
    },
    buttonStyle: {
        backgroundColor: "#27ae60",
        marginTop: "30px",
        marginLeft: "27%",
        color: "#fff",
        borderColor: "#27ae60",
        width: "17%",
        fontSize: "20px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "30px",
            fontSize: "13px",
            marginBottom: "15px",
        },
    }
}));
export default function ContactComponent() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleShow();


    }
    return (
        <>
            <Typography className={classes.contactText}>Contact Us </Typography>

            <Form onSubmit={handleSubmit} className={classes.formContent}>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text"
                            className={classes.formControl}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name" />
                    </Col>

                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text"
                            className={classes.formControl}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email" />
                    </Col>

                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Message</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text"
                            className={classes.formControl}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter message" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" className={classes.buttonStyle}>
                    Submit
                </Button>
            </Form>


            < Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Form Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        JSON.stringify({
                            name, email, message
                        }, null, 2)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                       </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}