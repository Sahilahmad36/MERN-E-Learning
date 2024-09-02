/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import aboutImg from "./sahil.jpg";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
  
    <section className="about">
      <div className="about__img">
        <img src={aboutImg} alt="About Us" />
      </div>

      <div className="about__content">
        <h2>About Us</h2>
        <p>
        Good teaching is characterized by the ability to not only impart knowledge but also to create a learning environment where students feel valued, supported, and genuinely happy to learn. A good teacher understands that education is not just about the transfer of information, but about inspiring curiosity, fostering creativity, and encouraging critical thinking. They engage students by making lessons interactive and relatable, using real-world examples and dynamic teaching methods that capture the students interest.
        </p>

        <div className="about__counter">
          <div className="d-flex gap-5 align-items-center">
            <div className="single__counter">
              <span className="counter">
                <CountUp start={0} end={25} />
              </span>
              <p className="counter__title">Maths Students</p>
            </div>

            <div className="single__counter">
              <span className="counter">
                <CountUp start={0} end={30}  />
              </span>
              <p className="counter__title">Physics Students</p>
            </div>
          </div>

          <div className="d-flex gap-5 align-items-center">
            <div className="single__counter">
              <span className="counter" >
                <CountUp start={0} end={40}  />
              </span>
              <p className="counter__title">Chemistry Students</p>
            </div>

            <div className="single__counter">
              <span className="counter">
                <CountUp start={0} end={15}/>
              </span>
              <p className="counter__title">English Speaking Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutUs;
