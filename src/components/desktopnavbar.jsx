import "../styles/nav.css";
import { navbaritems } from "./navbaritems";
import { AiFillLeftCircle, AiTwotoneCar } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Desktopnav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLoggedIn", false);
    navigate("/landing");
  };

  const loggedIn = window.localStorage.getItem("isLoggedIn")

  const check = () => {
    if (loggedIn === "true") {
      return (
        <>
        <div
      className={`${
        open ? "w-96" : "w-12"
      } h-screen duration-300 sticky top-0 pt-8 bg-[#00000] relative`}
    >
      <AiFillLeftCircle
        className={`text-4xl w-7 text-white cursor-pointer duration-400 right-3 hover:text-white absolute top-9 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
<span className={`${!open && "hidden"}`}><Link to={`/`}><h2 className="pl-5">HDCARS</h2></Link></span>
      <ul className="pt-16 px-2 flex flex-col justify-center">
        {navbaritems.map((value, key) => {
          return (
            <li
              className="text-sm flex items-center hover:-translate-y-1 duration-300 py-2 gap-x-2"
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <span>
                <span className="text-3xl hover:text-red-700 text-white ">
                  {value.library}
                </span>
              </span>

              <span
                className={`${
                  !open && "hidden"
                } origin-left text-white rounded-md px-8 py-1 hover:bg-zinc-900  duration-200`}
              >
                {value.title}
              </span>
            </li>
          );
        })}
        <span className="flex items-center pt-3"  onClick={signOut}>
          <span className="text-3xl hover:text-red-700 text-white ">
            <AiFillLeftCircle />
          </span>
          <span
            className={`${
              !open && "hidden"
            } origin-left text-white rounded-md px-8 py-1 hover:bg-zinc-900  duration-200`}
          >
            <button className="text-white" onClick={signOut}>
              Sign Out
            </button>
          </span>
        </span>
      </ul>
    </div>
        </>
      )
    } else {
      return null
    }
  }

  return (
    <>{check()}</>
    // <div
    //   className={`${
    //     open ? "w-72" : "w-12"
    //   } h-screen duration-300 sticky top-0 pt-8 bg-[#232323] relative`}
    // >
    //   <AiFillLeftCircle
    //     className={`text-4xl w-7 text-[#9bdc28] cursor-pointer duration-400 right-3 hover:text-white absolute top-9 ${
    //       !open && "rotate-180"
    //     }`}
    //     onClick={() => setOpen(!open)}
    //   />

    //   <ul className="pt-16 px-2 flex flex-col justify-center">
    //     {navbaritems.map((value, key) => {
    //       return (
    //         <li
    //           className="text-sm flex items-center hover:-translate-y-1 duration-300 py-2 gap-x-2"
    //           key={key}
    //           onClick={() => {
    //             window.location.pathname = value.link;
    //           }}
    //         >
    //           <span>
    //             <span className="text-3xl hover:text-red-700 text-white ">
    //               {value.library}
    //             </span>
    //           </span>

    //           <span
    //             className={`${
    //               !open && "hidden"
    //             } origin-left text-white rounded-md px-8 py-1 hover:bg-zinc-900  duration-200`}
    //           >
    //             {value.title}
    //           </span>
    //         </li>
    //       );
    //     })}
    //     <span className="flex items-center pt-3"  onClick={signOut}>
    //       <span className="text-3xl hover:text-red-700 text-white ">
    //         <AiFillLeftCircle />
    //       </span>
    //       <span
    //         className={`${
    //           !open && "hidden"
    //         } origin-left text-white rounded-md px-8 py-1 hover:bg-zinc-900  duration-200`}
    //       >
    //         <button className="text-white" onClick={signOut}>
    //           Sign Out
    //         </button>
    //       </span>
    //     </span>
    //   </ul>
    // </div>
  );
};

export default Desktopnav;
