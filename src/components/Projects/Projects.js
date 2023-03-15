import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import editor from "../../Assets/Projects/codeEditor.svg";
import chatify from "../../Assets/Projects/chatify.svg";
import bitsOfCode from "../../Assets/Projects/blog.svg";
import postMan from "../../Assets/Projects/postMan.png";
import HacktoberBadge from "../../Assets/Projects/hacktoberBadge.png";
import Hacktoberfest from "../../Assets/Projects/hacktoberfest.jpg";
import CodeTheRush from "../../Assets/Projects/codeTheRush.png";
import GWOC from "../../Assets/Projects/GWOC.png";

function Projects() {
  return (
    <Container fluid className="project-section">
 
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
              imgPath={chatify}
              isBlog={false}
              title="YOAI"
              description="A Discord AI bot Designed to answer all the queries while the user is on the particular Text Channel on Discord. Implemented through JavaScript and APIs including OpenAi's API was a wholesome experience."
              ghLink="https://github.com/Man07har/YOAI"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Phishing Detection Solution"
              description="Designed and developed a technological solution for AI-enabled Phishing Links Detection and Alert System. The solution enables to identify the source of phishing attacks in web pages, email apps, social media, instant messenger apps, text messages etc."
              ghLink="https://github.com/Man07har/upgraded-umbrella"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Parcurrus"
              description="A team project to Designed and Develop a platoform that helps the people in Crowded cities to come over vehicle parking."
              ghLink="https://github.com/heroaks/parcurrus"
                        
            />
          </Col>

        </Row>
      </Container>

             <img src={postMan} alt="Postman Badge" />
      <Container>
        <h1 className="project-heading">
          My OpenSource <strong className="purple">Contributions/Hackathons </strong>
        </h1>
  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hacktoberfest}
              isBlog={false}
              title="Hacktoberfest 2022"
              description="Hacktoberfest is a month-long global celebration of open source software run by DigitalOcean in partnership with Intel, AppWrite, and DeepSource, with a strong focus on encouraging contributions to open source projects."
              ghLink="https://github.com/kamranahmedse/developer-roadmap/commits?author=Man07har"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeTheRush}
              isBlog={false}
              title="CodeTheRush"
              description="Code Rush is an exciting hackathon event taking place on 15 February . This 12-hour event is designed to give attendees the opportunity to explore and learn how hackers build innovative ideas.At Code Rush, had the chance to work with some of the leading experts in the field and discover new ways of approaching and building ideas."
              ghLink="https://github.com/Man07har/fluffy-garbanzo"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GWOC}
              isBlog={false}
              title="GWOC"
              description="GirlScript Winter of Contributing is a three-month newly established initiative by GirlScript Foundation to be conducted during winters. GWOC encourages individuals to share their knowledge and ideas to develop technical skills and gain valuable experience in the field of tech education. Over the course of the program, participants can contribute to a variety of themes under the guidance of an expert facilitator."
              
                     
            />
          </Col>

        </Row>
    
      </Container>
    
        
  
          <img src={HacktoberBadge} alt="hacktoberfest Badge" style={{width:1300 , height: 400}}/>
   
  
        
    </Container>
  );
}

export default Projects;
