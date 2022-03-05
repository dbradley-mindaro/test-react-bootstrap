import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header";
import Paragraph from "../../components/paragraph";
import Feedback from "./feedback";
import ContactInfo from "./contact-info";

const Contact = () => {
  return (
    <>
      <section>
        <Container>
          <Paragraph
            className="mt-5 pt-5"
            title={<h2 className="text-dark">Contact</h2>}
            content="Magnam dolores commodi suscipit. Necessitatibus eius consequatur
            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas."
          />
        </Container>

        <Container>
          <Row className="mt-5">
            <Col lg={4}>
              <ContactInfo />
            </Col>
            <Col lg={8} className="mt-3 mt-lg-0">
              <Feedback />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
