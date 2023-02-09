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
      <Carcomponent/>
      {/* <Carousel className="duration-300" responsive={responsive}> */}
        {/* { &&
          cars.map((car) => {
            return (
              <div className='container relative' key={car.id}>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car.image} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>{car.carname}</h2>
            <div className='price'>
                <h2>{car.price}</h2>

            </div>
            <Link to={`/details/${car.id}`}><p className="check">Check meee out</p></Link>

        </div>
    </div>
</div>
            );
          })} */}
      {/* </Carousel> */}
    </>
  );
};

export default Carmenu;
