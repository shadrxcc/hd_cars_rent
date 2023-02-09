
import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/eastwood-104.png";
import "../styles/landing.css";

const Landing = () => {
  return (
    <>
      <div
        id="landing"
        className="container h-screen relative flex justify-center items-center"
      >
        <div>
          <p className="text-white text-2xl md:text-3xl mb-3">WELCOME TO HD CARS</p>
          <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">Sign In</button>
          <button className="bg-white rounded-lg text-dark py-2 my-2 w-full">Sign Up</button>
        </div>
      </div>

      <div className="landing-page bg-red-700 w-full h-full flex flex-column justify-center items-center gap-y-2 absolute top-0 left-0">
        <div className="name-container">
          <div className="logo-name tracking-[16px] text-bold text-white text-2xl ml-3 text-center">
            HDCARS
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;


gsap.fromTo(
  ".landing-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 1 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
  }
);