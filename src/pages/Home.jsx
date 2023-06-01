import React from "react";
// import { Button, Col, Image, Row } from "react-bootstrap";
// import heroImg from "../assets/homepage.jpg";
// import { BsBookmarkDash, BsLightningCharge, BsLightbulb } from "react-icons/bs";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Event from "../components/pages/Event";
import News from "../components/News";
import Welcome from "../components/Welcome";
import Slider2 from "../components/Slider2";
const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
    <div className="Home">
    <Slider  />
     

     <br />
     <Welcome />
     <br />
    <News />
    <div style={{minHeight:50}}>

    </div>
    <Event />

     <br />
    

    </div>
    </>
  );
};

export default Home;
