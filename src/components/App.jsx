import React from "react";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import DropDown from "./DropDown.jsx";
import About from "./About.jsx";

export default function App() {
  const [isHidden, setIsHidden] = React.useState(false);
  const [parameters, setParameters] = React.useState("");
  const [aboutToggle, setAboutToggle] = React.useState(false);

  var dietLabel = React.useRef("");
  var healthLabel = React.useRef("");
  var cuisineType = React.useRef("");
  var mealType = React.useRef("");
  var dishType = React.useRef("");

  function apply() {
    var dietValue = dietLabel.current.value;
    var healthValue = healthLabel.current.value;
    var cuisineValue = cuisineType.current.value;
    var mealValue = mealType.current.value;
    var dishValue = dishType.current.value;
    setParameters(
      `${dietValue}${healthValue}${cuisineValue}${mealValue}${dishValue}`
    );
    setIsHidden(false);
  }

  function reset() {
    dietLabel.current.value = "";
    healthLabel.current.value = "";
    cuisineType.current.value = "";
    mealType.current.value = "";
    dishType.current.value = "";
  }

  async function toggle() {
    setIsHidden(!isHidden);
  }

  async function about() {
    setAboutToggle(!aboutToggle);
  }

  return (
    <div className="main_container">
      <Header aboutToggle={about} />
      <MainContent
        toggle={toggle}
        isHidden={isHidden}
        parameters={parameters}
      />
      {isHidden && (
        <DropDown
          dietLabel={dietLabel}
          healthLabel={healthLabel}
          cuisineType={cuisineType}
          mealType={mealType}
          dishType={dishType}
          apply={apply}
          reset={reset}
          toggle={toggle}
        />
      )}
      {aboutToggle && <About aboutToggle={about} />}
    </div>
  );
}
