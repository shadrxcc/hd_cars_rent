import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Bookings from "../components/bookings";
import { setReservation } from "../redux/actions/actions";

const Bookedcars = () => {
    const dispatch = useDispatch();
    
useEffect(() => {
    axios
    .get('http://localhost:3100/bookings')
    .then((res) => dispatch(setReservation(res.data))).catch((err) => console.log(err))
}, [])

  return (
    <div className="pt-[4rem]">
      <h2 className="text-white text-center text-lg">Booked Rides</h2>
      <Bookings/>
    </div>
  );
};

export default Bookedcars;
