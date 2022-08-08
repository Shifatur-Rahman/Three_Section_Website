import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceTitle">OUR SERVICES</h1>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img
                className="serviceImgHeader"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <h2 className="serviceSubTitle">Pixel-Perfect Design</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img
                className="serviceImgHeader"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <h2 className="serviceSubTitle">Free Plugins Included</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img
                className="serviceImgHeader"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <h2 className="serviceSubTitle">Pixel-Perfect Design</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img
                className="serviceImgHeader"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <h2 className="serviceSubTitle">Extensive Documentation</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
