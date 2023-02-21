import { cities } from "./citylist";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  let today = new Date();
  const date =
    today.getFullYear() +
    "-" +
    0 +
    parseInt(today.getMonth() + 1) +
    "-" +
    0 +
    today.getDate();

  const title = window.localStorage.getItem("car");
  const carimage = window.localStorage.getItem("carimage");
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const navigate = useNavigate();
  const [username] = useState(rest.username);
  const [car] = useState(title);
  const [bookDate, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image] = useState(carimage)

  const locationChange = (e) => {
    setLocation(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

  const makeBooking = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (!bookDate || bookDate.trim().length === 0) {
      return <p className="text-white">Please pick a date</p>;
    } else if (bookDate === date || bookDate < date) {
      console.log(date);
      return errorMessage("Can't Pick the Current Date or Past Date");
    } else if (!location || location.trim().length === 0) {
      return errorMessage("Please pick a location");
    } else {
      formData.append("user", username);
      formData.append("car", car);
      formData.append("start_date", bookDate);
      formData.append("location", location);
      formData.append("image", image);

      fetch("http://localhost:3100/bookings", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          res.json();
        })
        .then(() => {
          console.log("added successfully");
          navigate("/bookings");
        });
    }
  };

  return (
    <>
      <div
        id="login"
        className="container h-screen relative flex justify-center items-start"
      >
        <div className="m-3" data-aos="zoom-in-up" data-aos-duration="1000">
          <div id="error-message"></div>
          <form onSubmit={makeBooking}>
            <p className="text-white text-2xl md:text-3xl text-center mb-3">
              Rent Car
            </p>
            <label htmlFor="user" className="text-white">
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

            <label htmlFor="car" className="text-white">
              Car
            </label>
            <input
              type="text"
              name="car"
              disabled
              value={car}
              id="car"
              className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
            />
            <label htmlFor="car" className="text-white">
              Image
            </label>
            <input
              type="text"
              name="image"
              disabled
              value={image}
              id="image"
              className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
            />
            <label htmlFor="location" className="text-white">
              City
            </label>
            <select
              name="location"
              id="location"
              onChange={locationChange}
              value={location}
              className="input-cate text-white bg-[#232323] py-2 px-2 w-full my-2 rounded-lg"
            >
              <option value="">Select city</option>
              {cities.map((option, index) => (
                <option key={index} className="input-cat">
                  {option.city}
                </option>
              ))}
            </select>
            <label htmlFor="date" className="text-white">
              Date
            </label>
            <input
              type="date"
              value={bookDate}
              onChange={dateChange}
              placeholder="Choose date"
              className="bg-[#232323] text-white py-2 px-2 w-full my-2 rounded-lg"
              name="start_date"
              id="start_date"
            />
            <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">
              Rent car
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
