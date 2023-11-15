import React from "react";
import "../../App.css";
import { Button_LearnMore } from "../Button_LearnMore.js";
import Cards from "../Cards";
import Footer from "../Footer";

export default function PastTrips() {
  return (
    <>
      <h1 className="past-trips">UF IN CAPE TOWN</h1>
      <div className="AboutUs_page">
        <section className="about-section">
          <h2>UF IN CAPETOWN - Summer 2023</h2>
          <h3>About Capetown</h3>
          <p>
            Course Description: Students will have the opportunity to learn
            about the nature of global engineering and computer science, as well
            as obtain real world skills in computer science innovation and
            entrepreneurship for social good. In this course, students will
            follow the agile software engineering methodology design and develop
            technologies to address real world problems. The students will spend
            7 weeks working with local startups in Cape Town South Africa.
            Students will work closely with the clients to identify their needs,
            design and build a prototype, and present the solution. In addition
            to computer science skills, students will learn to communicate
            effectively to a non-technical audience.
          </p>
          <p>
            {" "}
            This course will also incorporate historical and cultural activities
            to allow students to learn about South African culture and history.
            The cultural context is very important for students to succeed in
            their internship and time in South Africa because they will learn to
            function and communicate effectively in a multicultural setting.
            Students will not only bring back professional skills, but also an
            increased awareness of another culture and learn to navigate the
            role of engineering in a global, economic, environmental, and
            societal context.
          </p>{" "}
          <div className="button-container">
            <h3>Check out last years course syllabus below!</h3>
            <p></p>
            <Button_LearnMore
              className="btns"
              buttonStyle="btn--LearnMore"
              buttonSize="btn--large"
            >
              Learn More
            </Button_LearnMore>
          </div>
        </section>
        <Cards />
      </div>
      <Footer />
    </>
  );
}
