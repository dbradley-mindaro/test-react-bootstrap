import { Container, Row, Image } from "react-bootstrap";
import "./index.css";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Container fluid bg="light">
            <Image
              className="image"
              fluid={true}
              rounded
              src="https://img2.goodfon.com/wallpaper/nbig/2/71/vodopad-efiopiya-blue-nile.jpg"
            />
          </Container>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
            nostrum non unde obcaecati quidem totam recusandae, quia nihil earum
            repellendus similique magnam, nulla dolore modi beatae ipsum tenetur
            cupiditate?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            odit eius rerum laborum molestias unde iste veritatis, voluptate
            officia, numquam aliquam cupiditate dicta cum? Suscipit voluptates
            hic tempore soluta at?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            adipisci explicabo tempora, expedita nobis laborum accusantium.
            Facilis, voluptatem error consequuntur voluptas accusantium natus
            pariatur voluptates sapiente quo reprehenderit, beatae
            exercitationem?
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Home;
