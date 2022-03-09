import { useState } from 'react';
import { Container, Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';

import Navbar from '../../components/navbar';
import JsonModal from '../../components/modal';

import './styles.css';

function Contact() {
    const [validated, setValidated] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setModalShow(true)
        }
        setValidated(true);
    };
    
    return (
        <Container className="p-3">
            <Navbar />
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-3">
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <FloatingLabel className="mb-3" controlId="formEmail" label="Email">
                            <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            <Form.Text className="text-muted">
                                Please write your mail address.
                            </Form.Text>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <FloatingLabel className="mb-3" controlId="formName" label="Name">
                            <Form.Control type="text" placeholder="Enter name" required  value={name} onChange={(e) => {setName(e.target.value)}} />
                            <Form.Text className="text-muted">
                                Please write your full name.
                            </Form.Text>
                        </FloatingLabel>
                    </Col>
                </Row>
                <FloatingLabel className="mb-3" controlId="forComment" label="Messages">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a messages here"
                        required
                        style={{ height: '100px' }}
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                    />
                    <Form.Text className="text-muted">
                        Please write your message.
                    </Form.Text>
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <JsonModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={ {"name" : name, "email": email, "message": message} }
            />
        </Container>
    )
}

export default Contact;