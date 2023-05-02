import React, { useEffect, useState } from "react";
import Delete from "../components/delete";
import jwtDecode from "jwt-decode";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";

const Deletecars = () => {
  const jwt = window.localStorage.getItem("jwt");
  let setUser = jwtDecode(jwt);
  const currentUser = setUser.username;
  console.log(currentUser);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3100/car_menu_items/")
      .then((res) => setCars(res.data));
  }, []);

  console.log(cars);

  const deleteReservation = (id) => {
    console.log("deleting....");
    fetch(`http://localhost:3100/car_menu_items/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something is wrong");
        }
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const navigate = () => {
    window.location.href("/addcars");
  };

  const renderCars = cars.map((car) => {
    const { car_name, image_url, id, user } = car;
    if (currentUser === user) {
      return (
        <>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="bg-[#232323] items-center m-3 rounded-lg p-3"
              key={id}
            >
              <div className="flex justify-end">
                <button onClick={() => deleteReservation(id)}>
                  <AiFillDelete className="text-white text-lg hover:text-red-800" />
                </button>
              </div>
              <div className="">
                <img src={image_url} className="w-[25rem]" alt="ferrari" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl">{car_name}</h3>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <div className="mt-[6rem] ">
        <h1 className="text-white text-center text-2xl">Delete cars</h1>
        <div>{renderCars}</div>
      </div>
    </>
  );
};

export default Deletecars;
