import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="projectTitle">Recent Projects</h1>

        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* new col */}

          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://img.freepik.com/free-photo/responsive-web-design-smartphone-3d-rendering_72104-4345.jpg?w=2000"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://img.freepik.com/free-photo/responsive-web-design-smartphone-3d-rendering_72104-4345.jpg?w=2000"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://img.freepik.com/free-photo/responsive-web-design-smartphone-3d-rendering_72104-4345.jpg?w=2000"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="projectBtn" variant="info">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
