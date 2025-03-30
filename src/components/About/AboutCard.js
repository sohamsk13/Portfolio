import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soham Sachin Kulkarni </span>  
             from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing a <b className="purple">Computer Science Engineering</b> degree  
            at <b className="purple">Dr. D.Y. Patil Institute of Technology, Pimpri</b>, with a strong academic  
            record and a <b className="purple">CGPA of 9.18 </b>.  
            <br />
            <br />
            I have prior internship experience at a small-scale startup, where I collaborated with industry experts  
            to develop a <b className="purple">Multi-Tenant Import-Export Business SAAS</b>.  
            <br />
            <br />
            Some key contributions during my internship:  
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designed and managed large-scale relational databases using SQL, ensuring efficient data storage and retrieval.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Performed CRUD operations and implemented user-friendly features using React for the front-end interface.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Developed and integrated backend services using Node.js, enabling seamless communication between the client and the server.
            </li>
            <br/>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
