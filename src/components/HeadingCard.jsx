import React from "react";
import sliderImg from "../assets/sliders-white.svg";
import searchImg from "../assets/search.svg";
import "./HeadingCard.css";

export default function HeadingCard(props) {
  return (
    <div className="headingcard_container">
      <div className="headingcard_content">
        <h1 className="cardcontent_title">What would you like to cook?</h1>
        <div className="search_container">
          <button id="filterBtn" onClick={props.toggle}>
            <img src={sliderImg} alt="slider" className="svgs" />
            Filter
          </button>
          <input
            type="text"
            id="search_input"
            placeholder="Recipes, Ingredients, Trends"
            value={props.state}
            onChange={(e) => props.setState(e.target.value)}
            onKeyUp={props.getRecipes}
          />
          <button id="searchBtn">
            <img
              src={searchImg}
              alt="search"
              className="svgs"
              onClick={props.getRecipes}
              disabled={props.isLoading}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
