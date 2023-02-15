import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

const signUp = (e) => {
  e.preventDefault();
  axios.get('http://localhost:3100/users', username)
  .then(response => console.log(response))
  .catch(error => console.log(error))
}

  return (
    <div
      id="sign-up"
      className="container h-screen relative flex justify-center items-center"
    >
      <div className="m-3" data-aos="zoom-in-up" data-aos-duration="1000">
        <p className="text-white text-lg md:text-2xl mb-3">Sign up</p>
        <form onSubmit={signUp}>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
            required
            placeholder="Enter username"
          />
          <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">
            Sign up
          </button>
        </form>
        <p className="text-white">
          Have an account?{" "}
          <span className="pl-2 text-red-500">
            <Link to={`/login`}>Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
