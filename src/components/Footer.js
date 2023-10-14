import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          TRANSFORMATIVE LEARNING JOURNEYS
        </p>
        <p className="footer-subscription-text">Your Journey Starts Here.</p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Upcoming Trip</Link>
            <Link to="/">Past Trips</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Destinations</Link>
          </div>
          <div class="footer-link-items">
            <h2>Learn More</h2>
            <Link to="/">Photos</Link>
            <Link to="/">Testimonials</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <span className="edu-box">
                <span className="edu">EDU</span>
              </span>
              <span className="africa-box">
                <span className="africa">AFRICA</span>
              </span>
              <span className="icon-spacing"></span>{" "}
              {/* Use CSS for styling the spacing */}
              <i class="fa-solid fa-earth-africa" />
            </Link>
          </div>
          <small class="website-rights">UF Abroad © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
