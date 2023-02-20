import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Desktopnav from "./desktopnavbar";
import Mobilenav from "./mobilenav";


const viewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    const resizeHandle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandle);
    return () => window.removeEventListener("resize", resizeHandle);
  }, []);

  return { width };
};

const validateUser = () => {
  const { width } = viewPort();
  const breakpoint = 620;

  if (location.pathname === "/landing") {
    return null;
  } else if (location.pathname === "/sign-up") {
    return null
  } else if (location.pathname === "/login") {
    return null
  } else {
    return width < breakpoint ? <Mobilenav /> : <Desktopnav />;
  }
};

const Navbar = () => {
  return <>{validateUser()}</>;
};

export default Navbar;
