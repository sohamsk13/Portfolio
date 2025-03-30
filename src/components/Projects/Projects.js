import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GDrive from "../../Assets/Projects/GDrive.jpeg";
import SAAS from "../../Assets/Projects/SAAS.jpeg";
import Drone from "../../Assets/Projects/Drone.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drone}
              isBlog={false}
              title="DroneMedix"
              description="Drone Medix is an innovative on-demand delivery service that leverages cutting-edge drone technology to bring essential medicines straight to your doorstep."
              ghLink="https://github.com/sohamsk13/DroneMedix"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GDrive}
              isBlog={false}
              title="Google-DriveLetter
"
              description="A web application that allows users to edit, save, and manage text-based letters, integrated with Google Drive API and Google OAuth authentication."
              ghLink="https://github.com/sohamsk13/Google-DriveLetter"
              demoLink="google-drive-letter-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAAS}
              isBlog={false}
              title="SAAS---Import-Export-Business"
              description= "A SaaS-based platform for managing import and export business operations efficiently."
              ghLink="https://github.com/sohamsk13/SAAS---Import-Export-Business"
                           
            />
          </Col>

          

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
