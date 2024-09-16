import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>Elevate</p>
          </div>
          <p>Your Workout,</p>
          <p>
            <p className="slogan">
              <em>Flex</em>
            </p>
            Your Gains.
          </p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
