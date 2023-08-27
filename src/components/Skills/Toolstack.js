import { Col, Row } from "react-bootstrap";
import "./index.scss";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row className="tech-container" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col className="tech-icons">
        <SiPostman />
      </Col>
      <Col className="tech-icons">
        <SiVercel />
      </Col>
      <Col className="tech-icons">
        <SiNetlify />
      </Col>
      <Col className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
