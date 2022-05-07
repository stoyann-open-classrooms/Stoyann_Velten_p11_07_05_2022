import React from "react";
import "../styles/components/btnSlide/btnSlide.css";
import leftArrow from "../Assets/icones/left-arrow.png";
import rightArrow from "../Assets/icones/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="icone de naviguation entre les photos"
      />
    </button>
  );
}
