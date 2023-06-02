import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/Projects/logo.png";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer my-6">
    <h3>USEFUL LINKS</h3>
     <div className="hover:cursor-pointer text-white flex  my-6 place-content-center space-x-[50px]">
        <div className=" tex-white">

         
          <h3>About Croma</h3>
          <h3>Help And Support</h3>
          <h3>FAQs</h3>
          <h3>Buying Guide</h3>
          <h3>Return Policy</h3>
          <h3>B2B Orders</h3>
          <h3>Store Locator</h3>
        </div>
        <div className=" tex-white">

         <h3>E-Waste</h3>     






          <h3>Franchise Opportunity</h3>
          <h3>Site Map</h3>
            <h3>Careers At Croma</h3>
            <h3>Terms Of Use</h3>
          <h3>Disclaimer</h3>
          <h3>B2B Orders</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed for AMITY with ❤ </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><img src={logo} alt="logo maccha" style={{width:40, height:40}} />Copyright © {year} NTCC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
     
    </Container>
  );
}

export default Footer;
