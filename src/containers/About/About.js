import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { aboutData } from "../../utils/utils";
import slideBottom from "../../assets/images/slidesBottom.png";

function About() {
  return (
    <Container fluid className="blue-border">
      <Container className="about-wrap">
        <Row className="about-wrap-row1">
          <Col md={8} xs={12} className="about-header">
            <h1 className="heading">ABOUT US</h1>
            <p className="para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              contain.
            </p>
            <p className="para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              contain.
            </p>
          </Col>
        </Row>
        <Row className="about-wrap-row2 hide-about">
          {aboutData.map(({ displayName, description, img }) => (
            <Col md={4} sm={4} className="img-con" key={displayName}>
              <img src={img} />
              <div className="slide-anime"></div>
              <div className="overlay">
                <div className="text">
                  <h4>{displayName}</h4>
                  <p>{description}</p>
                </div>
              </div>
              <img className="big-overlay" src={slideBottom} />
            </Col>
          ))}
        </Row>
      </Container>
      <Carousel className="clearfix visible-xs">
        {aboutData.map(({ displayName, description, img }) => (
          <Carousel.Item key={displayName}>
            <img className="d-block w-100" src={img} alt={displayName} />
            <Carousel.Caption>
              <h3>{displayName}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
    </Container>
  );
}

export default About;
