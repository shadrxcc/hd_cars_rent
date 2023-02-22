import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  window.localStorage.setItem("isLoggedIn", false);
  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

  const signIn = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (!username || username.trim().length === 0) {
      return errorMessage("enter username");
    } else {
      formData.append("username", username);
      fetch("http://localhost:3100/tokens", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((response) => {
          errorMessage(
            <div className="bg-success">
              <h5>Login success</h5>{" "}
            </div>
          );
          console.log(response.jwt);
          window.localStorage.setItem("jwt", response.jwt);
          window.localStorage.setItem("isLoggedIn", true);
          if (response.jwt === undefined) {
            console.log("Username not found");
            errorMessage("Username not found");
          } else {
            navigate("/welcome");
          }
        });
    }
  };

  return (
    <div
      id="login"
      className="container h-screen relative flex justify-center items-center"
    >
      <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
        <p className="text-white text-lg md:text-2xl mb-3">Sign in</p>
        <form onSubmit={signIn}>
          <div id="error-message" className="my-2 "></div>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            className="text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full"
            placeholder="Enter username"
          />
          <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">
            Sign In
          </button>
        </form>
        <p className="text-white">
          New user?{" "}
          <span className="pl-2 text-red-500">
            <Link to={`/sign-up`}>Create account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
