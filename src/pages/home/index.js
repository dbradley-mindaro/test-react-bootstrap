import Header from "../../components/header";
import Jumbotron from "../../components/jumbotron";
import Service from "./service";

const Home = () => {
  return (
    <>
      <Jumbotron
        image="url(/img/hero-bg.jpg)"
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
      <Service />
    </>
  );
};

export default Home;
