import React from "react";
import { Slide } from "react-awesome-reveal";
// import skillsLight from "../media/skills-light.svg";
// import skillsDark from "../media/skills-dark.svg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "react-bootstrap/ProgressBar";
// import ProgressBar from "@ramonak/react-progress-bar";
// import Progressbar from './ProgressBar';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import './experience.css';
const Skills = ({ darkMode }) => {
  return (
    <>
   <a class="anchor" id="top"></a>
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
     
      <Slide>
        <Container>
          <Row>

              <Col>
           
              {/* <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Technologies</Card.Title>
                  <Card.Text>
                    ReactJS, NodeJS, MongoDB, JavaScript, HTML, CSS, Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card> */}
              <div>
              <h1 className="lead" align="center">
             <b>- Skill Sets -</b>
           </h1>
           <br></br>
  <h3 style={{color:"white"}}>ReactJS</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>NodeJS</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>JavaScript</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>MongoDB</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>HTML</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>CSS</h3>
  <ProgressBar variant="success" animated now={95} /><br/>
  <h3 style={{color:"white"}}>Bootstrap</h3>
  <ProgressBar variant="success" animated now={95} />
  
</div>
            </Col>
          </Row>
          <br></br>
        </Container>
      </Slide>
    </div>
    <hr></hr>
    </>
  );
};

export default Skills;
