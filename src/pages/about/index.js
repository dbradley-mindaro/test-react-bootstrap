import React from "react";
import { Check2Circle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header";
import Jumbotron from "../../components/jumbotron";
import Paragraph from "../../components/paragraph";

const About = () => {
  return (
    <>
      <Jumbotron
        image="url(/img/features.jpg)"
        content={
          <div className="text-white text-center">
            <h1 className="fw-bold">
              Cyber insurance tailored for professionals
            </h1>
            <h4>
              A standalone cyber policy provides comprehensive financial
              protection against cyber threats compared to packaged policies and
              add-ons
            </h4>
          </div>
        }
      />
      <section>
        <Container>
          <Paragraph
            className="mt-5"
            title={<h2>About Us</h2>}
            content="Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas."
          />

          <Row>
            <Col lg={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <Check2Circle /> Ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                </li>
                <li>
                  <Check2Circle /> Duis aute irure dolor in reprehenderit in
                  voluptate velit
                </li>
                <li>
                  <Check2Circle /> Ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                </li>
              </ul>
            </Col>
            <Col lg={6} className="pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
