import { Form, Row, Col, Button, Container } from "react-bootstrap"

const Contact = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    console.log(JSON.stringify(data))
    alert(JSON.stringify(data));

  }

  return (
    <Container className="d-flex align-content-center justify-content-center" style={{ marginTop: '6rem' }}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control required name="name" type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required name="email" type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control required name="message" placeholder="Hello, William!" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact