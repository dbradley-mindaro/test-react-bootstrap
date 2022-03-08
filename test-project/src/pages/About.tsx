import { useState } from "react"
import { Accordion, Alert, Card, Col, Container, Row } from "react-bootstrap"
import blogData from "../configs/blogData.json"
import faqData from "../configs/faqData.json"

const About = () => {
  const [show, setShow] = useState(true)
  return (
    <Container className="d-grid gap-1 align-content-center justify-content-center mt-4 mb-5">
      {show && (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Be aware of COVID-19 😷</Alert.Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Alert>
      )}
      <Row xs={2} md={3} className="g-4">
        {blogData.map((item) => {
          return (
            <Col>
              <Card key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title className="title">
                    {item.title}
                  </Card.Title>
                  <Card.Subtitle className="tag">
                    {item.tag + ' '}
                  </Card.Subtitle>
                  <Card.Text className="para">
                    {item.body}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      <Alert variant="info" className="text-center mt-5">
        <Alert.Heading>Frequently Asked Questions</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Alert>
      <Accordion defaultActiveKey="0">
        {faqData.map((item) => {
          return (
            <Accordion.Item eventKey={item.id.toString()}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </Container>
  )
}

export default About