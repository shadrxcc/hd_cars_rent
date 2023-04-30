import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const landingRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const land = landingRef.current;
    const logo = logoRef.current;
    gsap.fromTo(
      land,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      logo,
      {
        y: 500,
        opacity: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <>
      <div
        id="landing"
        className="container h-screen relative flex justify-center items-center"
      >
        <div>
          <p className="text-white text-2xl md:text-3xl mb-3">
            WELCOME TO HD CARS
          </p>
          <Link to={`/login`}>
            <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">
              Sign In
            </button>
          </Link>
          <Link to={`/sign-up`}>
            <button className="bg-white rounded-lg text-dark py-2 my-2 w-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div
        ref={landingRef}
        className="landing-page pointer-events-none bg-red-700 w-full h-full flex flex-column justify-center items-center gap-y-2 absolute top-0 left-0"
      >
        <div className="name-container">
          <div
            ref={logoRef}
            className="logo-name tracking-[16px] text-bold text-white text-2xl ml-3 text-center"
          >
            HDCARS
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
