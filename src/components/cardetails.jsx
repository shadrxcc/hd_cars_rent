import React, { useEffect } from "react";
import Specscard from "./specscard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedCar } from "../redux/actions/actions";

const Cardetails = () => {
  const cars = useSelector((state) => state.selectedCarReducer);
  const { car_name, car_description, image_url, price, consumption, speed } = cars;
  window.localStorage.setItem("car", car_name);
  window.localStorage.setItem("carimage", image_url);
  window.localStorage.setItem("price", price);
  const dispatch = useDispatch();
  const { carId } = useParams();

  const getSelectedcars = async () => {
    const response = await axios.get(
      `http://localhost:3100/car_menu_items/${carId}`
    );
    dispatch(selectedCar(response.data));
  };

  useEffect(() => {
    if (carId && carId !== "") {
      getSelectedcars();
    }
  }, [carId]);
  return (
    <>
      <div className="flex m-auto pt-[5em] md:pt-1 pb-5">
        <div>
          <h1
            className="text-center text-white font-bold text-2xl pt-5"
            data-aos="slide-down"
            data-aos-duration="1500"
          >
            {car_name}
          </h1>

          <div
            className=""
            data-aos-easing="ease-in-out-cubic"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <img src={image_url} className="mx-auto" alt="ferrari" />
          </div>
          <div>
            <p
              className="text-white text-xl pb-3 text-center"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              {price}
            </p>
            <p
              className="text-white px- pb-3 text-center"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              {car_description}
            </p>
          </div>
          <Specscard consumption={consumption} speed={speed} />
          <div className="flex justify-center pt-4">
            <a
              className="bg-red-700 rounded-lg text-white px-6 py-2 text-center"
              href="/book-car"
            >
              Book this car
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardetails;
