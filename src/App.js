import "./App.css";
// import '../bootstrap/dist/css/bootstrap.css';
//  import 'bootstrap/dist/js/bootstrap.js';
import "font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Skills, Experience, Contact, Footer } from "./components";
import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    // var offset = 80;
    // event.preventDefault();
    // $('.navbar li a').click(function(event) {
    //     console.log("im in navbar");
    //     $($(this).attr('href'))[0].scrollIntoView();
    //     scrollBy(0, offset);
    // });
    // var navOffset = $('.navbar').height(); scrollBy(0, -navOffset);
    // var navOffset = $('.navbar').height();
    // $("body").attr({

    // }).scrollspy({
    //   offset: 150
    // });

  }, [])

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          <nav style={{ "backgroundColor": "black" }} className="navbar navbar-b navbar-trans navbar-expand-md navbar-dark header-nav fixed-top" id="mainNav">
            <div id="navbar-example" className="container-fluid">
              <a className="navbar-brand" href="#">Welcome !</a>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

              </button>

              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a className="js-scroll nav-link" href="#home">Home

                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#experience">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#contact">Contact</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>



          <div style={{paddingTop:"60px" }} id="home">
            <Home darkMode={darkMode} />
          </div>
          <div style={{paddingTop:"60px" }} id="about">
            <About darkMode={darkMode} />
          </div>
          <div style={{paddingTop:"60px" }} id="skills">
            <Skills darkMode={darkMode} />
          </div>
          <div style={{paddingTop:"60px" }} id="experience">
            <Experience darkMode={darkMode} />
          </div>
          <div style={{paddingTop:"30px" }} id="contact" >
            <Contact  darkMode={darkMode} />
          </div>
          {/* <nav class="myNav navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#section1">Section 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section2">Section 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section3">Section 3</a>
                </li>
              </ul>
            </div>
          </nav>

          <div id="section1" className="container-fluid bg-success text-white" style={{ padding: "100px 20px" }}>
            <h1>Section 1</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          </div>

          <div id="section2" className="container-fluid bg-warning" style={{ padding: "100px 20px" }}>
            <h1>Section 2</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          </div>

          <div id="section3" className="container-fluid bg-secondary text-white" style={{ padding: "100px 20px" }}>
            <h1>Section 3</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          </div> */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
