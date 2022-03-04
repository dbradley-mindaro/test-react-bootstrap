import {Container, Row, Image, } from "react-bootstrap"
import "./index.css"
const About = () => {

    return(
        <Container>
            <Row>
                <Container fluid bg="light">
                <Image className="image"  fluid={true} rounded src="https://files.wallpaperpass.com/2020/02/simpsons_wallpaper_65-1332x850-1-768x490.jpg"/>
                </Container>
            </Row>
            <Row>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum non unde obcaecati quidem totam recusandae, quia nihil earum repellendus similique magnam, nulla dolore modi beatae ipsum tenetur cupiditate?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odit eius rerum laborum molestias unde iste veritatis, voluptate officia, numquam aliquam cupiditate dicta cum? Suscipit voluptates hic tempore soluta at?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam adipisci explicabo tempora, expedita nobis laborum accusantium. Facilis, voluptatem error consequuntur voluptas accusantium natus pariatur voluptates sapiente quo reprehenderit, beatae exercitationem?</p>
            </Row>
        </Container>
    )
}

export default About;