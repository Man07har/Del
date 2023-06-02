import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import Techstack from "./Techstack";

import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">

      <Container>
     
        <h1 className="project-heading">
          We Provide <strong className="purple">Skillsets</strong>
        </h1>

        <Techstack />
       
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> We use
        </h1>
        <Toolstack />
       
       

       
      </Container>
    </Container>
  );
}

export default About;
