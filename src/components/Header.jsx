import React from "react";
import HeaderImg from "../assets/lily-banse--unsplash.jpg";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header_container">
      <nav className="navbar">
        <h1 className="logo">
          VGN<span className="logo_red">UP</span>
        </h1>
        <ul className="nav_list">
          <li>
            <button id="aboutBtn" onClick={props.aboutToggle}>
              About
            </button>
          </li>
        </ul>
      </nav>
      <div className="header_image">
        <img src={HeaderImg} alt="lily-unsplash" />
      </div>
    </div>
  );
}
