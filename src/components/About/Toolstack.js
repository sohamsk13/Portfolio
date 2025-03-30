import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,

  SiVercel,
  
  SiNetlify,
  SiAmazonaws,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
              

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
