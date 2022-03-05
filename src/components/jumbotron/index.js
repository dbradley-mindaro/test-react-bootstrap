import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const Jumbotron = ({ content, image }) => {
  return (
    <section
      className="d-flex flex-column justify-content-center jumbotron"
      style={{ backgroundImage: image }}
    >
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xl={8}>{content}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jumbotron;
