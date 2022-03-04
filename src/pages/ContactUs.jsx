
import { useState } from "react";
import {Container, Form, Button} from "react-bootstrap"
import CustomModal from "../Components/CustomModal";
import "./index.css"


const ContactUs = () => {
const [open,setOPen] = useState(false);
const [message, setMessage] = useState("");
const show = () => setOPen(true);
const close = () => setOPen(false);

const handleSubmit = (e) => {

    e.preventDefault();
    const data ={
        FullName:e.target.name.value,
        email:e.target.email.value,
        message:e.target.message.value
    }

    setMessage(JSON.stringify(data));

show();
    console.log(data)

}

 

    return(
        <>
        <Container className="form-top-space">
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
          <Form.Label >Full Name</Form.Label>
          <Form.Control required name="name" type="text" placeholder="Girum Kedese Birhane" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control required name="email" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Please enter your message</Form.Label>
          <Form.Control required name="message" as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </Container>
      <CustomModal show={open} handleClose={close} message={message} title={"Your Form Data"}/>
      </>
        )
}

export default ContactUs;