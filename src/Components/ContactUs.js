import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { MainParent } from '../Styles/Styled'

const Contact = () => {
  const [person, setPerson] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true)
  };

  const HideModal = () => {
    setShowModal(false)
  }

  return (
    <MainParent >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={person.email}
            onChange={handleChange}
            name="email"
            type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={person.password}
            onChange={handleChange}
            name="password"
            type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <ModalSetup showModal={showModal} handleClose={HideModal} person={person} />
    </MainParent>
  )
}


function ModalSetup({ showModal, handleClose, person }) {

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>{JSON.stringify(person)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Contact