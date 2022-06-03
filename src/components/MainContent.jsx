import React from "react";
import Axios from "axios";
import "./MainContent.css";
import LoadingSpinner from "./LoadingSpinner.jsx";
import HeadingCard from "./HeadingCard.jsx";
import clockImg from "../assets/clock.svg";

export default function MainContent(props) {
  const [recipes, setRecipes] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  var pms = props.parameters;

  async function getRecipes() {
    setIsLoading(true);
    const query = document.getElementById("search_input");
    var API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query.value}&app_id=3749c2a5&app_key=b83dd2c4bfbd47ccd62bd4d65d3c739e&time=1%2B${pms}`;
    const result = await Axios.get(API_URL).catch(() => {
      setIsLoading(false);
    });
    setRecipes(result.data.hits);
    setIsLoading(false);
  }
  const mealElement = recipes.map((item) => {
    return (
      <>
        <div className="mealrecipes_item">
          <img
            src={item.recipe.images.REGULAR.url}
            alt="meal"
            className="mealImg"
          />
          <span className="meal_name">{item.recipe.label}</span>
          <div className="mealitem_favtime">
            <div className="favtime_time">
              <img src={clockImg} alt="clock" className="svgs" />
              <span className="time_span">{item.recipe.totalTime} min</span>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <HeadingCard
        getRecipes={getRecipes}
        isLoading={isLoading}
        state={query}
        setState={setQuery}
        toggle={props.toggle}
        isHidden={props.isHidden}
      />
      <div className="maincontent_container">
        <h2 className="maincontent_title">Your Search Results...</h2>
        <div className="mealrecipes_container">{mealElement}</div>
        {isLoading && <LoadingSpinner />}
      </div>
    </>
  );
}
