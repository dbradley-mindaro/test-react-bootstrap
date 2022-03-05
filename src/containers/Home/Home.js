import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PushupImg from "../../assets/images/img01.jpg";
import VidPlayback from "../../assets/images/videoPlayIcon.png";

function Home() {
  return (
    <>
      <Container fluid className="black">
        <Container>
          <Row className="banner">
            <Col lg={{ offset: 1, span: 8 }} className="banner-content">
              <p className="ban_p1">
                STRONGER <span> & STRONGER</span>
              </p>
              <p className="ban_p2">
                FITNESS<span>NU</span>
              </p>
              <p className="ban_p3">
                Lorem ipsum dolor sit amet,
                <span className="ban_p31">consectetur adipiscing elit,</span>
              </p>
              <p className="ban_p3 ban_p31">
                labore et dolore magna aliqua. Ut enim ad
              </p>
              <p className="ban_p4">
                <a href="#">GET STARTED</a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="blue-border">
        <Container>
          <Row className="section1">
            <Col md={6} sm={12} xs={12} className="s1box1">
              <h1 className="heading">TRAINING</h1>
              <p className="s1p1 para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui
              </p>
              <p className="s1p2 para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </Col>
            <Col md={6} sm={12} xs={12} className="s1box1">
              <img className="img-responsive girl" src={PushupImg} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
