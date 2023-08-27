import { Col, Row } from "react-bootstrap";
import "./index.scss";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const Techstack = () => {
  return (
      <Row className="tech-container" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col className="tech-icons">
        <SiCss3 />
      </Col>
      <Col className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col className="tech-icons">
        <DiNodejs />
      </Col>
      <Col className="tech-icons">
        <DiReact />
      </Col>
      <Col className="tech-icons">
        <SiRedux />
      </Col>
      <Col className="tech-icons">
        <SiMongodb />
      </Col>
      <Col className="tech-icons">
        <DiGit />
      </Col>
    </Row>
    
  );
}

export default Techstack;
