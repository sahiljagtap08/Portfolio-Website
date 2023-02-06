import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Chatting",
      description: "Web App",
      imgUrl: projImg2,
    },
    {
      title: "Ecommerce",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Stripe Payments",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Snake Game",
      description: "Vanilla JS",
      imgUrl: projImg5,
    },
    {
      title: "Food Ordering",
      description: "Web App",
      imgUrl: projImg6,
    },
  ];


  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I also see myself identifying a real issue and coming up with a solution. I personally adore computer science and emerging technologies and take great pleasure in creating simple projects and programs.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first"> All Project Cards</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">More about Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About Snake Game</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>React is Used in these projects, Key concepts used: React icons, useRef, useEffect, useState, useContext. Created a Clone of the Stripe Payment Menu Page i.e. designed a product landing page using React components.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>JS and key concepts used: • querySelector • addEventListener • setInterval • keyCodes • pop • unshift • push • classList.contains • classList.add • classList.remove. In this game, You can use the up, down, right, or left arrows to move the snake. Food is provided at the several coordinates of the screen for making the snake longer and increase the points.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}