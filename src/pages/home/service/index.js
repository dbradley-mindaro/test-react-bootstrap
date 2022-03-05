import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  Person,
  PcDisplayHorizontal,
  Receipt,
  Shop,
  SuitClub,
  WindowFullscreen,
} from "react-bootstrap-icons";
import Paragraph from "../../../components/paragraph";

export const ServiceCard = ({ icon, title, content, ...props }) => {
  return (
    <div className="d-flex align-items-stretch" {...props}>
      <div className="icon-box">
        <div className="icon">{icon}</div>
        <Paragraph
          title={
            <h4>
              <a href="">{title}</a>
            </h4>
          }
          content={content}
        />
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section id="services" className="services">
      <Container>
        <Paragraph
          className="mt-5"
          title={<h2>Services</h2>}
          content="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas."
        />

        <Row>
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceCard
            className="col-lg-4 col-md-6"
            icon={<PcDisplayHorizontal />}
            title="Lorem IpSum"
            content="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Service;
