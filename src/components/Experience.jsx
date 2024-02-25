import { useState } from "react";
import React from "react";
import './experience.css';
import { Fade, Zoom } from "react-awesome-reveal";
import dsc from "../media/forgot.png";
import bookmyshow from "../media/myshow.jpeg";
import ecommerce from "../media/ecommerce.jpg"
import tcd from "../media/newkahoot.jpeg";
import blood from "../media/blood.jpeg";
import SocialMedia from "../media/SocialMedia.jpeg"
import Container from "react-bootstrap/esm/Container";
// import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
//  import Card from "react-bootstrap/esm/Card";
import Modal from "react-bootstrap/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import { CardGroup } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Kahoot Multiplayer Quiz Game",
    description: `"kahoots", are user-generated multiple-choice quizzes.here in this project there are 2 actors. a)Host b)Players. Host can create a quiz and generate a pin whereas players can play the game by using the same pin.After all players finishes the quiz,host can see the scoreboard & winner.`,
    image: tcd,
    Vercel: "https://multiplayer-online-quiz-game.vercel.app/",
    BackEnd: "https://github.com/BharatiRuchika/Backend_Kahoot",
    FrontEnd: "https://github.com/BharatiRuchika/Frontend_Kahoot"
  },
  {
    name: "E-commerce Application",
    description: `Any member can register and view
    available products.only registered candidates can
    purchase the products.User can view and purchase products.Admin can add products,edit products and modify products. admin can access users some information.`,
    image: ecommerce,
    vercel: "https://my-ecommerce-web-application.vercel.app/",
    BackEnd: "https://github.com/BharatiRuchika/Ecommerce-Backend",
    FrontEnd: "https://github.com/BharatiRuchika/Ecommerce-Frontend"
  },
  {
    name: "Social Media Application",
    description: `Any member can register to this website and then after login users can view the posts of another users. users can upload the images from gallery or by camera. user can message to another users and can
    like or dislike the posts.Messaging functionality is also there.`,
    image: SocialMedia,
    vercel: " https://social-media-web-application.vercel.app/",
    BackEnd: "https://github.com/BharatiRuchika/SocialMediaProject",
    FrontEnd: "https://github.com/BharatiRuchika/SocialMediaProject/tree/main/frontend"
  },
  {
    name: "Online Movie Ticket Booking System",
    description: `The main aim of the project is any user can access the system through website at any time without going to the company. user can collect all information like as a movies Available ,list of theatres.admin maintains the user Details ,Movie details, Theatre details`,
    image: bookmyshow,
    vercel: "https://book-my-show-web-application.vercel.app/",
    BackEnd: "https://github.com/BharatiRuchika/Book_My_Show_Back",
    FrontEnd: "https://github.com/BharatiRuchika/Book_My_Show_Frontend"
  },


];
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)"
};


const gridContainer2 = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column"
};

const gridItem = {
  margin: "8px",
  border: "1px solid red",
  width: "250px"
};

const Portfolio = ({ darkMode }) => {
  const classes = useStyles();
  return (
    <>
      <div data-theme={darkMode ? "light" : "light"}>
        <br></br>
        <h2 className="lead" align="center">
          <b>- Projects -</b>
        </h2>
        <br></br>
        {/* <Grid sx={gridContainer} container spacing={2} justify="center">
{projects.map((project, i) => (
<Card sx={gridItem} item xs={3} sm={3} md={3} key={i}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography>
      </CardContent>
      <CardActions>
       
        <a href={project.netlify}
                      target="_blank"
                      rel="noreferrer noopener" style={{"text-decoration":"none"}}>
                        
                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
        <a href={project.FrontEnd}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{"text-decoration":"none"}}>
                      <Button size="small" color="primary">
                        Front-End
                      </Button></a>
        <a href={project.BackEnd}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{"text-decoration":"none"}}>
                      <Button size="small" color="primary">
                        Back-End
                      </Button></a>
      </CardActions>
    </Card>))}
    </Grid> */}

        {/* new card code */}

        {/* <div className="card_container">
      <div className="card">
        <div className="imgBox">
          <img src={SocialMedia}></img>
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis libero inventore temporibus! Enim natus nihil saepe. Voluptates quasi tenetur delectus reprehenderit ipsam vero accusamus animi ab suscipit. Magni officiis nisi expedita sequi!</p>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img src={tcd}></img>
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis libero inventore temporibus! Enim natus nihil saepe. Voluptates quasi tenetur delectus reprehenderit ipsam vero accusamus animi ab suscipit. Magni officiis nisi expedita sequi!</p>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img src={tcd}></img>
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis libero inventore temporibus! Enim natus nihil saepe. Voluptates quasi tenetur delectus reprehenderit ipsam vero accusamus animi ab suscipit. Magni officiis nisi expedita sequi!</p>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img src={tcd}></img>
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis libero inventore temporibus! Enim natus nihil saepe. Voluptates quasi tenetur delectus reprehenderit ipsam vero accusamus animi ab suscipit. Magni officiis nisi expedita sequi!</p>
        </div>
      </div>
   
   
   
   
    </div> */}



        <div className="pt-5">
          <div className="container-fluid pt5">
            <div className="row">
              <div className="col-lg-6 col-xl-3 d-flex justify-content-center col-md-6 col-sm-6 pb-5">
                <div className="card mycard ho">
                  <div className="view overlay">

                    <img class="card-img-top" src={tcd}></img>
                    <a href="#">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Kahoot Online Game</h5>
                    <p className="card-text">
                      Its a online quiz generator project which can be played by the players using the pin generated by the host.
                    </p>
                    <a href="https://multiplayer-online-quiz-game.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Frontend_Kahoot"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Front
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Backend_Kahoot"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Back
                      </Button></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 d-flex justify-content-center col-md-6 col-sm-6 pb-5">
                <div className="card mycard ho">
                  <div className="view overlay">

                    <img class="card-img-top" src={ecommerce}></img>
                    <a href="#">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Ecommerce App</h5>
                    <p className="card-text">
                      Users can register,view and buy the products.Admin can add,modify and delete the products.
                    </p>
                    <a href="https://my-ecommerce-web-application.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Ecommerce-Frontend"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>
                      <Button size="small" color="primary">
                        Front
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Ecommerce-Backend"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Back
                      </Button></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 d-flex justify-content-center col-md-6 col-sm-6">
                <div className="card mycard ho">
                  <div className="view overlay">

                    <img class="card-img-top" src={SocialMedia}></img>
                    <a href="#">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Social Media App</h5>
                    <p className="card-text">
                      A social media web app with features like following users, posting images, chatting, likes, comments.
                    </p>
                    <a href="https://social-media-web-application.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/SocialMediaProject/tree/main/frontend"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Front
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/SocialMediaProject"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Back
                      </Button></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 d-flex justify-content-center col-md-6 col-sm-6 pb-5">
                <div className="card mycard ho">
                  <div className="view overlay">

                    <img class="card-img-top" src={bookmyshow}></img>
                    <a href="#">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Book My Show </h5>
                    <p className="card-text">
                      Any user can register,login, search,view and book the shows.
                      Admin can add the theaters and shows.
                    </p>
                    <a href="https://book-my-show-web-application.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Book_My_Show_Frontend"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Front
                      </Button></a>
                    <a href="https://github.com/BharatiRuchika/Book_My_Show_Back"
                      target="_blank"
                      rel="noreferrer noopener" style={{ "text-decoration": "none", "fontSize": "3px" }}>

                      <Button size="small" color="primary">
                        Back
                      </Button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Portfolio;