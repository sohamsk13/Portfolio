import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              I specialize in <b className="purple">MERN stack development</b> and have experience working on full-stack applications, APIs, and cloud deployment.
              <br />
              <br />
              I have a strong foundation in <b className="purple">Data Structures and Algorithms (DSA)</b>, having solved <b className="purple">400+ problems</b> to enhance my logical and problem-solving skills.
              <br />
              <br />
              I'm also passionate about <b className="purple">DevOps and System Design</b> and love exploring CI/CD pipelines, containerization with <b className="purple">Docker & Kubernetes</b>, and cloud-based automation to streamline deployments.
              <br />
              <br />
              I love working with <b className="purple">Node.js</b>, <b className="purple">React.js</b>, and modern frameworks like <b className="purple">Next.js</b>. My experience also includes backend development with <b className="purple">MongoDB & Express</b>, and handling cloud deployments on platforms like <b className="purple">AWS, Vercel, and Netlify</b>.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sohamsk13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soham-kulkarni-63b6b3250/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            
            <h2>Contact Me</h2>
            <p>
              <AiOutlineMail /> <b>Email:</b> <a href="mailto:your.email@example.com" className="purple">sohamkulkarni1340@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt /> <b>Phone:</b> <span className="purple">+91 9423446043</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;