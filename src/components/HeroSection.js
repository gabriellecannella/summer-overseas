import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Button_AboutUs } from "./Button_AboutUs";
import { AppProvider } from "../context/AppContext";
import Goal from "./Goal";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/home.mp4" autoPlay loop muted />
      <h1>UF IN GHANA</h1>
      <h2>
        <AppProvider>
          <div>
            {" "}
            <Goal />
          </div>
        </AppProvider>
      </h2>
      <p>SPOTS REMAINING </p>
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
