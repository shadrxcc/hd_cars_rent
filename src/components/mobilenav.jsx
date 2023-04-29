import React, { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { navbaritems } from "./navbaritems";
import { Link, useNavigate } from "react-router-dom";


const Mobilenav = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()

  const buttonClick = () => {
    setClicked(!clicked);
  };

  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLoggedIn", false);
    navigate("/");
  };

  const showNav = () => {
    if (loggedIn === "true") {
      return (
        <>
          <div className="">
            <header className="flex justify-between bg-[black] p-2 z-10 fixed items-center w-full">
              <div>
                <Link to={`/welcome`}>
                  <h2>HDCARS</h2>
                </Link>
              </div>
              <nav>
                <ul
                  id="navbar"
                  className={`${
                    clicked ? "#navbar active" : "#navbar"
                  } flex w-[100%] h-[100vh] flex-col bg-[#181818] pt-3 items-center gap-y-4 top-[4em] right-[-35.5em] absolute`}
                >
                  {navbaritems.map((item, id) => {
                    return (
                      <Link to={item.link} key={id}>
                        <li className="active text-white">{item.title}</li>
                      </Link>
                    );
                  })}
                  <button
                    onClick={signOut}
                    className="bg-red-700 p-2 text-white rounded-lg"
                  >
                    Sign Out
                  </button>
                </ul>
              </nav>
              <div className="mobile" onClick={buttonClick}>
                <Hamburger color="white" size={24} rounded />
              </div>
            </header>
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  
  return <>{showNav()}</>;
};

export default Mobilenav;
