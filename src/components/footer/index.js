import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-black text-center p-5 text-white mt-5">
      <Container>
        <h3>Mindaro</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div>
          &copy; Copyright{" "}
          <strong>
            <span>Mindaro</span>
          </strong>
          . All Rights Reserved
        </div>
        <div>
          Designed by <a href="/">Frank Johnson</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
