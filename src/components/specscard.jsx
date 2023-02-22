import React from "react";
import "../styles/circle.css";
import PropTypes from "prop-types"

const Specscard = ({consumption, speed}) => {
  return (
    <div className="justify-center grid gap-4 md:grid-cols-2">
      <div
        className="spec-card"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h3 className="text-center text-white mt-4">Consumption</h3>
        <div className="circle-wrap ">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>

            <div className="mask half">
              <div className="fill-1"></div>
            </div>
            <div className="inside-circle flex justify-center items-center">
              <span>
                <h2 className="text-4xl  font-semibold">{consumption}</h2>
                <p>l/km</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="spec-card"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <h3 className="text-center text-white mt-4">CP Speed</h3>
        <div className="circle-wrap ">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>

            <div className="mask half">
              <div className="fill-1"></div>
            </div>
            <div className="inside-circle flex justify-center items-center">
              <span>
                <h2 className="text-4xl  font-semibold">{speed}</h2>
                <p>km/h</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specscard;

Specscard.propTypes = {
  consumption: PropTypes.string,
  speed: PropTypes.string,
}