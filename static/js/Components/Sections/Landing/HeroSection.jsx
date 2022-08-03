import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import img from "../../../asset/img.jpg";
function HeroSection() {
  return (
    <>
      <div className="hero_container">
        {/* <video src={vid} autoPlay loop muted /> */}

        <img
          src={img}
          widt="100%"
          alt="img"
          className="my_img "
          height="100%"
        />
        {/* <h1>WELCOME</h1> */}
        {/* <p>Vote for your favorate personalities</p> */}
        <div className="hero-btns">
          <Link to="/login">
            <button
              className="loginbtn"
              // buttonStyle="btn--outline"
              // buttonSize="btn--large"
            >
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
          </Link>
          <Link to="/special-view">
            <button className="otherbutton">
              Special Voting <i className="fas fa-vote-yea"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
