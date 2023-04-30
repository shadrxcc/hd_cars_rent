import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import jwtDecode from "jwt-decode";

const Addcars = () => {
  const navigate = useNavigate();
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);

  const [username] = useState(rest.username);
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const [carname, setCarname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [speed, setSpeed] = useState("");
  const [consumption, setConsumption] = useState("");

  const nameHandler = (e) => setCarname(e.target.value);
  const descHandler = (e) => setDescription(e.target.value);
  const priceHandler = (e) => setPrice(e.target.value);
  const imageHandler = (e) => setImage(e.target.files[0]);
  const speedHandler = (e) => setSpeed(e.target.value);
  const consumptionHandler = (e) => setConsumption(e.target.value);

  const postCar = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("car_name", carname);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image_url", image);
    formData.append("speed", speed);
    formData.append("consumption", consumption);
    formData.append("user", username);
    if (!carname || carname.trim().length === 0) {
      return errorMessage("enter name of car");
    } else if (!description || description.trim().length === 0) {
      return errorMessage("enter a description");
    } else if (!price || price.trim().length === 0) {
      return errorMessage("enter a price");
    } else if (!image) {
      return errorMessage("Choose an image");
    }
    fetch("http://localhost:3100/car_menu_items", {
      method: "POST",
      body: formData,
    })
      .then(
        (res) => (
          res.json(), console.log("add successfully"), navigate("/cars")
        )
      )
      .catch(function (error) {
        console.log("there is an error: ", error.message);
      });
  };

  const renderCondition = () => {
    if (loggedIn === "true") {
      return (
        <div className="container h-screen relative pt-[5em] flex justify-center items-start">
          <div
            className="m-3 w-[100%]"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <form
              onSubmit={postCar}
              className="flex mt-3 mb-5 md:mx-36 flex-col"
            >
              <p className="text-white text-2xl md:text-3xl text-center mb-3">
                Add Car
              </p>
              <label className="text-white" htmlFor="car-name">
                Username
              </label>
              <input
                type="text"
                name="user"
                disabled
                value={username}
                id="user"
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
              />

              <label className="text-white" htmlFor="car-name">
                Car Name
              </label>
              <input
                type="text"
                onChange={nameHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                placeholder="Enter car name"
                name="car_name"
                id="car_name"
              />
              <label className="text-white" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                onChange={priceHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                placeholder="$5000"
                name="price"
                id="price"
              />
              <label className="text-white" htmlFor="Description">
                Description
              </label>
              <textarea
                name="car_description"
                id="description"
                cols="20"
                onChange={descHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                rows="5"
                placeholder="Car Description"
              ></textarea>
              <label className="text-white" htmlFor="speed">
                Speed
              </label>
              <input
                type="text"
                onChange={speedHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                placeholder="200km/h"
                name="speed"
                id="speed"
              />
              <label className="text-white" htmlFor="consumption">
                Consumption
              </label>
              <input
                type="text"
                onChange={consumptionHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                placeholder="3.4l/km"
                name="consumption"
                id="consumption"
              />
              <label className="text-white" htmlFor="car-image">
                Car Image
              </label>
              <input
                type="file"
                onChange={imageHandler}
                className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
                name="image_url"
                id="image_url"
              />
              <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">
                Add Car
              </button>
            </form>
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

export default Addcars;
