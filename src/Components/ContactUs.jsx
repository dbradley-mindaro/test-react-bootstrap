import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SummaryModal from "./SummaryModal";

const ContactUs = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
    setUserDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  const { name, email, message } = userDetails;

  return (
    <>
      <Form className="p-5 w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            type="text"
            value={name}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            value={email}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            onChange={handleChange}
            as="textarea"
            value={message}
            rows={3}
          />
        </Form.Group>
        <Button
          disabled={
            name.length === 0 || email.length === 0 || message.length === 0
          }
          onClick={handleSubmit}
          variant="primary"
        >
          Submit
        </Button>
      </Form>
      <SummaryModal
        open={open}
        userDetails={userDetails}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default ContactUs;
