import React from "react";
import "../styles/pages/Lodging/lodging.css";
import { useLocation } from "react-router-dom";
import star from "../Assets/icones/red-star.svg";
import Slider from "../components/Slider";
import LodgingHeader from "../components/LodgingHeader";
import AccordionList from "../components/AccordionList";
import AccordionAbout from "../components/AccordionAbout";
export default function Lodging() {
  const location = useLocation();
  console.log(location.state.rating);
  return (
    <div className="main-lodging">
      {" "}
      <Slider />
      <LodgingHeader />
      <ul className="tag-container">
        {location.state.tags.map((tag) => {
          return (
            <li className="tag" key={tag + location.state.id}>
              <p>{tag} </p>
            </li>
          );
        })}
      </ul>
      <div className="hote_container">
        <div className="hote-rate">
          <img id="stars" src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className="hote-info">
          <p>{location.state.host.name}</p>
          <img src={location.state.host.picture} alt="" />
        </div>
      </div>
      <div className="accordion-container">
        <AccordionAbout
          txt={location.state.description}
          title={"Description"}
        />
        <AccordionList />
      </div>
    </div>
  );
}
