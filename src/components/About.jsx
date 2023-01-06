import React from "react";
import "./About.css";
import cancelImg from "../assets/cancel_icon.png";

export default function About(props) {
  return (
    <div className="about_container">
      <div className="cancel-container"></div>
      <div className="about_content">
        <img
          src={cancelImg}
          alt="cancel"
          className="svgs"
          onClick={props.aboutToggle}
        />
        <h1>Recipe Search App</h1>
        <p>
          This website uses the Recipe Search API from Edemam.com. This API has
          the data of tens of thousands of foods, simply search any type of dish
          you like and it will find you its ingredients.
        </p>
        <p>This web application searches for food recipes and displays them.</p>
        <span>Made by Favour Olaleru</span>
      </div>
    </div>
  );
}
