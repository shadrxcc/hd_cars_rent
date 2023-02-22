import React from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";

const Welcome = () => {
  const [username, setUsername] = useState("");
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (loggedIn === "true") {
      const token = window.localStorage.getItem("jwt");
      const tokenresult = jwtDecode(token);
      setUsername({ username: tokenresult.username });
    }
  }, [setUsername]);

  const renderCondition = () => {
    if (loggedIn === "true") {
      return (
        <div className="w-full flex items-center justify-center welcome h-full">
          <div className="text-white flex flex-col gap-y-4 pt-[10em] welcome-content text-center">
            <p className="text-3xl">
              Welcome <span className="text-red-500"> {username.username}</span>
            </p>
            <Link to={`/cars`}>
              <button className="bg-red-700 rounded-lg p-3">
                Checkout available cars
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div
          id="landing"
          className="container h-screen relative flex justify-center items-center"
        >
          <div>
            <p className="text-white text-center text-lg md:text-2xl mb-3">
              Sorry, you have to be signed in to view this page
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
      );
    }
  };

  return <>{renderCondition()}</>;
};

export default Welcome;
