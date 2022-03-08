import { Alert, Card, Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container className="d-grid gap-1 align-content-center justify-content-center mt-4">
      <Alert variant="success">
        <Alert.Heading>Welcome 👋</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <hr />
        <p className="mb-0">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Alert>
      <Container className="p-0 d-flex gap-3 mb-5">
        <Card>
          <Card.Img variant="top" src="https://unsplash.com/blog/content/images/2021/04/screen-01-2.jpg" />
          <Card.Body>
            <Card.Title className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Card.Title>
            <Card.Subtitle className="tag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Card.Subtitle>
            <Card.Text className="para">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src="https://unsplash.com/blog/content/images/size/w1600/2021/01/screen-02.jpg" />
          <Card.Body>
            <Card.Title className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Card.Title>
            <Card.Subtitle className="tag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Card.Subtitle>
            <Card.Text className="para">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container >
  )
}

export default Home