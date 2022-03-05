import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { partnersData } from "../../utils/utils";

function Footer() {
  return (
    <Container fluid className="grey">
      <Container className="footer">
        <Row className="foot-header">
          <Col md={6}>
            <h1 className="heading">OUR PARTNERS</h1>
          </Col>
          <Row className="partners">
            {partnersData.map((src) => (
              <Col key={src} md={3} sm={6} xs={12} className="spon">
                <img src={src} />
                <p>Read More</p>
              </Col>
            ))}
          </Row>
        </Row>
        <p className="text-white text-center">© Since 2020-2022 Fitness Company All Rights Reserved</p>
      </Container>
    </Container>
  );
}

export default Footer;
