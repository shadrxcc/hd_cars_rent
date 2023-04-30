import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Carcomponent = () => {
  const cars = useSelector((state) => state.carReducer.cars);
  const renderList = cars.map((car) => {
    const { id, car_name, image_url, price } = car;
    return (
      <Link key={id} to={`/details/${id}`}>
        <div className="flex flex-col items-center">
          <div className="">
            <img src={image_url} className="w-full" alt="car" />
          </div>
          <div className="text-center">
            <h2>{car_name}</h2>
            <div className="">
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {renderList}
      </div>
    </>
  );
};

export default Carcomponent;
