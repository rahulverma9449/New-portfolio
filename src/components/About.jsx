import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import laptopImg from "../media/about.png";
import connectLight from "../media/passport_photo.jpg";
// import connectDark from "../media/connect-dark.png";
// import resume from "https://drive.google.com/file/d/1HvimaQEhDm57V9aZ4f2eIJRYG3Jai51p/view?usp=sharing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = ({ darkMode }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1800;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
     
      <br></br>
      <Fade>
        <Container>
          <Row>
            <Col lg={8} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Let's have an introduction!</h2>
                  </Card.Title>
                  
                  <Card.Text>
                    <p>
                      Goal-oriented full stack developer with a passion for
                      working on a project that solves problems with thoughtful
                      UI design, creating intuitive, dynamic user experiences
                      powered by strong backend. My core competency lies in
                      developing applications from its inception. I primarily
                      work with MERN stack among the full stack technologies. As
                      a full stack developer, I enjoy using my obsessive
                      attention to detail, my unequivocal love for making
                      things, and my mission-driven work ethic to revolutionize
                      the project I work on.
                    </p>
                  </Card.Text>
                  <a
                    href={
                      "https://drive.google.com/file/d/17WWeQo6hSMWfUF87Acj6rGW1CAKaRTPX/view?usp=sharing"
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    
                    <button type="button" style={{"fontWeight":"bold"}} class="btn btn-light btn-rounded"><FontAwesomeIcon
                        className="light"
                        size="lg"
                        icon={faFile}
                      /> View Resume</button>
                  </a><br/>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align="center">
              <Card className="nbcard">
                <Card.Body>
                  {/* <Card.Title>
                    <h2 className="lead">Let's Connect!</h2>
                  </Card.Title>
                  <br></br>
                  <a
                    href="https://github.com/BharatiRuchika"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faGithub}
                      />{" "}
                      Ruchika
                    </Button> */}
                  {/* </a> */}
                  <img
                    src={connectLight}
                    alt="connect"
                    top="50px"
                    height="40px"
                    className="connect-img img-fluid animated"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <hr></hr>
          
        </Container>
      </Fade>
    </div>
  );
};

export default About;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "./Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../media/about.png";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               About <strong className="purple">Me</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skill Set</strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> That I Use
//         </h1>
//         <Toolstack />

//         {/* <Github /> */}
//       </Container>
//     </Container>
//   );
// }

// export default About;