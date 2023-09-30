import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Button_AboutUs } from "./Button_AboutUs";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>UF IN GHANA</h1>
      <p>Enroll in your Summer Internship Today </p>
      <div className="hero-btns">
        <Button_AboutUs
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN MORE
        </Button_AboutUs>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          RESERVE MY SPOT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
