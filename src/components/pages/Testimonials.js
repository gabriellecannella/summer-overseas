import React from "react";
import "./Testimonials_page.css";
import "../../App.css";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <h1>Testimonial</h1>
      </div>
      <div className="testimonials_page">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod hendrerit urna, at feugiat velit vehicula ac.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - COO</li>
            <li>Alice Johnson - CTO</li>
          </ul>
        </section>
      </div>
    </>
  );
}
