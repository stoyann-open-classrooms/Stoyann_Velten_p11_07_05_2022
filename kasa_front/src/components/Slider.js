import React, { useState, useRef, useEffect } from "react";

import "../styles/components/slider/slider.css";
import { useLocation } from "react-router-dom";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const location = useLocation();

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const prevSlide = () => {
    if (slideAnim.index !== 1) {
      setSlideAnim({
        index: slideAnim.index - 1,
        inProgress: true,
      });
    } else if (slideAnim.index === 1) {
      setSlideAnim({
        index: location.state.pictures.length,
        inProgress: true,
      });
    }
  };
  const nextSlide = () => {
    if (slideAnim.index !== location.state.pictures.length) {
      setSlideAnim({
        index: slideAnim.index + 1,
        inProgress: true,
      });
    } else if (slideAnim.index === location.state.pictures.length) {
      setSlideAnim({
        index: 1,
        inProgress: true,
      });
    }
  };
  console.log(location.state.pictures.length);

  return (
    <div className="container-slider">
      {location.state.pictures.map((obj, index) => {
        console.log(obj);
        return (
          <div
            key={index}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img className="slider_img" src={obj} alt="" />
          </div>
        );
      })}
      <div
        className={
          location.state.pictures.length === 1 ? "invisible" : "visible"
        }
      >
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
      <div className="index">
        {slideAnim.index}/{location.state.pictures.length}
      </div>
    </div>
  );
}
