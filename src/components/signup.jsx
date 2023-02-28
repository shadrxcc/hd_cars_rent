import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  window.localStorage.setItem("isLoggedIn", false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const errorMessage = (input) => {
    return input;
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const signUp = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (username === "" || username === undefined) {
      return errorMessage("enter username");
    } else {
      formData.append("username", username);

      fetch("https://hd-rent-app.fly.dev/users", { method: "POST", body: formData })
        .then((res) => res.json())
        .then(navigate("/login"));
    }
  };

  return (
    <div
      id="sign-up"
      className="container h-screen relative flex justify-center items-center"
    >
      <div className="m-3" data-aos="zoom-in-up" data-aos-duration="1000">
        <p className="text-white text-lg md:text-2xl mb-3">Sign up</p>
        {errorMessage()}
        <form onSubmit={signUp}>
          <input
            type="text"
            name="username"
            id="username"
            className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
            required
            placeholder="Enter username"
            onChange={handleChange}
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
