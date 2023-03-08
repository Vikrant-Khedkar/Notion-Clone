import React from "react";
import './Hero.css';
const Hero = () => {
  return (
    <div className="cont">
      <div className="img">
      <img className="grid" src="public\images\photo-grid.png"></img>
      </div>

      <div className="Title">
        <h1>Online Experiences</h1>
      </div>

      <div className="content">
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      </div>
    </div>
  );
};

export default Hero;
