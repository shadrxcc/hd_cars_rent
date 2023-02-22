import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Carcomponent = () => {

  const cars = useSelector((state) => state.carReducer.cars);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const rmnd = 70;

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - rmnd);
  }, []);
  
  const renderList = cars.map((car) => {
    const { id, car_name, image_url, price } = car;
    return (
      <motion.div className="container relative p-2" key={id}>
        <div className="card relative">
          <div className="card-img">
            <img src={image_url} className="w-full img" alt="car" />
          </div>
          <div className="body">
            <h2>{car_name}</h2>
            <div className="price">
              <h2>{price}</h2>
            </div>
            <Link to={`/details/${id}`}>
              <p className="check">See more</p>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <>
      <div>
        <motion.div className="carousel" ref={carousel}>
          <motion.div
            className="inner-carousel flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {renderList}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Carcomponent;
