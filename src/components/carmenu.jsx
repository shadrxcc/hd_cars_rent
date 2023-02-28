import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setCars } from "../redux/actions/actions";
import Carcomponent from "./carcomponent";
import { Link } from "react-router-dom";

const Carmenu = () => {
  const dispatch = useDispatch();
  const getCars = async () => {
    const response = await axios
      .get(`https://hd-rent-app.fly.dev/car_menu_items`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setCars(response.data));
  };

  useEffect(() => {
    getCars();
  }, []);

  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const renderCondition = () => {
    if (loggedIn === "true") {
      return (
        <>
          <div className="pt-[8em] pl-[2em]">
            <div>
              <h2 className="text-white text-2xl">Featured Cars</h2>
            </div>
            <div className="">
              <Carcomponent />
            </div>
          </div>
        </>
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

export default Carmenu;
