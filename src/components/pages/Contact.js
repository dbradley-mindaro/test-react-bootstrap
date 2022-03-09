import React, { useState,useRef } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import "./Pages.css";

const Contact = () => {
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [json, setJson] = useState();
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handlers
  const handleClose = () => {
    setShow(false);
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) {
      setJson("Fields left blank");
      setShow(true);
    } else {
      e.target.reset();
      setJson(JSON.stringify(formValues));
      setShow(true);
    }
  };
  const onChangeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Container className=" font-20-white" fluid>
      <div className="contactBackground jumbotron">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
        <Form style={{ padding: "50px" }} onSubmit={handleSubmit} ref={formRef}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Enter name"
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter password"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
            name="message"
          >
            <Form.Label>Message</Form.Label>

            <Form.Control
              name="message"
              as="textarea"
              aria-label="With textarea"
              placeholder="Write your message here"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Form Data(JSON)</Modal.Title>
          </Modal.Header>
          <Modal.Body>{json}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default Contact;
