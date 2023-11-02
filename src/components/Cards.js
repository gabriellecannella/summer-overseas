import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Photos from last years trip to Cape Town</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/img-1.jpg" text="Discover the World" />
            <CardItem
              src="images/img-2.jpg"
              text="Unlock your Global Potential"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="Where Learning Meets Adventure"
            />
            <CardItem src="images/img-4.jpg" text="Learn Beyond Borders" />
            <CardItem src="images/img-16.jpg" text="Expand Your Horizons" />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Your Passport to Global Education"
            />
            <CardItem
              src="images/img-17.jpg"
              text="Unleash Your Inner Explorer"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Expand Your Mind, Explore the World"
            />
            <CardItem src="images/img-11.jpg" text="Elevate Your Education" />
            <CardItem
              src="images/img-12.jpg"
              text="The World Is Your Classroom"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
