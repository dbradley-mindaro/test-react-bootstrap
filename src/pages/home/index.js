import { Container } from 'react-bootstrap';

import Navbar from '../../components/navbar';

import './styles.css';

function Home() {
    return (
        <Container className="p-3">
            <Navbar />
            <div className="bg-light rounded-lg m-3 Home">
                <img src={"/assets/logo.svg"} className="Home-logo" alt="logo" />
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" role="button">Learn more</a>
            </div>
        </Container>
    )
}

export default Home;