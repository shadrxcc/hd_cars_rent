import React from "react";
import { useDispatch, useSelector } from "react-redux";
import car from "../assets/ferrari.png";
import audi from "../assets/audi.png";
import ford from "../assets/ford.png";
import mclaren from "../assets/mclaren.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import Navbar from "./navbar";
import { useEffect } from "react";
import { loadCars, setCars } from "../redux/actions/actions";
import Carcomponent from "./carcomponent";
import { Link } from "react-router-dom";


const Carmenu = () => {
  const dispatch = useDispatch()
  const getCars = async () => {
    const response = await axios
    .get(`http://127.0.0.1:3100/car_menu_items`)
    .catch((err) => {
      console.log('err', err);
    });
    dispatch(setCars(response.data));
  };
  
  useEffect(() => {
    getCars();
  }, []);

  const loggedIn = window.localStorage.getItem('isLoggedIn');

    const renderCondition = () => {
    if (loggedIn === "true") {
      return (
        <>
         {/* <Carousel className="duration-300" responsive={responsive}>  */}
      <Carcomponent/>
     {/* </Carousel> */}
        </>
      )
    } else {
      return (
        <div
        id="landing"
        className="container h-screen relative flex justify-center items-center"
      >
        <div>
          <p className="text-white text-center text-lg md:text-2xl mb-3">Sorry, you have to be signed in to view this page</p>
          <Link to={`/login`}><button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">Sign In</button></Link>
          <Link to={`/sign-up`}><button className="bg-white rounded-lg text-dark py-2 my-2 w-full">Sign Up</button></Link>
        </div>
      </div>
      )
    }
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      
     {renderCondition()}
    </>
  );
};

export default Carmenu;
