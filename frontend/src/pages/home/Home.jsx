// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {

  const navigate = useNavigate()
  return (
    <div>
    <div className="home">
    <div className="home-content">
      <h1>Welcome to our E-learning platform</h1>
      <p>Learn, and Grow your skills</p>
      <button onClick={()=> navigate("/course")} 
      className="pulse1">Get Started</button>
    </div>
    </div>
    <Testimonials />
    </div>
  )
}

export default Home;
