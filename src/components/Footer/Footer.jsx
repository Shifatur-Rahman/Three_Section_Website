import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid={true} className="footer">
        <Container>
          <Row>
            <Col>
              <h2 className="footerTitle">S. R. NOVEL </h2>
            </Col>
            <Col>
              <footer>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </footer>
            </Col>
            <Col>
              <div className="address">
                <h4 className="contactAddress">Address</h4>
                <p>House #20 (3rd Floor) Road # 17,</p>
                <p>Nikanjia-2 Dhaka,Bangladesh</p>

                <p>Email: shifaturnove@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
