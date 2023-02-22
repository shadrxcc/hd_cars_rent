import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Bookings from "../components/bookings";
import { setReservation } from "../redux/actions/actions";

const Bookedcars = () => {
  const dispatch = useDispatch();
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  useEffect(() => {
    axios
      .get("http://localhost:3100/bookings")
      .then((res) => dispatch(setReservation(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const renderCondition = () => {
    if (loggedIn === "true") {
      return (
        <div className="pt-[8rem]">
          <div>
            <h2 className="text-white text-2xl pl-[1em]">Booked Cars</h2>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            <Bookings />
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

export default Bookedcars;
