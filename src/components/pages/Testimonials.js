import React from "react";
import "./Testimonials_page.css";
import "../../App.css";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
      </div>
      <div className="AboutUs_page">
        <section className="about-section">
          <h2>Mouray Hutchinson</h2>
          <p>
          "Overall, I had an amazing experience in Cape Town. 
          Getting to work, explore and make friendships in a new city - and a city as interesting as Cape Town - 
          was surely a highlight of my college experience ... My main takeway and piece of advice is no matter where you are going and what you are doing, 
            listen to the people around you and make informed and accurate decisions. 
            Similarly, always be open to new insights."
          </p>
          <div className="image-container">
            <img src="images/img-18.jpg" alt="Mouray Hutchinson Testimonial Image" />
          </div>
        </section>
        <section className="about-section">
          <h2>Nicolas Lopera</h2>
          <p>
            "The program that UF offered to work an internship abroad in South Africa was the perfect opportunity to experience everything I was looking for. 
            I was not familiar with Cape Town (or any of South Africa for that matter), so I had no idea what to expect ... 
            We got a chance to tour the local schools they were working with in order to better understand the users we were building for, and even met with some tutors that were employed by YIT.
            At the end of the program, we presented our project to the organization as well as the other people we met during our time in Cape Town at our showcase." 
          </p>
          <div className="image-container">
            <img src="images/img-19.jpg" alt="Nicolas Lopera Testimonial Image" />
          </div>
        </section>
        <section className="about-section">
          <h2>Shalia Moscat</h2>
          <p>
            "This 7-week program ... offered students the opportunity to learn about the nature of global engineering and computer science, as well as obtain real world skills in computer science innovation and entrepreneurship for social good. 
            Throughout the duration of the program, the students worked with the non-profit organizations Youth in Transformation, Butterfly Arts Project, and Princess Vlei to develop websites."
          </p>
          <div className="image-container">
            <img src="images/img-20.jpg" alt="Shalia Moscat Testimonial Image" />
          </div>
        </section>
        <section className="about-section">
          <h2>Jonathan Maingot</h2>
          <p>
            "I was able to meet some really amazing people on this trip. 
            I became friends with people I might have never met and I'm grateful that I could find so many people I connect with ... 
            Our group went on a lot of really amazing activities. 
            We went to the top of Table Top Mountain and saw the whole city from above. 
            We went on a two-day safari and saw some amazing animals. Every activity we went on was so much fun and engaging ... 
            We were able to meet with multiple professionals in the industry. 
            These people were able to tell us a lot of interesting and useful information about the industry, 
            I'll be taking the advice they gave us to heart as I join the industry myself."
          </p>
          <div className="image-container">
            <img src="images/img-21.jpg" alt="Jonathan Maingot Testimonial Image" />
          </div>
        </section><section className="about-section">
          <h2>Edward Menello</h2>
          <p>
            "The most memorable and meaningful times on the trip were the friendships and connections with people on the trip. 
            This can be found from the other UF students as well as others apart of the YIT team. I don't think the experience would've been the same without the people I shared it with. 
            I shared so many laughs and they made it feel like home so I never felt homesick.
            A major highlight for me was hiking Lion's Head. I have a fear of heights, so hiking it for the first time was a struggle for me. 
            I was scared and hesitant but I pushed myself to do it ... I got so confident too I hiked it again the last day of the trip ... 
            I am so happy and grateful to have had this experience and I will always remember it."
          </p>
          <div className="image-container">
            <img src="images/img-22.jpg" alt="Edward Menello Testimonial Image" />
          </div>
        </section>

      </div>
    </>
  );
}
