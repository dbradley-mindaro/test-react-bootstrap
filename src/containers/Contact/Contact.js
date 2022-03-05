import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Modal from "../../components/Modal/Modal";
import formingImg from "../../assets/images/img02.jpg";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "name":
        setName(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setShow(true);
    }
  };

  return (
    <Container fluid className="black">
      <Container>
        <Row className="form-content">
          <Col md={6} sm={12} xs={12}>
            <img className="forming" src={formingImg} />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <h1 className="heading">CONTACT US</h1>
            <p className="para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
            <Form className="text-info" onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  name="name"
                  placeholder="Full name"
                  onChange={onChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  name="email"
                  placeholder="name@example.com"
                  onChange={onChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="message"
                  placeholder="some message"
                  value={message}
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Button type="submit" className="btn-s2">
                Submit form
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        handleClose={() => setShow(false)}
        heading="Confirm Data"
      >
        <p>{"{"}</p>
        <ListGroup as="ul" className="json-data">
          <ListGroup.Item as="li">name: {name},</ListGroup.Item>
          <ListGroup.Item as="li">email: {email},</ListGroup.Item>
          <ListGroup.Item as="li">message: {message}</ListGroup.Item>
        </ListGroup>
        <p>{"}"}</p>
      </Modal>
    </Container>
  );
}

export default Contact;
