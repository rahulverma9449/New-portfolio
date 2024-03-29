import { React } from "react";
import { Fade } from "react-awesome-reveal";
// import emailjs from "emailjs-com";
// import swal from "sweetalert";
// import contactLight from "../media/hello-light.jpeg";
// import contactDark from "../media/hello-dark.jpeg";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const Contact = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      
      <Fade>
        <Container>
          <Row>
            <Col lg={4}>
              <br></br>
              <h2 className="lead">Contact me!</h2>
              <p className="contact-text">
                Contact for a suggestion, feedback, opportunities or we can
                colaborate on a project.
              </p>
              <br></br>
              {/* <img
                src={darkMode ? contactDark : contactLight}
                alt="contact"
                className="contact-img img-fluid"
              /> */}
              <br></br>
            </Col>
          <Col>
            <p className="lead2 margintop">
              <b>Email ID : ruchikabharati30698@gmail.com</b>
            </p>
            <p className="lead2">
              <b>Mobile Number : 9373431164</b>
            </p>
            <p className="lead2">
              <b>Sangamner, Maharashtra</b>
            </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default Contact;
