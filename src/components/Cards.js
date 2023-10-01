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
            <CardItem
              src="images/img-1.jpg"
              text="Discover the World"
              //label="learn"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Unlock your global potential"
              //label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpeg"
              //text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              //label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              //label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpeg"
              text="Ride through the Sahara Desert on a guided camel tour"
              //label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
